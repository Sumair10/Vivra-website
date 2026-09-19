"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion/gsap";

/**
 * A slowly turning sphere of dots with a soft, wavy silhouette — the hero
 * backdrop. Canvas 2D (no WebGL): ~2.4k points, quantised colour buckets, DPR
 * capped at 2, paused when off-screen or when the tab is hidden.
 */
export function ParticleSphere({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const small = window.matchMedia("(max-width: 767px)").matches;
    const N = small ? 1500 : 2600;
    const reduced = prefersReducedMotion();

    // fibonacci sphere: evenly spread unit vectors + their spherical angles
    const gold = Math.PI * (3 - Math.sqrt(5));
    const px = new Float32Array(N);
    const py = new Float32Array(N);
    const pz = new Float32Array(N);
    const th = new Float32Array(N);
    const ph = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const a = gold * i;
      px[i] = Math.cos(a) * r;
      py[i] = y;
      pz[i] = Math.sin(a) * r;
      th[i] = Math.acos(y);
      ph[i] = Math.atan2(pz[i], px[i]);
    }

    const BUCKETS = 6;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // depth-bucketed draw lists
    const bx: number[][] = Array.from({ length: BUCKETS }, () => []);
    const by: number[][] = Array.from({ length: BUCKETS }, () => []);

    const draw = (t: number) => {
      const dark = document.documentElement.dataset.theme === "dark";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const compact = w < 600;
      const R = Math.min(w * 0.5, h * 0.62) * (compact ? 0.6 : 0.92);
      const cx = w * 0.5;
      const cy = h * 0.5;
      const ry = t * 0.00012;
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const tilt = 0.42;
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);
      const tt = t * 0.0006;

      for (let b = 0; b < BUCKETS; b++) {
        bx[b].length = 0;
        by[b].length = 0;
      }

      for (let i = 0; i < N; i++) {
        // wavy, crumpled surface
        const d =
          1 +
          0.13 * Math.sin(3 * th[i] + tt * 1.1) * Math.cos(2 * ph[i] - tt * 0.8) +
          0.07 * Math.sin(6 * ph[i] + 4 * th[i] - tt * 1.4) +
          0.035 * Math.sin(11 * th[i] + 9 * ph[i] + tt * 2);
        let x = px[i] * d;
        let y = py[i] * d;
        let z = pz[i] * d;
        // rotate around Y, then tilt around X
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        x = x1;
        y = y2;
        z = z2;
        const depth = (z / 1.25 + 1) / 2; // 0 (back) … 1 (front)
        const b = Math.min(BUCKETS - 1, Math.max(0, Math.floor(depth * BUCKETS)));
        bx[b].push(cx + x * R);
        by[b].push(cy + y * R);
      }

      for (let b = 0; b < BUCKETS; b++) {
        const k = b / (BUCKETS - 1); // 0 back … 1 front
        // light: pale periwinkle (back) → Vivra violet-blue (front)
        // dark: dim indigo (back) → bright lavender (front)
        const r = dark ? 70 + k * 110 : 150 - k * 70;
        const g = dark ? 78 + k * 100 : 172 - k * 88;
        const bl = dark ? 150 + k * 90 : 236 - k * 40;
        ctx.fillStyle = `rgba(${r | 0},${g | 0},${bl | 0},${(0.22 + k * 0.7).toFixed(2)})`;
        const s = (0.9 + k * 1.25) * (compact ? 0.78 : 1);
        const xs = bx[b];
        const ys = by[b];
        for (let i = 0; i < xs.length; i++) ctx.fillRect(xs[i], ys[i], s, s);
      }
    };

    if (reduced) {
      draw(9000);
      return () => ro.disconnect();
    }

    let raf = 0;
    let running = false;
    let visible = true;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const sync = () => {
      const should = visible && !document.hidden;
      if (should && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}

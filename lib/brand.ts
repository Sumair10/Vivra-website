export type Brand = "vivra" | "events" | "mosque";

export const BRAND_COLORS: Record<Brand, string> = {
  vivra: "#6558a8",
  events: "#145258",
  mosque: "#0a6953",
};

export const BRAND_LOGOS: Record<Brand, { src: string; alt: string; width: number; height: number }> = {
  vivra: { src: "/brand/vivra-technology.png", alt: "Vivra Technology", width: 2170, height: 1533 },
  events: { src: "/brand/vivra-events.png", alt: "Vivra Events", width: 2169, height: 1545 },
  mosque: { src: "/brand/vivra-mosque.png", alt: "Vivra Mosque", width: 2169, height: 1569 },
};

export const BRAND_ROUTES: Record<Brand, string> = {
  vivra: "/",
  events: "/events",
  mosque: "/mosque",
};

export function brandFromPath(pathname: string): Brand {
  if (pathname.startsWith("/events")) return "events";
  if (pathname.startsWith("/mosque")) return "mosque";
  return "vivra";
}

/** Runs before hydration so the first paint already carries the right brand + theme. */
export const BOOT_SCRIPT = `
(function(){try{
var d=document.documentElement,p=location.pathname;
d.dataset.brand=p.indexOf('/events')===0?'events':p.indexOf('/mosque')===0?'mosque':'vivra';
var t=localStorage.getItem('vivra-theme');
d.dataset.theme=(t==='dark'||t==='light')?t:'light';
if(location.search.indexOf('noanim')>-1)d.dataset.noanim='1';
if(location.search.indexOf('theme=dark')>-1)d.dataset.theme='dark';
}catch(e){document.documentElement.dataset.theme='light'}})();
`;

import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML, e as renderSlot } from './astro/server_BkfkYLfE.mjs';
import 'kleur/colors';
import { c as $$Icon, $ as $$Layout, b as $$Header } from './Layout_Bgntnr8_.mjs';
import { S as SITE, g as getHomePermalink, a as getPermalink, b as getBlogPermalink, f as getAsset } from './permalinks_DtjszILy.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://CM_JoseMaria.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300 intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}>${SITE?.name}</a> </div> <div class="text-sm text-muted flex gap-1"> ${secondaryLinks.map(({ text, href }, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index !== 0 ? " \xB7 " : ""}<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"${addAttribute(href, "href")}>${unescapeHTML(text)}</a> ` })}`)} </div> </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")}> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/widgets/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://CM_JoseMaria.vercel.app");
const $$Announcement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Announcement;
  return renderTemplate`${maybeRenderHead()}<div class="dark text-muted text-sm bg-black dark:bg-transparent dark:border-b dark:border-slate-800 dark:text-slate-400 hidden md:flex gap-1 overflow-hidden px-3 py-2 relative text-ellipsis whitespace-nowrap"> <span class="dark:bg-slate-700 bg-white/40 dark:text-slate-300 font-semibold px-1 py-0.5 text-xs mr-0.5 rtl:mr-0 rtl:ml-0.5 inline-block">NEW</span> <a href="https://astro.build/blog/astro-5120/" class="text-muted hover:underline dark:text-slate-400 font-medium">Astro v5.12 is now available! »</a> <a target="_blank" rel="noopener" class="ltr:ml-auto rtl:mr-auto w-[5.6rem] h-[1.25rem] ml-auto bg-contain inline-block bg-[url(https://img.shields.io/github/stars/arthelokyo/astrowind.svg?style=social&label=Stars&maxAge=86400)]" title="If you like AstroWind, give us a star." href="https://github.com/arthelokyo/astrowind"></a> </div>`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/widgets/Announcement.astro", void 0);

const headerData = {
  links: [
    {
      text: "Homes",
      links: [
        {
          text: "SaaS",
          href: getPermalink("/homes/saas")
        },
        {
          text: "Startup",
          href: getPermalink("/homes/startup")
        },
        {
          text: "Mobile App",
          href: getPermalink("/homes/mobile-app")
        },
        {
          text: "Personal",
          href: getPermalink("/homes/personal")
        }
      ]
    },
    {
      text: "Pages",
      links: [
        {
          text: "Features (Anchor Link)",
          href: getPermalink("/#features")
        },
        {
          text: "Services",
          href: getPermalink("/services")
        },
        {
          text: "Pricing",
          href: getPermalink("/pricing")
        },
        {
          text: "About us",
          href: getPermalink("/about")
        },
        {
          text: "Contact",
          href: getPermalink("/contact")
        },
        {
          text: "Terms",
          href: getPermalink("/terms")
        },
        {
          text: "Privacy policy",
          href: getPermalink("/privacy")
        }
      ]
    },
    {
      text: "Landing",
      links: [
        {
          text: "Lead Generation",
          href: getPermalink("/landing/lead-generation")
        },
        {
          text: "Long-form Sales",
          href: getPermalink("/landing/sales")
        },
        {
          text: "Click-Through",
          href: getPermalink("/landing/click-through")
        },
        {
          text: "Product Details (or Services)",
          href: getPermalink("/landing/product")
        },
        {
          text: "Coming Soon or Pre-Launch",
          href: getPermalink("/landing/pre-launch")
        },
        {
          text: "Subscription",
          href: getPermalink("/landing/subscription")
        }
      ]
    },
    {
      text: "Blog",
      links: [
        {
          text: "Blog List",
          href: getBlogPermalink()
        },
        {
          text: "Article",
          href: getPermalink("get-started-website-with-astro-tailwind-css", "post")
        },
        {
          text: "Article (with MDX)",
          href: getPermalink("markdown-elements-demo-post", "post")
        },
        {
          text: "Category Page",
          href: getPermalink("tutorials", "category")
        },
        {
          text: "Tag Page",
          href: getPermalink("astro", "tag")
        }
      ]
    },
    {
      text: "Widgets",
      href: "#"
    }
  ],
  actions: [{ text: "Download", href: "https://github.com/arthelokyo/astrowind", target: "_blank" }]
};
const footerData = {
  links: [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#" },
        { text: "Security", href: "#" },
        { text: "Team", href: "#" },
        { text: "Enterprise", href: "#" },
        { text: "Customer stories", href: "#" },
        { text: "Pricing", href: "#" },
        { text: "Resources", href: "#" }
      ]
    },
    {
      title: "Platform",
      links: [
        { text: "Developer API", href: "#" },
        { text: "Partners", href: "#" },
        { text: "Atom", href: "#" },
        { text: "Electron", href: "#" },
        { text: "AstroWind Desktop", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Docs", href: "#" },
        { text: "Community Forum", href: "#" },
        { text: "Professional Services", href: "#" },
        { text: "Skills", href: "#" },
        { text: "Status", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Press", href: "#" },
        { text: "Inclusion", href: "#" },
        { text: "Social Impact", href: "#" },
        { text: "Shop", href: "#" }
      ]
    }
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") }
  ],
  socialLinks: [
    { ariaLabel: "X", icon: "tabler:brand-x", href: "#" },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
    { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
    { ariaLabel: "Github", icon: "tabler:brand-github", href: "https://github.com/arthelokyo/astrowind" }
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `
};

const $$Astro = createAstro("https://CM_JoseMaria.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["announcement"], renderTemplate` ${renderComponent($$result2, "Announcement", $$Announcement, {})} `)} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, headerData as h };

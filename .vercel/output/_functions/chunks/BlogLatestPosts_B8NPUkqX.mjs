import { d as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate } from './astro/server_BpU-TWjW.mjs';
import 'piccolore';
import './Grid_duosM31q.mjs';
import { b as getBlogPermalink } from './permalinks_DtjszILy.mjs';
import './_astro_content_ZNMKep3s.mjs';
import './WidgetWrapper_BnbZk93Y.mjs';
import './Layout_BXSrvN8U.mjs';

const $$Astro = createAstro("https://CM_JoseMaria.vercel.app");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/widgets/BlogLatestPosts.astro", void 0);

export { $$BlogLatestPosts as $ };

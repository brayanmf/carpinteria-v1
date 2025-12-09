import '@astrojs/rss';
import '../chunks/_astro_content_ZNMKep3s.mjs';
import '../chunks/permalinks_DtjszILy.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, m as maybeRenderHead } from './astro/server_BkfkYLfE.mjs';
import 'clsx';
import 'kleur/colors';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center space-x-3"> <!-- SIN ml-15 - posición original --> <img src="/img/sl.png" alt="Carpintería Metálica José María" class="h-10 w-10 object-contain"> </a>`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/Logo.astro", void 0);

export { $$Logo as $, createSvgComponent as c };

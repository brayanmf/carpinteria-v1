import { c as createComponent, m as maybeRenderHead, f as renderScript, b as addAttribute, r as renderComponent, a as renderTemplate, d as createAstro } from '../chunks/astro/server_BkfkYLfE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bgntnr8_.mjs';
import { $ as $$Image } from '../chunks/Image_DkI9QqZ2.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeroSlider = createComponent(($$result, $$props, $$slots) => {
  const slidesData = [
    {
      image: "/img/fondo_h4.jpg",
      title: "Carpinter\xEDa Met\xE1lica Jose Mar\xEDa",
      subtitle: "Especialistas en Cerrajer\xEDa - Compromiso y Calidad"
    },
    {
      image: "/img/fondo_h2.jpg",
      title: "Trabajos en Acero",
      subtitle: "Dise\xF1os Personalizados - Garant\xEDa de Por Vida"
    }
  ];
  const whatsappNumber = "51928475063";
  const whatsappMessage = "Hola, me interesa conocer m\xE1s sobre sus servicios de cerrajer\xEDa";
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative h-screen overflow-hidden"> <!-- Slides --> <div class="relative h-full"> ${slidesData.map((slide, index) => renderTemplate`<div${addAttribute(`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")}${addAttribute(`slide-${index}`, "id")}> <!-- Imagen de fondo --> <div class="absolute inset-0"> ${renderComponent($$result, "Image", $$Image, { "src": slide.image, "alt": slide.title, "class": "w-full h-full object-cover", "widths": [1920, 2560], "sizes": "100vw" })} <!-- Overlay oscuro --> <div class="absolute inset-0 bg-black bg-opacity-40"></div> </div> <!-- Contenido --> <div class="relative h-full flex items-center justify-center text-center text-white"> <div class="max-w-4xl mx-auto px-4"> <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade"> ${slide.title} </h1> <h2 class="text-xl md:text-2xl text-gray-200 mb-8 animate-fade"> ${slide.subtitle} </h2> <!-- Botón Contáctame con ícono WhatsApp de Font Awesome --> <div class="animate-fade"> <a${addAttribute(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-[rgb(219,234,254)] hover:bg-[rgb(191,219,254)] text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"> <!-- Ícono WhatsApp de Font Awesome --> <i class="fab fa-whatsapp text-xl"></i> <!-- Texto del botón --> <span class="text-lg">Contáctame</span> </a> </div> </div> </div> </div>`)} </div> <!-- Indicadores --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"> ${slidesData.map((_, index) => renderTemplate`<button${addAttribute(`w-3 h-3 rounded-full transition-all ${index === 0 ? "bg-white" : "bg-white bg-opacity-50"}`, "class")}${addAttribute(`showSlide(${index})`, "onclick")}></button>`)} </div> <!-- Flechas --> <button class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all" onclick="prevSlide()"> <i class="fas fa-chevron-left"></i> </button> <button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all" onclick="nextSlide()"> <i class="fas fa-chevron-right"></i> </button> </section> ${renderScript($$result, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/HeroSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/HeroSlider.astro", void 0);

const $$Astro$3 = createAstro("https://CM_JoseMaria.vercel.app");
const $$AnimatedText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AnimatedText;
  const {
    text = "GARANT\xCDA DE CALIDAD - TRABAJOS EN ACERO - DISE\xD1OS EXCLUSIVOS - INNOVACI\xD3N Y ESTILO - SEGURIDAD Y DURABILIDAD - DISE\xD1O PERSONALIZADO "
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-5 overflow-hidden" data-astro-cid-eu333sss> <div class="max-w-6xl mx-auto px-4" data-astro-cid-eu333sss> <div class="marquee-container rounded-lg bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400" data-astro-cid-eu333sss> <div class="marquee-content" data-astro-cid-eu333sss> <span class="marquee-text text-black dark:text-white" data-astro-cid-eu333sss>${text}</span> <span class="marquee-text text-black dark:text-white" data-astro-cid-eu333sss>${text}</span> <span class="marquee-text text-black dark:text-white" data-astro-cid-eu333sss>${text}</span> </div> </div> </div> </section> `;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/AnimatedText.astro", void 0);

const $$Astro$2 = createAstro("https://CM_JoseMaria.vercel.app");
const $$ImageCatalog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageCatalog;
  const { title, subtitle, items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mb-20"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold dark:text-white mb-4" data-aos="fade-up"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up"> ${subtitle} </p>`} </div> <!-- Grid 3x2 --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${items.slice(0, 6).map((item, index) => renderTemplate`<div class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer" data-aos="fade-up"${addAttribute((index * 100).toString(), "data-aos-delay")}> <!-- Contenedor de imagen con hover --> <div class="relative overflow-hidden aspect-square"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": item.alt, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", "widths": [400, 600, 800], "sizes": "(max-width: 768px) 400px, 600px" })} <!-- Overlay azul-600 con transparencia SOLO en hover --> <div class="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"> <!-- Texto que aparece SOLO en hover --> <div class="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"> <h3 class="text-xl font-semibold text-white mb-2"> ${item.title} </h3> <p class="text-white text-sm max-w-xs"> ${item.description} </p> </div> </div> </div> <!-- Nombre del producto (siempre visible) --> <div class="p-4 text-center bg-white dark:bg-gray-800"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> ${item.title} </h3> </div> </div>`)} </div> </section>`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/ImageCatalog.astro", void 0);

const $$Astro$1 = createAstro("https://CM_JoseMaria.vercel.app");
const $$ClientStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientStats;
  const { stats = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> ${stats.map((stat, index) => renderTemplate`<div class="transform hover:scale-105 transition-transform duration-300" data-aos="fade-up"${addAttribute((index * 100).toString(), "data-aos-delay")}> <div class="flex justify-center mb-4"> <i${addAttribute(`${stat.icon} text-3xl text-blue-200`, "class")}></i> </div> <div class="text-3xl md:text-4xl font-bold mb-2 countup"${addAttribute(stat.number, "data-count")}>
0${stat.suffix || "+"} </div> <div class="text-lg text-blue-100 font-medium">${stat.label}</div> </div>`)} </div> </div> </section> ${renderScript($$result, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/ClientStats.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/ClientStats.astro", void 0);

const $$Astro = createAstro("https://CM_JoseMaria.vercel.app");
const $$GoogleMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GoogleMap;
  const {
    address = "Huaylas, Villa Mar\xEDa del Triunfo 15812",
    phone = "+51 928 475 063",
    schedule = "Lun - S\xE1b: 8:00 AM - 6:00 PM"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative"> <!-- Mapa interactivo con tus coordenadas --> <div class="w-full h-[500px]"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.47313824483305!2d-76.94418914936179!3d-12.148753060192329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8ead5e6e9cd%3A0x625b3feea16e147b!2sHuaylas%2C%20Villa%20Mar%C3%ADa%20del%20Triunfo%2015812!5e1!3m2!1ses!2spe!4v1764471043760!5m2!1ses!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full" title="Ubicación de Carpintería Metálica José María"></iframe> </div> <!-- Tarjeta de información superpuesta --> <div class="absolute top-8 left-8 right-8 lg:left-auto lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 max-w-md"> <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 lg:p-8"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Visítanos</h3> <div class="space-y-4"> <!-- Dirección --> <div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <i class="fas fa-map-marker-alt text-blue-600 text-lg"></i> </div> <div class="ml-4"> <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Dirección</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">${address}</p> </div> </div> <!-- Teléfono --> <div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <i class="fas fa-phone text-blue-600 text-lg"></i> </div> <div class="ml-4"> <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Teléfono</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">${phone}</p> </div> </div> <!-- Horario --> <div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <i class="fas fa-clock text-blue-600 text-lg"></i> </div> <div class="ml-4"> <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Horario de Atención</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">${schedule}</p> </div> </div> </div> <!-- Botón para abrir en Google Maps --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"> <a href="https://www.google.com/maps/place/Huaylas,+Villa+María+del+Triunfo+15812/@-12.1487531,-76.9441892,19z/data=!3m1!4b1!4m6!3m5!1s0x9105b8ead5e6e9cd:0x625b3feea16e147b!8m2!3d-12.1487531!4d-76.9436413!16s%2Fg%2F11ry_9_3_9?entry=ttu&g_ep=EgoyMDI1MDEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"> <i class="fas fa-directions mr-2"></i>
Cómo llegar
</a> </div> </div> </div> </section>`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/GoogleMap.astro", void 0);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contenedor centrado con tamaño medio -->${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto" id="contacto"> <!-- ← max-w-md y mx-auto para centrar --> <h3 class="text-xl font-bold mb-6 dark:text-white text-center">Contacto</h3> <!-- ← text-center --> <form id="contactForm" class="space-y-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="nombre" class="block text-sm font-medium mb-2 dark:text-gray-300">Nombre *</label> <input id="nombre" name="nombre" type="text" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Tu nombre completo"> </div> <div> <label for="telefono" class="block text-sm font-medium mb-2 dark:text-gray-300">Teléfono</label> <input id="telefono" name="telefono" type="tel" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="+51 "> </div> </div> <div> <label for="email" class="block text-sm font-medium mb-2 dark:text-gray-300">Correo *</label> <input id="email" name="email" type="email" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="tu@email.com"> </div> <div> <label for="mensaje" class="block text-sm font-medium mb-2 dark:text-gray-300">Mensaje *</label> <textarea id="mensaje" name="mensaje" rows="4" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none" placeholder="Describe tu consulta o proyecto..."></textarea> </div> <!-- Mensaje de estado --> <div id="formMessage" class="hidden p-4 rounded-lg text-center font-medium"></div> <div class="flex gap-3"> <button type="submit" id="submitBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> <span id="submitText">Enviar Mensaje</span> <span id="loadingSpinner" class="hidden"> <i class="fas fa-spinner fa-spin mr-2"></i>Enviando...
</span> </button> <button type="reset" class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold flex-1 transition-colors">
Limpiar
</button> </div> </form> </div> ${renderScript($$result, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/components/ContactForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSlider", $$HeroSlider, {})}   ${maybeRenderHead()}<section id="nosotros" class="py-20 bg-white dark:bg-gray-900"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Columna izquierda: Título y contenido --> <div class="text-left"> <h2 class="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Nosotros</h2> <div class="space-y-6 text-gray-600 dark:text-gray-300"> <div> <h3 class="text-xl font-semibold mb-2 dark:text-white flex items-center gap-3"> <i class="fas fa-bullseye text-blue-600 text-2xl"></i>
Misión
</h3> <p class="text-justify">
Ofrecer un excelente servicio, crecer como competidor nacional en el mercado de la herrería. Inspirando
                compromiso y generando valores.
</p> </div> <div> <h3 class="text-xl font-semibold mb-2 dark:text-white flex items-center gap-3"> <i class="fas fa-eye text-blue-600 text-2xl"></i>
Visión
</h3> <p class="text-justify">
Evolucionar de pequeño negocio a una gran empresa. Ser conocido como una prestigiosa carpintería
                metálica líder en el mercado peruano.
</p> </div> <div> <h3 class="text-xl font-semibold mb-2 dark:text-white flex items-center gap-3"> <i class="fas fa-handshake text-blue-600 text-2xl"></i>
Valores
</h3> <p class="text-justify">
Somos un pequeño negocio que siempre mantiene respeto con los clientes. Fomentamos la humildad,
                responsabilidad y honestidad.
</p> </div> </div> </div> <!-- Columna derecha: Imágenes para modo claro y oscuro --> <div class="relative"> <!-- Imagen para modo claro --> <img src="/img/mod_diurno.png" alt="Carpintería Metálica José María - Nuestro equipo" class="w-full h-auto rounded-lg shadow-lg dark:hidden"> <!-- Imagen para modo oscuro --> <img src="/img/mod_noc_q.png" alt="Carpintería Metálica José María - Nuestro equipo" class="w-full h-auto rounded-lg shadow-lg hidden dark:block"> </div> </div> </div> </section>  ${renderComponent($$result2, "ClientStats", $$ClientStats, { "stats": [
    {
      number: "500",
      label: "Proyectos Terminados",
      suffix: "+",
      icon: "fas fa-hammer"
    },
    {
      number: "98",
      label: "Clientes Satisfechos",
      suffix: "%",
      icon: "fas fa-smile"
    },
    {
      number: "15",
      label: "A\xF1os de Experiencia",
      suffix: "+",
      icon: "fas fa-calendar-alt"
    },
    {
      number: "1000",
      label: "Productos Entregados",
      suffix: "+",
      icon: "fas fa-box-open"
    }
  ] })}  <section id="catalogo" class="py-20 bg-gray-50 dark:bg-gray-800"> <div class="max-w-6xl mx-auto px-4"> <!-- VENTANAS - 6 imágenes --> ${renderComponent($$result2, "ImageCatalog", $$ImageCatalog, { "title": "Nuestros Productos", "subtitle": "Calidad y dise\xF1o en carpinter\xEDa met\xE1lica", "items": [
    {
      image: "/img/Balc\xF3n estilo colonial_.jpeg",
      alt: "Ventana moderna de acero",
      title: "Ventana Contempor\xE1nea",
      description: "Dise\xF1o moderno con acabados en acero inoxidable y alto nivel de seguridad."
    },
    {
      image: "/img/ventana1.jpeg",
      alt: "Balc\xF3n colonial met\xE1lico",
      title: "Balc\xF3n Colonial",
      description: "Estilo cl\xE1sico con detalles ornamentales tradicionales y m\xE1xima durabilidad."
    },
    {
      image: "/img/e_caracol.jpg",
      alt: "Ventana corrediza met\xE1lica",
      title: "Escalera Caracol",
      description: "Dise\xF1o compacto y est\xE9tico, la soluci\xF3n perfecta para optimizar espacios reducidos con un toque moderno"
    },
    {
      image: "/img/puerta_n1.jpg",
      alt: "Puerta principal met\xE1lica",
      title: "Puerta Principal",
      description: "Alta seguridad con dise\xF1o elegante, resistente y acabados de primera calidad."
    },
    {
      image: "/img/puerta1.jpeg",
      alt: "Puerta interior met\xE1lica",
      title: "Puerta Interior",
      description: "Dise\xF1os personalizados para espacios internos con estilo y funcionalidad."
    },
    {
      image: "/img/puerta2.jpg",
      alt: "Puerta blindada de seguridad",
      title: "Puerta Blindada",
      description: "M\xE1xima seguridad para comercios y residencias con tecnolog\xEDa anti-intrusi\xF3n."
    }
  ] })} </div> </section>  ${renderComponent($$result2, "AnimatedText", $$AnimatedText, {})}  ${renderComponent($$result2, "ContactForm", $$ContactForm, {})}  <section id="ubicacion" class="bg-white dark:bg-gray-900"> ${renderComponent($$result2, "GoogleMap", $$GoogleMap, { "address": "Huaylas, Villa Mar\xEDa del Triunfo 15812", "phone": "+51 928 644 700", "schedule": "Lun - S\xE1b: 8:00 AM - 6:00 PM" })} <!-- REDES SOCIALES --> <div class="text-center mt-12"> <div class="flex justify-center space-x-6 mb-6"> <a href="https://www.facebook.com/profile.php?id=61584378124386" target="_blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white text-2xl"> <i class="fab fa-facebook"></i> </a> <a href="https://api.whatsapp.com/send?phone=51928475063" target="_blank" class="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-white text-2xl"> <i class="fab fa-whatsapp"></i> </a> <a href="https://www.instagram.com/carpinteriametalica2025?igsh=MXI3ZTg5ODA4d2ZhYg==" target="_blank" class="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-white text-2xl"> <i class="fab fa-instagram"></i> </a> </div> <p class="text-gray-600 dark:text-gray-400">
© 2025 Carpintería Metálica Jose María - Todos los derechos reservados.
</p> </div> </section> ` })}`;
}, "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/pages/index.astro", void 0);

const $$file = "D:/PROYECTOS/node/carpinteria-metalicaMJ/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

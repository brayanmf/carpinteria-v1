export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  console.log("POST /api/contact - INICIADO");
  try {
    const data = await request.json();
    console.log("Datos recibidos:", data);
    const { nombre, telefono, email, mensaje } = data;
    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({
        success: false,
        message: "Por favor completa todos los campos requeridos"
      }), { status: 400 });
    }
    const apiKey = "re_HaaYYv6g_4prFikWF3cwKKrDWg3hHB9x9";
    if (!apiKey) ;
    console.log("📤 Enviando email con Resend...");
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "cerrajeria.jose.maria@gmail.com",
        reply_to: email,
        subject: `📧 Nuevo mensaje de ${nombre} - Carpintería Metálica`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
              <p><strong>👤 Nombre:</strong> ${nombre}</p>
              <p><strong>📞 Teléfono:</strong> ${telefono || "No proporcionado"}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p><strong>💬 Mensaje:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
                ${mensaje.replace(/\n/g, "<br>")}
              </p>
            </div>
            <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
              Mensaje enviado desde el sitio web de Carpintería Metálica José María
            </p>
          </div>
        `
      })
    });
    console.log("📩 Status Resend:", resendResponse.status);
    if (resendResponse.ok) {
      const result = await resendResponse.json();
      console.log("✅ Email enviado exitosamente:", result.id);
      return new Response(JSON.stringify({
        success: true,
        message: "✅ Los datos se enviaron correctamente. Te contactaremos pronto."
      }), { status: 200 });
    } else {
      const errorData = await resendResponse.json();
      console.error("❌ Error de Resend:", errorData);
      return new Response(JSON.stringify({
        success: false,
        message: "❌ Error al enviar el mensaje. Por favor, intenta nuevamente."
      }), { status: 500 });
    }
  } catch (error) {
    console.error("💥 Error en la API:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "⚠️ Error interno del servidor. Intenta más tarde."
    }), { status: 500 });
  }
}
async function GET() {
  return new Response(JSON.stringify({
    success: true,
    message: "API funcionando"
  }), { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

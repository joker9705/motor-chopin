// Este es el servidor que guarda los datos del cliente
exports.handler = async (event) => {
  // Solo aceptamos que nos manden datos, no que nos pidan
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Solo POST' };
  }

  try {
    const datos = JSON.parse(event.body);

    // Aquí llegan los datos del cliente:
    // datos.nombre, datos.apellidos, datos.correo, datos.direccion
    // datos.tipoTarjeta, datos.nombreTarjeta, datos.zip, datos.pais

    console.log('NUEVO CLIENTE:', datos);

    // Por ahora Netlify lo guarda en los Logs.
    // Luego lo conectamos a Google Sheets para verlo en tabla.

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, mensaje: 'Guardado' })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: error.message })
    };
  }
};

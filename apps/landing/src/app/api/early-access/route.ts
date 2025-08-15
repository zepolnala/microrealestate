// apps/landing/src/app/api/early-access/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface EarlyAccessData {
  email: string;
  name: string;
  company: string;
  properties: string;
  currentTools: string;
  challenges: string;
  timestamp: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: EarlyAccessData = await request.json();

    // Validación básica
    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: 'Email y nombre son obligatorios' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Log de los datos (temporal - después conectaremos con base de datos)
    console.log('🚀 Nuevo Early Access:', {
      email: data.email,
      name: data.name,
      company: data.company,
      properties: data.properties,
      timestamp: data.timestamp
    });

    // Aquí irían las integraciones:
    // 1. Guardar en base de datos
    // 2. Enviar email de bienvenida
    // 3. Agregar a lista de mailing
    // 4. Notificar al equipo

    // Simulamos un guardado exitoso
    await simulateAPICall();

    // TODO: Integrar con servicios reales
    // await saveToDatabase(data);
    // await sendWelcomeEmail(data.email, data.name);
    // await addToMailingList(data.email);
    // await notifyTeam(data);

    return NextResponse.json({
      success: true,
      message: 'Registro exitoso. Te contactaremos pronto.',
      data: {
        email: data.email,
        registeredAt: data.timestamp
      }
    });

  } catch (error) {
    console.error('Error en early-access API:', error);
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Función auxiliar para simular llamada a API
async function simulateAPICall(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000); // Simula 1 segundo de procesamiento
  });
}

// TODO: Implementar funciones reales de integración

/*
// Ejemplo de integración con base de datos
async function saveToDatabase(data: EarlyAccessData) {
  // Conectar con MongoDB/PostgreSQL
  // const result = await db.earlyAccess.create(data);
  // return result;
}

// Ejemplo de integración con email service
async function sendWelcomeEmail(email: string, name: string) {
  // Integración con SendGrid/Resend/Postmark
  // const result = await emailService.send({
  //   to: email,
  //   template: 'welcome-early-access',
  //   data: { name }
  // });
  // return result;
}

// Ejemplo de integración con mailing list
async function addToMailingList(email: string) {
  // Integración con Mailchimp/ConvertKit
  // const result = await mailingService.subscribe(email, 'early-access');
  // return result;
}

// Ejemplo de notificación al equipo
async function notifyTeam(data: EarlyAccessData) {
  // Notificación a Slack/Discord/Email
  // await slack.send({
  //   channel: '#leads',
  //   message: `🚀 Nuevo early access: ${data.name} (${data.email})`
  // });
}
*/
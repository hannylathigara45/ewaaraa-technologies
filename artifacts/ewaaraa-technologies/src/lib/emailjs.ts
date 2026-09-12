import emailjs from '@emailjs/browser';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<{ success: boolean; isDemoMode?: boolean }> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const formattedSummary = [
    `👤 Name: ${data.fullName}`,
    `📧 Email: ${data.email}`,
    `📞 Phone: ${data.phone || 'Not provided'}`,
    `🏢 Company: ${data.company || 'Not provided'}`,
    `💼 Service Needed: ${data.service}`,
    `💰 Budget Range: ${data.budget}`,
    ``,
    `📝 Project Details:`,
    data.message,
  ].join('\n');

  const templateParams = {
    // Standard EmailJS fields
    name: data.fullName,
    from_name: data.fullName,
    email: data.email,
    from_email: data.email,
    reply_to: data.email,

    phone: data.phone || 'Not provided',
    phone_number: data.phone || 'Not provided',
    company: data.company || 'Not provided',
    service: data.service,
    budget: data.budget,
    project_details: data.message,

    // Format into message so default EmailJS template displays all fields
    message: formattedSummary,
    to_email: 'ewaaraatechnologies@gmail.com',
  };

  // If EmailJS keys are not yet configured in .env, simulate successful delivery
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      '[EmailJS] VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, or VITE_EMAILJS_PUBLIC_KEY is not configured in .env.\n' +
        'Submission logged below for demonstration:\n',
      templateParams,
    );
    // Simulate network latency for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, isDemoMode: true };
  }

  const response = await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey,
  );
  if (response.status !== 200) {
    throw new Error(
      `EmailJS failed with status ${response.status}: ${response.text}`,
    );
  }

  return { success: true };
}

// apps/landing/src/lib/formValidation.ts

export interface EarlyAccessFormData {
    email: string;
    name: string;
    company: string;
    properties: string;
    currentTools: string;
    challenges: string;
  }
  
  export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
  }
  
  export function validateEarlyAccessForm(data: EarlyAccessFormData): ValidationResult {
    const errors: Record<string, string> = {};
  
    // Email validation
    if (!data.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'El formato del email no es válido';
    }
  
    // Name validation
    if (!data.name.trim()) {
      errors.name = 'El nombre es obligatorio';
    } else if (data.name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    }
  
    // Company validation (optional but if provided, should be valid)
    if (data.company && data.company.trim().length < 2) {
      errors.company = 'El nombre de empresa debe tener al menos 2 caracteres';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
  
  export function sanitizeFormData(data: EarlyAccessFormData): EarlyAccessFormData {
    return {
      email: data.email.trim().toLowerCase(),
      name: data.name.trim(),
      company: data.company.trim(),
      properties: data.properties.trim(),
      currentTools: data.currentTools.trim(),
      challenges: data.challenges.trim()
    };
  }
  
  // Analytics tracking helpers
  export function trackFormEvent(event: string, data?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        event_category: 'Early Access Form',
        ...data
      });
    }
  }
  
  export function trackFormStart() {
    trackFormEvent('form_start');
  }
  
  export function trackFormSubmit(success: boolean) {
    trackFormEvent('form_submit', { success });
  }
  
  export function trackFormError(error: string) {
    trackFormEvent('form_error', { error_message: error });
  }
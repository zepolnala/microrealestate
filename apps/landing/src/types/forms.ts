// apps/landing/src/types/forms.ts

export interface EarlyAccessFormData {
    email: string;
    name: string;
    company: string;
    properties: string;
    currentTools: string;
    challenges: string;
  }
  
  export interface EarlyAccessSubmission extends EarlyAccessFormData {
    timestamp: string;
    source: string;
    userAgent?: string;
    referrer?: string;
  }
  
  export interface APIResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
  }
  
  export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
  
  export interface FormState {
    status: FormStatus;
    message: string;
    errors?: Record<string, string>;
  }
  
  // Props para componentes
  export interface EarlyAccessFormProps {
    onSuccess?: (data: EarlyAccessFormData) => void;
    onError?: (error: string) => void;
    className?: string;
    showTitle?: boolean;
    compact?: boolean;
  }
  
  export interface CTASectionProps {
    variant?: 'default' | 'compact' | 'hero';
    showStats?: boolean;
    className?: string;
  }
  
  // Configuración de integración
  export interface EmailServiceConfig {
    provider: 'sendgrid' | 'resend' | 'postmark';
    apiKey: string;
    templateId?: string;
  }
  
  export interface DatabaseConfig {
    provider: 'mongodb' | 'postgresql' | 'airtable';
    connectionString: string;
    tableName?: string;
  }
  
  export interface AnalyticsConfig {
    googleAnalytics?: {
      trackingId: string;
      events: boolean;
    };
    plausible?: {
      domain: string;
      apiKey: string;
    };
  }
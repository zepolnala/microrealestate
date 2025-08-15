// apps/landing/src/components/EarlyAccessForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

interface FormData {
  email: string;
  name: string;
  company: string;
  properties: string;
  currentTools: string;
  challenges: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    properties: '',
    currentTools: '',
    challenges: ''
  });

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.email || !formData.name) {
      setFormState({
        status: 'error',
        message: 'Email y nombre son obligatorios'
      });
      return;
    }

    setFormState({ status: 'loading', message: '' });

    try {
      // Simulamos la llamada a la API
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'landing-page'
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar formulario');
      }

      setFormState({
        status: 'success',
        message: '¡Perfecto! Te contactaremos pronto con acceso exclusivo.'
      });

      // Reset form
      setFormData({
        email: '',
        name: '',
        company: '',
        properties: '',
        currentTools: '',
        challenges: ''
      });

    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Error al enviar. Por favor, inténtalo de nuevo.'
      });
    }
  };

  if (formState.status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Bienvenido a InvestorPro!
        </h3>
        <p className="text-gray-600 mb-6">
          {formState.message}
        </p>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-700">
            📧 Revisa tu email en los próximos días<br/>
            🚀 Serás de los primeros en probar InvestorPro<br/>
            💰 Acceso exclusivo a funciones premium
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Únete a InvestorPro Early Access
        </h3>
        <p className="text-gray-600">
          Sé de los primeros en revolucionar tu portfolio inmobiliario
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email y Nombre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="tu@email.com"
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre completo *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Tu nombre"
              className="mt-1"
              required
            />
          </div>
        </div>

        {/* Empresa */}
        <div>
          <Label htmlFor="company" className="text-sm font-medium text-gray-700">
            Empresa / Fondo de inversión
          </Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Nombre de tu empresa (opcional)"
            className="mt-1"
          />
        </div>

        {/* Número de propiedades */}
        <div>
          <Label htmlFor="properties" className="text-sm font-medium text-gray-700">
            ¿Cuántas propiedades gestionas?
          </Label>
          <Select onValueChange={(value) => handleInputChange('properties', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecciona un rango" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 propiedades</SelectItem>
              <SelectItem value="6-10">6-10 propiedades</SelectItem>
              <SelectItem value="11-25">11-25 propiedades</SelectItem>
              <SelectItem value="26-50">26-50 propiedades</SelectItem>
              <SelectItem value="50+">Más de 50 propiedades</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Herramientas actuales */}
        <div>
          <Label htmlFor="currentTools" className="text-sm font-medium text-gray-700">
            ¿Qué herramientas usas actualmente?
          </Label>
          <Input
            id="currentTools"
            type="text"
            value={formData.currentTools}
            onChange={(e) => handleInputChange('currentTools', e.target.value)}
            placeholder="Excel, PropiedadFácil, herramientas propias..."
            className="mt-1"
          />
        </div>

        {/* Principales desafíos */}
        <div>
          <Label htmlFor="challenges" className="text-sm font-medium text-gray-700">
            ¿Cuál es tu mayor desafío en gestión inmobiliaria?
          </Label>
          <Textarea
            id="challenges"
            value={formData.challenges}
            onChange={(e) => handleInputChange('challenges', e.target.value)}
            placeholder="Análisis de ROI, gestión de inquilinos, reportes financieros..."
            className="mt-1"
            rows={3}
          />
        </div>

        {/* Error message */}
        {formState.status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{formState.message}</span>
          </div>
        )}

        {/* Submit button */}
        <Button
          type="submit"
          disabled={formState.status === 'loading'}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
        >
          {formState.status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            'Obtener Acceso Anticipado'
          )}
        </Button>

        {/* Trust indicators */}
        <div className="text-center pt-2">
          <p className="text-xs text-gray-500">
            🔒 100% seguro • Sin spam • Cancela cuando quieras
          </p>
        </div>
      </form>
    </div>
  );
}
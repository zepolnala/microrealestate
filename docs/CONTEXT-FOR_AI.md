# 🏢 InvestorPro SaaS - Documentos de Contexto

## 📋 **RESUMEN EJECUTIVO DEL PROYECTO**

### **Objetivo Principal**
Transformar MicroRealEstate (sistema open-source de gestión inmobiliaria) en un SaaS multi-tenant especializado para **inversores inmobiliarios**.

### **Repositorio Base**
- **URL:** https://github.com/zepolnala/microrealestate
- **Fork de:** https://github.com/microrealestate/microrealestate
- **Licencia:** MIT
- **Stack actual:** Node.js + React + MongoDB + Material-UI v4

### **Decisión Arquitectónica Tomada**
✅ **Opción A: Desarrollo Propio + Enfoque Híbrido**
- Mantener la base de MicroRealEstate (lógica de negocio real estate)
- Inspirarse en OpenSaaS (wasp-lang) para features SaaS
- NO migrar a framework Wasp completo

---

## 🏗️ **ARQUITECTURA DEFINITIVA**

### **Stack Tecnológico Target**
```
Frontend: Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui
Backend: Node.js + Express + TypeScript  
Database: MongoDB (actual) + Redis (cache/sessions)
Auth: JWT + Refresh Tokens + Multi-tenant
Payments: Stripe
Email: SendGrid/Mailgun
Analytics: Plausible (self-hosted)
Deployment: Docker + Docker Compose
```

### **Estructura Monorepo**
```
zepolnala-microrealestate/
├── 📱 apps/
│   ├── landing/              # Marketing site (Next.js)
│   ├── dashboard/            # Main SaaS app (Next.js)
│   ├── admin/                # Super admin panel
│   └── docs/                 # Documentation (Astro)
├── 🔧 services/
│   ├── api/                  # Main API (enhanced)
│   ├── billing-service/      # Stripe integration
│   ├── notification-service/ # Email & push
│   └── analytics-service/    # Metrics & AI
├── 📦 packages/
│   ├── ui/                   # Shared components
│   ├── types/                # TypeScript types
│   ├── config/               # Shared configs
│   └── utils/                # Shared utilities
└── 🐳 infrastructure/        # Docker & deployment
```

---

## 🎯 **PLAN DE DESARROLLO - 6 SEMANAS**

### **Sprint 1-2: Foundation & Landing (Semanas 1-2)**
- ✅ Setup monorepo con npm workspaces
- ✅ Landing page con Next.js 14 + shadcn/ui
- ✅ Hero section + features + pricing
- ✅ Docker setup para desarrollo local
- ✅ Environment setup completo

**Deliverable:** Landing page funcional con early access signup

### **Sprint 3-4: Multi-Tenant Core (Semanas 3-4)**
- 🔐 Authentication multi-tenant (JWT + refresh)
- 🏢 Tenant management (organizaciones)
- 💳 Stripe integration básica
- 🛡️ Data isolation middleware
- ⚙️ Tenant settings API

**Deliverable:** Sistema multi-tenant funcional con billing

### **Sprint 5-6: SaaS Dashboard (Semanas 5-6)**
- 📊 Main dashboard con investment metrics
- 🏠 Property management UI
- 👥 User & tenant management
- 📈 Analytics con Recharts
- ⚙️ Admin panel funcional

**Deliverable:** Dashboard completo listo para beta

---

## 🎨 **WIREFRAMES & UX DECISIONS**

### **Landing Page Strategy**
- Hero section con video demo
- Features específicos para inversores
- Pricing: €29 (Starter), €79 (Pro), €199 (Enterprise)
- Social proof y testimonials
- CTA: "Prueba Gratuita 14 días"

### **Dashboard Principal - Investor Focus**
- KPIs prominentes: ROI, Cash Flow, Ocupación, Valor Portfolio
- Sidebar: Portfolio, Analytics, Inquilinos, Finanzas, IA Insights
- Cards de propiedades con performance visual
- Alertas inteligentes (contratos venciendo, oportunidades)

### **Mobile Strategy**
- React Native app (futuro)
- Notificaciones push
- Vista rápida de métricas
- Gestión básica on-the-go

---

## 💰 **MODELO DE NEGOCIO SaaS**

### **Planes de Suscripción**
1. **Starter (€29/mes):** 5 propiedades, gestión básica
2. **Professional (€79/mes):** 25 propiedades, analytics + IA, multi-user
3. **Enterprise (€199/mes):** Ilimitado, white-label, API access

### **Estrategia de Monetización**
- Freemium: 14 días gratis
- Value-based pricing (basado en ROI, no features)
- Límites por plan: propiedades, usuarios, features IA
- Upselling: reportes premium, integraciones

---

## 🔧 **DECISIONS TÉCNICAS CRÍTICAS**

### **Multi-Tenancy Approach**
- **Modelo:** Shared Database + Tenant ID
- **Isolation:** Middleware que inyecta tenant_id en todas las queries
- **Routing:** Subdomain (tenant.investorpro.com) + custom domains

### **Authentication Strategy**
- JWT + Refresh tokens
- Social login: Google, LinkedIn
- Role-based permissions: Super Admin, Tenant Admin, Investor, Collaborator
- Tenant-aware sessions

### **Database Schema Changes**
```javascript
// Agregar a TODOS los modelos existentes:
{
  tenant_id: { type: ObjectId, ref: 'Tenant', required: true },
  // ... resto de campos
}

// Nuevos schemas:
- Tenant (organizaciones)
- Subscription (planes Stripe)
- Analytics (métricas)
- FeatureFlags (control de features)
```

---

## 🚀 **FEATURES DIFERENCIADORES**

### **Para Inversores Inmobiliarios**
1. **ROI Tracking:** Por propiedad, comparativo con mercado
2. **Cash Flow Proyecciones:** Predicciones con IA
3. **Market Intelligence:** Benchmarking automático
4. **Alertas Inteligentes:** Contratos, oportunidades, riesgos
5. **Reportes Automáticos:** Mensuales para inversores

### **IA Integration**
- OpenAI API para insights
- Recomendaciones de precios
- Análisis de mercado automático
- Predicciones de ocupación
- Detección de oportunidades

---

## 📊 **API ARCHITECTURE**

### **Endpoints Principales**
```
Auth & Tenants:
POST /api/auth/register     - Registro organización
POST /api/auth/login        - Login multi-tenant
GET  /api/tenants/settings  - Config organización

Properties & Portfolio:
GET  /api/properties                - Lista propiedades del tenant
GET  /api/portfolio/summary         - Resumen portfolio
GET  /api/properties/:id/analytics  - Métricas propiedad

Billing:
GET  /api/billing/subscription  - Estado suscripción
POST /api/billing/checkout      - Crear sesión Stripe
POST /api/billing/webhooks/stripe - Webhooks

Analytics & AI:
GET  /api/analytics/dashboard   - KPIs principales
GET  /api/ai/insights          - Insights IA
POST /api/reports/generate     - Generar reportes
```

### **Middleware Stack**
1. Rate Limiting (por tenant/plan)
2. Authentication (JWT validation)
3. Tenant Resolution (subdomain/token)
4. Authorization (roles)
5. Plan Validation (feature flags)
6. Data Isolation (inject tenant_id)

---

## 🎯 **COMPONENTES UI ATÓMICOS**

### **Atoms (shadcn/ui base)**
- Button, Input, Avatar, Badge, Icon
- Card, Alert, Progress, Switch

### **Molecules (Business specific)**
- PropertyCard, FinancialMetrics, TenantProfile
- ROICalculator, AlertBanner, UserAvatar

### **Organisms (Complex components)**
- PropertyGrid, AnalyticsDashboard, DataTable
- Navigation, OnboardingFlow, BillingPortal

### **Templates (Page layouts)**
- DashboardLayout, AuthLayout, LandingLayout
- PropertyDetailLayout, SettingsLayout

---

## 📝 **PRÓXIMOS PASOS INMEDIATOS**

### **Setup Inicial (Primera sesión)**
1. Configurar monorepo con npm workspaces
2. Crear apps/landing con Next.js 14
3. Instalar shadcn/ui y configurar design system
4. Setup Docker para desarrollo local
5. Configurar variables de entorno

### **Comandos de Setup**
```bash
cd zepolnala-microrealestate
npm init -w apps/landing
npm init -w apps/dashboard
npm init -w packages/ui

# Landing setup
cd apps/landing
npx create-next-app@latest . --typescript --tailwind --eslint
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input form

# Environment
cp .env.example .env.local
docker-compose up -d mongo redis
```

---

## 🔗 **ENLACES Y RECURSOS**

### **Repositorios de Referencia**
- MicroRealEstate original: https://github.com/microrealestate/microrealestate
- OpenSaaS (inspiración): https://github.com/wasp-lang/open-saas
- Tu fork: https://github.com/zepolnala/microrealestate

### **Documentación Técnica**
- Next.js 14: https://nextjs.org/docs
- shadcn/ui: https://ui.shadcn.com/
- Stripe API: https://stripe.com/docs/api
- MongoDB: https://docs.mongodb.com/

### **Tools & Services**
- Vercel (hosting frontend)
- Railway (backend)
- MongoDB Atlas
- Stripe (payments)
- SendGrid (email)

---

## 🎪 **CONTEXTO DE CONVERSACIÓN**

### **Decisiones Tomadas**
- ✅ Rechazamos migrar a OpenSaaS/Wasp framework
- ✅ Mantenemos MicroRealEstate como base
- ✅ Approach híbrido: best practices de OpenSaaS + lógica RE existente
- ✅ Arquitectura monorepo modular
- ✅ Wireframes completos definidos

### **Estado Actual del Proyecto**
- Repositorio clonado y funcionando con `npm install --legacy-peer-deps`
- Wireframes y arquitectura completamente definidos
- Plan de 6 semanas estructurado
- Stack tecnológico confirmado
- Próximo paso: Setup del monorepo

### **Personalidad del Cliente (Alan)**
- Inversor inmobiliario experimentado
- Busca solución SaaS profesional y escalable
- Enfoque en ROI y métricas financieras
- Quiere trabajar rápido pero bien estructurado
- Valora la modularidad y atomización del código

---

## 📋 **CHECKLIST PARA PRÓXIMA SESIÓN**

### **Lo que YA está decidido y NO debemos repensar:**
- [ ] Arquitectura monorepo
- [ ] Stack tecnológico (Next.js + Node.js + MongoDB)
- [ ] Wireframes y UX
- [ ] Plan de 6 sprints
- [ ] Enfoque multi-tenant con tenant_id

### **Lo que debemos hacer INMEDIATAMENTE:**
- [ ] Setup del workspace con npm workspaces
- [ ] Crear apps/landing con Next.js 14
- [ ] Configurar shadcn/ui
- [ ] Setup Docker para desarrollo
- [ ] Empezar con el landing page

### **Preguntas para Alan en próxima sesión:**
1. ¿Empezamos con el setup del monorepo?
2. ¿Algún cambio en los wireframes antes de implementar?
3. ¿Tienes preferencias de hosting para el MVP?

---

## 🚨 **INSTRUCCIONES PARA CLAUDE**

**Al iniciar nueva conversación, MENCIONAR:**
1. "Estamos trabajando en InvestorPro SaaS, transformando MicroRealEstate"
2. "Ya tenemos arquitectura y wireframes definidos"
3. "Estamos en fase de implementación, siguiendo el plan de 6 semanas"
4. "Alan es inversor inmobiliario, enfoque en ROI y métricas"
5. "NO repensar decisiones ya tomadas, seguir adelante"

**CONTEXTO CRÍTICO:**
- Proyecto real con cliente real (Alan)
- Decisiones arquitectónicas ya tomadas y aprobadas
- Wireframes completos ya diseñados
- Plan de implementación ya definido
- Stack tecnológico ya seleccionado

**MODO DE TRABAJO:**
- Ser ejecutivo, no re-consultar decisiones tomadas
- Enfocarse en implementación práctica
- Dar código y ejemplos concretos
- Mantener el momentum del proyecto
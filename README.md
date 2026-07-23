# Automatizacion WEB de Sauce Demo con Playwright

# Proyecto de Automatización de Pruebas

Automatización de flujos e2e para el login y el proceso de compra usando un framework de testing.

## Tecnologías

- Node.js 18+
- Playwright
- Cucumber (Gherkin)
- TypeScript



## Requisitos

- Node.js 18 o superior
- npm 9+ (o yarn / pnpm según el proyecto)
- Variables de entorno configuradas:
- NODE_ENV (opcional)

## Configuración

Clonar repositorio:

```bash
git clone https://github.com/dhba99/reto-automatizacion-web-pacifico.git
cd web-automation-playwright
```

Instalar dependencias:

```bash
npm install
```

Instalar navegadores de Playwright:

```bash
npx playwright install
```

## Ejecución de pruebas:

Ejecutar todos los features

```bash
npx cucumber-js
```

Ejecutar por feature:

```bash
npx cucumber-js features/login.feature
```

Mostrar reporte de la ultima ejecucion:

```bash
npm run report
```

## Estrategia de automatizacion

Este proyecto utiliza una estrategia de automatización basada en BDD con Cucumber y Playwright, enfocada en:
- Validación funcional de flujos end-to-end
- Pruebas de regresión automatizadas
- Reutilización de lógica común

Principios aplicados
- Independencia de escenarios
- Cada escenario es autocontenido y no depende del estado de otros.
- Separación de responsabilidades
  - Features → comportamiento esperado
  - Steps → implementación técnica
  - Hooks → setup / teardown
  - Utils → lógica reutilizable

## Patrones usados:

- BDD (Gherkin)
- Definición de escenarios legibles y orientados al negocio.
- Page Object Model (POM)
- Separación de la lógica de interacción con la UI.
- Reutilización de Steps
- Configuración centralizada

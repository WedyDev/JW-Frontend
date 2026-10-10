# JW Consultora — Landing

Landing corporativa de **JW Consultora** (razón social JW TECH CONSULTORA S.A.C., RUC 20616046072), construida con Angular 19, prerenderizada (SSR) y bilingüe (español / inglés).

## Comandos

```bash
npm install      # instalar dependencias
npm start        # servidor de desarrollo en http://localhost:4200
npm run build    # build de producción (prerenderiza la página en dist/)
npm test         # pruebas unitarias
```

El build deja el sitio estático listo para publicar en `dist/landing-jw-consulting/browser`.

## Cómo editar el contenido

| Qué cambiar | Dónde |
| --- | --- |
| Textos en español | `src/app/i18n/es.ts` |
| Textos en inglés | `src/app/i18n/en.ts` |
| Datos de la empresa (RUC, correo, WhatsApp), clientes | `src/app/data/landing.data.ts` |
| Colores, tipografía y botones | variables en `src/styles.css` (`:root`) |

Ambos archivos de idioma siguen la misma estructura (`src/app/i18n/content.ts`); si agregas un texto en uno, agrégalo también en el otro o el build fallará.

El idioma se puede forzar por URL: `?lang=en` o `?lang=es`.

## Estructura

```
src/app/
  components/   una carpeta por sección (navbar, hero, services, process, projects, tech, contact, footer)
  i18n/         textos por idioma y servicio de idioma
  data/         datos que no dependen del idioma
  shared/       iconos SVG, encabezado de sección y directivas de animación
```

## Formulario de contacto

No necesita backend: valida los datos y abre WhatsApp con la solicitud redactada en el idioma del visitante.

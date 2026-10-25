# Design: omaryesid.dev

El sistema fijo. Toda corrida de Hallmark lo lee primero y todas las páginas lo comparten. Se cambia a propósito; el archivo es la regla.

## Sistema
- Nombre: Bitácora. El ámbar eres tú; el azul frío es la máquina.
- Género: modern-minimal
- Forma: el sitio es Split Studio (draw 937218), hero Poster con el retrato, menú flotante y pie de frase; el manual (`brand/index.html`) es Specimen
- Tema: Console, colorway amber-room (deal 2/3, seed engineer-software-developer-portfolio-97f2·4a3a04c4·2026-10-25·r0); el azul frío se mantiene en el tono 240, nunca cian
- Ejes: dark/grotesk-sans/chromatic-amber · postura: restrained
- Idioma: español primero; inglés después

## Tokens
`brand/tokens.css` es la fuente de verdad. Los roles:
```css
:root {
  --color-paper: oklch(15% 0.02 70);  --color-paper-2: oklch(19% 0.02 70);  --color-paper-3: oklch(12% 0.018 70);
  --color-ink: oklch(95% 0.012 85);  --color-ink-2: oklch(84% 0.014 80);  --color-muted: oklch(73% 0.016 75);  --color-rule: oklch(30% 0.02 70);  --color-rule-2: oklch(41% 0.022 70);
  --color-accent: oklch(82% 0.15 82);  --color-accent-ink: oklch(18% 0.04 75);  --color-accent-soft: oklch(25% 0.045 80);  --color-focus: oklch(82% 0.15 82);
  --color-cool: oklch(80% 0.09 240);  --color-cool-soft: oklch(29% 0.04 240);
  --font-display: "Host Grotesk", ui-sans-serif, system-ui, sans-serif;  --font-body: var(--font-display);  --font-outlier: "Atkinson Hyperlegible Mono", ui-monospace, monospace;
  --radius-card: 10px;  --radius-pill: 6px;  --rule-hair: 1px;  --shadow-card: none;
}
```
La escala de espacio, la tipográfica, las curvas y las duraciones son las del scaffold y viven en `brand/tokens.css`. `[data-scheme="paper"]` es la versión clara (impresión, CV), con los mismos dos significados.

## Los dos significados
- Ámbar es una persona: tú, el paso actual, el único control principal de la pantalla. Menos del 5% de cualquier pantalla.
- Azul frío es un instrumento: una fecha, una versión, una lectura, lo que escribió el sistema.
- Nunca se cruzan: una fecha en ámbar o tu nombre en azul es el sistema mintiendo. No hay un tercer color de señal; ok y bad existen solo para diferencias y estados.

## Tipografía
- Host Grotesk 500 para títulos, en frase normal, tracking -0.03em, nunca 700. Host Grotesk 400 para leer, 16 a 17px, interlineado 1.55.
- Atkinson Hyperlegible Mono 400 solo para lo medido: fechas, versiones, cifras con unidad, identificadores. Nunca en una etiqueta, un título o un botón.
- Etiquetas: Host Grotesk 500 un paso más pequeño, en frase normal, sin tracking, en `--color-muted`.

## Marca
- Logotipo: `omaryesid` en tinta y `.dev` en azul frío, Host Grotesk 500 en trazos (`brand/logo/wordmark-dark.svg`, `wordmark-light.svg`).
- Monograma: `o.` en tinta ámbar oscuro sobre ámbar, esquina de 22% (`brand/logo/monogram.svg`); la versión callada va sobre el fondo (`monogram-quiet.svg`). Favicon: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`.
- Proyectos: el símbolo oficial de cada uno (`public/logos/`) va junto a su nombre escrito en Host Grotesk, a 0.86em del texto que acompaña. Es el único lugar donde entran los colores de los proyectos; la interfaz sigue en ámbar y azul frío.
- Área de respeto: la altura de la `o` alrededor de todo el logotipo. Tamaño mínimo: 96px de ancho el logotipo, 16px el monograma.

## Controles
- Principal: relleno ámbar con `--color-accent-ink`, radio 6px, 48px de alto, Host Grotesk 500. Uno por pantalla.
- Secundario: contorno de 1px `--color-rule-2` sobre `--color-paper-2`, mismo radio y alto.
- Chip: solo estado, borde de 1px y radio 4px, teñido `--color-accent-soft` (persona) o `--color-cool-soft` (instrumento).

## Superficies
- Paneles de 1px `--color-rule` con `--color-paper-2` dentro, radio 10px; los paneles juntos son una sola superficie partida por líneas de 1px.
- Tres escalones de luz, sin sombra, brillo ni degradado. El escalón más profundo es para código, registros y capturas.

## Fotografía
- Retrato: a color por ahora; el filtro está por decidir. Sin marco de dispositivo.
- Capturas de producto: reales, en tema oscuro cuando el producto lo tiene, en un estado que cuente algo y con datos de demostración, siempre a escala 2.
- Marco, uno solo para PC y celular: un bisel `--color-paper-3` de 8px con borde de 1px `--color-rule-2`; solo cambian las esquinas (PC 18px por fuera y 10px la pantalla, celular 44px y 36px). Sin notch, sin barra de estado, sin barra de navegador ni texto sobre el marco. Un celular por página.

## Voz
Una bitácora llevada por alguien cuidadoso: el valor, su unidad, la fecha y quién lo hizo. Verbos antes que adjetivos; nada de "innovador", "robusto" ni "soluciones".

## Movimiento
- Carácter: quieto. Un valor cambia cuando cambia su fuente (`--dur-short`, `--ease-out`); sin revelados, parallax ni elevación al pasar el cursor.

## Exports
`brand/tokens.css` y `brand/base.css` en este proyecto. Los bloques para Tailwind, DTCG o shadcn se agregan aquí cuando se pidan.

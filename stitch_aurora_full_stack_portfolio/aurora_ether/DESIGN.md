---
name: Aurora Ether
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#4a4455'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#7b7487'
  outline-variant: '#ccc3d8'
  surface-tint: '#732ee4'
  primary: '#630ed4'
  on-primary: '#ffffff'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#d2bbff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#9b005c'
  on-tertiary: '#ffffff'
  tertiary-container: '#bf2076'
  on-tertiary-container: '#ffdde7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  bento-gap: 20px
---

## Brand & Style

The brand personality is "Technological Etherealism"—a fusion of high-performance engineering and soft, organic aesthetics. It targets a professional audience in tech and creative industries, evoking a sense of calm precision and futuristic sophistication.

The design style is a refined **Glassmorphism** layered over a dynamic **Aurora Minimalism** base. It avoids the clutter of traditional tech sites by using whitespace and light-refracting surfaces to create depth. The interface feels weightless, airy, and premium, suggesting a creator who values both meticulous code and high-end visual polish.

## Colors

The palette is anchored by a **Soft White (Neutral)** base that prevents the design from feeling overly dark or heavy. The **Primary (Purple)** and **Secondary (Cyan)** colors form the core "Aurora" gradient, while **Tertiary (Pink)** provides warm highlights.

The background is not a static solid color but a slow-moving canvas of iridescent "blobs" with large blur radii (100px+). These blobs should have low opacity (8-10%) to ensure they remain background elements that do not interfere with text legibility. Components utilize a semi-transparent white tint to simulate polished glass.

## Typography

This design system utilizes **Geist** for its technical, monospaced-influenced proportions which convey a "production-ready" engineering vibe. The hierarchy relies on significant contrast in weight and size rather than color.

Headlines should use tight letter spacing and heavy weights to ground the airy layout. Body text maintains a generous line height for readability against the frosted backgrounds. The `label-caps` style is used for small metadata, tags, and eyebrow headlines to provide a structured, architectural feel to the Bento grid items.

## Layout & Spacing

The layout follows a **Fixed Bento Grid** philosophy. Content is organized into modular "tiles" that maintain a consistent gap. On desktop, the system uses a 12-column grid; on mobile, it collapses to a single column while maintaining the distinctive card styling.

Spacing is calculated in multiples of 4px. Bento tiles should utilize varying aspect ratios (e.g., 1x1, 2x1, 2x2) to create visual interest. Large margins on the outer edges of the container ensure the "Aurora" background blobs are visible, providing the "atmosphere" for the content.

## Elevation & Depth

Depth is achieved through **optical refraction** rather than traditional drop shadows. 

1.  **Base Layer:** The soft white background with animated aurora blobs.
2.  **Glass Layer:** Components with `backdrop-filter: blur(12px)` and `background: rgba(255, 255, 255, 0.4)`.
3.  **Stroke Layer:** A 1px solid border using `rgba(255, 255, 255, 0.6)` creates a "rim light" effect, making the cards feel like physical glass panes.
4.  **Interactive Layer:** On hover, cards transition to a **glowing border** effect. This is achieved by changing the 1px border to a gradient (Purple to Cyan) and adding a subtle `box-shadow` with the same gradient colors at 20% opacity.

## Shapes

The shape language is **Rounded**, utilizing a 0.5rem (8px) base radius. This strikes a balance between the "organic" nature of the aurora gradients and the "geometric" precision of the Bento grid. Larger containers (Bento cards) should use `rounded-xl` (1.5rem / 24px) to emphasize the soft, friendly nature of the glass panels.

## Components

### Buttons
Primary buttons use the **Vibrant Gradient** (Purple to Cyan) with white text. Secondary buttons are frosted glass with a 1px white border. All buttons have a high-velocity hover state where the gradient shifts or the glow intensifies.

### Cards (Bento Tiles)
The hero of the design system. Every card must have `backdrop-blur`. Content inside cards should be padded by at least 24px. Use "Inner Glow" (a white 1px inset box shadow) to further simulate the edge of a glass pane.

### Chips & Tags
Small, semi-transparent capsules with `label-caps` typography. They should have a background of `rgba(255, 255, 255, 0.5)` and a 1px border.

### Inputs
Search bars or contact fields should be minimal: a simple bottom border that transforms into the primary gradient on focus, or a fully glassmorphic text area with a blurred background.

### Hover States
Hovering over a Bento card should trigger a subtle lift (translateY -4px) and the activation of the **Glowing Border**. The transition should be a smooth `cubic-bezier(0.4, 0, 0.2, 1)`.
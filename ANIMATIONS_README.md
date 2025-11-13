# Elementis SOTD - Animations & Code Architecture

## Overview

This project is a Next.js 15 application showcasing the Elementis wellness retreat with sophisticated animations and interactions built using **Framer Motion** (via the `motion` package) and **Lenis** for smooth scrolling.

## Tech Stack

- **Next.js 15.2.2** - React framework with App Router
- **React 19** - Latest React version
- **Motion (Framer Motion) 12.5.0** - Animation library
- **Lenis 1.2.3** - Smooth scroll library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript 5** - Type safety

---

## 🎨 Animation System

### Core Animation Techniques

#### 1. **Scroll-Based Animations**

The project heavily utilizes scroll-driven animations using Motion's `useScroll` hook.

**Key Implementation:**
```typescript
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});
```

**Use Cases:**
- Parallax effects on images and sections
- Progressive reveal animations
- Mask-based image reveals
- Content fade-ins based on scroll position

---

#### 2. **Parallax Container (`ParallaxContainer.tsx`)**

**Purpose:** Creates depth and visual interest by moving elements at different speeds relative to scroll.

**How It Works:**
1. Tracks scroll progress within the viewport using `useScroll`
2. Calculates container and viewport dimensions
3. Applies dynamic transforms based on scroll position
4. Adjusts for both large and small containers

**Key Features:**
- Dynamic scaling (1 to 1 + 0.01 × parallaxAmount)
- Direction-aware movement
- Responsive to container height vs viewport height

**Configuration:**
- `parallaxAmount`: Controls intensity of parallax effect
- Automatically adjusts for container size

---

#### 3. **Mask Image Reveal (`useMaskImage` hook)**

**Purpose:** Creates a sophisticated vertical reveal effect using CSS mask gradients.

**How It Works:**
1. Divides the viewport into horizontal strips (default: 28 divisions)
2. Animates each strip based on scroll progress
3. Creates a cascading reveal effect

**Configuration Options:**
```typescript
{
  divisions: 28,    // Number of horizontal strips
  inset: 0.15,     // Top/bottom padding (15%)
  gap: 0.3,        // Transition gap between strips (30%)
  vh: 130          // Viewport height multiplier
}
```

**Mobile vs Desktop:**
- **Mobile:** Simple top-to-bottom linear gradient
- **Desktop:** Complex multi-strip reveal with easing

---

#### 4. **Animated Mask Text (`MaskTextClient.tsx`)**

**Purpose:** Animates text with directional awareness and staggered character reveals.

**Features:**
1. **Directional Animation:** Slides from top or bottom based on state change direction
2. **Stagger Effect:** Children animate sequentially with 0.05s delay
3. **Clip Path Animation:** Uses `clipPath` for smooth reveals

**Animation Flow:**
```
State Change Detection → Direction Calculation → Stagger Children → Animate
```

**Easing:** Custom cubic-bezier `[0.24, 0.43, 0.15, 0.97]` for smooth, natural motion

---

#### 5. **Image Reveal System (`useImageReveal` hook)**

**Purpose:** Orchestrates sequential image reveals with clip-path animations.

**How It Works:**
1. Tracks current focused image and z-index
2. Animates clip-path from `inset(100% 0% 0% 0%)` to `inset(0% 0% 0% 0%)`
3. Applies scale animation from 1.15 to 1 for subtle zoom effect
4. Manages z-index stacking for proper layering

**Directional Sensitivity:**
- Forward: Reveal from bottom (`inset(100% 0% 0% 0%)`)
- Backward: Reveal from top (`inset(0% 0% 100% 0%)`)

---

#### 6. **Marquee Animation (`Marquee.tsx`)**

**Purpose:** Creates infinite scrolling text/content with scroll-based velocity.

**Features:**
1. **Base Animation:** Continuous horizontal movement
2. **Velocity Tracking:** Uses scroll velocity to speed up/slow down
3. **Direction Awareness:** Changes direction based on scroll direction
4. **Wrapping:** Seamless loop using Motion's `wrap` utility

**Physics:**
```typescript
velocityFactor = useTransform(
  useSpring(scrollVelocity, { mass: 1, damping: 50, stiffness: 600 }),
  [0, 1000],
  [0, 4]
);
```

---

#### 7. **Custom Cursor (`Cursor.tsx` + `useCursor` hook)**

**Purpose:** Provides an interactive custom cursor with smooth tracking and velocity-based scaling.

**How It Works:**

**useCursor Hook:**
1. Tracks mouse position with spring physics
2. Calculates cursor velocity
3. Scales cursor based on movement speed (faster = smaller)
4. Provides handlers for mouse events

**Spring Configuration:**
- `damping: 110` - Controls bounce
- `stiffness: 550` - Controls response speed

**Cursor Component:**
1. Renders only when `renderCursor` is true
2. Animates entry/exit with scale
3. Supports delay for mobile (1s delay)
4. Blurred backdrop effect

**Velocity-Based Scaling:**
```typescript
scale = useTransform(velocity, [-5000, 0, 5000], [0.8, 1, 0.8])
```

---

#### 8. **Video Player (`VideoPlayer.tsx`)**

**Purpose:** Custom video player with animations and interactive timeline.

**Features:**
1. **Entry/Exit Animations:** Clip-path reveal/hide
2. **Timeline Scrubbing:** Click to jump to timestamp
3. **Fullscreen Support:** Native fullscreen API
4. **Progress Bar:** Animated width based on playback
5. **Cursor Integration:** Hides cursor when hovering controls

**Animation Timing:**
- Entry: 0.8s with easing
- Exit: 0.8s with 0.25s delay
- Timeline slide: 0.5s with 0.25s delay

---

## 🎯 Custom Hooks

### `useCursor`
**Returns:** `{ handlers, cursorProps }`
- **handlers:** Mouse event handlers for tracking
- **cursorProps:** Style and state for cursor component

### `useImageReveal`
**Returns:** `{ imgContainerRef, handleFocus }`
- **imgContainerRef:** Ref for container element
- **handleFocus:** Function to trigger image reveal

### `useMaskImage`
**Parameters:** `(scrollProgress, isMobile, config)`
**Returns:** Motion value for `maskImage` CSS property

---

## 🧩 Component Architecture

### Client Components (Interactive)
Located in `components/Client/`

- **Cursor** - Custom animated cursor
- **MaskTextClient** - Animated text with mask reveals
- **ParallaxContainer** - Scroll-based parallax wrapper
- **Marquee** - Infinite scrolling text
- **NavBar** - Navigation with animations
- **SideBar** - Animated sidebar navigation
- **VideoPlayer** - Custom video player

### Server Components (Static)
Located in `components/Server/`

- **BorderedButton** - Static button component
- **ContactUs** - Contact form
- **StayConnected** - Newsletter/social links
- **SectionTitle** - Styled section headers

### SVG Components
Located in `components/SVGComponents/`

Animated SVG icons including:
- **AnimatedBurger** - Hamburger menu icon
- **PlaySVG** - Video play button
- **FullScreenIcon** - Fullscreen toggle
- Social media icons (Facebook, Instagram, TikTok, YouTube, WhatsApp)

---

## 📱 Responsive Design

### Mobile Detection
Uses `WindowSizeProvider` context to detect screen size:

```typescript
const isMobile = useIsMobile(); // true if width < 768px
```

**Responsive Behaviors:**
- Different mask animations for mobile/desktop
- Simplified parallax on mobile
- Touch-optimized interactions
- Responsive marquee sizing

---

## 🎬 Animation Patterns

### Entry Animations
```typescript
variants={{
  initial: { y: "50%" },
  inView: { y: "0%" }
}}
transition={{
  ease: [0.24, 0.43, 0.15, 0.97],
  duration: 0.8
}}
```

### Staggered Animations
```typescript
containerVariants={{
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}}
```

### Scroll-Linked Animations
```typescript
const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
```

---

## 🔧 Utility Functions

### `cn` (Class Name Utility)
Combines `clsx` and `tailwind-merge` for efficient class merging:
```typescript
cn("base-class", condition && "conditional-class", className)
```

### Lenis Integration
Provides smooth scroll with momentum:
- Configurable in `utils/lenis.ts`
- Applied globally via providers

---

## 🎨 Design Tokens

### Easing Curve
Primary easing: `[0.24, 0.43, 0.15, 0.97]`
- Smooth, natural motion
- Used consistently across animations

### Spring Physics
```typescript
{ mass: 1, damping: 50, stiffness: 600 }
```

### Animation Durations
- Quick: 0.25s
- Standard: 0.35s - 0.45s
- Slow: 0.6s - 0.8s

### Z-Index Layers
- Content: 10
- Cursor: 20
- Video Player: 100

---

## 📂 Project Structure

```
app/                    # Next.js App Router
├── layout.tsx         # Root layout with providers
├── page.tsx           # Home page
└── providers.tsx      # Context providers

components/
├── Client/            # Interactive components
├── Server/            # Server components
├── SVGComponents/     # SVG icons
└── VideoPlayer/       # Video player components

hooks/                 # Custom React hooks
├── useCursor.ts
├── useImageReveal.ts
└── useMaskImage.ts

sections/              # Page sections
├── Hero/
├── Introduction/
├── WellnessSanctuary/
└── Footer/

utils/                 # Utility functions
├── cn.ts             # Class name utility
└── lenis.ts          # Smooth scroll config
```

---

## 🚀 Performance Considerations

1. **Lazy Loading:** Components load only when needed
2. **Server Components:** Static content rendered on server
3. **Motion Values:** Efficient animation updates without re-renders
4. **Refs:** Direct DOM manipulation for performance-critical animations
5. **Spring Physics:** Optimized for 60fps animations

---

## 🎯 Key Features

### Hero Section
- Mask-based video reveal on scroll
- Custom play button with cursor tracking
- Parallax video background
- Full-screen video player

### Smooth Scrolling
- Lenis integration for momentum scrolling
- Scroll-based animation triggers
- Parallax effects throughout

### Interactive Elements
- Custom animated cursor
- Hover states with smooth transitions
- Click animations and feedback
- Touch-optimized for mobile

### Text Animations
- Directional mask reveals
- Staggered character animations
- Scroll-triggered reveals

---

## 💡 Best Practices

1. **Animation Performance:**
   - Use `transform` and `opacity` for GPU acceleration
   - Avoid animating `width`, `height`, `top`, `left` directly
   - Use `will-change` sparingly

2. **Code Organization:**
   - Separate client and server components
   - Custom hooks for reusable animation logic
   - Centralized animation variants

3. **Responsive Design:**
   - Mobile-first approach
   - Conditional rendering based on screen size
   - Simplified animations on mobile

4. **Type Safety:**
   - Full TypeScript coverage
   - Typed props and variants
   - Interface definitions for all components

---

## 🔮 Animation Timeline Example

**Hero Section Scroll:**
1. Initial state: Full-screen video with mask
2. User scrolls: Mask reveals from bottom to top (28 divisions)
3. Video parallaxes at slower rate than scroll
4. Text fades in with stagger effect
5. Next section slides up from bottom

---

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## 📝 Notes

- All animations use consistent easing curves for cohesive feel
- Mobile and desktop experiences are tailored differently
- Performance optimized with server components where possible
- Accessibility considerations built into interactive elements

---

## 🤝 Contributing

When adding new animations:
1. Use the standard easing curve: `[0.24, 0.43, 0.15, 0.97]`
2. Keep duration between 0.25s - 0.8s
3. Consider mobile performance
4. Add TypeScript types
5. Document complex animation logic

---

**Last Updated:** November 12, 2025
**Version:** 0.1.0

# Packaging Automation Landing Page

A modern, responsive landing page for a packaging automation solutions company, built with Nuxt.js 3, TypeScript, and TailwindCSS.

## Features

- **Modern Tech Stack**: Nuxt.js 3, Vue 3, TypeScript, TailwindCSS
- **Multi-language Support**: English, Bahasa Melayu, and 中文 (Chinese)
- **Animations**: Smooth scroll reveals and page transitions with Anime.js
- **Responsive Design**: Mobile-first approach with full device support
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Component-Based**: Modular UI components for easy maintenance

## Project Structure

```
frontend/
├── assets/           # Static assets (CSS, images, fonts)
│   └── css/
│       └── main.css  # Tailwind imports and custom styles
├── components/       # Vue components
│   ├── animations/   # Animation components
│   ├── layout/       # Layout components (Header, Footer)
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/           # UI components (Button, Card, Container)
├── composables/      # Vue composables (useAnimations, useSupabase)
├── i18n/            # Translation files
│   ├── en.json      # English
│   ├── ms.json      # Bahasa Melayu
│   └── zh.json      # Chinese
├── layouts/         # Nuxt layouts
│   └── default.vue  # Default layout
├── pages/           # Page components
│   └── index.vue    # Home page
├── plugins/         # Nuxt plugins
│   └── animejs.client.ts  # Anime.js plugin
├── public/          # Public static files
├── stores/          # Pinia stores
├── types/           # TypeScript type definitions
├── app.vue          # Root app component
├── nuxt.config.ts   # Nuxt configuration
├── tailwind.config.js  # TailwindCSS configuration
└── tsconfig.json    # TypeScript configuration
```

## Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

### Adding New Pages

Create a new `.vue` file in the `pages` directory:

```vue
<!-- pages/about.vue -->
<template>
  <div>
    <h1>About Us</h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us',
})
</script>
```

### Adding Translations

Edit the corresponding JSON file in the `i18n` directory:

```json
{
  "newKey": "Translation text"
}
```

Use in templates:
```vue
<template>
  <p>{{ $t('newKey') }}</p>
</template>
```

### Customizing Theme

Edit `tailwind.config.js` to customize colors, fonts, and spacing:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#your-color',
        },
      },
    },
  },
}
```

## Supabase Integration

### Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Update `.env` file:

```env
SUPABASE_URL=your_project_url
SUPABASE_KEY=your_anon_key
```

### Database Tables

The following tables should be created in Supabase:

- `blog_posts` - Blog articles
- `testimonials` - Customer testimonials
- `projects` - Project portfolio
- `products` - Product catalog
- `inquiries` - Contact form submissions
- `newsletter_subscribers` - Newsletter signups

### Using Supabase Composables

```vue
<script setup lang="ts">
const { data, loading, error, refresh } = useSupabaseData({
  table: 'blog_posts',
  limit: 3,
  orderBy: { column: 'created_at', ascending: false }
})
</script>
```

## Docker Development

### Building and Running

```bash
# Build Docker image
docker-compose -f docker-compose.dev.yml build

# Run containers
docker-compose -f docker-compose.dev.yml up

# Access the application
curl http://localhost:3000
```

## Production Deployment

### Building for Production

```bash
npm run build
```

### Environment Variables

Ensure these are set in production:

```env
NODE_ENV=production
SUPABASE_URL=your_production_url
SUPABASE_KEY=your_production_key
SITE_URL=https://your-domain.com
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see LICENSE file for details.

## Support

For support, email info@packaging-automation.com or create an issue in the repository.
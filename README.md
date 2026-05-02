# Warm Homes Grant

![App Preview](https://imgix.cosmicjs.com/fa39fd40-466d-11f1-a3ff-65bbafb72c6d-autopilot-photo-1544005313-94ddf0286df2-1777757358851.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive Next.js website for the Warm Homes Grant program, built with [Cosmic](https://www.cosmicjs.com) CMS.

## Features

- 🏠 Dynamic homepage with featured services and testimonials
- 🔧 Detailed services pages with benefits and eligibility
- ⭐ Customer testimonials with star ratings
- 📄 Dynamic information pages
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance
- 🎨 Beautiful Tailwind CSS styling

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f66c46c27d356ff5004f09&clone_repository=69f66d4cc27d356ff5004f92)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online business website with products or services, information pages, and customer testimonials.
> 
> User instructions: Warm Homes Grant"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Business". The content is managed in Cosmic CMS with the following object types: services, pages, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: Warm Homes Grant

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch services
const { objects } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

The application connects to your Cosmic bucket to fetch services, pages, and testimonials dynamically.

## Deployment Options

- Vercel (recommended)
- Netlify

<!-- README_END -->
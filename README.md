# Nicolas Efstathiou Realty

A modern, responsive real estate website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Hero Section**: Eye-catching hero with property search functionality
- **Responsive Design**: Mobile-first approach with beautiful UI
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Next.js 14**: Latest features including App Router

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
efstathiou-real-estate/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   └── Hero.tsx          # Hero section
├── public/               # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **ESLint** - Code linting

## Customization

The website is designed for Nicolas Efstathiou Realty but can be easily customized:

1. Update the company name and contact information in `components/Header.tsx`
2. Modify the hero content in `components/Hero.tsx`
3. Customize colors in `tailwind.config.js`
4. Replace the background image in the `public` folder

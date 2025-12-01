# Next.js 14 Internationalization Implementation Plan
## Adding Greek Translation with Automatic Language Detection

### Overview
This plan outlines the complete implementation of Greek translation functionality for the Nicolas Efstathiou Realty website using Next.js 14 App Router with automatic language detection and a language switcher.

---

## Phase 1: Setup and Configuration

### Step 1: Install Dependencies
```bash
# Install next-intl (recommended for Next.js 14 App Router)
npm install next-intl

# Alternative: Use built-in Next.js i18n (simpler but less features)
# No additional packages needed for built-in approach
```

### Step 2: Project Structure Setup
Create the following directory structure:
```
/
├── app/
│   ├── [locale]/           # Dynamic locale routing
│   │   ├── layout.tsx      # Locale-specific layout
│   │   ├── page.tsx        # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   └── work/
│   └── globals.css
├── components/
├── lib/
│   └── i18n.ts            # i18n configuration
├── messages/               # Translation files
│   ├── en.json
│   └── el.json
├── middleware.ts          # Language detection
└── next.config.js
```

### Step 3: Configure Next.js
Update `next.config.js`:
```javascript
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    appDir: true
  }
};

module.exports = withNextIntl(nextConfig);
```

### Step 4: Create i18n Configuration
Create `lib/i18n.ts`:
```typescript
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'el'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

### Step 5: Create Middleware for Language Detection
Create `middleware.ts`:
```typescript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'el'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Automatic locale detection
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(el|en)/:path*']
};
```

---

## Phase 2: Translation Files Setup

### Step 6: Create Translation Files

**Create `messages/en.json`:**
```json
{
  "navigation": {
    "home": "HOME",
    "about": "ABOUT", 
    "work": "OUR WORK",
    "services": "SERVICES",
    "contact": "CONTACT"
  },
  "hero": {
    "subtitle": "Premium Quality Solutions",
    "title": "EFSTATHIOU CONSTRUCTIONS",
    "tagline": "Where architectural vision meets construction excellence.",
    "cta": {
      "consultation": "FREE CONSULTATION",
      "services": "VIEW SERVICES"
    },
    "scroll": "SCROLL"
  },
  "about": {
    "title": "About EFSTATHIOU",
    "subtitle": "Two decades of architectural excellence and construction innovation across Cyprus"
  },
  "footer": {
    "company": "NICOLAS EFSTATHIOU CONSTRUCTIONS LTD",
    "description": "Creating exceptional spaces through innovative construction and architectural excellence. Setting new standards in modern living across Cyprus.",
    "quickLinks": "QUICK LINKS",
    "contact": "CONTACT",
    "location": "Nicosia, Cyprus",
    "phone": "+357 XX XXX XXX",
    "email": "info@efstathiou-constructions.com"
  }
}
```

**Create `messages/el.json`:**
```json
{
  "navigation": {
    "home": "ΑΡΧΙΚΗ",
    "about": "ΣΧΕΤΙΚΑ", 
    "work": "ΤΑ ΕΡΓΑ ΜΑΣ",
    "services": "ΥΠΗΡΕΣΙΕΣ",
    "contact": "ΕΠΙΚΟΙΝΩΝΙΑ"
  },
  "hero": {
    "subtitle": "Λύσεις Υψηλής Ποιότητας",
    "title": "ΕΦΣΤΑΘΙΟΥ ΚΑΤΑΣΚΕΥΕΣ",
    "tagline": "Όπου η αρχιτεκτονική όραση συναντά την κατασκευαστική αριστεία.",
    "cta": {
      "consultation": "ΔΩΡΕΑΝ ΣΥΜΒΟΥΛΗ",
      "services": "ΔΕΙΤΕ ΥΠΗΡΕΣΙΕΣ"
    },
    "scroll": "ΚΑΤΩ"
  },
  "about": {
    "title": "Σχετικά με την ΕΦΣΤΑΘΙΟΥ",
    "subtitle": "Δύο δεκαετίες αρχιτεκτονικής αριστείας και κατασκευαστικής καινοτομίας στην Κύπρο"
  },
  "footer": {
    "company": "ΝΙΚΟΛΑΟΣ ΕΦΣΤΑΘΙΟΥ ΚΑΤΑΣΚΕΥΕΣ ΕΠΕ",
    "description": "Δημιουργώντας εξαιρετικούς χώρους μέσω καινοτόμων κατασκευών και αρχιτεκτονικής αριστείας. Ορίζοντας νέα πρότυπα στη σύγχρονη διαβίωση στην Κύπρο.",
    "quickLinks": "ΓΡΗΓΟΡΟΙ ΣΥΝΔΕΣΜΟΙ",
    "contact": "ΕΠΙΚΟΙΝΩΝΙΑ",
    "location": "Λευκωσία, Κύπρος",
    "phone": "+357 XX XXX XXX",
    "email": "info@efstathiou-constructions.com"
  }
}
```

---

## Phase 3: Component Updates

### Step 7: Create Language Switcher Component
Create `components/LanguageSwitcher.tsx`:
```typescript
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-medium tracking-wide transition-colors ${
          locale === 'en' 
            ? 'text-white border-b-2 border-white' 
            : 'text-white/70 hover:text-white hover:border-b-2 hover:border-white/50'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <span className="text-white/50">|</span>
      <motion.button
        onClick={() => changeLanguage('el')}
        className={`text-sm font-medium tracking-wide transition-colors ${
          locale === 'el' 
            ? 'text-white border-b-2 border-white' 
            : 'text-white/70 hover:text-white hover:border-b-2 hover:border-white/50'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ΕΛ
      </motion.button>
    </div>
  );
}
```

### Step 8: Update Header Component
Modify `components/Header.tsx` to include the language switcher:

**Desktop Navigation:**
- Add LanguageSwitcher component after the navigation links
- Position it on the right side of the header

**Mobile Navigation (Hamburger Menu):**
- Add LanguageSwitcher inside the mobile menu
- Position it at the bottom of the mobile menu items

### Step 9: Create Locale-Specific Layout
Create `app/[locale]/layout.tsx`:
```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'el'];

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

---

## Phase 4: Homepage Translation Implementation

### Step 10: Update Hero Component
Modify `components/Hero.tsx`:
```typescript
'use client';

import { useTranslations } from 'next-intl';
// ... existing imports

export default function Hero() {
  const t = useTranslations('hero');
  // ... existing state and effects

  return (
    <section id="home" className="relative overflow-hidden h-screen">
      {/* ... existing video background and overlay */}
      
      <div className="relative h-full flex flex-col items-center justify-center z-20 px-4 sm:px-6 md:px-8">
        <motion.div 
          className="text-center max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Secondary Subtitle */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-light tracking-[0.15em] uppercase"
            variants={subtitleVariants}
          >
            {t('subtitle')}
          </motion.p>
          
          {/* Main Title */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-tight sm:leading-tight md:leading-none tracking-wide md:tracking-[0.05em] lg:tracking-[0.08em]"
            variants={titleVariants}
          >
            <span className="font-light block sm:inline">EFSTATHIOU</span>
            <span className="font-bold block sm:inline"> CONSTRUCTIONS</span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-2"
            variants={taglineVariants}
          >
            {t('tagline')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16"
            variants={buttonsVariants}
          >
            <motion.button 
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-500 w-full max-w-[240px] sm:max-w-[280px] md:min-w-[200px] md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsContactPopupOpen(true)}
            >
              <span className="relative z-10">{t('cta.consultation')}</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.button>
            
            <Link href="/services">
              <motion.button 
                className="text-white text-xs sm:text-sm md:text-sm font-medium tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors duration-300 hover:text-white/80"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {t('cta.services')}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col items-center text-white/70 group cursor-pointer">
          <motion.span 
            className="text-xs font-light tracking-wider mb-2 group-hover:text-white transition-colors duration-300"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('scroll')}
          </motion.span>
          {/* ... existing scroll indicator */}
        </div>
      </motion.div>

      {/* ... existing ContactFormPopup */}
    </section>
  );
}
```

### Step 11: Update About Section
Modify `components/AboutSection.tsx` to use translations:
```typescript
'use client';

import { useTranslations } from 'next-intl';
// ... existing imports

export default function AboutSection() {
  const t = useTranslations('about');
  // ... existing refs and animations

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
        {/* ... rest of component */}
      </div>
    </section>
  );
}
```

### Step 12: Update Footer Component
Modify `components/Footer.tsx` to use translations:
```typescript
'use client';

import { useTranslations } from 'next-intl';
// ... existing imports

export default function Footer() {
  const t = useTranslations('footer');
  
  return (
    <footer className="bg-[#001a1f] text-white py-16">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L20 9V21H15V14H9V21H4V9L12 3M12 5.69L6 10.19V19H7V12H17V19H18V10.19L12 5.69Z"/>
              </svg>
              <div className="text-white font-light tracking-wider">
                <div className="text-sm">NICOLAS EFSTATHIOU</div>
                <div className="text-lg font-medium">CONSTRUCTIONS LTD</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed font-light max-w-md">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors font-light">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors font-light">About</Link></li>
              <li><Link href="/work" className="text-white/80 hover:text-white transition-colors font-light">Our Work</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors font-light">Services</Link></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">
              {t('contact')}
            </h3>
            <div className="space-y-3">
              <p className="text-white/80 font-light">
                {t('location')}
              </p>
              <p className="text-white/80 font-light">
                {t('phone')}
              </p>
              <p className="text-white/80 font-light">
                {t('email')}
              </p>
            </div>
          </div>
        </div>
        {/* ... rest of footer */}
      </div>
    </footer>
  );
}
```

---

## Phase 5: Testing and Validation

### Step 13: Test Language Switching
1. **Desktop Testing:**
   - Verify language switcher appears in header
   - Test switching between EN/ΕΛ
   - Confirm URL changes correctly (`/en/` ↔ `/el/`)

2. **Mobile Testing:**
   - Verify language switcher appears in hamburger menu
   - Test switching functionality on mobile
   - Confirm responsive behavior

### Step 14: Test Automatic Detection
1. **Browser Language Detection:**
   - Set browser language to Greek
   - Visit site and verify automatic redirect to `/el/`
   - Set browser language to English
   - Visit site and verify automatic redirect to `/en/`

2. **Fallback Testing:**
   - Test with unsupported languages
   - Verify fallback to English (`/en/`)

### Step 15: Content Validation
1. **Translation Accuracy:**
   - Review all Greek translations
   - Ensure proper Greek typography
   - Test text length and layout

2. **SEO Testing:**
   - Verify hreflang tags
   - Test meta descriptions in both languages
   - Check sitemap generation

---

## Phase 6: Additional Features (Optional)

### Step 16: Advanced Features
1. **Geolocation Detection:**
   - Add IP-based location detection
   - Redirect Cypriot users to Greek by default

2. **User Preference Storage:**
   - Save language preference in localStorage
   - Remember user choice across sessions

3. **Loading States:**
   - Add loading indicators during language switching
   - Smooth transitions between languages

---

## Implementation Timeline

- **Phase 1-2 (Setup):** 2-3 hours
- **Phase 3 (Components):** 3-4 hours  
- **Phase 4 (Homepage):** 4-5 hours
- **Phase 5 (Testing):** 2-3 hours
- **Total Estimated Time:** 11-15 hours

---

## Notes

- **next-intl** is recommended over built-in Next.js i18n for App Router
- All existing animations and styling will be preserved
- The implementation maintains the current design aesthetic
- Mobile-first approach ensures responsive language switching
- Automatic detection enhances user experience without being intrusive

This plan provides a complete roadmap for implementing Greek translation with automatic language detection while maintaining the existing design and functionality of the website.








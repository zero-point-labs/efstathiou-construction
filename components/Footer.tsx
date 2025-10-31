'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="bg-[#001a1f] text-white py-16">
      <div className="container mx-auto max-w-7xl px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/">
                <Image
                  src="/For-Black-Tshirt.png"
                  alt="Nicolas Efstathiou Constructions Ltd"
                  width={200}
                  height={80}
                  className="h-12 sm:h-16 md:h-20 w-auto"
                  priority
                />
              </Link>
            </div>
            <p className="text-white/80 leading-relaxed font-light max-w-md greek-text">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide greek-text">{t('quickLinks').replace(t('quickLinks_bold'), '')} <span className="font-bold">{t('quickLinks_bold')}</span></h3>
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
            <h3 className="text-lg font-medium mb-6 tracking-wide greek-text">{t('contact').replace(t('contact_bold'), '')} <span className="font-bold">{t('contact_bold')}</span></h3>
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

        {/* Bottom Bar */}
        <div className="border-t border-[#00343d]/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-light">
            © 2024 Nicolas Efstathiou Constructions Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-light">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}


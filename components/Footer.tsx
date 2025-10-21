'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
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
            <p className="text-gray-300 leading-relaxed font-light max-w-md">
              Creating exceptional spaces through innovative construction and architectural excellence. 
              Setting new standards in modern living across Cyprus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors font-light">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors font-light">About</Link></li>
              <li><Link href="/work" className="text-gray-300 hover:text-white transition-colors font-light">Our Work</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors font-light">Services</Link></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">CONTACT</h3>
            <div className="space-y-3">
              <p className="text-gray-300 font-light">
                Nicosia, Cyprus
              </p>
              <p className="text-gray-300 font-light">
                +357 XX XXX XXX
              </p>
              <p className="text-gray-300 font-light">
                info@efstathiou-constructions.com
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-light">
            © 2024 Nicolas Efstathiou Constructions Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}


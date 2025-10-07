'use client'

export default function PropertiesSection() {
  return (
    <section className="bg-gray-50 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            FEATURED PROPERTIES
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exceptional homes that redefine modern living. Each property is carefully selected for its architectural excellence and premium location.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Property 1 */}
          <div className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white text-lg font-light">Property Image</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Modern Luxury Villa</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Contemporary design meets comfort in this stunning 4-bedroom villa featuring floor-to-ceiling windows, premium finishes, and a private garden.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-light text-gray-900">€850,000</span>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Property 2 */}
          <div className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white text-lg font-light">Property Image</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Penthouse Apartment</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sophisticated urban living with panoramic city views. This 3-bedroom penthouse offers luxury amenities and prime downtown location.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-light text-gray-900">€1,200,000</span>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-12 py-4 bg-gray-900 text-white text-lg font-light tracking-wide hover:bg-gray-800 transition-colors duration-300">
            VIEW ALL PROPERTIES
          </button>
        </div>

      </div>
    </section>
  )
}

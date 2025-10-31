// Shared data for projects and services across the application

export const featuredProjects = [
  {
    id: 'luxury-villa-1',
    title: 'LUXURY VILLA',
    subtitle: 'Ultra-Modern Residential',
    description: 'A stunning contemporary villa featuring floor-to-ceiling windows, premium finishes, and innovative architectural design that seamlessly blends indoor and outdoor living.',
    image: '/DJI_20251010165919_0078_D.JPG',
    features: ['4 Bedrooms', 'Premium Materials', 'Smart Home Integration'],
    year: '2023',
    location: 'Limassol, Cyprus',
    type: 'Residential',
    category: 'construction'
  },
  {
    id: 'commercial-office',
    title: 'MOUNTAIN RETREAT MITSERO',
    subtitle: 'Quickly Built Mountain Home',
    description: 'A practical and efficiently constructed mountain house in Mitsero, completed in just two months. This cozy retreat features a durable metal roof, spacious veranda, and a design that integrates seamlessly with its natural woodland surroundings.',
    image: '/DJI_20251002103154_0038_D.JPG',
    features: ['Rapid Construction', 'Mountain Location', 'Functional Design', 'Spacious Veranda', 'Durable Metal Roof'],
    year: '2023',
    location: 'Mitsero, Cyprus',
    type: 'Residential',
    category: 'construction'
  }
]

export const services = [
  {
    id: 'construction',
    title: 'Construction',
    subtitle: 'From Foundation to Finish',
    description: 'We specialize in comprehensive construction services, building exceptional properties from the ground up. Our team handles everything from initial planning and permits to final construction and quality assurance.',
    features: [
      'Custom Home Construction',
      'Commercial Buildings',
      'Project Management',
      'Quality Control',
      'Timeline Management',
      'Budget Optimization'
    ],
    image: '/Construction.jpg',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    subtitle: 'Transform Your Space',
    description: 'Breathe new life into existing properties with our comprehensive renovation services. We transform outdated spaces into modern, functional environments while preserving the character and charm of your property.',
    features: [
      'Kitchen Renovations',
      'Bathroom Remodeling',
      'Interior Design',
      'Structural Updates',
      'Energy Efficiency',
      'Modern Amenities'
    ],
    image: '/Renovation.png',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    id: 'expansion',
    title: 'Expansion',
    subtitle: 'Grow Your Property',
    description: 'Expand your living or working space with our expert expansion services. Whether adding new rooms, extending existing areas, or creating additional floors, we help you maximize your property\'s potential.',
    features: [
      'Room Additions',
      'Floor Extensions',
      'Outdoor Living Spaces',
      'Commercial Expansions',
      'Structural Engineering',
      'Permit Management'
    ],
    image: '/Expansion.jpg',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
  },
  {
    id: 'restoration',
    title: 'Restoration',
    subtitle: 'Preserve Heritage',
    description: 'Restore historic properties to their former glory while integrating modern functionality. Our restoration experts combine traditional craftsmanship with contemporary techniques to preserve Cyprus\'s architectural heritage.',
    features: [
      'Historic Preservation',
      'Heritage Restoration',
      'Traditional Craftsmanship',
      'Modern Integration',
      'Cultural Compliance',
      'Authentic Materials'
    ],
    image: '/Restoration.jpg',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  }
]

// Helper functions to get specific data
export const getProjectById = (id: string) => {
  return featuredProjects.find(project => project.id === id)
}

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id)
}

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    destination: 'Cataratas del Iguazú',
    image: 'https://i.pravatar.cc/150?img=1',
    text: 'Una experiencia inolvidable. El acompañamiento de principio a fin fue impecable, siempre atentos a cada detalle. No fue solo un viaje, fue vivir el destino de verdad.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Juan Pérez',
    destination: 'Patagonia',
    image: 'https://i.pravatar.cc/150?img=2',
    text: 'Lo mejor fue sentir que realmente les importaba mi viaje. Cada recomendación fue acertada y la atención humana hizo toda la diferencia. Volveré sin dudas.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Laura Martínez',
    destination: 'Salta',
    image: 'https://i.pravatar.cc/150?img=3',
    text: 'Quilimbay convirtió lo que podría haber sido un simple paquete turístico en una experiencia personalizada y mágica. La atención post-viaje también fue excelente.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Carlos Rodríguez',
    destination: 'Europa',
    image: 'https://i.pravatar.cc/150?img=4',
    text: 'Viajé con mi familia y todo salió perfecto. Nos asesoraron en cada paso, respondieron todas nuestras dudas y nos hicieron sentir acompañados en todo momento.',
    stars: 5,
  },
  {
    id: 5,
    name: 'Ana Silva',
    destination: 'Caribe',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'El mejor viaje de mi vida. No solo organizaron todo impecablemente, sino que se nota que aman lo que hacen. La experiencia fue mucho más de lo que esperaba.',
    stars: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="relative">
      {/* Desktop: 3 cards */}
      <div className="hidden md:block">
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-3 gap-6 flex-1">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: 1 card */}
      <div className="md:hidden">
        <div className="relative">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gold w-6' : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <a
            href="https://www.google.com/search?q=quilimbay+turismo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 border border-gold/30 text-white py-3 px-6 rounded-md hover:border-gold hover:text-gold transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver reseñas en Google
          </a>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-navy-lighter border border-gold/10 rounded-lg p-6 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-300 italic mb-6 flex-1">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-gold/30"
        />
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-gold text-sm">{testimonial.destination}</p>
        </div>
      </div>
    </div>
  );
}

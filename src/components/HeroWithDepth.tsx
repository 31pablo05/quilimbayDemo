import { useEffect, useState } from 'react';

export default function HeroWithDepth() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(240, 180, 41, 0.08), transparent), linear-gradient(180deg, #0a1420 0%, #0d1b2a 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle glow behind cards area */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(240, 180, 41, 0.3), transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-[44%_56%] gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <div 
            className="space-y-6 lg:space-y-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                Viajes hechos para vos
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 
                className="font-serif font-bold leading-[0.95] text-shadow-lg"
                style={{
                  fontSize: 'clamp(3rem, 5.3vw, 6.5rem)',
                }}
              >
                <span className="block text-white">Viajá acompañado,</span>
                <span className="block text-gold">no solo</span>
                <span className="block text-gold">transportado</span>
              </h1>
              
              {/* Decorative line */}
              <div className="flex items-center gap-2 pt-2">
                <div 
                  className="h-[2px] w-24 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #f0b429, transparent)',
                    boxShadow: '0 0 10px rgba(240, 180, 41, 0.5)',
                  }}
                />
                <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(240,180,41,0.6)]" />
              </div>
            </div>

            {/* Description */}
            <p 
              className="text-gray-300 leading-relaxed max-w-[540px]"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', lineHeight: '1.65' }}
            >
              En Quilimbay no vendemos paquetes, construimos experiencias. Te acompañamos antes, durante y después de tu viaje, porque sabemos que viajar bien es mucho más que llegar a un lugar.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/5492804581234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy px-8 py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 group hover:-translate-y-0.5 w-full sm:w-auto btn-shimmer btn-pulse overflow-hidden relative"
              style={{
                boxShadow: '0 8px 24px rgba(240, 180, 41, 0.35), 0 0 20px rgba(240, 180, 41, 0.15)',
              }}
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Consultanos tu viaje</span>
            </a>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {[10, 11, 12, 13].map((num) => (
                  <img 
                    key={num}
                    src={`https://i.pravatar.cc/48?img=${num}`}
                    alt="Viajero"
                    className="w-11 h-11 rounded-full border-[3px] border-navy shadow-lg"
                  />
                ))}
              </div>
              
              {/* Text + Stars */}
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm flex items-center gap-1.5">
                  Más de 1.000 viajeros ya viajaron con nosotros
                  <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Photo Cards */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[660px]">
            {/* Cards Container */}
            <div className="relative w-full h-full">
              
              {/* Card 1 - Patagonia (Back Left) */}
              <div 
                className="absolute left-0 lg:left-4 top-16 group"
                style={{
                  width: 'clamp(240px, 40vw, 300px)',
                  height: 'clamp(380px, 60vw, 480px)',
                  transform: 'rotate(-5deg)',
                  zIndex: 1,
                  opacity: isLoaded ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out 0.2s',
                }}
              >
                <div 
                  className="relative w-full h-full rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:z-30"
                  style={{
                    border: '1.5px solid rgba(245, 180, 40, 0.7)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* Dark overlay for text contrast at top */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10" />
                  
                  <img 
                    src="/imagenes/avistajeball.jpg"
                    alt="Avistaje de Ballenas en Patagonia"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Label */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span 
                      className="text-white text-xs font-semibold uppercase tracking-wider"
                      style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)' }}
                    >
                      Patagonia
                    </span>
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(240, 180, 41, 0.15)' }} />
                </div>
              </div>

              {/* Card 2 - Valle del Té (Front Center) */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-4 group"
                style={{
                  width: 'clamp(260px, 42vw, 320px)',
                  height: 'clamp(400px, 65vw, 500px)',
                  transform: 'translateX(-50%) rotate(2deg)',
                  zIndex: 20,
                  opacity: isLoaded ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out 0.4s',
                }}
              >
                <div 
                  className="relative w-full h-full rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:z-40"
                  style={{
                    border: '1.5px solid rgba(245, 180, 40, 0.8)',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Dark overlay for text contrast at top */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10" />
                  
                  <img 
                    src="/imagenes/tegales.jpg"
                    alt="Valle del Té Galés"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Label */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span 
                      className="text-white text-xs font-semibold uppercase tracking-wider"
                      style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)' }}
                    >
                      Valle del Té
                    </span>
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(240, 180, 41, 0.2)' }} />
                </div>
              </div>

              {/* Card 3 - Punta Tombo (Back Right) */}
              <div 
                className="absolute right-0 lg:right-4 top-20 group"
                style={{
                  width: 'clamp(240px, 40vw, 300px)',
                  height: 'clamp(380px, 60vw, 480px)',
                  transform: 'rotate(6deg)',
                  zIndex: 1,
                  opacity: isLoaded ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out 0.6s',
                }}
              >
                <div 
                  className="relative w-full h-full rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:z-30"
                  style={{
                    border: '1.5px solid rgba(245, 180, 40, 0.7)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* Dark overlay for text contrast at top */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10" />
                  
                  <img 
                    src="/imagenes/puntatombo.jpg"
                    alt="Punta Tombo - Pingüinos"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Label */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span 
                      className="text-white text-xs font-semibold uppercase tracking-wider"
                      style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)' }}
                    >
                      Punta Tombo
                    </span>
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(240, 180, 41, 0.15)' }} />
                </div>
              </div>

              {/* Floating Badge 1 - Experiencias personalizadas */}
              <div 
                className="absolute left-0 bottom-12 hidden lg:block"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 1s',
                  zIndex: 25,
                }}
              >
                <div 
                  className="rounded-2xl p-4 backdrop-blur-sm"
                  style={{
                    background: 'rgba(10, 20, 35, 0.78)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    maxWidth: '240px',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-0.5">Experiencias personalizadas</h4>
                      <p className="text-gray-400 text-xs">Diseñadas a tu medida</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Acompañamiento */}
              <div 
                className="absolute right-0 bottom-24 hidden lg:block"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 1.2s',
                  zIndex: 25,
                }}
              >
                <div 
                  className="rounded-2xl p-4 backdrop-blur-sm"
                  style={{
                    background: 'rgba(10, 20, 35, 0.78)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    maxWidth: '240px',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-0.5">Acompañamiento en cada etapa</h4>
                      <p className="text-gray-400 text-xs">Antes, durante y después de tu viaje</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Alternative Layout (< 768px) */}
            <div className="lg:hidden relative w-full space-y-4">
              {/* Main card - Patagonia */}
              <div 
                className="w-full h-64 rounded-3xl overflow-hidden"
                style={{
                  border: '1.5px solid rgba(245, 180, 40, 0.7)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10" />
                <img 
                  src="/imagenes/avistajeball.jpg"
                  alt="Patagonia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)' }}>
                    Patagonia
                  </span>
                </div>
              </div>

              {/* Two smaller cards below */}
              <div className="grid grid-cols-2 gap-4">
                {/* Valle del Té */}
                <div 
                  className="relative h-48 rounded-2xl overflow-hidden"
                  style={{
                    border: '1.5px solid rgba(245, 180, 40, 0.7)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-10" />
                  <img 
                    src="/imagenes/tegales.jpg"
                    alt="Valle del Té"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-[10px] font-semibold uppercase tracking-wider" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)' }}>
                      Valle del Té
                    </span>
                  </div>
                </div>

                {/* Punta Tombo */}
                <div 
                  className="relative h-48 rounded-2xl overflow-hidden"
                  style={{
                    border: '1.5px solid rgba(245, 180, 40, 0.7)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-10" />
                  <img 
                    src="/imagenes/puntatombo.jpg"
                    alt="Punta Tombo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-[10px] font-semibold uppercase tracking-wider" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)' }}>
                      Punta Tombo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

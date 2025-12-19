import React, { useState, useEffect, useRef } from 'react';
import { Code, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [particles, setParticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Generate initial particles
    const initialParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" ref={containerRef}>
      {/* Rich Layered Background */}
      <div className="fixed inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
        
        {/* Multiple Grid Layers */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }} />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)',
        }} />

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)',
        }} />

        {/* Radial Gradients - Multiple Layers */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            animation: 'slowFloat 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            animation: 'slowFloat 25s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            animation: 'slowFloat 30s ease-in-out infinite'
          }}
        />

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }} />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }} />

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px)',
        }} />
      </div>

      {/* Minimal Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `particleFloat ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.15,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image - Clean & Minimal */}
          <div className="relative w-56 h-56 mx-auto mb-10">
            {/* Profile Image Container */}
            <div 
              className="w-full h-full rounded-full overflow-hidden bg-gray-900 shadow-2xl"
              style={{
                animation: 'subtleFloat 6s ease-in-out infinite',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
            >
              <img
                src="/images/profile.jpeg"
                alt="Ivan"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
            </div>
          </div>

          {/* Name - Clean Typography */}
          <h1 
            className="text-5xl md:text-6xl font-semibold tracking-wide mb-4 text-white"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            Ivan
          </h1>

          {/* Title with Icons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Terminal className="w-5 h-5 text-gray-400" />
            <p className="text-lg md:text-xl tracking-widest text-gray-400 uppercase font-light">
              Fullstack Developer
            </p>
            <Code className="w-5 h-5 text-gray-400" />
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed px-4">
            Specializing in <span className="text-gray-300">Backend Development</span> and{' '}
            <span className="text-gray-300">RESTful API</span> architecture. 
            Building scalable, efficient solutions that power modern web applications.
          </p>

          {/* Social Links - Minimal & Clean */}
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://tiktok.com/@natthanaell_"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-20 h-20 border border-white/40 rounded-2xl flex items-center justify-center backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-white/80 hover:bg-white/10">
                <svg className="w-10 h-10 fill-white/70 transition-all duration-300 group-hover:fill-white group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
            </a>

            <a
              href="https://instagram.com/theonlynael"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-20 h-20 border border-white/40 rounded-2xl flex items-center justify-center backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-white/80 hover:bg-white/10">
                <svg className="w-10 h-10 stroke-white/70 fill-none stroke-2 transition-all duration-300 group-hover:stroke-white group-hover:scale-110" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" className="fill-white/70 group-hover:fill-white"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-gray-600 text-sm tracking-wider">
            <p>Available for freelance opportunities</p>
          </div>
        </div>
      </div>

      {/* Minimal CSS Animations */}
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(-20vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slowFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

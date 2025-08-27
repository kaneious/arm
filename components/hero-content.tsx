"use client"

export default function HeroContent() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'NeueMachina-Bold';
          src: url('/fonts/NeueMachina-Regular.otf') format('opentype');
          font-weight: 800;
          font-display: swap;
        }
        @font-face {
          font-family: 'NeueMachina-Reg';
          src: url('/fonts/NeueMachina-Light.otf') format('opentype');
          font-weight: 400;
          font-display: swap;
        }
      `}</style>

      <main className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <h1
            className="text-8xl md:text-9xl tracking-tight text-white mb-8"
            style={{ fontFamily: "NeueMachina-Bold, monospace" }}
          >
            <span className="text-white">ex1t.cc</span>
          </h1>

          <p
            className="text-sm text-white/60 mb-8 leading-relaxed max-w-md mx-auto"
            style={{ fontFamily: "NeueMachina-Reg, monospace" }}
          >
            Data science solutions and analytics platform
          </p>
        </div>
      </main>
    </>
  )
}

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm text-white/80">Next‑gen biomedical AI silicon</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            AURUM Cardia: The Luxury Standard of AI Heartcare Chips
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Ultra-secure, on-device intelligence that senses, predicts, and protects. Designed for implants and wearables, crafted for life‑critical precision.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Request Private Demo
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Explore Capabilities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

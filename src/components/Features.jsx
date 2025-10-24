import { Cpu, Shield, Activity, Heart, Zap, Battery } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Heart,
    title: 'Cardiac‑Grade Signal IQ',
    desc: 'Real‑time ECG/PPG analysis with sub‑millisecond latency and adaptive noise suppression for pristine waveforms.'
  },
  {
    icon: Shield,
    title: 'Clinical Security',
    desc: 'End‑to‑end encryption, secure enclaves, and post‑quantum ready primitives for protected patient data.'
  },
  {
    icon: Cpu,
    title: 'Edge AI Engine',
    desc: 'Optimized neural accelerators enable arrhythmia detection and risk scoring directly on device.'
  },
  {
    icon: Activity,
    title: 'Predictive Insights',
    desc: 'Continuous monitoring with early‑warning models for AFib, VT/VF, and ischemia indicators.'
  },
  {
    icon: Zap,
    title: 'Ultra‑Low Power',
    desc: 'Dynamic voltage/frequency scaling and event‑driven compute deliver luxury performance without drain.'
  },
  {
    icon: Battery,
    title: 'Weekslong Endurance',
    desc: 'Intelligent duty cycling and co‑processors extend wear time for implants and premium wearables.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Crafted for life. Engineered for luxury.</h2>
        <p className="mt-4 text-white/70">
          Every gate, every trace—meticulously designed to serve cardiology with elegance and uncompromising reliability.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
              <it.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

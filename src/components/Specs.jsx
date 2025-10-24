export default function Specs() {
  const specs = [
    { k: 'Process Node', v: '4 nm FinFET, biomedical‑grade reliability screening' },
    { k: 'AI Throughput', v: 'Up to 12 TOPS @ 0.6 V (INT8), mixed‑precision support' },
    { k: 'Analog Front‑End', v: '4‑ch ECG/PPG, 24‑bit ADC, 120 dB dynamic range' },
    { k: 'Latency', v: '<1 ms end‑to‑end arrhythmia detection pipeline' },
    { k: 'Security', v: 'TEE + Secure Element, PQC‑ready KEMs, secure boot, attestation' },
    { k: 'Power', v: 'Sub‑mW idle, 8.2 mW typical inference, DVFS + power islands' },
    { k: 'Memory', v: '6 MB on‑chip SRAM, LPDDR5/LPDDR4x support' },
    { k: 'I/O', v: 'BLE 5.4, UWB, SPI/I2C, MIPI I3C, USB‑C alt modes' },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-6 sm:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-white">Technical Specifications</h3>
            <p className="mt-2 max-w-2xl text-white/70">Precision silicon for continuous cardiac analytics and life‑critical AI at the edge.</p>
          </div>
          <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10">
            Download Whitepaper
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs uppercase tracking-wider text-white/50">{s.k}</div>
              <div className="mt-2 text-base text-white">{s.v}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/50">
          For investigational use only. Not a substitute for professional medical advice. Regulatory approvals pending.
        </p>
      </div>
    </section>
  );
}

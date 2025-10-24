export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/10 via-white/5 to-blue-500/10 p-10 text-center backdrop-blur">
        <h3 className="text-3xl font-semibold text-white">Partner with AURUM Cardia</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Collaborate on bespoke integrations for implants, premium wearables, and clinical devices. Enterprise NDAs and private eval kits available.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:partnerships@aurum.care"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Contact Partnerships
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Join Early Access
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm text-white/60">Manufacturing</div>
            <div className="mt-1 text-white">Tier‑1 Foundry, ISO 13485 supply chain</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm text-white/60">Compliance</div>
            <div className="mt-1 text-white">IEC 60601, ISO 27001, GDPR/HIPAA alignment</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm text-white/60">Support</div>
            <div className="mt-1 text-white">24/7 incident response, on‑site enablement</div>
          </div>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
        <span>© {new Date().getFullYear()} AURUM Cardia</span>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Security</a>
        </div>
      </footer>
    </section>
  );
}

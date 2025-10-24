import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <Hero />
      <main>
        <Features />
        <Specs />
        <CTA />
      </main>
    </div>
  );
}

import { 
  Droplets, 
  Globe, 
  Factory, 
  Handshake, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Target,
  BarChart,
  Ship
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

export default function ServicesPage() {
  const services = [
    {
      title: 'Upstream Exploration',
      desc: 'We leverage advanced geological surveys and seismic data to identify and extract hydrocarbon reserves efficiently.',
      icon: Droplets,
      bg: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-blue-600'
    },
    {
      title: 'Refining & Processing',
      desc: 'Our state-of-the-art refining facilities process crude oil into high-quality petroleum products meeting international standards.',
      icon: Factory,
      bg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-accent'
    },
    {
      title: 'Downstream Distribution',
      desc: 'A robust logistics network ensures the reliable supply of energy products to industrial and retail consumers.',
      icon: Globe,
      bg: 'https://images.unsplash.com/photo-1586528116311-ad86d7c71107?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-green-600'
    },
    {
      title: 'Strategic Partnerships',
      desc: 'Collaborating with international energy majors to enhance our operational capabilities and foster knowledge transfer.',
      icon: Handshake,
      bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2048&auto=format&fit=crop',
      color: 'bg-purple-600'
    },
    {
      title: 'Renewable Integration',
      desc: 'Investing in the future with solar and gas-to-power technologies to diversify our portfolio and reduce carbon footprint.',
      icon: Zap,
      bg: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-yellow-500'
    },
    {
      title: 'HSE Consultancy',
      desc: 'Expertise in Health, Safety, and Environment to ensure compliance and best practices across the industry.',
      icon: ShieldCheck,
      bg: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-red-600'
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Simple Premium Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/20 text-accent font-black text-xs uppercase tracking-[0.3em] mb-8">
            World-Class Operations
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering excellence across the entire energy value chain through innovation, safety, and reliability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-50 bg-gray-50">
                {/* Bg Image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${service.bg}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent z-10" />
                
                <div className="absolute inset-0 p-12 z-20 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl`}>
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">{service.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  <Link href={`/services#contact`} className="inline-flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Excellence</div>
                <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1]">Unwavering Commitment to <span className="text-accent underline decoration-primary/10 underline-offset-8">Safety</span>.</h2>
                <p className="text-gray-600 text-xl mb-12 leading-relaxed">
                  At Prinz Oil, safety is not just a policy; it is our core value. We maintain a zero-incident culture across all our operations worldwide.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-accent shrink-0">
                         <ShieldCheck size={24} />
                      </div>
                      <div>
                         <h4 className="font-black text-primary mb-1">Total Compliance</h4>
                         <p className="text-gray-500 text-sm">Adhering to ISO 45001 & 14001 standards.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-accent shrink-0">
                         <BarChart size={24} />
                      </div>
                      <div>
                         <h4 className="font-black text-primary mb-1">Data Driven</h4>
                         <p className="text-gray-500 text-sm">Real-time monitoring of all field operations.</p>
                      </div>
                   </div>
                </div>
                
                <Link href="/contact">
                   <Button size="lg" className="bg-primary text-white border-none px-12 py-8 text-xl font-black shadow-2xl shadow-primary/20">
                     Partner With Us
                   </Button>
                </Link>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1596706067679-c591e1d3e89a?q=80&w=1974&auto=format&fit=crop"
                    alt="Safety Commitment"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  {/* Floating stats card */}
                  <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50">
                    <div className="text-5xl font-black text-primary mb-1">0</div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Incidents in 2025</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}


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
      title: 'Retail Fuel Supply',
      desc: 'We supply directly to our fuel stations and station owners for retail sales, ensuring consistent availability of quality products.',
      icon: Droplets,
      bg: 'https://images.unsplash.com/photo-1545262810-77515befe149?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-blue-600'
    },
    {
      title: 'Industrial Supply',
      desc: 'We supply to manufacturing industries with valid NMDPRA storage licenses, supporting their operations with reliable petroleum products.',
      icon: Factory,
      bg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-accent'
    },
    {
      title: 'Oil & Gas Supply',
      desc: 'We supply refined petroleum products to oil and gas companies, meeting their operational requirements with consistency.',
      icon: Globe,
      bg: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-green-600'
    },
    {
      title: 'Fleet & Logistics',
      desc: 'Our various capacity trucks are fully equipped with safety equipment and materials for secure and timely product delivery.',
      icon: Ship,
      bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2048&auto=format&fit=crop',
      color: 'bg-purple-600'
    },
    {
      title: 'NMDPRA Compliance',
      desc: 'We ensure all our clients have valid storage licenses and are in full compliance with NMDPRA regulations before delivery.',
      icon: ShieldCheck,
      bg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-red-600'
    },
    {
      title: 'Regional Distribution',
      desc: 'Our coverage includes all major cities in the South-South and South-East regions of Nigeria, reaching key markets reliably.',
      icon: Target,
      bg: '/images/logistics.jpg',
      color: 'bg-yellow-500'
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            What We Do
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl font-normal leading-relaxed">
            Distributing AGO, PMS, and HHK reliably to fuel stations, industries, and oil & gas companies across Nigeria.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-lg border border-gray-50 bg-gray-50">
                {/* Bg Image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${service.bg}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent z-10" />
                
                <div className="absolute inset-0 p-12 z-20 flex flex-col justify-end">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl`}>
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">{service.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href={`/services#contact`} className="inline-flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest">
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
                <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1]">Unwavering Commitment to <span className="text-accent underline decoration-primary/10 underline-offset-8">Compliance</span>.</h2>
                <p className="text-gray-600 text-xl mb-12 leading-relaxed">
                  At Prinz-Oil, we ensure that our clients have valid storage licenses for the specific products being delivered to them and are in full compliance with NMDPRA regulations.
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
                    src="/images/logistics.jpg"
                    alt="Safety Commitment"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}


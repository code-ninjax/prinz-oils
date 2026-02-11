import Image from 'next/image';
import { ShieldCheck, Target, Heart, Award, Zap, Users, Globe } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Simple Premium Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/20 text-accent font-black text-xs uppercase tracking-[0.3em] mb-8">
            Discover Our Legacy
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Prinz Oil</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
            A Nigerian company registered with the Corporate Affairs Commission, specializing in petroleum products distribution.
          </p>
        </div>
      </section>

      {/* Mission, Vision & Impact */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative flex flex-col gap-8">
                <div className="bg-primary p-12 rounded-[2.5rem] shadow-2xl border border-white/5 transform hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 shadow-inner shadow-white/5">
                    <Target size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-6">Our Mission</h2>
                  <p className="text-white/70 text-lg leading-relaxed font-medium">
                    To distribute and market refined petroleum products (AGO, PMS, and HHK) efficiently and reliably, ensuring compliance with NMDPRA standards while serving fuel stations, industries, and oil & gas companies across Nigeria.
                  </p>
                </div>
                
                <div className="bg-primary p-12 rounded-[2.5rem] shadow-2xl border border-white/5 transform hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                    <Zap size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-6">Our Vision</h2>
                  <p className="text-white/80 text-lg leading-relaxed font-medium">
                    To be the leading distributor and marketer of refined petroleum products in the South-South and South-East regions of Nigeria, recognized for reliability, professionalism, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl group border-[12px] border-white">
              <Image 
                src="https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=2070&auto=format&fit=crop"
                alt="Energy Infrastructure"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="text-accent font-black tracking-widest uppercase text-xs mb-2">Impact</div>
                <h4 className="text-3xl font-black tracking-tighter">Empowering Local Communities</h4>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 text-center">Our Values</div>
            <h3 className="text-4xl md:text-7xl font-black text-primary mb-12 leading-[1.1] text-center tracking-tighter">The Core of Our <span className="text-accent">Success</span>.</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Teamwork', 
                  icon: Users, 
                  color: 'text-blue-500',
                  desc: 'We work together as a unified team to achieve our shared goals and deliver excellence.'
                },
                { 
                  title: 'Respect', 
                  icon: Heart, 
                  color: 'text-green-500',
                  desc: 'We treat our clients, partners, and colleagues with dignity and mutual respect.'
                },
                { 
                  title: 'Integrity', 
                  icon: ShieldCheck, 
                  color: 'text-yellow-500',
                  desc: 'We uphold the highest standards of honesty and transparency in all our dealings.'
                },
                { 
                  title: 'Professionalism', 
                  icon: Award, 
                  color: 'text-purple-500',
                  desc: 'We conduct our business with competence, accountability, and adherence to best practices.'
                },
                { 
                  title: 'Passion', 
                  icon: Zap, 
                  color: 'text-red-500',
                  desc: 'We are driven by a genuine passion for delivering quality petroleum products and outstanding service.'
                },
              ].map((val, idx) => (
                <div key={idx} className="flex flex-col gap-6 bg-primary p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/20 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                    <val.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{val.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Journey Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter">Our Journey</h2>
            <p className="text-xl text-gray-500 font-normal">Building the future of energy, one milestone at a time.</p>
            <div className="w-24 h-2 bg-accent mx-auto mt-8 rounded-full" />
          </div>

          <div className="relative pt-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2 hidden lg:block" />
            
            <div className="space-y-24">
              {[
                { year: 'Founded', title: 'Company Established', icon: ShieldCheck, desc: 'Prinz-Oil Limited was incorporated and registered with the Corporate Affairs Commission in Nigeria.' },
                { year: 'Growth', title: 'Operations Launched', icon: Award, desc: 'Began distribution of AGO, PMS, and HHK products from our base in Port Harcourt.' },
                { year: 'Expansion', title: 'Regional Coverage', icon: Globe, desc: 'Expanded our distribution network across all major cities in the South-South and South-East regions.' },
                { year: 'Fleet', title: 'Logistics Build-Up', icon: Zap, desc: 'Built a fleet of various-capacity trucks fully equipped with safety equipment and materials.' },
                { year: 'Present', title: 'NMDPRA Compliance', icon: Users, desc: 'Continuing to grow as a trusted, compliant distributor serving fuel stations, industries, and oil & gas companies.' },
              ].map((milestone, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 group ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Bubble side */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-end lg:group-even:justify-start">
                     <div className="relative">
                        <div className="text-[12rem] font-black text-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-accent/5 transition-colors duration-700 pointer-events-none">
                          {milestone.year}
                        </div>
                        <div className="relative z-10 w-24 h-24 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                           <milestone.icon size={40} />
                        </div>
                     </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-white border-4 border-accent rounded-full -translate-x-1/2 hidden lg:block shadow-lg z-20 group-hover:scale-150 transition-transform" />

                  {/* Content side */}
                  <div className="lg:w-1/2">
                    <div className="bg-primary p-10 rounded-[2.5rem] shadow-2xl border border-white/5 hover:border-accent/20 transition-all duration-500 max-w-md lg:group-odd:mr-auto lg:group-even:ml-auto group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
                      <div className="text-accent font-black text-xl mb-4">{milestone.year}</div>
                      <h4 className="text-2xl font-black text-white mb-4 group-hover:text-accent transition-colors">{milestone.title}</h4>
                      <p className="text-white/70 leading-relaxed text-lg font-medium">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1]">Join Us in Shaping <span className="text-accent">Energy</span> History</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link href="/contact">
               <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-10 py-7 text-lg font-black shadow-xl shadow-accent/20 border-none">
                 Contact Us
               </Button>
             </Link>
             <Link href="/team">
               <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-10 py-7 text-lg font-black backdrop-blur-md">
                 Our Leadership
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


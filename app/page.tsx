import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { 
  ArrowRight, 
  Droplets, 
  Globe, 
  Factory, 
  Handshake, 
  ShieldCheck, 
  BatteryCharging, 
  Ship 
} from 'lucide-react';
import { TeamCard } from '@/components/TeamCard';
import { HeroCarousel } from '@/components/HeroCarousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />


      {/* Who We Are Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl group-hover:bg-accent/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1596706067679-c591e1d3e89a?q=80&w=1974&auto=format&fit=crop"
                  alt="Our Vision"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-50 hidden md:block">
                <div className="text-4xl font-black text-primary mb-1">20+</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Years of Innovation</div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Who We Are
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 md:mb-8 leading-[1.1]">Redefining Excellence in the African <span className="text-accent underline decoration-primary/10 underline-offset-8">Energy Sector</span>.</h3>
              <p className="text-gray-600 text-base md:text-xl mb-8 leading-relaxed font-normal">
                Established with a vision to transform the oil and gas landscape, Prinz Oil combines cutting-edge technology with deep local expertise. We are committed to operational efficiency, environmental stewardship, and delivering value to our stakeholders.
              </p>
              <Link href="/about" className="inline-flex items-center gap-4 text-primary font-black hover:text-accent transition-all duration-300 group">
                <span className="text-base md:text-lg">Read our full story</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 text-primary">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operations (What We Do) Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <div className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4">Operations</div>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Integrated Energy Solutions</h2>
              <p className="text-gray-600 text-base md:text-lg">From upstream exploration to downstream distribution, our operations span the entire energy value chain.</p>
            </div>
            <Link href="/services" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto border-primary/10 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 px-8 py-6 text-base font-bold text-primary">
                Browse All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                title: 'Oil Exploration', 
                icon: Droplets, 
                desc: 'Advanced seismic data analysis and sustainable drilling operations.'
              },
              { 
                title: 'Distribution', 
                icon: Globe, 
                desc: 'Efficient logistics network ensuring reliable energy delivery across the region.'
              },
              { 
                title: 'Refining', 
                icon: Factory, 
                desc: 'State-of-the-art refining capabilities producing high-quality petroleum products.'
              },
              { 
                title: 'Partnerships', 
                icon: Handshake, 
                desc: 'Strategic alliances with global leaders to drive innovation and growth.'
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group bg-primary p-8 md:p-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 border border-white/5 hover:border-accent/20 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-white shadow-lg shadow-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium transition-colors group-hover:text-white/80">{item.desc}</p>
                </div>
                {/* Subtle highlight effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4">Our History</div>
            <h2 className="text-3xl md:text-6xl font-black text-primary mb-6 md:mb-8 tracking-tighter">Our Journey</h2>
            <div className="w-16 md:w-24 h-2 bg-accent mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2 hidden lg:block" />
            
            <div className="space-y-16 md:space-y-24 relative">
              {[
                { year: '2005', title: 'Inception', icon: ShieldCheck, desc: 'Prinz Oil was founded with a vision to revitalize local exploration.' },
                { year: '2010', title: 'First Major Discovery', icon: Droplets, desc: 'Successfully struck oil in the Niger Delta region, marking our entry into upstream operations.' },
                { year: '2015', title: 'Expansion', icon: Globe, desc: 'Diversified into downstream distribution, establishing a network of depots and stations.' },
                { year: '2020', title: 'Sustainable Shift', icon: BatteryCharging, desc: 'Launched our Green Energy Initiative to integrate renewables and reduce carbon intensity.' },
                { year: 'Present', title: 'Global Reach', icon: Ship, desc: 'Continuing to expand our footprint and partnerships across the globe.' },
              ].map((milestone, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 group ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Year & Icon Bubble */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-end lg:group-even:justify-start">
                    <div className="relative">
                      <div className="text-7xl md:text-9xl font-black text-primary/5 group-hover:text-accent/5 transition-colors duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        {milestone.year}
                      </div>
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-2xl md:rounded-3xl flex items-center justify-center text-white mb-4 shadow-xl shadow-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <milestone.icon size={28} />
                        </div>
                        <div className="text-xl md:text-2xl font-black text-primary bg-white px-6 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-lg border border-gray-100">
                          {milestone.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dot on Center Line */}
                  <div className="absolute left-1/2 w-4 h-4 bg-white border-4 border-accent rounded-full -translate-x-1/2 hidden lg:block group-hover:scale-150 transition-transform duration-300 z-20" />

                  {/* Content Card */}
                  <div className="lg:w-1/2 w-full px-4 sm:px-0">
                    <div className="bg-primary p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/5 hover:border-accent/20 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] max-w-md mx-auto lg:group-odd:mr-auto lg:group-even:ml-auto text-center lg:text-left">
                      <div className="text-accent font-black text-lg md:text-xl mb-4 tracking-widest">{milestone.year}</div>
                      <h4 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-accent transition-colors">
                        {milestone.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed text-base md:text-lg font-medium">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Leadership Preview Section - Revived White Background */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4">Leadership</div>
              <h3 className="text-4xl md:text-5xl font-black text-primary">Driven by Experience</h3>
            </div>
            <Link href="/team" className="hidden md:flex items-center gap-4 text-primary font-black group">
              <span className="text-lg">View Full Team</span>
              <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 text-primary">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <TeamCard member={{
              name: 'Dr. Emeka Okonkwo',
              role: 'Chief Executive Officer',
              description: 'With over 25 years in the energy sector, Dr. Okonkwo leads Prinz Oil with a vision for sustainable growth.',
              image_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
            }} />
             <TeamCard member={{
              name: 'Sarah Adebayo',
              role: 'Chief Operations Officer',
              description: 'Sarah ensures operational excellence across all our upstream and downstream activities.',
              image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
            }} />
             <div className="sm:col-span-2 lg:col-span-1">
               <TeamCard member={{
                name: 'James Wright',
                role: 'Technical Director',
                description: 'Leading our engineering innovations and technical compliance standards.',
                image_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
              }} />
             </div>
          </div>
          
          <div className="mt-12 text-center md:hidden px-4">
             <Link href="/team">
                <Button className="w-full py-8 text-xl font-black bg-primary rounded-2xl shadow-xl">
                  View Full Team
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1]">Join Us in Powering the <span className="text-accent underline decoration-white/20 underline-offset-8">Future</span>.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
            We are always looking for exceptional talent and strategic partners to join our mission of energy excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
               <Button size="lg" className="bg-accent hover:bg-accent-dark text-white border-none px-12 py-8 text-xl shadow-2xl shadow-accent/20 font-black">
                 Partner With Us
               </Button>
            </Link>
            <Link href="/careers">
               <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-12 py-8 text-xl font-black backdrop-blur-md">
                 Careers
               </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from 'next/image';
import { Briefcase, Users, Star, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function CareersPage() {
  const openings = [
    { title: 'Petroleum Engineer', dept: 'Operations', type: 'Full-time', location: 'Port Harcourt' },
    { title: 'Sustainability Analyst', dept: 'Corporate', type: 'Full-time', location: 'Lagos' },
    { title: 'Supply Chain Manager', dept: 'Logistics', type: 'Full-time', location: 'Lagos' },
    { title: 'Data Scientist', dept: 'Innovation Lab', type: 'Full-time', location: 'Remote / Lagos' },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Join Our Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/20 text-accent font-black text-xs uppercase tracking-[0.3em] mb-8">
            Build Your Future
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Prinz Oil</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-normal leading-relaxed">
            Join a collective of innovators, engineers, and visionaries shaping the next chapter of energy in Africa.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { icon: Star, title: 'Inspiration', desc: 'Work on projects that define the future.' },
              { icon: Users, title: 'Culture', desc: 'A diverse and inclusive global environment.' },
              { icon: GraduationCap, title: 'Growth', desc: 'Continuous learning and development.' },
              { icon: Briefcase, title: 'Impact', desc: 'Contribute to meaningful economic progress.' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-accent/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                  <benefit.icon size={32} />
                </div>
                <h3 className="font-black text-primary text-2xl mb-4">{benefit.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b-2 border-gray-50 pb-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-4">Current Openings</h2>
              <p className="text-gray-500 text-xl">Find your place in our growing family.</p>
            </div>
            <div className="text-accent font-black text-sm uppercase tracking-widest">{openings.length} Positions Available</div>
          </div>

          <div className="space-y-6">
            {openings.map((job, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row items-center justify-between p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-500">
                <div className="mb-8 md:mb-0">
                  <div className="text-accent font-black text-xs uppercase tracking-widest mb-2">{job.dept} • {job.type}</div>
                  <h4 className="text-3xl font-black text-primary">{job.title}</h4>
                  <div className="text-gray-400 font-medium mt-1">{job.location}</div>
                </div>
                <Button className="bg-primary hover:bg-accent text-white px-10 py-6 text-lg font-black rounded-2xl transition-all transform group-hover:scale-105">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary relative overflow-hidden">
         <div className="absolute inset-0">
           <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Workspace" fill className="object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
         </div>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-tight">Don't see a <span className="text-accent">perfect</span> fit?</h2>
           <p className="text-xl text-white/60 mb-12 font-normal">We're always looking for exceptional people. Send us your CV for future consideration.</p>
           <Link href="/contact">
             <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-12 py-8 text-xl font-black rounded-2xl">
               General Application
             </Button>
           </Link>
         </div>
      </section>
    </main>
  );
}

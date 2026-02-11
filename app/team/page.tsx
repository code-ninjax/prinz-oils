'use client';

import { useEffect, useState } from 'react';
import { TeamCard } from '@/components/TeamCard';
import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import { Users, Globe, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';

// Fallback data
const DUMMY_TEAM = [
  {
    id: 1,
    name: 'Dr. Emeka Okonkwo',
    role: 'Chief Executive Officer',
    description: 'With over 25 years in the energy sector, Dr. Okonkwo leads Prinz Oil with a vision for sustainable growth.',
    image_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah Adebayo',
    role: 'Chief Operations Officer',
    description: 'Sarah ensures operational excellence across all our upstream and downstream activities.',
    image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'James Wright',
    role: 'Technical Director',
    description: 'Leading our engineering innovations and technical compliance standards.',
    image_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Chioma Nwosu',
    role: 'Head of Sustainability',
    description: 'Dedicated to ensuring our environmental impact is positive and our community relations are strong.',
    image_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Michael Ross',
    role: 'Chief Financial Officer',
    description: 'Expertise in global finance and energy markets, ensuring financial stability and growth.',
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Zainab Ali',
    role: 'Legal Counsel',
    description: 'Overseeing corporate governance, compliance, and regulatory affairs.',
    image_url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function TeamPage() {
  const [team, setTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;
        
        if (data && data.length > 0) {
          setTeam(data);
        } else {
          setTeam(DUMMY_TEAM);
        }
      } catch (error) {
        console.error('Error fetching team:', error);
        setTeam(DUMMY_TEAM);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Simple Premium Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-black text-xs uppercase tracking-[0.3em] mb-8">
            Excellence in Leadership
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed">
            Meet the visionaries and experts driving Prinz Oil towards a sustainable and prosperous energy future.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter">Executives</h2>
              <p className="text-gray-500 text-xl font-normal">A diverse team of industry veterans committed to energy excellence.</p>
            </div>
            <div className="hidden md:flex gap-12 text-center">
               <div>
                  <div className="text-4xl font-black text-primary mb-1">20+</div>
                  <div className="text-accent font-black text-xs uppercase tracking-widest">Leaders</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-primary mb-1">150+</div>
                  <div className="text-accent font-black text-xs uppercase tracking-widest">Years Combined</div>
               </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[500px] bg-gray-50 rounded-[2.5rem] animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1]">Join a <span className="text-accent">Global</span> Team of Innovators.</h2>
                    <p className="text-white/70 text-xl mb-12 max-w-xl font-normal leading-relaxed">
                      We are always looking for passionate people to help us redefine the energy industry. Explore our career opportunities.
                    </p>
                    <Link href="/careers">
                       <Button size="lg" className="bg-accent hover:bg-accent-dark text-white border-none px-12 py-8 text-xl font-black shadow-2xl shadow-accent/20">
                         View Careers
                       </Button>
                    </Link>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { icon: Globe, label: 'Global Impact' },
                      { icon: Users, label: 'Diverse Culture' },
                      { icon: Award, label: 'Career Growth' },
                      { icon: ShieldCheck, label: 'Safety First' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300">
                         <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                            <item.icon size={32} />
                         </div>
                         <span className="text-white font-black text-lg">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}


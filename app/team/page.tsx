'use client';

import { useEffect, useState } from 'react';
import { TeamCard } from '@/components/TeamCard';
import { TeamModal } from '@/components/TeamModal';
import { supabase } from '@/lib/supabaseClient';

// Fallback data
const DUMMY_TEAM = [
  {
    id: 1,
    name: 'Progress Alpheaus Unyene',
    role: 'Chief Executive Officer',
    description: 'Leading Prinz-Oil Limited with a clear vision for growth in petroleum distribution across Nigeria.',
    image_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Adenebari Annastecia Suanu-Nna Esq',
    role: 'Group Chief Executive',
    description: 'Overseeing group-level strategy and corporate governance for the company.',
    image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Gideon Tanpiorun-obari Tee',
    role: 'Chief Operating Officer',
    description: 'Ensuring operational excellence and reliable distribution across all service areas.',
    image_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Solomon Awajis Harold',
    role: 'Logistics/Sales Manager',
    description: 'Managing logistics operations and sales activities to ensure efficient product delivery.',
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Believe Manuchimson Worgu',
    role: 'Group Tech-Head',
    description: 'Driving technology initiatives and digital infrastructure for the company.',
    image_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  }
];

export default function TeamPage() {
  const [team, setTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

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
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Our Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Meet The Team
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl font-normal leading-relaxed">
            Meet the team driving Prinz-Oil towards becoming a leading petroleum distributor in Nigeria.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter">Executives</h2>
              <p className="text-gray-500 text-xl font-normal">The team behind Prinz-Oil&apos;s reliable petroleum distribution across Nigeria.</p>
            </div>
            <div className="hidden md:flex gap-12 text-center">
               <div>
                  <div className="text-4xl font-black text-primary mb-1">5</div>
                  <div className="text-accent font-black text-xs uppercase tracking-widest">Key Staff</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-primary mb-1">2</div>
                  <div className="text-accent font-black text-xs uppercase tracking-widest">Regions Covered</div>
               </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-[500px] bg-gray-50 rounded-[2.5rem] animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {team.map((member) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { TeamCard } from '@/components/TeamCard';
import { TeamModal } from '@/components/TeamModal';
import { supabase } from '@/lib/supabaseClient';

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
        if (data) setTeam(data);
      } catch (error) {
        console.error('Error fetching team:', error);
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
            Meet the team driving Prinz-Oil Limited towards becoming a leading petroleum distributor in Nigeria.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter">Executives</h2>
              <p className="text-gray-500 text-xl font-normal">The team behind Prinz-Oil Limited&apos;s reliable petroleum distribution across Nigeria.</p>
            </div>
            <div className="hidden md:flex gap-12 text-center">
               <div>
                  <div className="text-4xl font-black text-primary mb-1">{loading ? '–' : team.length}</div>
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
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-[3rem] overflow-hidden border border-gray-50 h-[600px] flex flex-col">
                  <div className="h-2/3 bg-gray-100 animate-pulse" />
                  <div className="p-10 flex flex-col flex-1 bg-white -mt-12 rounded-t-[3rem] relative z-10 space-y-4">
                    <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
                    <div className="h-6 w-48 bg-gray-100 rounded-full animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3 w-full bg-gray-50 rounded-full animate-pulse" />
                      <div className="h-3 w-4/5 bg-gray-50 rounded-full animate-pulse" />
                      <div className="h-3 w-3/5 bg-gray-50 rounded-full animate-pulse" />
                    </div>
                    <div className="h-4 w-28 bg-gray-100 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : team.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No team members added yet.</p>
              <p className="text-gray-300 text-sm mt-2">Add team members from the admin dashboard.</p>
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

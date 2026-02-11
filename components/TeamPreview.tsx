'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { TeamCard } from '@/components/TeamCard';
import { TeamModal } from '@/components/TeamModal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

export const TeamPreview = () => {
  const [team, setTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('id', { ascending: true })
          .limit(3);

        if (error) throw error;
        if (data) setTeam(data);
      } catch (error) {
        console.error('Error fetching team preview:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  return (
    <>
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

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-[3rem] overflow-hidden border border-gray-50 h-[600px] flex flex-col">
                  <div className="h-2/3 bg-gray-100 animate-pulse" />
                  <div className="p-10 flex flex-col flex-1 bg-white -mt-12 rounded-t-[3rem] relative z-10 space-y-4">
                    <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
                    <div className="h-6 w-48 bg-gray-100 rounded-full animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3 w-full bg-gray-50 rounded-full animate-pulse" />
                      <div className="h-3 w-4/5 bg-gray-50 rounded-full animate-pulse" />
                    </div>
                    <div className="h-4 w-28 bg-gray-100 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : team.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Team members will appear here once added.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {team.map((member, idx) => (
                <div key={member.id} className={idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                  <TeamCard 
                    member={member} 
                    onClick={() => setSelectedMember(member)}
                  />
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden px-4">
             <Link href="/team">
                <Button className="w-full py-8 text-xl font-black bg-primary rounded-2xl shadow-xl">
                  View Full Team
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <TeamModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </>
  );
};

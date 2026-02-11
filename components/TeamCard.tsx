import Image from 'next/image';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image_url?: string;
  description?: string;
}

export const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group relative bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-700 border border-gray-50 flex flex-col h-[600px]">
      {/* Image Container */}
      <div className="relative h-2/3 w-full overflow-hidden bg-gray-50">
        {member.image_url ? (
          <Image 
            src={member.image_url} 
            alt={member.name} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-300 font-black tracking-widest text-lg">PRINZ OIL</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Social Icons Overlay */}
        <div className="absolute top-8 right-8 flex flex-col gap-4 translate-x-20 group-hover:translate-x-0 transition-transform duration-500 delay-100">
          <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-xl">
             <Linkedin size={20} />
          </button>
          <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-xl">
             <Twitter size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-1 relative bg-white -mt-12 rounded-t-[3rem] z-10 group-hover:-translate-y-4 transition-transform duration-500">
        <div className="mb-6">
          <div className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-2">{member.role}</div>
          <h3 className="text-3xl font-black text-primary leading-tight">{member.name}</h3>
        </div>
        
        <p className="text-gray-500 leading-relaxed font-normal mb-8 flex-1 group-hover:text-gray-600 transition-colors line-clamp-3">
          {member.description || "Leading the energy frontier with expertise and vision."}
        </p>
        
        <Link href={`#`} className="inline-flex items-center gap-3 text-primary font-black hover:text-accent transition-colors group/link">
           <span className="text-sm uppercase tracking-widest leading-none">Full Profile</span>
           <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};


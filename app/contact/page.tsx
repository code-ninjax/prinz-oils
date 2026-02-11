import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/Button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/60 to-white" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-primary mb-6 leading-tight tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
            Ready to partner with Africa's leading energy innovator? We're here to listen and collaborate.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Headquarters', desc: '15 Prinz Oil Plaza, Victoria Island, Lagos, Nigeria' },
                  { icon: Phone, title: 'Phone', desc: '+234 800 PRINZ OIL' },
                  { icon: Mail, title: 'Email', desc: 'info@prinzoil.com' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                <h3 className="text-2xl font-black text-primary mb-6">Global Support</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our dedicated team is available 24/7 for operational support and emergency response.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-black uppercase tracking-widest text-accent border border-accent/10">24/7 Operations</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-black uppercase tracking-widest text-accent border border-accent/10">Global Response</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
               <h2 className="text-3xl font-black text-primary mb-10 relative z-10">Send us a Message</h2>
               <form className="space-y-8 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:border-accent transition-all font-medium" />
                   <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:border-accent transition-all font-medium" />
                 </div>
                 <input type="text" placeholder="Subject" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:border-accent transition-all font-medium" />
                 <textarea placeholder="Your Message" rows={6} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:border-accent transition-all font-medium" />
                 <Button className="w-full py-8 text-xl font-black bg-primary flex items-center justify-center gap-4 group">
                    Send Message <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                 </Button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

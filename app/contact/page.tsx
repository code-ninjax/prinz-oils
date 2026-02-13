'use client';

import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://api.formdrop.co/f/yzkfAMWb", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setSuccess(true);
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl font-normal leading-relaxed">
            Reach out to our team for product inquiries, distribution partnerships, or general questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Headquarters', desc: 'No.8 RSU Maingate by Ikwere Road, Port Harcourt, Nigeria' },
                  { icon: Phone, title: 'Phone', desc: '07065131255, 09044532815' },
                  { icon: Mail, title: 'Email', desc: 'Info@prinz-oil.com.ng' },
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
                <h3 className="text-2xl font-black text-primary mb-6">Distribution Support</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team is available to assist with orders, delivery scheduling, and NMDPRA compliance queries.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-black uppercase tracking-widest text-accent border border-accent/10">Order by PO</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-black uppercase tracking-widest text-accent border border-accent/10">Call to Order</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
               <h2 className="text-3xl font-black text-primary mb-10 relative z-10">Send us a Message</h2>
               
               {success ? (
                 <div className="flex flex-col items-center justify-center text-center py-20 animate-in fade-in duration-500">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                   <p className="text-gray-500 max-w-sm">
                     Thank you for contacting Prinz-Oil. We&apos;ll get back to you shortly.
                   </p>
                   <Button onClick={() => setSuccess(false)} variant="outline" className="mt-8">
                     Send another message
                   </Button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                   {/* Honeypot for simple spam protection (hidden) */}
                   <input type="text" name="_gotcha" style={{ display: 'none' }} />
                   
                   <div className="grid grid-cols-1 gap-8">
                     <input required name="email" type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:border-accent transition-all font-medium" />
                   </div>
                   <textarea required name="message" placeholder="Your Message" rows={6} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:border-accent transition-all font-medium" />
                   
                   <Button type="submit" disabled={isSubmitting} className="w-full py-8 text-xl font-black bg-primary flex items-center justify-center gap-4 group disabled:opacity-70">
                      {isSubmitting ? (
                        <>Sending... <Loader2 size={20} className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send size={20} className="group-hover:translate-x-2 transition-transform" /></>
                      )}
                   </Button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

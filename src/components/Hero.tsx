import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="hero" className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1950&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-foreground leading-tight mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Sua casa limpa e organizada é a nossa prioridade
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in max-w-2xl mx-auto" style={{
            animationDelay: '0.2s'
          }}>
            Trabalhamos com uma linha completa de produtos para facilitar a vida das nossas donas de casa. 
            Qualidade e eficiência em cada produto que oferecemos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a 
              href="https://wa.me/5532988871570" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-background hover:bg-muted text-foreground border-2 border-primary/20 px-8 py-4 rounded-lg transition-all font-semibold hover:border-primary/40"
            >
              Nossos Produtos
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="hsl(var(--background))" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};
export default Hero;
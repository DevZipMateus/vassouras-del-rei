
import React from 'react';
import { Sparkles, Home, Trash2, Droplets, ArrowRight, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Vassouras Premium',
    description: 'Vassouras de alta qualidade com cerdas resistentes e cabo ergonômico para uma limpeza eficiente e duradoura.',
    icon: Sparkles,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Produtos de Limpeza',
    description: 'Linha completa de produtos para limpeza doméstica, garantindo higiene e proteção para toda a família.',
    icon: Droplets,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Organização Doméstica',
    description: 'Soluções inteligentes para organizar todos os ambientes da sua casa de forma prática e funcional.',
    icon: Home,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Lixeiras e Cestas',
    description: 'Lixeiras modernas e cestas organizadoras para manter sua casa sempre limpa e bem organizada.',
    icon: Trash2,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            <Star size={16} />
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Produtos de qualidade para sua casa
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma linha completa de produtos para limpeza e organização, 
            desenvolvidos especialmente para facilitar o dia a dia das donas de casa.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in group"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-primary/10 p-4 rounded-xl inline-block mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5532988871570"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-3 font-semibold inline-flex shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <span>Ver todos os produtos</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

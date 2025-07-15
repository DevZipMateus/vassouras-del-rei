import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            <MapPin size={16} />
            Nossa Localização
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Venha nos visitar
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados em um ponto de fácil acesso. Venha conhecer nossa loja e 
            toda a nossa linha de produtos para sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-muted/50 rounded-xl p-8 h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-2">Mapa Interativo</h3>
                <p className="text-muted-foreground mb-4">
                  Rua Conceição de Carvalho 385
                </p>
                <p className="text-sm text-muted-foreground">
                  Em breve, mapa interativo será carregado aqui
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Conceição de Carvalho 385<br />
                      Centro - Vassouras/RJ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Telefone</h3>
                    <a 
                      href="tel:032988871570" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (032) 9 8887-1570
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">E-mail</h3>
                    <a 
                      href="mailto:vassourasnovadelrei@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      vassourasnovadelrei@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Horário de Funcionamento</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8:00 - 18:00</p>
                      <p>Sábado: 8:00 - 12:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
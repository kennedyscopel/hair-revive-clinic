import { Phone, MapPin, Clock, Award, CheckCircle, Star, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/5527992449495?text=Olá! Gostaria de agendar uma consulta com a Dra. Gabrielle.";

  const benefits = [
    "Diagnóstico preciso da causa da queda capilar",
    "Plano terapêutico individualizado e baseado em evidências",
    "Prevenção da progressão da alopecia",
    "Melhora da qualidade, espessura e densidade dos fios",
    "Acompanhamento médico contínuo",
  ];

  const steps = [
    { number: "01", title: "Agendamento", description: "Entre em contato para agendar sua consulta" },
    { number: "02", title: "Anamnese", description: "Investigação clínica detalhada do seu histórico" },
    { number: "03", title: "Avaliação", description: "Análise do couro cabeludo e tricoscopia" },
    { number: "04", title: "Diagnóstico", description: "Exames complementares quando necessário" },
    { number: "05", title: "Tratamento", description: "Plano terapêutico individualizado" },
    { number: "06", title: "Acompanhamento", description: "Ajustes conforme sua resposta ao tratamento" },
  ];

  const testimonials = [
    {
      text: "Gostei muito da forma como tudo foi explicado, sem pressa e de forma muito clara.",
      author: "Paciente",
    },
    {
      text: "Minha queda diminuiu bastante depois de alguns meses, e hoje me sinto muito mais segura com meu cabelo.",
      author: "Paciente",
    },
    {
      text: "Me senti acolhida desde a primeira consulta.",
      author: "Paciente",
    },
    {
      text: "Me sinto mais confiante quando me olho no espelho.",
      author: "Paciente",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Dra. Gabrielle Sagrillo" className="h-10 w-10 object-contain" />
              <span className="font-serif text-lg text-foreground hidden sm:block">Dra. Gabrielle Sagrillo</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Depoimentos</a>
              <a href="#locais" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Locais</a>
              <Button variant="gold" size="default" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Agendar
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#sobre" className="text-sm font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="#servicos" className="text-sm font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="#depoimentos" className="text-sm font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
              <a href="#locais" className="text-sm font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Locais</a>
              <Button variant="gold" size="lg" asChild className="mt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gold-light blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="fade-up" className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-6">
                <Award className="h-4 w-4 text-primary" />
                <span>CRM 18090 ES</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-6">
                Dra. Gabrielle<br />
                <span className="text-gradient">Sagrillo Pimassoni</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light">
                Especialista em Tricologia e Transplante Capilar
              </p>
              
              <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Tratamento especializado para queda capilar com diagnóstico preciso e plano terapêutico individualizado. 
                Recupere a confiança no seu cabelo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5" />
                    Agendar Consulta
                  </a>
                </Button>
                <Button variant="goldOutline" size="xl" asChild>
                  <a href="#servicos">
                    Saiba Mais
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-serif font-semibold text-primary">2-3</p>
                  <p className="text-sm text-muted-foreground">meses para resultados</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="text-2xl font-serif font-semibold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">individualizado</p>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="hidden sm:block">
                  <p className="text-2xl font-serif font-semibold text-primary">Híbrido</p>
                  <p className="text-sm text-muted-foreground">presencial e online</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200} className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl" />
                <img 
                  src={doctor1} 
                  alt="Dra. Gabrielle Sagrillo Pimassoni" 
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-card object-cover aspect-[3/4]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="fade-right" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={doctor2} 
                  alt="Dra. Gabrielle" 
                  className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover"
                />
                <img 
                  src={clinic2} 
                  alt="Consultório" 
                  className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover mt-8"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Sobre a Especialista</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
                Cuidado especializado e humanizado para sua saúde capilar
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Formada em Medicina pela UNESC-ES, atualmente pós-graduanda em Tricologia e Transplante Capilar 
                pela Lapidare SP, uma das instituições mais renomadas do país na área.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Minha abordagem vai além do sintoma: busco entender a causa da sua queda capilar através 
                de uma visão global que considera aspectos hormonais, metabólicos, nutricionais e clínicos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Visão Global do Paciente</h4>
                    <p className="text-sm text-muted-foreground">Análise hormonal, metabólica, nutricional e clínica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Condutas Individualizadas</h4>
                    <p className="text-sm text-muted-foreground">Evitando protocolos genéricos que não funcionam</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Uso Racional de Tratamentos</h4>
                    <p className="text-sm text-muted-foreground">Medicamentos e procedimentos baseados em evidências</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Serviços</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Consulta Especializada em Queda Capilar
            </h2>
            <p className="text-muted-foreground">
              Atendimento presencial e online para homens e mulheres com queda capilar, 
              afinamento dos fios, alopecias ou alterações do couro cabeludo.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">Consulta Inicial</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Anamnese detalhada, avaliação do couro cabeludo com tricoscopia e definição do diagnóstico preciso.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">Plano Terapêutico</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Prescrição personalizada com medicamentos, suplementos e procedimentos aprovados pela Anvisa.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">Acompanhamento</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Consulta inicial + 6 encontros de acompanhamento com ajustes conforme sua resposta ao tratamento.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Benefits */}
          <AnimatedSection animation="fade-up" delay={100} className="mt-20">
            <div className="bg-gradient-cream rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-8 text-center">
                Benefícios do Tratamento
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background/80 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Resultados:</strong> Redução da queda entre 2-3 meses • 
                  Melhora visível da densidade a partir de 3-6 meses
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 md:py-32 bg-espresso text-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-light font-medium tracking-wider uppercase text-sm mb-4">Processo</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Como Funciona o Atendimento
            </h2>
            <p className="text-cream/70">
              Um processo completo e humanizado para cuidar da sua saúde capilar.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div 
                  className="relative bg-espresso-light/20 rounded-2xl p-6 border border-cream/10 hover:border-gold/30 transition-all duration-300 h-full"
                >
                  <span className="text-5xl font-serif font-light text-gold/30 absolute top-4 right-6">
                    {step.number}
                  </span>
                  <div className="relative">
                    <h4 className="text-lg font-medium text-cream mb-2 mt-8">{step.title}</h4>
                    <p className="text-cream/60 text-sm">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              O que dizem as pacientes
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div 
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border h-full"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locais" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Locais de Atendimento</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Instituto Health
            </h2>
            <p className="text-muted-foreground">
              Clínica parceira com estrutura completa para seu atendimento.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-right" delay={0}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border h-full">
                <img 
                  src={clinic1} 
                  alt="Instituto Health Cariacica" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-2">Cariacica</h3>
                  <div className="flex items-start gap-3 text-muted-foreground text-sm mb-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>
                      Villaggio Campo Grande Comercial<br />
                      Rua Waldemar Siepierski, 200<br />
                      Loja 44 (Térreo, Corredor da BR)<br />
                      CEP 29147-600
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={100}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border h-full">
                <div className="w-full h-48 bg-gradient-cream flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Vila Velha</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-2">Vila Velha</h3>
                  <div className="flex items-start gap-3 text-muted-foreground text-sm mb-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>
                      Shopping Praia da Costa<br />
                      Torre Leste - Sala 101<br />
                      Rua Inácio Higino, 1050
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-background blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-background blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="scale" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground mb-6">
              Recupere a confiança no seu cabelo
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Agende sua consulta e descubra a causa real da sua queda capilar. 
              Tratamento individualizado e baseado em evidências científicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                  Falar com Sil (Secretária)
                </a>
              </Button>
            </div>

            <p className="mt-6 text-primary-foreground/60 text-sm">
              (27) 99244-9495 • Atendimento presencial e online
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-espresso text-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain brightness-200" />
              <div>
                <p className="font-serif text-lg">Dra. Gabrielle Sagrillo Pimassoni</p>
                <p className="text-cream/60 text-sm">CRM 18090 ES • Tricologia e Transplante Capilar</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-cream/60 text-sm">
                © {new Date().getFullYear()} Dra. Gabrielle Sagrillo Pimassoni
              </p>
              <p className="text-cream/40 text-xs mt-1">
                Todos os tratamentos seguem normas Anvisa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

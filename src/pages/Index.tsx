import { Phone, MapPin, Clock, Award, CheckCircle, Star, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import clinicCariacica from "@/assets/clinic-cariacica.jpg";
import clinicPraiaCosta from "@/assets/clinic-praia-costa.jpg";

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
              <img 
                src={doctor2} 
                alt="Dra. Gabrielle" 
                className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover max-w-md mx-auto"
              />
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
                  src={clinicCariacica} 
                  alt="Instituto Health Cariacica - Villaggio Campo Grande" 
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
                <img 
                  src={clinicPraiaCosta} 
                  alt="Instituto Health Vila Velha - Shopping Praia da Costa" 
                  className="w-full h-48 object-cover"
                />
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Dúvidas Frequentes</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Tire suas principais dúvidas sobre tricologia e tratamentos capilares.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Por que uma consulta de tricologia com uma médica é um diferencial?",
                answer: "A tricologia médica vai além da estética. Como médica, posso investigar causas internas da queda capilar — como alterações hormonais, deficiências nutricionais, doenças autoimunes ou uso de medicamentos — e prescrever tratamentos adequados, incluindo medicamentos controlados quando necessário. Isso garante um diagnóstico preciso e um tratamento seguro, baseado em evidências científicas."
              },
              {
                question: "Meu cabelo vai voltar a crescer?",
                answer: "A resposta depende do diagnóstico. Muitos tipos de queda capilar são reversíveis quando tratados corretamente e no tempo adequado. Na consulta, faço uma avaliação completa para determinar as chances de recuperação e qual o melhor tratamento para o seu caso."
              },
              {
                question: "Vou precisar usar medicação para sempre?",
                answer: "Nem sempre. O tratamento é individualizado e pode incluir medicamentos, suplementos, procedimentos ou mudanças de hábitos. Alguns casos precisam de manutenção contínua, outros não. Isso será discutido de forma transparente durante a consulta."
              },
              {
                question: "Em quanto tempo verei resultados?",
                answer: "A redução da queda geralmente é percebida entre 2 a 3 meses. Já a melhora visível da densidade e qualidade dos fios costuma aparecer a partir de 3 a 6 meses, variando conforme o diagnóstico e a resposta individual ao tratamento."
              },
              {
                question: "O tratamento tem efeitos colaterais?",
                answer: "Todos os tratamentos são prescritos de forma racional e individualizada, sempre avaliando riscos e benefícios. Quando há possibilidade de efeitos colaterais, isso é explicado previamente para que você tome uma decisão informada."
              },
              {
                question: "Preciso fazer exames antes da consulta?",
                answer: "Não é obrigatório. Durante a consulta, avalio seu caso completo e, se necessário, solicito exames específicos para complementar o diagnóstico. Se você já tiver exames recentes, pode trazê-los para a avaliação."
              },
              {
                question: "A consulta pode ser online?",
                answer: "Sim! Ofereço atendimento híbrido (presencial e online). A consulta online é ideal para quem está longe, para acompanhamento ou para uma primeira avaliação. Casos que necessitam de exame físico detalhado do couro cabeludo são melhor avaliados presencialmente."
              },
              {
                question: "O tratamento funciona para homens e mulheres?",
                answer: "Sim. Atendo homens e mulheres com queda capilar, afinamento dos fios, alopecias ou alterações do couro cabeludo. O diagnóstico e tratamento são sempre personalizados para cada paciente."
              },
              {
                question: "Quantas consultas são necessárias?",
                answer: "O acompanhamento padrão inclui a consulta inicial mais 6 retornos para ajustes e monitoramento da evolução. A frequência pode variar conforme a necessidade de cada caso."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <details className="group bg-card rounded-xl border border-border overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
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

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-125 group animate-whatsapp-pulse"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="h-7 w-7 animate-bounce"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Fale conosco!
        </span>
        {/* Ripple effect rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </a>
    </div>
  );
};

export default Index;

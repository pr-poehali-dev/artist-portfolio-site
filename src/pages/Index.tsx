import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    { title: 'Драматический сериал', year: '2024', role: 'Главный художник' },
    { title: 'Кинофильм "Время"', year: '2023', role: 'Художник-постановщик' },
    { title: 'ТВ-шоу', year: '2023', role: 'Арт-директор' },
    { title: 'Документальный фильм', year: '2022', role: 'Художник' },
  ];

  const awards = [
    { name: 'Золотой орел', year: '2024', category: 'Лучшая работа художника' },
    { name: 'ТЭФИ', year: '2023', category: 'Художник года' },
    { name: 'Ника', year: '2022', category: 'Лучшая сценография' },
  ];

  const education = [
    { institution: 'ВГИК', degree: 'Магистр', field: 'Художник кино и телевидения', year: '2015-2020' },
    { institution: 'Курсы повышения квалификации', degree: 'Сертификат', field: 'Современные технологии в киноискусстве', year: '2021' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">АХ</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'awards', label: 'Награды' },
                { id: 'education', label: 'Образование' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary">
              Художник кино и телевидения
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Визуальное
              <br />
              <span className="text-primary">повествование</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаю атмосферу и визуальные миры для кино и телевидения. 
              Реализую творческие идеи через командную работу и профессионализм.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-primary hover:bg-primary/90">
                Смотреть портфолио
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Командная работа</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Обладаю отличными навыками работы в команде. Эффективно взаимодействую 
                  с режиссерами, операторами и другими специалистами для достижения 
                  общей творческой цели.
                </p>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <Icon name="Target" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Организация</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сильные организационные способности позволяют эффективно управлять 
                  проектами любой сложности. Ориентируюсь на понимание и реализацию 
                  творческих задач в установленные сроки.
                </p>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <Icon name="Lightbulb" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Творческий подход</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Глубоко понимаю творческие задачи и нахожу нестандартные визуальные 
                  решения. Каждый проект — это возможность создать уникальную атмосферу 
                  и рассказать историю через пространство.
                </p>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <Icon name="Palette" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Профессионализм</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Многолетний опыт работы в индустрии и постоянное развитие 
                  профессиональных навыков. Слежу за современными тенденциями 
                  и применяю лучшие практики в своей работе.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Награды и достижения</h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-semibold">{award.name}</h3>
                        <Badge variant="outline" className="border-primary text-primary">
                          {award.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{award.category}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Образование</h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="GraduationCap" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-semibold">{item.institution}</h3>
                        <Badge variant="outline" className="border-primary text-primary">
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-lg mb-1">{item.degree}</p>
                      <p className="text-muted-foreground">{item.field}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Портфолио</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="group overflow-hidden bg-card border-border hover:border-primary transition-all cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Film" size={64} className="text-white/60 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge variant="outline" className="border-primary text-primary">
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg">artist@example.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="text-lg">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Локация</p>
                    <p className="text-lg">Москва, Россия</p>
                  </div>
                </div>
              </div>
              <Separator className="my-8" />
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground">
            © 2024 Художник кино и телевидения. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
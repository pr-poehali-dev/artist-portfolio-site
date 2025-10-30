import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioItems, setPortfolioItems] = useState([
    { title: 'Драматический сериал', year: '2024', role: 'Главный художник', video: '' },
    { title: 'Кинофильм "Время"', year: '2023', role: 'Художник-постановщик', video: '' },
    { title: 'ТВ-шоу', year: '2023', role: 'Арт-директор', video: '' },
    { title: 'Документальный фильм', year: '2022', role: 'Художник', video: '' },
  ]);
  const [awardVideo, setAwardVideo] = useState('');
  const [showreelVideo, setShowreelVideo] = useState('');
  const portfolioVideoRef = useRef<HTMLInputElement>(null);
  const awardVideoRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioVideoUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      const newItems = [...portfolioItems];
      newItems[index].video = videoUrl;
      setPortfolioItems(newItems);
    }
  };

  const handleAwardVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setAwardVideo(videoUrl);
    }
  };

  const handleShowreelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setShowreelVideo(videoUrl);
    }
  };

  const education = [
    { institution: 'ГИТР', degree: 'Специальность', field: 'Художник кино и телевидения, художник комбинированных съемок', year: '' },
  ];

  const [socialLinks, setSocialLinks] = useState({
    telegram: '',
    whatsapp: '',
    instagram: '',
    linkedin: '',
    facebook: ''
  });

  const handleSocialLinkChange = (platform: string, value: string) => {
    setSocialLinks(prev => ({ ...prev, [platform]: value }));
  };

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

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-80 bg-primary/20 rounded-lg transform -rotate-12" />
          <div className="absolute bottom-20 right-10 w-72 h-96 bg-primary/20 rounded-lg transform rotate-6" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary text-sm">
                ХУДОЖНИК КИНО И ТЕЛЕВИДЕНИЯ
              </Badge>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight tracking-wider">
                ВИЗУАЛЬНОЕ
                <br />
                <span className="text-primary anton">ПОВЕСТВОВАНИЕ</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Создаю атмосферу и визуальные миры для кино и телевидения. 
                Реализую творческие идеи через командную работу и профессионализм.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-primary hover:bg-primary/90">
                  Смотреть портфолио
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Связаться
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="torn-paper transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="hero-image-upload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        const img = document.getElementById('hero-image') as HTMLImageElement;
                        if (img) img.src = url;
                      }
                    }}
                  />
                  <img 
                    id="hero-image"
                    src="https://cdn.poehali.dev/files/3db00a4d-201b-4743-9f7a-1f64569a4fcf.jpg"
                    alt="Portfolio"
                    className="w-full h-full object-cover"
                  />
                  <label 
                    htmlFor="hero-image-upload"
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Icon name="Upload" size={48} className="text-white mx-auto mb-2" />
                      <p className="text-white font-medium">Загрузить фото</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-48 h-64 torn-paper transform -rotate-12 hidden md:block">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden group">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="hero-image-2-upload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        const img = document.getElementById('hero-image-2') as HTMLImageElement;
                        if (img) img.src = url;
                      }
                    }}
                  />
                  <img 
                    id="hero-image-2"
                    src=""
                    alt="Secondary"
                    className="w-full h-full object-cover"
                  />
                  <label 
                    htmlFor="hero-image-2-upload"
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <Icon name="Plus" size={32} className="text-white" />
                  </label>
                </div>
              </div>
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
            <h2 className="text-6xl font-bold mb-12 text-center tracking-wider">НАГРАДЫ И ДОСТИЖЕНИЯ</h2>
            <Card className="p-10 bg-card border-2 border-primary/40 hover:border-primary transition-all">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={48} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 tracking-wide">МОИ ДОСТИЖЕНИЯ</h3>
                  <p className="text-muted-foreground text-lg">Загрузите видео с наградами и достижениями</p>
                </div>
              </div>
              
              {awardVideo ? (
                <div className="relative group">
                  <video controls className="w-full rounded-lg border-2 border-primary/40">
                    <source src={awardVideo} type="video/mp4" />
                  </video>
                  <button
                    onClick={() => setAwardVideo('')}
                    className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Trash2" size={20} />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-primary/40 rounded-lg p-12 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleAwardVideoUpload}
                    className="hidden"
                    id="award-video-upload"
                  />
                  <label htmlFor="award-video-upload" className="cursor-pointer">
                    <Icon name="Upload" size={64} className="text-primary/60 mx-auto mb-4" />
                    <p className="text-xl font-semibold mb-2">Загрузить видео</p>
                    <p className="text-muted-foreground">Нажмите чтобы выбрать файл</p>
                  </label>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section id="education" className="py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-12 text-center tracking-wider">ОБРАЗОВАНИЕ</h2>
            {education.map((item, index) => (
              <Card key={index} className="p-10 bg-card border-2 border-primary/40 hover:border-primary transition-colors">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" size={48} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3 tracking-wide">{item.institution}</h3>
                    <p className="text-xl mb-2 text-primary">{item.degree}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.field}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-64 border-2 border-primary/30 rounded-lg transform -rotate-6" />
          <div className="absolute bottom-32 right-32 w-80 h-96 border-2 border-primary/30 rounded-lg transform rotate-12" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-7xl md:text-8xl font-bold mb-4 tracking-wider anton">ПОРТФОЛИО</h2>
              <div className="w-32 h-1 bg-primary mx-auto" />
              <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                Избранные работы и проекты, воплотившие творческое видение на экране
              </p>
            </div>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[320px] snap-center"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                    }}
                  >
                    <div className="relative bg-background border-[12px] border-white shadow-2xl p-3 hover:scale-105 hover:shadow-primary/20 transition-all duration-300">
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full shadow-lg" />
                      <div className="relative bg-card border-[3px] border-primary/40">
                        <div className="absolute -left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent flex flex-col justify-around py-6">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-full h-4 bg-background border-2 border-primary/60 rounded-sm shadow-sm" />
                          ))}
                        </div>
                        <div className="absolute -right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent flex flex-col justify-around py-6">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-full h-4 bg-background border-2 border-primary/60 rounded-sm shadow-sm" />
                          ))}
                        </div>
                        
                        {item.video ? (
                          <div className="aspect-[4/5] relative overflow-hidden">
                            <video controls className="w-full h-full object-cover">
                              <source src={item.video} type="video/mp4" />
                            </video>
                          </div>
                        ) : (
                          <div className="aspect-[4/5] bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Icon name="Film" size={80} className="text-primary/30" />
                            </div>
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <input
                                type="file"
                                accept="video/*"
                                onChange={(e) => handlePortfolioVideoUpload(index, e)}
                                className="hidden"
                                id={`portfolio-video-${index}`}
                              />
                              <label htmlFor={`portfolio-video-${index}`}>
                                <Button variant="outline" className="cursor-pointer border-white text-white hover:bg-white hover:text-background" asChild>
                                  <span>
                                    <Icon name="Upload" size={16} className="mr-2" />
                                    Загрузить
                                  </span>
                                </Button>
                              </label>
                            </div>
                          </div>
                        )}
                        
                        <div className="p-5 bg-gradient-to-b from-background to-secondary/30">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground playfair">{item.title}</h3>
                            <Badge className="bg-primary text-white border-0 text-xs px-3 py-1">{item.year}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.role}</p>
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <div className="flex items-center gap-2 text-xs text-primary">
                              <Icon name="Film" size={14} />
                              <span className="font-medium">Cinema Art</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors"
                    onClick={() => {
                      const element = document.querySelector(`#portfolio .snap-x`)?.children[index] as HTMLElement;
                      element?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-16 max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-card border-2 border-primary/40 hover:border-primary transition-all">
                <div className="p-8 bg-gradient-to-r from-background to-secondary/20">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Play" size={48} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold tracking-wider mb-2">SHOWREEL</h3>
                      <p className="text-lg text-muted-foreground">Демонстрационное видео моих работ</p>
                    </div>
                  </div>
                  
                  {showreelVideo ? (
                    <div className="relative group">
                      <video controls className="w-full aspect-video rounded-lg border-2 border-primary/40">
                        <source src={showreelVideo} type="video/mp4" />
                      </video>
                      <button
                        onClick={() => setShowreelVideo('')}
                        className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Trash2" size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-primary/40 rounded-lg p-16 text-center hover:border-primary transition-colors aspect-video flex items-center justify-center">
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleShowreelUpload}
                        className="hidden"
                        id="showreel-upload"
                      />
                      <label htmlFor="showreel-upload" className="cursor-pointer">
                        <Icon name="Upload" size={80} className="text-primary/60 mx-auto mb-4" />
                        <p className="text-2xl font-bold mb-2">Загрузить Showreel</p>
                        <p className="text-muted-foreground text-lg">Нажмите чтобы выбрать видео</p>
                      </label>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-6xl font-bold mb-12 text-center tracking-wider">КОНТАКТЫ</h2>
            <Card className="p-10 bg-card border-2 border-primary/40">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                    <p className="text-xl font-semibold">artist@example.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Телефон</p>
                    <p className="text-xl font-semibold">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Локация</p>
                    <p className="text-xl font-semibold">Москва, Россия</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center tracking-wide">СОЦИАЛЬНЫЕ СЕТИ</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="relative group">
                    <input
                      type="url"
                      placeholder="Telegram"
                      value={socialLinks.telegram}
                      onChange={(e) => handleSocialLinkChange('telegram', e.target.value)}
                      className="hidden peer"
                      id="telegram-input"
                    />
                    <a
                      href={socialLinks.telegram || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        socialLinks.telegram ? 'border-primary bg-primary/10' : 'border-border'
                      }`}
                      onClick={(e) => {
                        if (!socialLinks.telegram) {
                          e.preventDefault();
                          document.getElementById('telegram-input')?.focus();
                        }
                      }}
                    >
                      <Icon name="Send" size={28} className="text-primary" />
                      <span className="text-xs">Telegram</span>
                    </a>
                    <label htmlFor="telegram-input" className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Edit" size={14} />
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="url"
                      placeholder="WhatsApp"
                      value={socialLinks.whatsapp}
                      onChange={(e) => handleSocialLinkChange('whatsapp', e.target.value)}
                      className="hidden peer"
                      id="whatsapp-input"
                    />
                    <a
                      href={socialLinks.whatsapp || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        socialLinks.whatsapp ? 'border-primary bg-primary/10' : 'border-border'
                      }`}
                      onClick={(e) => {
                        if (!socialLinks.whatsapp) {
                          e.preventDefault();
                          document.getElementById('whatsapp-input')?.focus();
                        }
                      }}
                    >
                      <Icon name="MessageCircle" size={28} className="text-primary" />
                      <span className="text-xs">WhatsApp</span>
                    </a>
                    <label htmlFor="whatsapp-input" className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Edit" size={14} />
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="url"
                      placeholder="Instagram"
                      value={socialLinks.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                      className="hidden peer"
                      id="instagram-input"
                    />
                    <a
                      href={socialLinks.instagram || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        socialLinks.instagram ? 'border-primary bg-primary/10' : 'border-border'
                      }`}
                      onClick={(e) => {
                        if (!socialLinks.instagram) {
                          e.preventDefault();
                          document.getElementById('instagram-input')?.focus();
                        }
                      }}
                    >
                      <Icon name="Instagram" size={28} className="text-primary" />
                      <span className="text-xs">Instagram</span>
                    </a>
                    <label htmlFor="instagram-input" className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Edit" size={14} />
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="url"
                      placeholder="LinkedIn"
                      value={socialLinks.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                      className="hidden peer"
                      id="linkedin-input"
                    />
                    <a
                      href={socialLinks.linkedin || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        socialLinks.linkedin ? 'border-primary bg-primary/10' : 'border-border'
                      }`}
                      onClick={(e) => {
                        if (!socialLinks.linkedin) {
                          e.preventDefault();
                          document.getElementById('linkedin-input')?.focus();
                        }
                      }}
                    >
                      <Icon name="Linkedin" size={28} className="text-primary" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                    <label htmlFor="linkedin-input" className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Edit" size={14} />
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="url"
                      placeholder="Facebook"
                      value={socialLinks.facebook}
                      onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
                      className="hidden peer"
                      id="facebook-input"
                    />
                    <a
                      href={socialLinks.facebook || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        socialLinks.facebook ? 'border-primary bg-primary/10' : 'border-border'
                      }`}
                      onClick={(e) => {
                        if (!socialLinks.facebook) {
                          e.preventDefault();
                          document.getElementById('facebook-input')?.focus();
                        }
                      }}
                    >
                      <Icon name="Facebook" size={28} className="text-primary" />
                      <span className="text-xs">Facebook</span>
                    </a>
                    <label htmlFor="facebook-input" className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Edit" size={14} />
                    </label>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">Нажмите на иконку карандаша чтобы добавить ссылку</p>
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
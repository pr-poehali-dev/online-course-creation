import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Веб-разработка с нуля',
    description: 'Научитесь создавать современные сайты и веб-приложения. HTML, CSS, JavaScript и React.',
    duration: '3 месяца',
    level: 'Начальный',
    students: 1250,
    image: 'https://cdn.poehali.dev/projects/58eff154-985b-49d7-99ed-a554da488c60/files/90135a3d-17dd-442d-b92e-1e321e0045b1.jpg',
    price: '49 990 ₽'
  },
  {
    id: 2,
    title: 'UX/UI Дизайн',
    description: 'Освойте проектирование интерфейсов и создание пользовательского опыта. Figma, прототипирование, исследования.',
    duration: '2 месяца',
    level: 'Средний',
    students: 890,
    image: 'https://cdn.poehali.dev/projects/58eff154-985b-49d7-99ed-a554da488c60/files/eeedc495-7d6f-499f-9025-24b9154ba9f5.jpg',
    price: '39 990 ₽'
  },
  {
    id: 3,
    title: 'Python для анализа данных',
    description: 'Изучите Python и его применение в анализе данных. Pandas, NumPy, визуализация данных.',
    duration: '4 месяца',
    level: 'Начальный',
    students: 1540,
    image: 'https://cdn.poehali.dev/projects/58eff154-985b-49d7-99ed-a554da488c60/files/90135a3d-17dd-442d-b92e-1e321e0045b1.jpg',
    price: '54 990 ₽'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Анна Петрова',
    role: 'Веб-разработчик',
    text: 'Благодаря курсам смогла сменить профессию и устроиться в крупную IT-компанию. Материал структурирован идеально!',
    avatar: '👩‍💻'
  },
  {
    id: 2,
    name: 'Дмитрий Иванов',
    role: 'UX-дизайнер',
    text: 'Отличная подача материала, много практики. Преподаватели всегда помогают разобраться со сложными моментами.',
    avatar: '👨‍🎨'
  },
  {
    id: 3,
    name: 'Мария Сидорова',
    role: 'Аналитик данных',
    text: 'Курс превзошел ожидания! Теперь уверенно работаю с большими массивами данных и строю визуализации.',
    avatar: '👩‍💼'
  }
];

const faqs = [
  {
    question: 'Сколько времени нужно уделять обучению?',
    answer: 'Рекомендуем заниматься 2-3 часа в день, 4-5 дней в неделю. Все материалы остаются с вами навсегда, поэтому можете учиться в удобном темпе.'
  },
  {
    question: 'Нужны ли предварительные знания?',
    answer: 'Для большинства курсов начального уровня предварительные знания не требуются. Мы начинаем с основ и постепенно переходим к более сложным темам.'
  },
  {
    question: 'Выдается ли сертификат?',
    answer: 'Да, после успешного прохождения курса и выполнения финального проекта вы получите сертификат о прохождении обучения.'
  },
  {
    question: 'Есть ли помощь наставников?',
    answer: 'На всех курсах есть поддержка наставников. Они проверяют домашние задания, проводят код-ревью и отвечают на вопросы в чате.'
  },
  {
    question: 'Можно ли оплатить курс частями?',
    answer: 'Да, доступна рассрочка на 6 или 12 месяцев без процентов. Также можно оплатить курс полностью со скидкой 10%.'
  }
];

export default function Index() {
  const [selectedFilter, setSelectedFilter] = useState('Все');
  const filters = ['Все', 'Начальный', 'Средний', 'Продвинутый'];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <span className="text-xl font-bold">SkillSpace</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </a>
            </nav>
            <Button>Начать обучение</Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Онлайн-образование
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Освойте новую профессию
                <span className="text-primary"> онлайн</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Практические курсы от ведущих специалистов индустрии. Учитесь в своем темпе, получайте поддержку наставников и создавайте реальные проекты для портфолио.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Выбрать курс
                  <Icon name="ArrowRight" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" size={18} />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  <div>
                    <div className="font-bold">12 000+</div>
                    <div className="text-sm text-muted-foreground">Студентов</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="BookOpen" size={20} className="text-primary" />
                  <div>
                    <div className="font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">Курсов</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  <div>
                    <div className="font-bold">95%</div>
                    <div className="text-sm text-muted-foreground">Трудоустройство</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/58eff154-985b-49d7-99ed-a554da488c60/files/38be2859-872c-4377-b92b-f6b639209aea.jpg" 
                  alt="Обучение онлайн"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Icon name="BookOpen" size={14} className="mr-1" />
              Каталог курсов
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Популярные курсы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите направление, которое вас интересует, и начните путь к новой карьере
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{course.level}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    Записаться на курс
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Star" size={14} className="mr-1" />
              Отзывы студентов
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Что говорят наши выпускники</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Истории успеха тех, кто уже изменил свою жизнь благодаря нашим курсам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              Вопросы и ответы
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на самые популярные вопросы о наших курсах
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-t from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-none shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl sm:text-4xl font-bold mb-4">
                Готовы начать обучение?
              </CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Icon name="BookOpen" size={18} />
                Посмотреть все курсы
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="MessageCircle" size={18} />
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={24} className="text-primary" />
                <span className="font-bold text-lg">SkillSpace</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Онлайн-платформа для профессионального развития и обучения новым навыкам
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Все курсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для начинающих</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для профессионалов</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">О нас</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О платформе</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@skillspace.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 SkillSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { CheckCircle2, Lightbulb, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const skills = [
    { name: "تصميم الجرافيك", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Adobe Creative Suite", level: 92 },
    { name: "Figma / Sketch", level: 88 },
    { name: "HTML / CSS", level: 85 },
    { name: "React / JavaScript", level: 80 },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "الإبداع",
      description: "كل مشروع فرصة لابتكار حلول فريدة تتجاوز التوقعات"
    },
    {
      icon: Target,
      title: "الدقة",
      description: "الاهتمام بأدق التفاصيل لضمان جودة استثنائية"
    },
    {
      icon: Heart,
      title: "الشغف",
      description: "أعمل بحب وشغف في كل مشروع أتولاه"
    },
  ];

  const journey = [
    {
      year: "2021",
      title: "البداية",
      description: "بدأت رحلتي في عالم التصميم والتطوير"
    },
    {
      year: "2022",
      title: "التطور",
      description: "عملت مع أكثر من 50 عميل في مختلف المجالات"
    },
    {
      year: "2023",
      title: "التميز",
      description: "حصلت على عدة جوائز في التصميم والإبداع"
    },
    {
      year: "2024-2026",
      title: "الاحترافية",
      description: "أصبحت مصمم معتمد وأعمل مع شركات عالمية"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737652423418-a5ea06f9ce1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ1MzA3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Designer portrait"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full -z-10 opacity-50"></div>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                <span className="block text-neutral-800">عن</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  المبدع
                </span>
              </h1>
              
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  مرحباً! أنا مصمم جرافيك ومطور واجهات محترف بخبرة تزيد عن 5 سنوات في مجال
                  التصميم الرقمي والهويات البصرية.
                </p>
                <p>
                  أؤمن بأن التصميم الجيد هو الذي يجمع بين الجمال والوظيفية. هدفي هو مساعدة
                  العلامات التجارية على التميز من خلال تصاميم مبتكرة تحكي قصتها بطريقة فريدة.
                </p>
                <p>
                  عملت مع عملاء من مختلف أنحاء العالم، وساهمت في إطلاق العديد من المشاريع
                  الناجحة التي حققت أهدافها وتجاوزت التوقعات.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-indigo-600">
                  <CheckCircle2 size={20} />
                  <span>مصمم معتمد</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <CheckCircle2 size={20} />
                  <span>150+ مشروع منجز</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <CheckCircle2 size={20} />
                  <span>تقييم 5 نجوم</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">قيمي ومبادئي</h2>
            <p className="text-xl text-neutral-600">المبادئ التي توجه عملي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">المهارات والخبرات</h2>
            <p className="text-xl text-neutral-600">الأدوات والتقنيات التي أتقنها</p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-indigo-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">رحلتي المهنية</h2>
            <p className="text-xl text-neutral-600">مسيرة النمو والتطور</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:text-left"
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? "md:text-left" : "md:col-start-2"}>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all">
                      <div className="text-sm text-indigo-600 mb-2">{item.year}</div>
                      <h3 className="text-2xl mb-3">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Circle marker */}
                  <div className="absolute right-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

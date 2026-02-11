import { Link } from "react-router";
import { ArrowLeft, Sparkles, Award, Users, Code } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const stats = [
    { icon: Code, value: "150+", label: "مشروع مكتمل" },
    { icon: Users, value: "80+", label: "عميل سعيد" },
    { icon: Award, value: "25+", label: "جائزة" },
    { icon: Sparkles, value: "5+", label: "سنوات خبرة" },
  ];

  const services = [
    {
      title: "تصميم الهوية البصرية",
      description: "تصميم شعارات وهويات بصرية متكاملة تعكس قيم علامتك التجارية",
      image: "https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MDM2MjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "تصميم واجهات المواقع",
      description: "تصميم وتطوير واجهات ويب عصرية ومتجاوبة مع جميع الأجهزة",
      image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBsYXB0b3B8ZW58MXx8fHwxNzcwMzQ0NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "تصميم تطبيقات الموبايل",
      description: "تصميم تطبيقات جوال بتجربة مستخدم سلسة وجذابة",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzkyMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm mb-6">
                <Sparkles size={16} />
                <span>متاح للعمل الحر</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
                مرحباً، أنا
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  مصمم مبدع
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                أحول الأفكار إلى تصاميم مذهلة وتجارب رقمية فريدة. متخصص في تصميم الهويات
                البصرية، واجهات المواقع، وتطبيقات الجوال.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                >
                  <span>شاهد أعمالي</span>
                  <ArrowLeft size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-800 rounded-full border-2 border-neutral-200 hover:border-indigo-600 transition-all"
                >
                  تواصل معي
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770003354677-7c3b06d302e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcwNDY1MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative workspace"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full -z-10"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mb-4">
                  <stat.icon className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-4xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">الخدمات المقدمة</h2>
            <p className="text-xl text-neutral-600">حلول إبداعية شاملة لاحتياجاتك الرقمية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            هل لديك مشروع؟
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            دعنا نعمل معاً لتحويل فكرتك إلى واقع مذهل
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full hover:shadow-2xl transition-all"
          >
            <span>ابدأ مشروعك الآن</span>
            <ArrowLeft size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

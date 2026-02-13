import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "الكل" },
    { id: "branding", label: "الهوية البصرية" },
    { id: "web", label: "تصميم المواقع" },
    { id: "mobile", label: "تطبيقات الجوال" },
  ];

  const projects = [
    {
      id: 1,
      title: "هوية بصرية متكاملة",
      category: "branding",
      description: "تصميم هوية بصرية شاملة لشركة تقنية ناشئة",
      image: "https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MDM2MjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["شعار", "هوية", "طباعة"]
    },
    {
      id: 2,
      title: "موقع تجارة إلكترونية",
      category: "web",
      description: "تصميم وتطوير متجر إلكتروني عصري ومتجاوب",
      image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBsYXB0b3B8ZW58MXx8fHwxNzcwMzQ0NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["UI/UX", "React", "Responsive"]
    },
    {
      id: 3,
      title: "تطبيق توصيل طعام",
      category: "mobile",
      description: "تصميم تجربة مستخدم سلسة لتطبيق توصيل",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzkyMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Mobile", "UI/UX", "Figma"]
    },
    {
      id: 4,
      title: "بورتفوليو شخصي",
      category: "web",
      description: "موقع بورتفوليو احترافي لمصور فوتوغرافي",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc3MDQ1OTgyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Portfolio", "Photography", "Design"]
    },
    {
      id: 5,
      title: "هوية مطعم فاخر",
      category: "branding",
      description: "تصميم شعار وهوية بصرية لمطعم راقي",
      image: "https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MDM2MjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Logo", "Brand", "Restaurant"]
    },
    {
      id: 6,
      title: "تطبيق صحي",
      category: "mobile",
      description: "واجهة تطبيق لمتابعة اللياقة البدنية",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzkyMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Health", "Fitness", "Mobile"]
    },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl mb-6">
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              معرض الأعمال
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            مجموعة مختارة من أفضل المشاريع التي عملت عليها، كل مشروع يحكي قصة نجاح فريدة
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 right-0 left-0 p-6">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-800 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-all">
                        <span>عرض المشروع</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p className="text-neutral-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">آراء العملاء</h2>
            <p className="text-xl text-neutral-600">ماذا يقول عملائي عن تجربتهم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                role: "مدير تسويق",
                text: "عمل احترافي متقن، تجاوز التصميم توقعاتنا وساهم في زيادة مبيعاتنا بشكل ملحوظ. أنصح بالتعامل معه بشدة.",
                rating: 5
              },
              {
                name: "سارة العلي",
                role: "صاحبة مشروع",
                text: "مصمم مبدع ومحترف، فهم رؤيتي تماماً وحولها إلى تصميم رائع. التواصل كان سلساً والتسليم في الوقت المحدد.",
                rating: 5
              },
              {
                name: "خالد السعيد",
                role: "مطور ويب",
                text: "تجربة رائعة! التصاميم عالية الجودة وسهلة التطبيق. يمتلك حساً فنياً رفيعاً وفهماً عميقاً لاحتياجات المستخدم.",
                rating: 5
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

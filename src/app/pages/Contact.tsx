import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@creative.com",
      link: "mailto:info@creative.com"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 50 123 4567",
      link: "tel:+966501234567"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "الرياض، المملكة العربية السعودية",
      link: "#"
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", color: "from-blue-600 to-blue-700" },
    { name: "Behance", url: "#", color: "from-blue-500 to-blue-600" },
    { name: "Dribbble", url: "#", color: "from-pink-500 to-pink-600" },
    { name: "Instagram", url: "#", color: "from-purple-600 to-pink-600" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6">
            <MessageCircle className="text-white" size={36} />
          </div>
          <h1 className="text-5xl lg:text-6xl mb-6">
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              تواصل معي
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            لديك مشروع أو فكرة؟ دعنا نتحدث عنها ونحولها إلى واقع مذهل
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6">أرسل رسالة</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-neutral-700">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-neutral-700">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 text-neutral-700">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-neutral-700">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <span>إرسال الرسالة</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl mb-6">معلومات الاتصال</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                يسعدني التواصل معك! اختر الطريقة الأنسب لك للتواصل، وسأكون سعيداً بالرد
                على استفساراتك ومناقشة مشروعك.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg hover:shadow-lg transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 mb-1">{info.title}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl mb-4">تابعني على</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-4 bg-gradient-to-br ${social.color} text-white rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-800">متاح حالياً</span>
                </div>
                <p className="text-sm text-green-700">
                  أستطيع البدء في مشاريع جديدة. وقت الاستجابة عادة خلال 24 ساعة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">أسئلة شائعة</h2>
            <p className="text-xl text-neutral-600">إجابات سريعة لأكثر الأسئلة شيوعاً</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "ما هي مدة تنفيذ المشروع؟",
                answer: "تختلف المدة حسب حجم المشروع وتعقيده. عادة ما تستغرق المشاريع الصغيرة 1-2 أسبوع، بينما المشاريع الكبيرة قد تستغرق 4-8 أسابيع."
              },
              {
                question: "هل تقدم تعديلات على التصميم؟",
                answer: "نعم، أقدم جولتين من التعديلات المجانية لضمان رضاك الكامل عن التصميم النهائي."
              },
              {
                question: "ما هي أسعار الخدمات؟",
                answer: "تختلف الأسعار حسب نطاق المشروع ومتطلباته. يسعدني مناقشة ميزانيتك وتقديم عرض سعر مخصص."
              },
              {
                question: "هل تقدم دعم ما بعد التسليم؟",
                answer: "نعم، أقدم دعماً فنياً لمدة شهر بعد التسليم لضمان عمل كل شيء بشكل مثالي."
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <summary className="cursor-pointer p-6 flex justify-between items-center">
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

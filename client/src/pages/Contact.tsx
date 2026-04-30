
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram, 
  Globe, CheckCircle, AlertCircle, MessageCircle, Users, Award,
  ArrowRight, Sparkles
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check for pre-selected subject from sessionStorage when component mounts
  useEffect(() => {
    const savedSubject = sessionStorage.getItem('contactSubject');
    if (savedSubject) {
      setFormData(prev => ({ ...prev, subject: savedSubject }));
      // Clear it after using so it doesn't persist on refresh
      sessionStorage.removeItem('contactSubject');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would send the form data to your backend
    // For now, we'll simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  // Rest of your component remains the same...
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Climate Nexus Africa", "Nairobi, Kenya", "P.O. Box 12345-00100"],
      color: "from-emerald-500 to-teal-500",
      link: "https://maps.google.com",
      linkText: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+254 746 743 936", "+254 711 000 000", "Mon-Fri: 8AM-5PM"],
      color: "from-blue-500 to-cyan-500",
      link: "tel:+254746743936",
      linkText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@climatenexusafrica.org", "partnerships@climatenexusafrica.org", "support@climatenexusafrica.org"],
      color: "from-purple-500 to-pink-500",
      link: "mailto:info@climatenexusafrica.org",
      linkText: "Email Us"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8AM - 5PM", "Saturday: 9AM - 1PM", "Sunday: Closed"],
      color: "from-orange-500 to-red-500",
      link: "#",
      linkText: "Schedule Meeting"
    }
  ];

  const quickLinks = [
    { title: "Partnership Inquiry", icon: HandshakeIcon, action: "Partnership" },
    { title: "Training Programs", icon: Users, action: "Training" },
    { title: "Volunteer With Us", icon: HeartIcon, action: "Volunteer" },
    { title: "Support Our Work", icon: Award, action: "Donation" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px),
                           linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageCircle size={16} className="text-emerald-400" />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Start a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 block mt-2">
                Conversation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're interested in partnering with us, joining our programs, 
              or simply want to learn more — we'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards Grid */}
      <section className="relative -mt-16 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                    <a
                      href={info.link}
                      className="inline-flex items-center space-x-2 text-emerald-600 font-semibold text-sm group/link hover:space-x-3 transition-all"
                    >
                      <span>{info.linkText}</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-emerald-100">We'll respond within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="Partnership">🤝 Partnership Inquiry</option>
                        <option value="Training">📚 Training & Programs</option>
                        <option value="Volunteer">🙋 Volunteer Opportunity</option>
                        <option value="Donation">💚 Support Our Work</option>
                        <option value="Media">📰 Media & Press</option>
                        <option value="General">💬 General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center space-x-3">
                      <CheckCircle size={20} className="text-emerald-600" />
                      <span>✓ Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-center space-x-3">
                      <AlertCircle size={20} className="text-red-600" />
                      <span>✗ Something went wrong. Please try again or call us directly.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column - Map & Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                  <h3 className="text-lg font-bold text-white flex items-center">
                    <Globe size={18} className="mr-2" />
                    Our Location
                  </h3>
                </div>
                <div className="h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.208878930713!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2b7f1d8d9%3A0x3b3c9d9f9f9f9f9f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Climate Nexus Africa Location"
                  ></iframe>
                </div>
                <div className="p-4 bg-emerald-50">
                  <p className="text-sm text-emerald-800 flex items-center justify-between">
                    <span>Nairobi, Kenya</span>
                    <a href="#" className="text-emerald-600 font-semibold hover:underline">Get Directions →</a>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Sparkles size={20} className="mr-2" />
                    Quick Connect
                  </h3>
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => setFormData({ ...formData, subject: link.action })}
                          className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-xl p-3 flex items-center justify-between transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <Icon size={18} />
                            <span>{link.title}</span>
                          </div>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="grid grid-cols-4 gap-3">
                  <a href="#" className="bg-gray-100 hover:bg-[#1877F2] p-3 rounded-xl text-center group transition-all">
                    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white mx-auto" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-[#1DA1F2] p-3 rounded-xl text-center group transition-all">
                    <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white mx-auto" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-[#0077B5] p-3 rounded-xl text-center group transition-all">
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white mx-auto" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gradient-to-tr hover:from-[#833AB4] hover:to-[#FD1D1D] p-3 rounded-xl text-center group transition-all">
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white mx-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter and join 5,000+ subscribers receiving updates on climate action, 
              training opportunities, and impact stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom icon components
const HeartIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const HandshakeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 8L22 12L17 16M7 8L2 12L7 16M12 4L12 20M12 8L8 12L12 16L16 12L12 8Z"/>
  </svg>
);

export default Contact;

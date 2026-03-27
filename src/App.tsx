/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Calendar, 
  Mail, 
  Layout, 
  CheckCircle2, 
  Linkedin, 
  ChevronRight,
  User,
  Briefcase,
  FileText,
  MessageSquare,
  Send,
  Clock,
  BarChart3,
  Instagram,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  Palette,
  Headset,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on scroll or resize
  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-nude-50 text-[#2D2420] font-sans selection:bg-accent-blue/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-nude-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold tracking-tight text-nude-500 flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center text-white text-xs">K</div>
            Karen Joy Doria
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-nude-500 ${
                  activeTab === item.id ? "text-nude-500" : "text-nude-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-nude-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-nude-400 transition-all shadow-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-nude-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-nude-100 overflow-hidden"
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-medium transition-colors ${
                  activeTab === item.id ? "text-nude-500" : "text-nude-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-nude-500 text-white px-6 py-4 rounded-2xl text-center font-bold uppercase tracking-widest"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-[-10%] w-[40%] aspect-square bg-accent-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-[-5%] w-[30%] aspect-square bg-pastel-sage/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-accent-blue/10 text-nude-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-2 animate-pulse" />
                Available for Remote Work
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-nude-500">
                Helping Busy CEOs Stay <span className="text-accent-blue italic">Organized</span>, Focused, and Ahead
              </h1>
              <p className="text-xl md:text-2xl text-nude-400 font-light leading-relaxed mb-10 max-w-xl">
                Reliable Executive Assistant supporting startups with admin, operations, and customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-nude-500 text-white rounded-2xl text-lg font-medium group hover:bg-nude-400 transition-all shadow-lg shadow-nude-500/20"
                >
                  Hire Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="inline-flex items-center justify-center px-8 py-4 border border-nude-200 rounded-2xl text-lg font-medium hover:bg-white transition-all text-nude-500"
                >
                  View My Work
                </button>
              </div>

              {/* Quick Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-nude-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pastel-sage rounded-xl flex items-center justify-center text-green-600">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-nude-500">30%</p>
                    <p className="text-xs text-nude-300 uppercase font-bold tracking-wider">Faster Response</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-blue rounded-xl flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-nude-500">Expert</p>
                    <p className="text-xs text-nude-300 uppercase font-bold tracking-wider">Ops & Admin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pastel-peach rounded-xl flex items-center justify-center text-orange-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-nude-500">Remote</p>
                    <p className="text-xs text-nude-300 uppercase font-bold tracking-wider">Global Support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-nude-100 rounded-[4rem] overflow-hidden relative z-10 shadow-2xl shadow-nude-200/50">
                <img 
                  src="https://picsum.photos/seed/karen-ea/1000/1000" 
                  alt="Karen Joy Doria - Executive Assistant" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-nude-50 max-w-[200px]">
                <p className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-1">Trusted Partner</p>
                <p className="text-sm font-medium text-nude-500 leading-tight">Bringing structure to startup chaos.</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-nude-50">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-2 h-2 bg-yellow-400 rounded-full" />
                  ))}
                </div>
                <p className="text-xs font-bold text-nude-300 uppercase tracking-widest">Highly Rated EA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-nude-400 font-light leading-relaxed"
          >
            I am more than just a task executor. I am a <span className="text-nude-500 font-medium">proactive problem-solver</span> and <span className="text-nude-500 font-medium text-italic">trusted right-hand partner</span> dedicated to helping busy founders reclaim their time and scale efficiently.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-nude-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">
              <User className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-nude-500">
              Your Partner in Growth & Efficiency
            </h2>
            <div className="space-y-6 text-lg text-nude-400 leading-relaxed font-light">
              <p>
                Hi, I’m Karen, an experienced Operations Supervisor with over 3 years of experience supporting business operations, customer service, and administrative tasks.
              </p>
              <p>
                I specialize in helping busy professionals stay organized by managing schedules, handling emails, tracking data, and ensuring smooth daily operations.
              </p>
              <p className="font-medium text-nude-500 bg-pastel-sage/30 p-4 rounded-xl border-l-4 border-pastel-sage">
                I am detail-oriented, proactive, and committed to delivering reliable and efficient support that allows you to focus on the big picture.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl border border-nude-100">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-accent-blue">Specialization</h4>
                <p className="text-nude-500 font-medium">Operations & Admin</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-nude-100">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-accent-blue">Focus</h4>
                <p className="text-nude-500 font-medium">Efficiency & Scale</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-pastel-sage rounded-[2rem] overflow-hidden">
                <img src="https://picsum.photos/seed/karen-work/600/800" alt="Work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square bg-accent-blue/20 rounded-[2rem] flex items-center justify-center p-8 text-center">
                <p className="text-sm font-medium text-nude-500 italic">“Organization is the key to scaling any vision.”</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square bg-pastel-peach rounded-[2rem] flex items-center justify-center p-8 text-center">
                <p className="text-sm font-medium text-nude-500 italic">“I handle the details so you can handle the strategy.”</p>
              </div>
              <div className="aspect-[3/4] bg-soft-blue rounded-[2rem] overflow-hidden">
                <img src="https://picsum.photos/seed/karen-office/600/800" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-nude-500">How I Support Your Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Executive Support",
                icon: <Clock className="w-8 h-8" />,
                items: ["Email & calendar management", "Inbox organization", "Scheduling & coordination"],
                color: "bg-soft-blue/30"
              },
              {
                title: "Operations & Admin",
                icon: <BarChart3 className="w-8 h-8" />,
                items: ["Data tracking & reporting (Excel)", "Payroll/admin support", "Workflow & process organization"],
                color: "bg-pastel-sage/30"
              },
              {
                title: "Customer Support",
                icon: <Headset className="w-8 h-8" />,
                items: ["Handling inquiries", "Retention & billing support", "Professional communication"],
                color: "bg-accent-blue/20"
              },
              {
                title: "Creative Support",
                icon: <Palette className="w-8 h-8" />,
                items: ["Social media assistance", "Canva design (invitations, posts)"],
                color: "bg-pastel-peach/30"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-nude-50 p-8 rounded-[3rem] border border-nude-100 hover:shadow-xl hover:shadow-nude-200/30 transition-all group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-nude-500 group-hover:text-white transition-colors text-nude-400`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-nude-500">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-nude-400">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                      <span className="text-xs leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 bg-nude-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">
                <Layout className="w-4 h-4" />
                <span>Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-nude-500">Work Samples</h2>
            </div>
            <p className="text-xl text-nude-300 max-w-md font-light">
              Proving efficiency through structured systems and proactive management.
            </p>
          </div>

          <div className="space-y-32">
            {/* Case Study 1: Customer Support Optimization */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[3rem] border border-nude-100 shadow-sm"
              >
                <div className="bg-nude-50 rounded-2xl shadow-inner overflow-hidden border border-nude-100">
                  <div className="bg-nude-500 p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] text-nude-100 uppercase tracking-widest font-bold">Case Study: Support Ops</span>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">Challenge</p>
                      <p className="text-sm text-nude-500 font-medium">High inquiry volume causing 48h delays and low CSAT.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">Action</p>
                      <p className="text-sm text-nude-500 font-medium">Audited channels, built knowledge base, and automated macros.</p>
                    </div>
                    <div className="p-4 bg-pastel-sage rounded-xl border border-green-100">
                      <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-1">Result</p>
                      <p className="text-lg font-bold text-green-800">Response time reduced to under 4 hours (30% efficiency gain)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold mb-6 text-nude-500">Customer Support Optimization</h3>
                <p className="text-lg text-nude-400 font-light leading-relaxed mb-8">
                  I transformed a bottlenecked support system into a high-efficiency machine, increasing customer satisfaction scores by 15% within the first month.
                </p>
                <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest text-accent-blue">
                  <div className="w-12 h-[1px] bg-accent-blue" />
                  <span>Impact & Outcomes</span>
                </div>
              </motion.div>
            </div>

            {/* Case Study 2: Administrative Workflow Improvement */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:order-2 bg-white p-8 rounded-[3rem] border border-nude-100 shadow-sm"
              >
                <div className="bg-nude-50 rounded-2xl shadow-inner overflow-hidden border border-nude-100 p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">Challenge</p>
                      <p className="text-sm text-nude-500 font-medium">Fragmented scheduling and manual expense tracking.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">Action</p>
                      <p className="text-sm text-nude-500 font-medium">Centralized scheduling and standardized reporting processes.</p>
                    </div>
                    <div className="p-4 bg-soft-blue rounded-xl border border-blue-100">
                      <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Result</p>
                      <p className="text-lg font-bold text-blue-800">10 hours/week saved for CEO & zero scheduling conflicts</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:order-1"
              >
                <h3 className="text-3xl font-semibold mb-6 text-nude-500">Administrative Workflow Improvement</h3>
                <p className="text-lg text-nude-400 font-light leading-relaxed mb-8">
                  I implemented structured systems that allowed the executive team to focus on high-level strategy instead of administrative friction.
                </p>
                <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest text-accent-blue">
                  <div className="w-12 h-[1px] bg-accent-blue" />
                  <span>Systems & Structure</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-nude-500">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Karen is incredibly organized, proactive, and always one step ahead. She made a huge difference in how we manage daily operations.",
                author: "CEO, Tech Startup",
                focus: "Organization"
              },
              {
                quote: "Reliable and efficient. Karen's communication is top-notch, and she always delivers results on time. A true asset to any team.",
                author: "Founder, Creative Agency",
                focus: "Communication"
              },
              {
                quote: "The best EA I've worked with. She brings structure to chaos and allows me to focus on growth. Highly dependable.",
                author: "Director of Operations",
                focus: "Reliability"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-nude-50 p-10 rounded-[3rem] border border-nude-100 flex flex-col justify-between"
              >
                <div>
                  <div className="text-accent-blue mb-6">
                    <MessageSquare className="w-8 h-8 fill-accent-blue/20" />
                  </div>
                  <p className="text-lg text-nude-400 font-light italic leading-relaxed mb-8">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-white text-accent-blue rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-nude-100">
                    {testimonial.focus}
                  </div>
                  <p className="font-bold text-nude-500">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-nude-500 text-white rounded-t-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] aspect-square bg-white/5 rounded-full blur-3xl -z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-nude-200 mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Contact</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-10 leading-tight">
                Let’s work <br />
                <span className="text-nude-200 italic">together</span>.
              </h2>
              <p className="text-xl text-nude-100 font-light mb-12 max-w-md">
                Ready to reclaim your time? Let's discuss how I can support your business operations and help you scale.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:karendoria51@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-nude-500 transition-all">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">karendoria51@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/karenjoydoria/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-nude-500 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 p-10 rounded-[3rem] border border-white/20 backdrop-blur-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nude-200">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nude-200">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nude-200">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell me about your project" />
                </div>
                <button className="w-full bg-white text-nude-500 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-nude-100 transition-colors mt-8 shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-nude-200 text-sm">
            <p>© 2026 Karen Joy Doria. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

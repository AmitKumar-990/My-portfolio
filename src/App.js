import React, { useState } from 'react';
import { Mail, MessageCircle, X, Download, Send } from 'lucide-react';

export default function Portfolio() {
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 88; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Amit_Resume.pdf';
    link.download = 'Amit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 animate-gradient"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <style>{`
        @keyframes gradient {
          0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
        .animate-gradient {
          animation: gradient 15s linear infinite;
          width: 200%;
          height: 200%;
          position: absolute;
          top: 50%;
          left: 50%;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Navbar - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-black/60 border-b border-gray-800/30">
        {/* Profile Photo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 p-0.5">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xl font-bold">
              <img 
                src="/me.jpg" 
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex gap-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-purple-400 transition-colors duration-300 font-medium text-gray-300 text-lg"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-purple-400 transition-colors duration-300 font-medium text-gray-300 text-lg"
          >
            Projects
          </button>
          <button 
            onClick={() => setShowContactModal(true)}
            className="hover:text-purple-400 transition-colors duration-300 font-medium text-gray-300 text-lg"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main id="home" className="relative z-10 container mx-auto px-8">
        <div className="flex items-center justify-between gap-16 max-w-7xl mx-auto min-h-screen">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Amit Gupta
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              I'm a Full Stack Developer & Creative Designer passionate about building beautiful, 
              functional web experiences. I transform ideas into elegant digital solutions 
              that make a difference. With expertise in modern technologies and a keen eye 
              for design, I create seamless user experiences that captivate and engage.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => setShowContactModal(true)}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg shadow-purple-900/50"
              >
                <Send size={20} />
                Contact Me
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-8 py-4 border-2 border-purple-700 rounded-full hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105 font-semibold text-gray-300">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 via-indigo-700 to-violet-700 blur-2xl opacity-40"></div>
              
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 pulse-ring"></div>
              
              {/* Main photo container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-purple-700 via-indigo-700 to-violet-700 p-1">
                <div className="w-full h-full rounded-full bg-black p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 overflow-hidden">
                    <img 
                      src="/me.jpg" 
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-700 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-700 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-200">Projects</h2>
          <p className="text-gray-500 mb-8">Coming soon...</p>
          
          {/* Back to Home Button */}
          <button 
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg shadow-purple-900/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-950 to-black rounded-2xl p-8 max-w-md w-full mx-4 border border-purple-900/50 shadow-2xl shadow-purple-900/30 relative">
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:amitguptaaa99@gmail.com"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-950/30 to-indigo-950/30 rounded-xl hover:from-purple-900/40 hover:to-indigo-900/40 transition-all duration-300 border border-purple-900/40 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Email</p>
                  <p className="text-sm text-gray-500">amitguptaaa99@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/7018390589"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-950/30 to-emerald-950/30 rounded-xl hover:from-green-900/40 hover:to-emerald-900/40 transition-all duration-300 border border-green-900/40 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-200">WhatsApp</p>
                  <p className="text-sm text-gray-500">7018390589</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
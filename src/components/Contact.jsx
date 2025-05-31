import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, ChevronRight, ExternalLink, ArrowDown, Users, Sparkles, GraduationCap, Award } from 'lucide-react';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      // Replace the URL below with your own API endpoint
      const response = await fetch('https://crodlin-website.vercel.app/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData);
        setShowError(true);
        setTimeout(() => setShowError(false), 4000);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <motion.section 
      id="ContactSection"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 mb-20"
    >
      {/* Toast Notifications */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-green-500/90 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Message sent successfully!
          </div>
        </motion.div>
      )}
      
      {showError && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-red-500/90 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Failed to send message. Please try again.
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={itemVariants}
          className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Background patterns and effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-ai-blue-900/20 via-transparent to-ai-teal-900/20" />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-ai-blue-500/10 to-ai-blue-500/5 blur-2xl"
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-ai-teal-500/10 to-ai-teal-500/5 blur-2xl"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center mb-8">
                  <div className="mr-4 p-3 rounded-full bg-gradient-to-r from-ai-blue-500/20 to-ai-teal-500/20 backdrop-blur-md">
                    <Mail className="w-6 h-6 text-ai-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ai-blue-500 to-ai-teal-500">
                    Get in Touch
                  </h2>
                </div>
                
                <p className="text-lg text-neutral-300 mb-10 max-w-lg">
                  Have questions or feedback? We'd love to hear from you. Reach out to our team using any of the methods below.
                </p>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10 group-hover:border-white/20">
                      <Mail className="w-6 h-6 text-ai-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email Us</h3>
                      <a href="mailto:connect@crodlin.in" className="text-neutral-400 group-hover:text-ai-blue-400 transition-colors">
                        connect@crodlin.in
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10 group-hover:border-white/20">
                      <MapPin className="w-6 h-6 text-ai-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Location</h3>
                      <span className="text-neutral-400 group-hover:text-white transition-colors">
                        Mumbai, India
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-white font-medium mb-4">Connect with us</h3>
                  <div className="flex items-center gap-4">
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#" 
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/40 to-ai-teal-500/40 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                      <div className="relative p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <Github className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#" 
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/40 to-ai-teal-500/40 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                      <div className="relative p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <Twitter className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#" 
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/40 to-ai-teal-500/40 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                      <div className="relative p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <Linkedin className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.7 }
                  }
                }}
                className="relative"
              >
                <div className="absolute inset-0 -m-2 bg-gradient-to-r from-ai-blue-500/20 to-ai-teal-500/20 rounded-xl blur-xl opacity-70" />
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-medium text-white mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-ai-blue-500/50 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-ai-blue-500/50 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-ai-blue-500/50 focus:border-transparent transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-ai-blue-500/50 focus:border-transparent transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 10px 30px -10px rgba(2, 132, 199, 0.5)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-ai-blue-500 to-ai-teal-500 text-white font-medium flex items-center justify-center hover:from-ai-blue-600 hover:to-ai-teal-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <ChevronRight className="w-5 h-5 ml-1" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
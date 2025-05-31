import React from "react";
import { motion } from "framer-motion";

const TechStackSection = () => {
  const techs = [
    { name: "TensorFlow", icon: "🤖" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "OpenAI", icon: "🧠" },
    { name: "Keras", icon: "⚡" },
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Jupyter", icon: "📝" },
    { name: "Matplotlib", icon: "📈" },
    { name: "Seaborn", icon: "🎨" },
    { name: "NLTK", icon: "📚" },
    { name: "SpaCy", icon: "🔍" },
    { name: "FastAI", icon: "⚡" },
    { name: "Transformers", icon: "🔄" },
    { name: "DALL-E", icon: "🎨" },
    { name: "Stable Diffusion", icon: "✨" },
    { name: "LangChain", icon: "⛓️" },
  ];

  // Duplicate techs for seamless infinite scroll
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-black/90 to-black border-t border-glass-border">
      {/* Animation keyframes and styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .scroll-animation {
          animation: scroll 20s linear infinite; /* adjust speed by changing 10s */
        }
      `}</style>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-blue-900/5 to-transparent" />

      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-ai-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ai-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-heading text-3xl md:text-5xl font-bold mb-6 font-heading"
          >
            Master Today's <span className="ai-gradient-text">Leading AI Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-body text-lg text-neutral-accent max-w-2xl mx-auto font-sans"
          >
            Stay ahead of the curve with our comprehensive curriculum covering the latest AI tools and frameworks.
          </motion.p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex scroll-animation w-max">
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-4"
              >
                <div className="glass p-6 rounded-xl w-[200px] text-center group hover:border-ai-teal-500/30 transition-all duration-300 font-sans">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-heading font-semibold text-neutral-text group-hover:text-ai-teal-400 transition-colors font-heading">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </div>
  );
};

export default TechStackSection;

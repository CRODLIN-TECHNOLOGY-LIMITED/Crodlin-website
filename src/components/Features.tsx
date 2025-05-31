
import { motion} from "framer-motion";
import Link from "next/link";
import ScrollAnimatedSection from "./ScrollAnimatedSection";



const FeaturesSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Guided Learning",
      description: "Personalized path adapts to your pace and learning style with AI-driven recommendations.",
      color: "from-ai-blue-500/20 to-ai-blue-500/5",
      borderColor: "group-hover:border-ai-blue-500/50",
    },
    {
      icon: "💻",
      title: "Interactive Code Labs",
      description: "Practice in real-time with our integrated code environment and get instant feedback.",
      color: "from-ai-teal-500/20 to-ai-teal-500/5",
      borderColor: "group-hover:border-ai-teal-500/50",
    },
    {
      icon: "🏆",
      title: "Project-Based Courses",
      description: "Build real-world AI projects that you can showcase in your professional portfolio.",
      color: "from-ai-purple-500/20 to-ai-purple-500/5",
      borderColor: "group-hover:border-ai-purple-500/50",
    },
    {
      icon: "👥",
      title: "Community Collaboration",
      description: "Connect with peers, mentors, and experts in our thriving AI learning community.",
      color: "from-rose-500/20 to-rose-500/5",
      borderColor: "group-hover:border-rose-500/50",
    },
  ];

  return (
    <div className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimatedSection className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full mb-4"
          >
            Learn Smarter, Not Harder
          </motion.span>
          <motion.h2
            className="text-heading text-3xl md:text-5xl font-bold mb-6 font-heading"
          >
            The <span className="ai-gradient-text">Future of Learning</span> is Here
          </motion.h2>
          <motion.p
            className="text-body text-lg text-neutral-accent max-w-2xl mx-auto font-sans"
          >
            Our platform combines cutting-edge technology with proven educational methods
            to deliver an unparalleled learning experience.
          </motion.p>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`group relative bg-transparent border border-white/10 rounded-xl overflow-hidden z-0`}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Background glow */}
                <div className="absolute inset-0 bg-black opacity-80 -z-10" />

                {/* Card content */}
                <div className="p-6 relative z-10">
                  {/* Icon with animated container */}
                  <div className="w-14 h-14 rounded-lg glass flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>

                  <h3 className="text-heading text-xl font-semibold mb-3 group-hover:text-white transition-colors font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-body text-neutral-accent group-hover:text-neutral-text transition-colors font-sans">
                    {feature.description}
                  </p>

                  {/* Animated learn more link */}
                  <div className="mt-5 overflow-hidden">
                    <Link href="/Login">
                      <button className="text-ai-blue-400 flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-10 h-10 border-t border-r ${feature.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute bottom-0 left-0 w-10 h-10 border-b border-l ${feature.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            </ScrollAnimatedSection>
          ))}
        </div>

        <ScrollAnimatedSection className="mt-16 text-center">
          <Link href="/Login">
            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-ai-blue-500/10">
              Explore All Features
              <span className="ml-2">→</span>
            </button>
          </Link>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};



export default FeaturesSection;
import { motion } from 'framer-motion';
import { Target, Users, Shield, TrendingUp, Search, Award, Headphones, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <StorySection />
      <CoreValues />
      <StatsSection />
      <TeamSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Back-Office,{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Handled.
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Helping dental teams maximize revenue and minimize admin load
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Oppulence, we're dedicated to transforming dental revenue cycle management by providing 
              expert remote teams that seamlessly integrate with your practice. We believe dental professionals 
              should spend their time caring for patients, not chasing claims.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Oppulence began as <strong>WIN Remote Services</strong>, founded with a simple vision: to help 
              dental practices reclaim their time and revenue through expert remote support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As we grew and evolved, we recognized the need for a brand that truly reflected our commitment 
              to excellence and prosperity for our clients. Thus, Oppulence was born—a refreshed identity 
              that represents our elevated approach to dental RCM.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're proud to serve over 200 dental practices across the country, handling thousands 
              of insurance verifications and payment postings daily. Our journey from WIN to Oppulence 
              represents our ongoing commitment to continuous improvement and delivering opulent results 
              for every practice we serve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreValues() {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Precision in every claim, verification, and posting',
    },
    {
      icon: Headphones,
      title: 'Communication',
      description: 'Clear, consistent updates and responsive support',
    },
    {
      icon: Lock,
      title: 'Confidentiality',
      description: 'HIPAA-compliant security for all patient data',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Always evolving to optimize your revenue cycle',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
          <p className="text-xl text-blue-200">Real results for real practices</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={200} suffix="+" />
            </div>
            <p className="text-blue-200 font-medium">Dental Offices Served</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={30000} suffix="+" />
            </div>
            <p className="text-blue-200 font-medium">Insurance Verifications</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={500000} suffix="+" />
            </div>
            <p className="text-blue-200 font-medium">Payment Postings</p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  const team = [
    {
      role: 'CEO',
      icon: Award,
      description: 'Strategic leadership & client relationships',
      color: 'from-blue-500 to-blue-600',
    },
    {
      role: 'Operations Head',
      icon: Users,
      description: 'Team management & workflow optimization',
      color: 'from-teal-500 to-teal-600',
    },
    {
      role: 'AR Specialists',
      icon: Search,
      description: 'Aging receivables & denial management',
      color: 'from-blue-600 to-teal-500',
    },
    {
      role: 'Credentialing Lead',
      icon: Shield,
      description: 'Provider enrollment & compliance',
      color: 'from-teal-600 to-blue-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

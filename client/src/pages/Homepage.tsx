import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  FileText,
  Clipboard,
  BadgeCheck,
  Puzzle,
  Globe,
  BarChart3,
  Stethoscope,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ParallaxSection } from '@/components/ParallaxSection';
import { Floating3DIcon } from '@/components/Floating3DIcon';
import { ParticleBackground } from '@/components/ParticleBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <WhyOppulence />
      <ServicesSnapshot />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleBackground />
            <Floating3DIcon position={[-3, 2, 0]} color="#06b6d4" icon="shield" delay={0} />
            <Floating3DIcon position={[3, -1, 0]} color="#3b82f6" icon="document" delay={1} />
            <Floating3DIcon position={[-2, -2, 0]} color="#0ea5e9" icon="clock" delay={2} />
            <Floating3DIcon position={[2, 2, 0]} color="#06b6d4" icon="badge" delay={1.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <ParallaxSection speed={-0.3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Chasing Claims.
              <br />
              <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                Start Collecting Faster.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
              Remote RCM experts for dental practices. We recover your revenue while you focus on patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Get a Free RCM Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link to="/services">See Services</Link>
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">Takes 2 minutes — no obligation</p>
          </motion.div>
        </ParallaxSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

function TrustBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={200} suffix="+" />
            </div>
            <p className="text-gray-600 font-medium">Dental Practices Served</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={30000} suffix="+" />
            </div>
            <p className="text-gray-600 font-medium">Insurance Verifications</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={500000} suffix="+" />
            </div>
            <p className="text-gray-600 font-medium">Payment Postings</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyOppulence() {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Stethoscope,
      title: 'Dental-first expertise',
      description: 'Purpose-built for dental billing complexities.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: 'Remote, reliable teams',
      description: 'We act as an extension of your office.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: BarChart3,
      title: 'Transparent results',
      description: 'Clear reporting, measurable revenue gains.',
      color: 'from-blue-600 to-teal-500',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Oppulence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in dental revenue cycle management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500">
            <Link to="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSnapshot() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Shield,
      title: 'Insurance Verification',
      description: 'Complete benefit checks before visits.',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: 'AR Support',
      description: 'Denials, follow-ups, aging reduction.',
      color: 'bg-teal-500',
    },
    {
      icon: FileText,
      title: 'Payment Posting',
      description: 'EOB posting, adjustments, reconciliation.',
      color: 'bg-blue-600',
    },
    {
      icon: Clipboard,
      title: 'Claims Submission',
      description: 'Clean claims, resubmissions, appeals.',
      color: 'bg-teal-600',
    },
    {
      icon: BadgeCheck,
      title: 'Credentialing',
      description: 'Provider enrollment & re-credentialing.',
      color: 'bg-blue-500',
    },
    {
      icon: Puzzle,
      title: 'Special Projects',
      description: 'Clean-ups, migrations, custom RCM.',
      color: 'bg-teal-500',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive RCM solutions tailored for dental practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'Discovery & Onboarding',
      description: 'We learn your practice, workflows, and goals.',
    },
    {
      number: '02',
      title: 'Dedicated Team Alignment',
      description: 'Your custom RCM team is assigned and trained.',
    },
    {
      number: '03',
      title: 'Daily/Weekly Reporting',
      description: 'Transparent metrics and regular check-ins.',
    },
    {
      number: '04',
      title: 'Continuous Optimization',
      description: 'We refine processes for maximum revenue.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Simple, proven process to transform your revenue cycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-200">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Oppulence cut our AR days in half. Their team feels like part of our clinic.",
      author: "Dr. Singh",
      role: "DSO Owner",
    },
    {
      quote: "The best investment we've made for our practice. Revenue is up, stress is down.",
      author: "Dr. Martinez",
      role: "Practice Owner",
    },
    {
      quote: "Professional, responsive, and results-driven. Highly recommend Oppulence.",
      author: "Dr. Johnson",
      role: "Multi-location Practice",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <CheckCircle className="w-12 h-12 text-teal-500" />
                  </div>
                  <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

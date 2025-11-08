import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Floating3DIcon } from '@/components/Floating3DIcon';
import { Link } from 'react-router-dom';

export default function CredentialingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImportanceSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[-10, 10, 5]} intensity={0.5} />
            <Floating3DIcon position={[0, 0, 0]} color="#8b5cf6" icon="badge" delay={0} />
            <Floating3DIcon position={[-3, 1, -2]} color="#6366f1" icon="badge" delay={1} />
            <Floating3DIcon position={[3, -1, -2]} color="#3b82f6" icon="badge" delay={2} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <BadgeCheck className="w-16 h-16 text-purple-300" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Credentialing
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Provider enrollment and re-credentialing. Stay compliant and expand your network.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
            <Link to="/contact">
              Start Enrollment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ImportanceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay current with all payer requirements',
    },
    {
      icon: BadgeCheck,
      title: 'Network Expansion',
      description: 'Get credentialed with more insurance panels',
    },
    {
      icon: CheckCircle,
      title: 'Avoid Disruptions',
      description: 'Never miss a re-credentialing deadline',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Credentialing Matters</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proper credentialing is essential for accepting insurance and maintaining your practice's reputation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    'Initial provider enrollment',
    'Re-credentialing coordination',
    'CAQH profile management',
    'Payer contract tracking',
    'Application preparation and submission',
    'Follow-up and status monitoring',
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Credentialing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Average Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">60-120</div>
                  <p className="text-gray-700">Days for Initial Credentialing</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">90</div>
                  <p className="text-gray-700">Days Before Expiry We Start Re-credentialing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold mb-6">Need Credentialing Support?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our credentialing experts handle the complex paperwork while you focus on patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link to="/contact">Start Your Enrollment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

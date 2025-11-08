import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Floating3DIcon } from '@/components/Floating3DIcon';
import { Link } from 'react-router-dom';

export default function InsuranceVerificationPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <DeliverablesSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[-10, 10, 5]} intensity={0.5} />
            <Floating3DIcon position={[0, 0, 0]} color="#0ea5e9" icon="shield" delay={0} />
            <Floating3DIcon position={[-3, 1, -2]} color="#06b6d4" icon="shield" delay={1} />
            <Floating3DIcon position={[3, -1, -2]} color="#3b82f6" icon="shield" delay={2} />
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
            <Shield className="w-16 h-16 text-teal-300" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Insurance Verification
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Complete benefit checks before visits. Eliminate surprises and ensure smooth patient experiences.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      title: 'Reduce No-Shows',
      description: 'Patients know their coverage before they arrive',
    },
    {
      title: 'Faster Collections',
      description: 'Accurate estimates lead to better payment rates',
    },
    {
      title: 'Less Rework',
      description: 'Get it right the first time, every time',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why It Matters</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
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

function DeliverablesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const deliverables = [
    'Real-time eligibility verification',
    'Coverage details and limitations',
    'Pre-authorization coordination',
    'Patient benefit breakdowns',
    'Deductible and max tracking',
    'Secondary insurance verification',
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Verification?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts handle insurance verification while you focus on patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link to="/contact">Schedule a Call</Link>
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

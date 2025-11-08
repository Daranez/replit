import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Floating3DIcon } from '@/components/Floating3DIcon';
import { Link } from 'react-router-dom';

export default function ARSupportPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-blue-700">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[-10, 10, 5]} intensity={0.5} />
            <Floating3DIcon position={[0, 0, 0]} color="#14b8a6" icon="clock" delay={0} />
            <Floating3DIcon position={[-3, 1, -2]} color="#0ea5e9" icon="clock" delay={1} />
            <Floating3DIcon position={[3, -1, -2]} color="#06b6d4" icon="clock" delay={2} />
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
            <Clock className="w-16 h-16 text-teal-300" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              AR Support
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Recover Aging Receivables Faster. Denials, follow-ups, and aging reduction expertise.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
            <Link to="/contact">
              Start Recovery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-xl text-gray-600">See how we help practices reduce AR days</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">AR Days Reduced</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 font-semibold">Before Oppulence</span>
                        <span className="font-bold text-red-600">60 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6">
                        <div className="bg-red-500 h-6 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 font-semibold">After Oppulence</span>
                        <span className="font-bold text-teal-600">30 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6">
                        <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-6 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <TrendingDown className="w-20 h-20 text-teal-600 mx-auto mb-4" />
                  <div className="text-7xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    50%
                  </div>
                  <p className="text-2xl text-gray-700 font-semibold">Faster Cash Flow</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    'Analyze aging buckets and identify priorities',
    'Follow up with insurance companies systematically',
    'Handle denial management and appeals',
    'Work patient balances with proven scripts',
    'Provide weekly AR aging reports',
    'Continuous optimization of collection strategies',
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our AR Process</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700">{step}</p>
                  </CardContent>
                </Card>
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold mb-6">See AR Success Stories</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join practices that have cut their AR days in half with our expert support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link to="/contact">Get Your AR Audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link to="/services">Explore Other Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

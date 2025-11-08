import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Clipboard, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Floating3DIcon } from '@/components/Floating3DIcon';
import { Link } from 'react-router-dom';

export default function ClaimsSubmissionPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyCleanClaims />
      <ServiceDetails />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-700">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[-10, 10, 5]} intensity={0.5} />
            <Floating3DIcon position={[0, 0, 0]} color="#06b6d4" icon="clipboard" delay={0} />
            <Floating3DIcon position={[-3, 1, -2]} color="#14b8a6" icon="clipboard" delay={1} />
            <Floating3DIcon position={[3, -1, -2]} color="#0ea5e9" icon="clipboard" delay={2} />
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
            <Clipboard className="w-16 h-16 text-cyan-300" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Claims Submission
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Clean claims, resubmissions, and appeals. Maximize your first-pass acceptance rate.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
            <Link to="/contact">
              Start Filing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function WhyCleanClaims() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Power of Clean Claims</h2>
          <p className="text-xl text-gray-600 mb-12">
            Every claim error costs you time and money. Our meticulous claim scrubbing ensures maximum acceptance rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-teal-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-teal-600 mb-4">95%+</div>
                <p className="text-gray-700">First-Pass Acceptance Rate</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-teal-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-teal-600 mb-4">24-48h</div>
                <p className="text-gray-700">Typical Submission Turnaround</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-teal-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-teal-600 mb-4">100%</div>
                <p className="text-gray-700">Electronic Filing Coverage</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceDetails() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    'Electronic claims filing',
    'Claim scrubbing and validation',
    'Attachment coordination',
    'Resubmission management',
    'Appeal letter preparation',
    'Denial pattern analysis',
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, index) => (
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold mb-6">Ready for Clean Claims?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop losing revenue to claim errors. Let our experts handle submissions with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link to="/contact">Get Started Today</Link>
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

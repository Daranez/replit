import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Floating3DIcon } from '@/components/Floating3DIcon';
import { Link } from 'react-router-dom';

export default function SpecialProjectsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectTypesSection />
      <ExamplesSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-700">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[-10, 10, 5]} intensity={0.5} />
            <Floating3DIcon position={[0, 0, 0]} color="#f59e0b" icon="puzzle" delay={0} />
            <Floating3DIcon position={[-3, 1, -2]} color="#fb923c" icon="puzzle" delay={1} />
            <Floating3DIcon position={[3, -1, -2]} color="#fbbf24" icon="puzzle" delay={2} />
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
            <Puzzle className="w-16 h-16 text-amber-300" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Special Projects
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-2xl">
            Custom RCM solutions for unique challenges. Clean-ups, migrations, and specialized workflows.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50 text-lg px-8 py-6">
            <Link to="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectTypesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const projectTypes = [
    {
      icon: Zap,
      title: 'AR Clean-Up Initiatives',
      description: 'Comprehensive aging receivables recovery campaigns',
      examples: ['Old AR analysis', 'Bulk claim follow-ups', 'Write-off optimization'],
    },
    {
      icon: Puzzle,
      title: 'System Migrations',
      description: 'Smooth transitions between practice management systems',
      examples: ['Data mapping', 'Historical claim transfers', 'Workflow setup'],
    },
    {
      icon: CheckCircle,
      title: 'Custom Reporting',
      description: 'Tailored analytics and KPI dashboards for your practice',
      examples: ['Production reports', 'Payer analysis', 'Custom metrics'],
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Can Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every practice has unique needs. We build custom solutions that work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectTypes.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-amber-500 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="space-y-2">
                    {project.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
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

function ExamplesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Recent Success Stories</h2>

          <div className="space-y-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Practice Acquisition Integration</h3>
                <p className="text-gray-600 mb-4">
                  When a DSO acquired three new practices, we consolidated their RCM processes into a single streamlined workflow, migrated all historical data, and trained the new team in 45 days.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">3 systems merged</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">Zero revenue disruption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">45-day completion</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">6-Year AR Recovery</h3>
                <p className="text-gray-600 mb-4">
                  A practice with $180K in aged AR (3-6 years old) needed a comprehensive recovery effort. We recovered $94K over 90 days through systematic claim research and appeals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">$94K recovered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">52% recovery rate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">90-day timeline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-orange-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold mb-6">Have a Unique RCM Challenge?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            We love solving complex problems. Tell us what you need, and we'll build a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link to="/services">View Standard Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

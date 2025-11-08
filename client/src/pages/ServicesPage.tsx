import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  FileText,
  Clipboard,
  BadgeCheck,
  Puzzle,
  Building2,
  Users,
  Stethoscope,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IndustriesWeServe />
      <ServicesGrid />
      <SuccessMetrics />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive RCM{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tailored revenue cycle management services for every dental practice
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesWeServe() {
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    {
      icon: Building2,
      title: 'Solo Practices',
      description: 'Personalized RCM support for independent dentists',
      benefits: ['Flexible solutions', 'Cost-effective', 'Dedicated specialist'],
    },
    {
      icon: Users,
      title: 'Multi-location Groups',
      description: 'Scalable systems for growing dental organizations',
      benefits: ['Centralized reporting', 'Standardized processes', 'Volume efficiency'],
    },
    {
      icon: Stethoscope,
      title: 'Specialty Clinics',
      description: 'Expert handling for Ortho, Endo, and Oral Surgery',
      benefits: ['Specialty coding expertise', 'Complex case management', 'Insurance navigation'],
    },
    {
      icon: Sparkles,
      title: 'Startups/New Practices',
      description: 'Foundation-building for emerging dental practices',
      benefits: ['Setup assistance', 'Growth-ready systems', 'Training included'],
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized support for every type of dental practice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Shield,
      title: 'Insurance Verification',
      description: 'Complete benefit checks before visits',
      deliverables: [
        'Real-time eligibility verification',
        'Coverage details and limitations',
        'Pre-authorization coordination',
        'Patient benefit breakdowns',
      ],
      color: 'from-blue-500 to-blue-600',
      link: '/services/insurance-verification',
    },
    {
      icon: Clock,
      title: 'AR Support',
      description: 'Denials, follow-ups, aging reduction',
      deliverables: [
        'Aging receivables management',
        'Denial analysis and appeals',
        'Insurance follow-up calls',
        'Collection optimization',
      ],
      color: 'from-teal-500 to-teal-600',
      link: '/services/ar-support',
    },
    {
      icon: FileText,
      title: 'Payment Posting',
      description: 'EOB posting, adjustments, reconciliation',
      deliverables: [
        'Daily EOB posting',
        'Payment reconciliation',
        'Adjustment tracking',
        'Variance reporting',
      ],
      color: 'from-blue-600 to-teal-500',
      link: '/services/payment-posting',
    },
    {
      icon: Clipboard,
      title: 'Claims Submission',
      description: 'Clean claims, resubmissions, appeals',
      deliverables: [
        'Electronic claims filing',
        'Claim scrubbing and validation',
        'Resubmission management',
        'Appeal letter preparation',
      ],
      color: 'from-teal-600 to-blue-600',
      link: '/services/claims-submission',
    },
    {
      icon: BadgeCheck,
      title: 'Credentialing',
      description: 'Provider enrollment & re-credentialing',
      deliverables: [
        'Initial provider enrollment',
        'Re-credentialing coordination',
        'CAQH profile management',
        'Payer contract tracking',
      ],
      color: 'from-blue-500 to-teal-500',
      link: '/services/credentialing',
    },
    {
      icon: Puzzle,
      title: 'Special Projects',
      description: 'Clean-ups, migrations, custom RCM',
      deliverables: [
        'AR clean-up initiatives',
        'Practice management system migrations',
        'Custom reporting solutions',
        'Workflow optimization',
      ],
      color: 'from-teal-500 to-blue-500',
      link: '/services/special-projects',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end RCM solutions for dental practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.link}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white cursor-pointer group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Deliverables:</h4>
                      <ul className="space-y-3 mb-6">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-teal-600 transition-colors">
                        Learn More <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SuccessMetrics() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Success Story Example</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Real results from our AR Support service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">AR Days Reduced</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-200">Before</span>
                        <span className="font-bold">60 days</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-4">
                        <div className="bg-red-500 h-4 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-200">After</span>
                        <span className="font-bold">30 days</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-4">
                        <div className="bg-gradient-to-r from-teal-400 to-blue-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent mb-4">
                    50%
                  </div>
                  <p className="text-xl text-blue-100">Improvement in Cash Flow</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Link to="/contact">See How We Can Help Your Practice</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Laptop, GraduationCap, TrendingUp, DollarSign, Heart, Users, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyWorkWithUs />
      <Perks />
      <OpenRoles />
      <ApplicationSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
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
            Join Oppulence —{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Where Dental Care Meets Revenue Clarity
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Build your career with a growing team dedicated to transforming dental RCM
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyWorkWithUs() {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and work-life balance',
      icon: Laptop,
    },
    {
      title: 'Career Growth',
      description: 'Clear progression paths with opportunities to lead and specialize',
      icon: TrendingUp,
    },
    {
      title: 'Industry Exposure',
      description: 'Gain expertise in multiple practice management systems',
      icon: GraduationCap,
    },
    {
      title: 'Supportive Environment',
      description: 'Collaborative team culture with mentorship and ongoing training',
      icon: Heart,
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a team that values your growth and success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500">
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
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

function Perks() {
  const { ref, isVisible } = useScrollAnimation();

  const perks = [
    {
      icon: Laptop,
      title: 'Remote-First Flexibility',
      description: 'Work from the comfort of your home',
    },
    {
      icon: GraduationCap,
      title: 'Training & Certifications',
      description: 'Ongoing professional development',
    },
    {
      icon: TrendingUp,
      title: 'Clear Progression',
      description: 'Defined career advancement paths',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay & Benefits',
      description: 'Fair compensation and health benefits',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
          <p className="text-xl text-gray-600">We take care of our team</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <perk.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-600">{perk.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenRoles() {
  const { ref, isVisible } = useScrollAnimation();

  const roles = [
    {
      title: 'RCM Specialist',
      type: 'Full-time, Remote',
      description: 'Handle AR follow-ups, payment posting, and claim submissions',
    },
    {
      title: 'Verification Specialist',
      type: 'Full-time, Remote',
      description: 'Perform insurance eligibility and benefit verifications',
    },
    {
      title: 'Credentialing Specialist',
      type: 'Full-time, Remote',
      description: 'Manage provider enrollment and re-credentialing processes',
    },
    {
      title: 'Client Success Executive',
      type: 'Full-time, Remote',
      description: 'Build relationships and ensure client satisfaction',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600">Find your perfect role</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{role.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{role.type}</p>
                      <p className="text-gray-600">{role.description}</p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-teal-500 whitespace-nowrap">
                      Apply Now
                    </Button>
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

function ApplicationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <Users className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're looking for passionate individuals who want to make a difference in dental RCM. 
            We offer internship programs and welcome candidates from all backgrounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Mail className="mr-2 w-5 h-5" />
              careers@oppulence.com
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              View All Openings
            </Button>
          </div>
          <p className="text-sm text-blue-200">
            Oppulence is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

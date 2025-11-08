import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Start{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Growing Together
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Reach out today for a free RCM audit and discover revenue waiting in your practice
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" type="text" placeholder="John Doe" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="practice">Practice Name *</Label>
                      <Input id="practice" type="text" placeholder="ABC Dental" required className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="insurance">Insurance Verification</SelectItem>
                        <SelectItem value="ar">AR Support</SelectItem>
                        <SelectItem value="payment">Payment Posting</SelectItem>
                        <SelectItem value="claims">Claims Submission</SelectItem>
                        <SelectItem value="credentialing">Credentialing</SelectItem>
                        <SelectItem value="special">Special Projects</SelectItem>
                        <SelectItem value="all">All Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your practice and how we can help..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Best Time to Contact</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-teal-500">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:hello@oppulence.com" className="text-gray-600 hover:text-blue-600">
                        hello@oppulence.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-gray-600">
                        123 Business Plaza<br />
                        Suite 456<br />
                        Your City, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-blue-900 text-white border-0">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Schedule a Demo</h3>
                <p className="text-blue-100 mb-4">
                  Book a time that works for you to discuss your RCM needs
                </p>
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10">
                  View Calendar
                </Button>
                <p className="text-xs text-blue-200 mt-4">
                  Calendly integration placeholder
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-teal-500 text-white border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Start with a Free RCM Audit</h3>
                <p className="text-blue-50">
                  Discover revenue waiting in your practice
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BlogGrid />
      <LeadMagnet />
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
            RCM Insights &{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert tips and strategies for optimizing your dental practice revenue cycle
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const { ref, isVisible } = useScrollAnimation();

  const articles = [
    {
      title: '5 Common Dental Billing Mistakes (And How to Avoid Them)',
      excerpt: 'Learn about the most frequent errors in dental billing and practical strategies to prevent revenue loss.',
      author: 'Oppulence Team',
      date: 'Nov 1, 2025',
      category: 'Best Practices',
      image: 'from-blue-500 to-blue-600',
    },
    {
      title: 'How to Reduce AR Days from 60 to 30',
      excerpt: 'A step-by-step guide to improving your accounts receivable turnover and accelerating cash flow.',
      author: 'Oppulence Team',
      date: 'Oct 25, 2025',
      category: 'AR Management',
      image: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Insurance Verification Best Practices for 2025',
      excerpt: 'Stay ahead with the latest strategies for efficient and accurate insurance verification processes.',
      author: 'Oppulence Team',
      date: 'Oct 18, 2025',
      category: 'Verification',
      image: 'from-blue-600 to-teal-500',
    },
    {
      title: 'Understanding Dental Insurance: A Practice Guide',
      excerpt: 'Navigate the complexities of dental insurance with confidence using this comprehensive guide.',
      author: 'Oppulence Team',
      date: 'Oct 10, 2025',
      category: 'Education',
      image: 'from-teal-600 to-blue-600',
    },
    {
      title: 'The ROI of Outsourcing Your Dental RCM',
      excerpt: 'Discover the financial benefits and efficiency gains of partnering with RCM experts.',
      author: 'Oppulence Team',
      date: 'Oct 3, 2025',
      category: 'Business',
      image: 'from-blue-500 to-teal-500',
    },
    {
      title: 'Credentialing Checklist: What Every Dentist Needs',
      excerpt: 'Essential steps and documentation required for smooth provider credentialing and enrollment.',
      author: 'Oppulence Team',
      date: 'Sep 26, 2025',
      category: 'Credentialing',
      image: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${article.image} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="relative z-10 text-white text-center p-6">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <Button variant="link" className="p-0 text-blue-600 group-hover:text-teal-600">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
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

function LeadMagnet() {
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Download className="w-16 h-16 text-teal-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">Free RCM Audit Checklist</h2>
                <p className="text-xl text-blue-100">
                  Download our comprehensive checklist to identify revenue leaks in your practice
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  required
                />
                <Input
                  type="text"
                  placeholder="Practice Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  required
                />
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                  <Download className="mr-2 w-5 h-5" />
                  Download Free Checklist
                </Button>
              </form>

              <p className="text-sm text-blue-200 text-center mt-6">
                We respect your privacy. Your information will never be shared.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

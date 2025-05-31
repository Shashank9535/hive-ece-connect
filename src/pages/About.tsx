
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Code, 
  Database,
  Shield,
  Zap,
  Monitor,
  Smartphone
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Student Management",
      description: "Comprehensive student information system with profile management, academic records, and communication tools."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Academic Module",
      description: "Complete academic management including course registration, attendance tracking, and grade management."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Assessment & Evaluation",
      description: "Robust assessment system for assignments, examinations, and continuous evaluation with detailed analytics."
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Communication Hub",
      description: "Integrated communication platform for announcements, notices, and real-time updates."
    },
    {
      icon: <Monitor className="h-8 w-8 text-red-600" />,
      title: "Digital Resources",
      description: "Centralized digital library with notes, study materials, and multimedia content."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Security & Privacy",
      description: "Enterprise-grade security with role-based access control and data protection."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend", color: "bg-blue-100 text-blue-800" },
    { name: "TypeScript", category: "Language", color: "bg-blue-100 text-blue-800" },
    { name: "Tailwind CSS", category: "Styling", color: "bg-cyan-100 text-cyan-800" },
    { name: "Shadcn UI", category: "Components", color: "bg-gray-100 text-gray-800" },
    { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-800" },
    { name: "MongoDB", category: "Database", color: "bg-green-100 text-green-800" },
    { name: "Express.js", category: "Framework", color: "bg-yellow-100 text-yellow-800" },
    { name: "Vercel", category: "Deployment", color: "bg-purple-100 text-purple-800" }
  ];

  const stats = [
    { number: "60+", label: "Active Students", icon: <Users className="h-6 w-6" /> },
    { number: "15+", label: "Subjects", icon: <BookOpen className="h-6 w-6" /> },
    { number: "100+", label: "Assignments", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "System Availability", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CampusHive</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-6 max-w-3xl">
            A comprehensive academic management platform designed specifically for Electronics and Computer Engineering students
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Eye className="h-5 w-5 mr-2" />
              Explore Features
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700">
              <Target className="h-5 w-5 mr-2" />
              Our Mission
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center border-t-4 border-t-green-500">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2 text-green-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Target className="h-6 w-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="leading-relaxed text-gray-700">
              To revolutionize academic management in engineering education by providing a unified, 
              intelligent platform that enhances student engagement, streamlines administrative processes, 
              and facilitates seamless communication between students, faculty, and administration.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Eye className="h-6 w-6" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="leading-relaxed text-gray-700">
              To become the leading academic management platform that empowers educational institutions 
              with cutting-edge technology, fostering innovation in teaching and learning while preparing 
              students for success in the digital age.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Features */}
      <Card>
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-2xl text-gray-800">Platform Features</CardTitle>
          <p className="text-gray-600">Comprehensive tools designed for modern academic management</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader className="bg-gray-50">
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Code className="h-6 w-6" />
            Technology Stack
          </CardTitle>
          <p className="text-gray-600">Built with modern, scalable technologies</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Frontend Technologies
              </h4>
              <div className="space-y-2">
                {technologies.filter(tech => tech.category === 'Frontend' || tech.category === 'Language' || tech.category === 'Styling' || tech.category === 'Components').map((tech, index) => (
                  <Badge key={index} className={`${tech.color} text-xs`}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Database className="h-5 w-5" />
                Backend Technologies
              </h4>
              <div className="space-y-2">
                {technologies.filter(tech => tech.category === 'Backend' || tech.category === 'Database' || tech.category === 'Framework').map((tech, index) => (
                  <Badge key={index} className={`${tech.color} text-xs`}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Infrastructure
              </h4>
              <div className="space-y-2">
                {technologies.filter(tech => tech.category === 'Deployment').map((tech, index) => (
                  <Badge key={index} className={`${tech.color} text-xs`}>
                    {tech.name}
                  </Badge>
                ))}
                <Badge className="bg-gray-100 text-gray-800 text-xs">GitHub Actions</Badge>
                <Badge className="bg-blue-100 text-blue-800 text-xs">CI/CD Pipeline</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Architecture */}
      <Card>
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-gray-800">System Architecture</CardTitle>
          <p className="text-gray-600">Scalable and maintainable architecture design</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Frontend Architecture</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Component-based React architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  TypeScript for type safety
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Responsive design with Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Modern UI components with Shadcn
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Backend Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  RESTful API architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  MongoDB for data persistence
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  JWT-based authentication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Real-time notifications
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card>
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-gray-800">Development Team</CardTitle>
          <p className="text-gray-600">Electronics and Computer Engineering Department</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">6th Semester Project Team</h3>
            <p className="text-gray-600">Visvesvaraya Technological University</p>
            <p className="text-gray-600">Academic Year 2024-25</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-green-700">TL</span>
              </div>
              <h4 className="font-medium text-gray-800">Team Lead</h4>
              <p className="text-sm text-gray-600">Project Coordinator</p>
              <p className="text-xs text-gray-500">Full Stack Development</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-blue-700">FD</span>
              </div>
              <h4 className="font-medium text-gray-800">Frontend Dev</h4>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
              <p className="text-xs text-gray-500">React & TypeScript</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-purple-100 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-purple-700">BD</span>
              </div>
              <h4 className="font-medium text-gray-800">Backend Dev</h4>
              <p className="text-sm text-gray-600">API Developer</p>
              <p className="text-xs text-gray-500">Node.js & MongoDB</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-orange-100 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-orange-700">QA</span>
              </div>
              <h4 className="font-medium text-gray-800">QA Engineer</h4>
              <p className="text-sm text-gray-600">Testing Specialist</p>
              <p className="text-xs text-gray-500">Quality Assurance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card>
        <CardHeader className="bg-green-50">
          <CardTitle className="text-green-700">Contact & Support</CardTitle>
          <p className="text-green-600">Get in touch with our development team</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Academic Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Department: Electronics & Computer Engineering</p>
                <p>Institution: Visvesvaraya Technological University</p>
                <p>Project Guide: Dr. [Faculty Name]</p>
                <p>Email: contact@campushive.edu</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Technical Support</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>For technical issues and bug reports</p>
                <p>System availability: 24/7</p>
                <p>Response time: Within 24 hours</p>
                <p>Support: support@campushive.edu</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

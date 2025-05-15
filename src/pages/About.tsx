
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-500">About CampusHive</h2>
        <p className="text-muted-foreground mt-2">
          A comprehensive platform for ECE 6th semester students
        </p>
      </div>
      
      <Card className="border border-green-100 dark:border-green-900/30">
        <CardHeader className="bg-green-50 dark:bg-green-900/20">
          <CardTitle className="text-xl text-green-700 dark:text-green-400">Vision</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            CampusHive aims to transform how the 6th semester ECE batch communicates and manages academic information 
            by providing a unified platform that centralizes all student resources and information.
            Our goal is to provide a seamless experience for students to access their academic records,
            assignments, notices and communicate effectively with peers and faculty.
          </p>
        </CardContent>
      </Card>
      
      <Card className="border border-green-100 dark:border-green-900/30">
        <CardHeader className="bg-green-50 dark:bg-green-900/20">
          <CardTitle className="text-xl text-green-700 dark:text-green-400">Features</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-700 dark:text-green-400">1</span>
                Student Directory
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Comprehensive list of all ECE 6th semester students with their details and contact information.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-700 dark:text-green-400">2</span>
                Assignment Tracker
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Keep track of all assignments, their deadlines, and submission status in one place.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-700 dark:text-green-400">3</span>
                Notes Repository
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Centralized storage for all lecture notes, study materials, and resources organized by subject.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-700 dark:text-green-400">4</span>
                Notice Board
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get updated with the latest announcements, events, and important notices from the department and university.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border border-green-100 dark:border-green-900/30">
        <CardHeader className="bg-green-50 dark:bg-green-900/20">
          <CardTitle className="text-xl text-green-700 dark:text-green-400">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-green-50 dark:border-green-900/30">
              <h3 className="font-medium text-green-700 dark:text-green-400">Frontend</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Shadcn UI</li>
                <li>TypeScript</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-green-50 dark:border-green-900/30">
              <h3 className="font-medium text-green-700 dark:text-green-400">Backend</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-green-50 dark:border-green-900/30">
              <h3 className="font-medium text-green-700 dark:text-green-400">Deployment</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Vercel</li>
                <li>GitHub Actions</li>
                <li>Continuous Integration</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border border-green-100 dark:border-green-900/30">
        <CardHeader className="bg-green-50 dark:bg-green-900/20">
          <CardTitle className="text-xl text-green-700 dark:text-green-400">Team</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <p className="text-lg font-medium">ECE 6th Semester Project</p>
            <p className="text-muted-foreground">Electronics and Computer Engineering Department</p>
            <p className="text-muted-foreground">Visvesvaraya Technological University</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/50 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-green-700 dark:text-green-400">SA</span>
              </div>
              <h3 className="font-medium">Student A</h3>
              <p className="text-sm text-muted-foreground">Team Lead</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/50 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-green-700 dark:text-green-400">SB</span>
              </div>
              <h3 className="font-medium">Student B</h3>
              <p className="text-sm text-muted-foreground">Frontend Developer</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/50 mx-auto flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-green-700 dark:text-green-400">SC</span>
              </div>
              <h3 className="font-medium">Student C</h3>
              <p className="text-sm text-muted-foreground">Backend Developer</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

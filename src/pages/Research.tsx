
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Plus, Search, Filter, ExternalLink, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Research = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [year, setYear] = useState('');
  const [domain, setDomain] = useState('');
  const [description, setDescription] = useState('');
  const [paperLink, setPaperLink] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDomain, setFilterDomain] = useState('');

  const [researchProjects] = useState([
    {
      id: 1,
      title: "Machine Learning Applications in Signal Processing",
      collaborators: "Dr. A. Kumar, Prof. S. Sharma",
      year: "2024",
      domain: "Machine Learning",
      status: "Ongoing",
      description: "Developing novel ML algorithms for efficient signal processing in communication systems.",
      paperLink: "https://example.com/paper1",
      funding: "₹5,00,000"
    },
    {
      id: 2,
      title: "IoT-based Smart Agriculture Monitoring System",
      collaborators: "Prof. R. Patel, Dr. M. Singh",
      year: "2023",
      domain: "IoT",
      status: "Completed",
      description: "Wireless sensor network for real-time monitoring of agricultural parameters.",
      paperLink: "https://example.com/paper2",
      funding: "₹3,50,000"
    },
    {
      id: 3,
      title: "5G Network Optimization using AI",
      collaborators: "Dr. V. Joshi, Prof. N. Gupta",
      year: "2024",
      domain: "Wireless Communication",
      status: "Ongoing",
      description: "AI-driven optimization techniques for 5G network performance enhancement.",
      paperLink: "",
      funding: "₹7,00,000"
    },
    {
      id: 4,
      title: "VLSI Design for Low Power Applications",
      collaborators: "Prof. K. Mehta, Dr. S. Reddy",
      year: "2023",
      domain: "VLSI",
      status: "Completed",
      description: "Novel circuit designs for ultra-low power embedded systems.",
      paperLink: "https://example.com/paper4",
      funding: "₹4,20,000"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !year || !domain || !description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Research Project Added",
      description: "Your research project has been successfully added to the database",
    });

    // Reset form
    setTitle('');
    setCollaborators('');
    setYear('');
    setDomain('');
    setDescription('');
    setPaperLink('');
  };

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.collaborators.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = filterDomain === '' || project.domain === filterDomain;
    return matchesSearch && matchesDomain;
  });

  const getStatusBadge = (status: string) => {
    return status === 'Ongoing' 
      ? <Badge className="bg-blue-500 hover:bg-blue-600">Ongoing</Badge>
      : <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
  };

  const domains = ["Machine Learning", "IoT", "Wireless Communication", "VLSI", "Digital Signal Processing", "Embedded Systems"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Research & Projects</h1>
          <p className="text-gray-600">Manage your research projects and publications</p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Research Projects</TabsTrigger>
            <TabsTrigger value="add">Add New Project</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Research Projects Database
                </CardTitle>
                <CardDescription>
                  Browse and manage all research projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-48">
                    <Select value={filterDomain} onValueChange={setFilterDomain}>
                      <SelectTrigger>
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filter by domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Domains</SelectItem>
                        {domains.map(domain => (
                          <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                          {getStatusBadge(project.status)}
                        </div>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </span>
                          <Badge variant="outline">{project.domain}</Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm text-gray-700 mb-1">Description</h5>
                            <p className="text-sm text-gray-600">{project.description}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-sm text-gray-700 mb-1 flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              Collaborators
                            </h5>
                            <p className="text-sm text-gray-600">{project.collaborators}</p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t">
                            <span className="text-sm font-medium text-green-600">
                              Funding: {project.funding}
                            </span>
                            {project.paperLink && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={project.paperLink} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  View Paper
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Research Project
                </CardTitle>
                <CardDescription>
                  Submit details of your new research project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter project title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="domain">Research Domain *</Label>
                      <Select value={domain} onValueChange={setDomain}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select research domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map(d => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year">Year *</Label>
                      <Select value={year} onValueChange={setYear}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {[2024, 2023, 2022, 2021, 2020].map(y => (
                            <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collaborators">Collaborators</Label>
                    <Input
                      id="collaborators"
                      placeholder="List all collaborators (comma separated)"
                      value={collaborators}
                      onChange={(e) => setCollaborators(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide detailed description of the research project"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paperLink">Paper/Publication Link</Label>
                    <Input
                      id="paperLink"
                      type="url"
                      placeholder="https://example.com/paper"
                      value={paperLink}
                      onChange={(e) => setPaperLink(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Add Research Project
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Research;

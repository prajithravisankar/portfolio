"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";
import {
  GraduationCap,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  BookOpen,
  Award,
  Code2,
  Sparkles,
  ArrowRight,
  Calendar,
  Building,
  Star,
  Server,
  Layout,
  Database,
  Container,
  Cloud,
  GitBranch,
  CheckCircle2,
  Brain,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Animated background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Prajith Ravisankar
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#about"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#education"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Education
                </a>
                <a
                  href="#certifications"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Certifications
                </a>
                <a
                  href="#opensource"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Open Source
                </a>
                <a
                  href="#projects"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0"
                >
                  <a href="#contact">Contact</a>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* About Section - Bento Grid */}
        <section id="about" className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Profile Card - Spans 2 columns */}
              <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <Avatar className="w-24 h-24 border-2 border-purple-500/50">
                      <AvatarImage
                        src="/temp_image.jpg"
                        alt="Prajith Ravisankar"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white text-2xl">
                        PR
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 mt-7">
                      <CardTitle className="text-4xl mb-2 text-white align-middle">
                        Prajith Ravisankar
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      <Code2 className="w-3 h-3 mr-1" />
                      Full-Stack Developer
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      <Server className="w-3 h-3 mr-1" />
                      Django/DRF APIs
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      <Layout className="w-3 h-3 mr-1" />
                      Next.js / React
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    >
                      <Database className="w-3 h-3 mr-1" />
                      PostgreSQL / SQL
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      <Container className="w-3 h-3 mr-1" />
                      Docker / DevOps
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      <Cloud className="w-3 h-3 mr-1" />
                      AWS (S3 / CloudFront)
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      <GitBranch className="w-3 h-3 mr-1" />
                      CI/CD (GitHub Actions)
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-amber-500/20 text-amber-300 border-amber-500/30"
                    >
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Testing / TDD
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    >
                      <Brain className="w-3 h-3 mr-1" />
                      Maps + AI Integrations
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      <Award className="w-3 h-3 mr-1" />
                      Open Source Contributor
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Education Card */}
              <Card className="lg:col-span-1 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-white font-semibold">
                      Lakehead University
                    </p>
                    <p className="text-slate-400 text-sm">
                      Hons. BSc in Computer Science
                    </p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Expected Graduation
                      </span>
                      <span className="text-white">May 2027</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Current GPA</span>
                      <span className="text-cyan-400 font-semibold">85.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card - Full Width */}
              <Card
                id="contact"
                className="lg:col-span-3 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/30 backdrop-blur-sm hover:from-purple-500/15 hover:to-cyan-500/15 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>Thunder Bay, ON</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-white/10"
                      asChild
                    >
                      <a
                        href="https://github.com/prajithravisankar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-white/10"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/prajithravisankar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-white/10"
                      asChild
                    >
                      <a
                        href="https://www.boot.dev/u/prajithravisankar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Boot.dev
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Email</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=pravisa1@lakeheadu.ca&su=Inquiry%20from%20Portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        <div>pravisa1@lakeheadu.ca</div>
                      </a>

                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=prajithravisankar@gmail.com&su=Inquiry%20from%20Portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        prajithravisankar@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Timeline - Courses & Grades */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Academic Journey
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                My courses and achievements
              </p>
            </div>

            <div className="space-y-8">
              {/* Winter 2025 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Winter 2025</CardTitle>
                      <CardDescription>
                        January 6 - April 4, 2025
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Mobile Computing Technology
                          </p>
                          <p className="text-sm text-slate-400">COMP-2430-WA</p>
                        </div>
                        <Badge className="bg-slate-700 text-slate-300">
                          74
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">Big Data</p>
                          <p className="text-sm text-slate-400">
                            COMP-4311-WDE
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          91
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Cryptography Network Security
                          </p>
                          <p className="text-sm text-slate-400">COMP-4476-WA</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          92
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Tech Soc Indi People Can
                          </p>
                          <p className="text-sm text-slate-400">
                            SOCI-2755-WDF
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          85
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fall 2024 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Fall 2024</CardTitle>
                      <CardDescription>
                        September 2 - December 2, 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Software Engineering
                          </p>
                          <p className="text-sm text-slate-400">
                            COMP-3415-FDE
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          82
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Operating Systems
                          </p>
                          <p className="text-sm text-slate-400">COMP-3473-FA</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          80
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Cloud Computing
                          </p>
                          <p className="text-sm text-slate-400">
                            COMP-4312-FDE
                          </p>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                          94
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">
                            Programming Languages
                          </p>
                          <p className="text-sm text-slate-400">COMP-4411-FA</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          87
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">0.50 Credits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Carousel */}
        <section id="certifications" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Continuous learning and skill development
              </p>
            </div>

            <Carousel
              className="w-full max-w-6xl mx-auto"
              opts={{ loop: true, align: "start" }}
            >
              <CarouselContent className="py-4">
                {/* Git */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.boot.dev/certificates/4b334856-cdc5-47d2-9164-c08543e743bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-500 to-red-600">
                        <img
                          src="/learn_git.png"
                          alt="Git Certification"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/50">
                            Version Control
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          Git Fundamentals to Internals
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Comprehensive deep-dive into Git version control,
                          mastering professional workflows including branching,
                          rebasing, and remote collaboration.
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Functional Programming */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.boot.dev/certificates/a52170fa-b452-43b8-833f-c00bbbd1dab0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                        <img
                          src="/learn_functional_programming.png"
                          alt="Functional Programming"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                            Programming Paradigm
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          Functional Programming Mastery
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Mastered pure functions, closures, and function
                          transformations to create highly abstract and reusable
                          codebases.
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Go */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.boot.dev/certificates/e8bb361b-55fd-479e-9a40-42e26c63586e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600">
                        <img
                          src="/learn_go.png"
                          alt="Go Programming"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                            Systems Programming
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          Go (Golang) Systems Programming
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Deep expertise in Go's concurrency using Channels and
                          Mutexes, building flexible systems through Interfaces
                          and Generics.
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Linux */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.boot.dev/certificates/a5d43fd9-3a86-4827-a792-d0643a0f8997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-500 to-gray-700">
                        <img
                          src="/learn_linux.png"
                          alt="Linux"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/50">
                            Operating Systems
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          Linux Systems & CLI Fundamentals
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Strong foundation in Unix-like systems, mastering CLI
                          to streamline workflows, manage permissions, and
                          automate tasks.
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Docker */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.boot.dev/certificates/1d7b88a6-600d-4bb8-9c02-57b4f86ecc72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
                        <img
                          src="/learn_docker.png"
                          alt="Docker"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50">
                            Containerization
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          Docker & Containerization Mastery
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Mastered containerization to build, ship, and run
                          distributed applications with Docker, Volumes, and
                          Bridge Networks.
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-white/10 border-white/20 hover:bg-white/20" />
              <CarouselNext className="bg-white/10 border-white/20 hover:bg-white/20" />
              <CarouselIndicators className="mt-8" />
            </Carousel>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section id="opensource" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Open Source Contributions
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Contributing to the developer community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PR 1 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <Github className="w-5 h-5 mt-1 text-cyan-400" />
                      <span>Fix UI Flicker on Queue Hover</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      Merged
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      mahaveergurjar/AlgoVisualizer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Fixed a UI bug where hovering over algorithm cards on the
                    Queue page caused blinking/flickering instead of smooth zoom
                    animation. Switched to CSS-only hover effects for consistent
                    behavior across all algorithm pages.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/130"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #130
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* PR 2 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <Github className="w-5 h-5 mt-1 text-cyan-400" />
                      <span>Unify Task Model Across CLIs</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      Merged
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      flyingSaucer87/cli-todo-app
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Unified the task data model between Node.js and Python CLI
                    versions with priority-based display indexing. Added unit
                    tests, migration logic, and focus mode support for
                    high-priority tasks.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/flyingSaucer87/cli-todo-app/pull/58"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #58
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* PR 3 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <Github className="w-5 h-5 mt-1 text-cyan-400" />
                      <span>Fix ReferenceError in Strings.jsx</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      Merged
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      mahaveergurjar/AlgoVisualizer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Resolved a runtime ReferenceError by adding the missing
                    PROBLEM_CATALOG import in Strings.jsx. Ensured all string
                    algorithm problems load correctly without console errors.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #250
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* PR 4 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <Github className="w-5 h-5 mt-1 text-cyan-400" />
                      <span>Fix Undefined Check Icon</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      Merged
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      mahaveergurjar/AlgoVisualizer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Fixed ReferenceError caused by missing Check import in
                    catalog.js. Replaced with CheckCircle icon and verified the
                    app compiles and runs without errors.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #233
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* PR 5 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <Github className="w-5 h-5 mt-1 text-cyan-400" />
                      <span>Fix JSX Build Warning</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      Merged
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      mahaveergurjar/AlgoVisualizer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Resolved JSX parsing warning by escaping the '&gt;'
                    character in CountPrimes.js. Ensures clean builds with no
                    console warnings while maintaining correct display.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/219"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #219
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* PR 6 */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-lg flex items-start gap-2">
                      <Github className="w-5 h-5 mt-1 text-cyan-400" />
                      <span>Add Missing Key Prop in MathsPro</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      Merged
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      mahaveergurjar/AlgoVisualizer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Fixed React warning by adding unique key prop to dynamically
                    rendered algorithm cards in the MathsPro component. Ensures
                    better rendering performance and eliminates console
                    warnings.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #205
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Building solutions that matter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CBESS Project - Compact Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 border-purple-500/30 backdrop-blur-sm hover:from-purple-500/15 hover:via-pink-500/15 hover:to-red-500/15 transition-all duration-300 cursor-pointer group min-h-[520px] flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/50">
                          Cryptography
                        </Badge>
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                      <CardTitle className="text-white text-xl mb-2">
                        CBESS
                      </CardTitle>
                      <CardDescription className="text-slate-400 line-clamp-2">
                        Chess-Based Encryption and Steganographic System
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Embedded Video */}
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-purple-500/30 mb-4">
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/DY3e02OyIUc"
                            title="CBESS Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                          A secure communication tool that combines cryptography
                          and steganography using chess games as a key source.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="border-purple-500/40 text-purple-300 bg-purple-500/10 text-xs"
                          >
                            Python
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-pink-500/40 text-pink-300 bg-pink-500/10 text-xs"
                          >
                            Tkinter
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-red-500/40 text-red-300 bg-red-500/10 text-xs"
                          >
                            AES-256
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-orange-500/40 text-orange-300 bg-orange-500/10 text-xs"
                          >
                            Cryptography
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-purple-500/40 text-purple-300 bg-purple-500/10 text-xs"
                          >
                            LSB Steganography
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10 text-xs"
                          >
                            Stockfish AI
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-blue-500/40 text-blue-300 bg-blue-500/10 text-xs"
                          >
                            PIL/Pillow
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-green-500/40 text-green-300 bg-green-500/10 text-xs"
                          >
                            Image Processing
                          </Badge>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 border-0 text-white">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-7xl sm:max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 border-purple-500/30">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-white flex items-center gap-3">
                      CBESS
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/50">
                        Cryptography
                      </Badge>
                    </DialogTitle>
                    <DialogDescription className="text-lg text-slate-300">
                      Chess-Based Encryption and Steganographic System
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    {/* Demo First */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-red-400" />
                        Live Demo
                      </h4>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-purple-500/30">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/DY3e02OyIUc"
                          title="CBESS Demo - Chess-Based Encryption System"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Tech Stack Second */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-purple-500/40 text-purple-300 bg-purple-500/10"
                        >
                          Python
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-pink-500/40 text-pink-300 bg-pink-500/10"
                        >
                          Tkinter
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-red-500/40 text-red-300 bg-red-500/10"
                        >
                          AES-256
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-orange-500/40 text-orange-300 bg-orange-500/10"
                        >
                          Cryptography
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-purple-500/40 text-purple-300 bg-purple-500/10"
                        >
                          LSB Steganography
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
                        >
                          Stockfish AI
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-blue-500/40 text-blue-300 bg-blue-500/10"
                        >
                          PIL/Pillow
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-500/40 text-green-300 bg-green-500/10"
                        >
                          Image Processing
                        </Badge>
                      </div>
                    </div>

                    {/* Description and Details Below */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-purple-400" />
                        Overview
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        A secure communication tool that combines cryptography
                        and steganography using chess games as a key source.
                        Encrypts messages and hides both the encrypted message
                        and the key within chessboard images, enabling discreet
                        and secure information transfer without traditional key
                        exchange methods.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-pink-400" />
                        Problem Solved
                      </h4>
                      <ul className="text-slate-300 leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>
                            <strong>
                              Eliminates Traditional Key Exchange:
                            </strong>{" "}
                            The key is derived from a shared chess game, so
                            there's no need to explicitly transmit a key.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>
                            <strong>
                              Combines Encryption and Steganography:
                            </strong>{" "}
                            The encrypted message and the key source (chess
                            moves) are hidden within images, making
                            communication less conspicuous.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-cyan-400" />
                        Key Achievements
                      </h4>
                      <ul className="text-slate-300 leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>
                            Engineered novel cryptographic system using chess
                            gameplay as key derivation source, eliminating
                            vulnerable key transmission by reconstructing
                            AES-256 keys from algebraic move notation.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>
                            Developed dual-interface application (GUI/CLI) with
                            integrated Stockfish chess engine and automated
                            steganographic embedding of encrypted payloads into
                            chessboard images using least significant bit
                            manipulation.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 border-0 text-white font-semibold"
                      asChild
                    >
                      <a
                        href="https://github.com/prajithravisankar/CBESS-public"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Odysseyelp Project - Compact Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border-cyan-500/30 backdrop-blur-sm hover:from-cyan-500/15 hover:via-blue-500/15 hover:to-indigo-500/15 transition-all duration-300 cursor-pointer group min-h-[520px] flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                          AI-Powered
                        </Badge>
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                      <CardTitle className="text-white text-xl mb-2">
                        Odysseyelp
                      </CardTitle>
                      <CardDescription className="text-slate-400 line-clamp-2">
                        Collaborative Trip Planning & Discovery Application
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Embedded Video */}
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-cyan-500/30 mb-4">
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/eiIcP8STSYU"
                            title="Odysseyelp Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                          An AI-powered collaborative trip planning and
                          discovery application with real-time business data and
                          interactive mapping.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10 text-xs"
                          >
                            Next.js
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-blue-500/40 text-blue-300 bg-blue-500/10 text-xs"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-indigo-500/40 text-indigo-300 bg-indigo-500/10 text-xs"
                          >
                            TypeScript
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10 text-xs"
                          >
                            Mapbox GL
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-red-500/40 text-red-300 bg-red-500/10 text-xs"
                          >
                            Yelp Fusion API
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-purple-500/40 text-purple-300 bg-purple-500/10 text-xs"
                          >
                            Google Gemini AI
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-green-500/40 text-green-300 bg-green-500/10 text-xs"
                          >
                            AI Workflow
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-blue-500/40 text-blue-300 bg-blue-500/10 text-xs"
                          >
                            Interactive Maps
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-pink-500/40 text-pink-300 bg-pink-500/10 text-xs"
                          >
                            Social Features
                          </Badge>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 border-0 text-white">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-7xl sm:max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 border-cyan-500/30">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-white flex items-center gap-3">
                      Odysseyelp
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                        AI-Powered
                      </Badge>
                    </DialogTitle>
                    <DialogDescription className="text-lg text-slate-300">
                      Collaborative Trip Planning & Discovery Application
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    {/* Demo First */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                        Live Demo
                      </h4>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-cyan-500/30">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/eiIcP8STSYU"
                          title="Odysseyelp Demo - AI-Powered Trip Planning"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Tech Stack Second */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
                        >
                          Next.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-blue-500/40 text-blue-300 bg-blue-500/10"
                        >
                          React
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-indigo-500/40 text-indigo-300 bg-indigo-500/10"
                        >
                          TypeScript
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
                        >
                          Mapbox GL
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-red-500/40 text-red-300 bg-red-500/10"
                        >
                          Yelp Fusion API
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-purple-500/40 text-purple-300 bg-purple-500/10"
                        >
                          Google Gemini AI
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-500/40 text-green-300 bg-green-500/10"
                        >
                          AI Workflow
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-blue-500/40 text-blue-300 bg-blue-500/10"
                        >
                          Interactive Maps
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-pink-500/40 text-pink-300 bg-pink-500/10"
                        >
                          Social Features
                        </Badge>
                      </div>
                    </div>

                    {/* Description and Details Below */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        Overview
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        An AI-powered collaborative trip planning and discovery
                        application that helps users create, share, and explore
                        personalized and real-world location itineraries.
                        Leverages Yelp Fusion API for real-time business data
                        (ratings, reviews, opening hours) combined with Google
                        Gemini AI for structured responses. Features interactive
                        mapping, group collaboration, and social discovery.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-400" />
                        Key Achievements
                      </h4>
                      <ul className="text-slate-300 leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>
                            Built a multi-stage AI workflow to generate real
                            itineraries: preferences + user prompt → Gemini
                            prompt shaping → Yelp JSON results → Gemini field
                            extraction for UI rendering.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>
                            Implemented chat-page pipeline with a multi-step
                            preference form that collects constraints and
                            produces an "ultimate prompt" for higher-quality
                            itinerary generation.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>
                            Developed itinerary plan cards styled like YouTube
                            video cards with live Mapbox map-tile thumbnails,
                            plus a detailed itinerary viewer for user-created
                            trips.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>
                            Shipped Explore (social discovery) features enabling
                            like/dislike (mutually exclusive) and comments on
                            published itineraries; also built the landing page.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 border-0 text-white font-semibold"
                      asChild
                    >
                      <a
                        href="https://github.com/srijanravisankar/odysseyelp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Wallet Backend Project - Compact Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border-green-500/30 backdrop-blur-sm hover:from-green-500/15 hover:via-emerald-500/15 hover:to-teal-500/15 transition-all duration-300 cursor-pointer group min-h-[520px] flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                          REST API
                        </Badge>
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                      <CardTitle className="text-white text-xl mb-2">
                        Wallet Backend
                      </CardTitle>
                      <CardDescription className="text-slate-400 line-clamp-2">
                        Personal Finance Management System (Class Project)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Embedded Video */}
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-green-500/30 mb-4">
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/DRINEXERaqk"
                            title="Wallet Backend Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                          A Personal Finance Management System built with Kotlin
                          and Ktor, demonstrating various programming paradigms.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="border-green-500/40 text-green-300 bg-green-500/10 text-xs"
                          >
                            Kotlin
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-emerald-500/40 text-emerald-300 bg-emerald-500/10 text-xs"
                          >
                            Ktor
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-teal-500/40 text-teal-300 bg-teal-500/10 text-xs"
                          >
                            PostgreSQL
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-blue-500/40 text-blue-300 bg-blue-500/10 text-xs"
                          >
                            Docker
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-orange-500/40 text-orange-300 bg-orange-500/10 text-xs"
                          >
                            Postman
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-green-500/40 text-green-300 bg-green-500/10 text-xs"
                          >
                            JDBC
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-emerald-500/40 text-emerald-300 bg-emerald-500/10 text-xs"
                          >
                            kotlinx-serialization
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-purple-500/40 text-purple-300 bg-purple-500/10 text-xs"
                          >
                            REST API
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-red-500/40 text-red-300 bg-red-500/10 text-xs"
                          >
                            SQL Security
                          </Badge>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 border-0 text-white">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-7xl sm:max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 border-green-500/30">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-white flex items-center gap-3">
                      Wallet Backend
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                        REST API
                      </Badge>
                    </DialogTitle>
                    <DialogDescription className="text-lg text-slate-300">
                      Personal Finance Management System (Class Project)
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    {/* Demo First */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-green-400" />
                        Live Demo
                      </h4>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-green-500/30">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/DRINEXERaqk"
                          title="Wallet Backend Demo - Personal Finance API"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Tech Stack Second */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-green-500/40 text-green-300 bg-green-500/10"
                        >
                          Kotlin
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-emerald-500/40 text-emerald-300 bg-emerald-500/10"
                        >
                          Ktor
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-teal-500/40 text-teal-300 bg-teal-500/10"
                        >
                          PostgreSQL
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-blue-500/40 text-blue-300 bg-blue-500/10"
                        >
                          Docker
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-orange-500/40 text-orange-300 bg-orange-500/10"
                        >
                          Postman
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-500/40 text-green-300 bg-green-500/10"
                        >
                          JDBC
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-emerald-500/40 text-emerald-300 bg-emerald-500/10"
                        >
                          kotlinx-serialization
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-purple-500/40 text-purple-300 bg-purple-500/10"
                        >
                          REST API
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-red-500/40 text-red-300 bg-red-500/10"
                        >
                          SQL Security
                        </Badge>
                      </div>
                    </div>

                    {/* Description and Details Below */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-green-400" />
                        Overview
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        A Personal Finance Management System built as a class
                        project for COMP 4411 - Programming Languages at
                        Lakehead University. Demonstrates various programming
                        paradigms including Object-Oriented, Procedural, and
                        Concurrent programming using Kotlin and the Ktor
                        framework. Features complete CRUD operations for
                        transactions and budgets with automated database
                        management.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-400" />
                        Key Achievements
                      </h4>
                      <ul className="text-slate-300 leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>
                            Built REST endpoints (CRUD) for Transactions and
                            Budgets with JSON serialization and clean route
                            grouping (e.g., /transactions, /budgets).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>
                            Automated database initialization on server startup:
                            created tables if missing and defined custom
                            PostgreSQL ENUMs (e.g., transaction type, period
                            type) for data integrity.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <span>
                            Prevented SQL injection using prepared statements
                            with placeholders across inserts/updates; dockerized
                            PostgreSQL for consistent local dev environments.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>
                            Benchmarked POST /transactions: 10 requests with
                            response times 17–142ms (~40ms average) during MVP
                            validation.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 border-0 text-white font-semibold"
                      asChild
                    >
                      <a
                        href="https://github.com/prajithravisankar/wallet-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Prajith Ravisankar
                </p>
                <p className="text-slate-400 text-sm">
                  Computer Science Student • Open Source Contributor
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/prajithravisankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prajithravisankar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:prajithravisankar@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <Separator className="my-8 bg-white/10" />
            <p className="text-center text-slate-500 text-sm">
              © 2025 Prajith Ravisankar. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">
                  Computer Science Student & Open Source Contributor
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Building the
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Future of Tech
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Computer Science student at Lakehead University passionate about
                cloud computing, cryptography, and building impactful
                open-source solutions.
              </p>

              <div className="flex items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Bento Grid */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Getting to know me better
              </p>
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
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 text-white">
                        Prajith Ravisankar
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-base mb-4">
                        Hackathon Enthusiast • Open Source Contributor
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                        >
                          <Code2 className="w-3 h-3 mr-1" />
                          Full Stack Dev
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          Cloud Enthusiast
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    I'm a passionate computer science student specializing in
                    cloud computing, big data, and cryptography. I love
                    contributing to open source projects and building solutions
                    that make a difference. Currently maintaining an 85.7% GPA
                    while actively participating in hackathons and community
                    projects.
                  </p>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Git
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Linux
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Go
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Cloud
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      SQL
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Cryptography
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-slate-300"
                    >
                      Big Data
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Education Card */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
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

              {/* Contact Card */}
              <Card
                id="contact"
                className="lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/30 backdrop-blur-sm hover:from-purple-500/15 hover:to-cyan-500/15 transition-all duration-300"
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
                        href="mailto:pravisa1@lakeheadu.ca?subject=Inquiry from Portfolio"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        pravisa1@lakeheadu.ca
                      </a>
                      <a
                        href="mailto:prajithravisankar@gmail.com?subject=Inquiry from Portfolio"
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
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group">
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
                      <CardTitle className="text-white text-lg">
                        Git Fundamentals to Internals
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
                </CarouselItem>

                {/* Functional Programming */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group">
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
                      <CardTitle className="text-white text-lg">
                        Functional Programming Mastery
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
                </CarouselItem>

                {/* Go */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group">
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
                      <CardTitle className="text-white text-lg">
                        Go (Golang) Systems Programming
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
                </CarouselItem>

                {/* Linux */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group">
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
                      <CardTitle className="text-white text-lg">
                        Linux Systems & CLI Fundamentals
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Strong foundation in Unix-like systems, mastering CLI to
                        streamline workflows, manage permissions, and automate
                        tasks.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Docker */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 h-full overflow-hidden group">
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
                      <CardTitle className="text-white text-lg">
                        Docker & Containerization Mastery
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
                      AlgoVisualizer
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Fixed a critical UI bug where hovering over the Queue data
                    structure caused visual flickering, improving user
                    experience.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/agorithm-ai/AlgoVisualizer/pull/15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View PR #15
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
                      <span>VSCode Extension Improvements</span>
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    >
                      In Review
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      Thunder Client
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Enhanced the popular Thunder Client VS Code extension by
                    implementing new features and fixing existing bugs.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/rangav/thunder-client-support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Contribution
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
                      <span>Documentation Updates</span>
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
                      Various Projects
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Improved documentation and README files across multiple open
                    source projects to help new contributors get started.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com/prajithravisankar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Profile
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm hover:from-purple-500/15 hover:to-pink-500/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">
                        Personal Portfolio
                      </CardTitle>
                      <CardDescription>
                        Modern web portfolio built with Next.js
                      </CardDescription>
                    </div>
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    A modern, responsive portfolio website showcasing my
                    projects, skills, and achievements. Built with Next.js,
                    TypeScript, and Tailwind CSS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      Tailwind CSS
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0">
                    View Project
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm hover:from-cyan-500/15 hover:to-blue-500/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">
                        Cloud Infrastructure
                      </CardTitle>
                      <CardDescription>
                        Scalable cloud solutions with Docker & K8s
                      </CardDescription>
                    </div>
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Designed and implemented containerized microservices
                    architecture using Docker and Kubernetes for high
                    availability and scalability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-300"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-300"
                    >
                      Kubernetes
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-300"
                    >
                      Cloud
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0">
                    View Project
                  </Button>
                </CardContent>
              </Card>
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

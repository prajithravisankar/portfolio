"use client";

import styles from "./Home.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  User,
  GraduationCap,
  Mail,
  MapPin,
  Github,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav aria-label="primary navigation bar" className={styles.navbar}>
        <ul className={styles.navBarItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#opensourcecontributions">Open Source Contributions</a>
          </li>
          <li>
            <a href="#personalprojects">Personal Projects</a>
          </li>
          <li>
            <a href="#hackathons">Hackathons</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </nav>
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Me Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/temp_image.jpg" alt="Prajith Ravisankar" />
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                <CardTitle className="flex items-center justify-center gap-2">
                  <User className="w-5 h-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-center">
                    Prajith Ravisankar
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">Hackathon Enthusiast</Badge>
                    <Badge variant="secondary">Open Source Contributor</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <strong>University:</strong> Lakehead University
                  </li>
                  <li>
                    <strong>Degree:</strong> Hons. Bsc in Computer Science
                  </li>
                  <li>
                    <strong>Expected Graduation:</strong> May 2027
                  </li>
                  <li>
                    <strong>Current GPA:</strong> 85.7%
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Thunder Bay, ON</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Links:</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://github.com/prajithravisankar"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://www.boot.dev/u/prajithravisankar"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Boot.dev
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Email:</p>
                    <div className="space-y-1">
                      <Button
                        variant="link"
                        size="sm"
                        asChild
                        className="p-0 h-auto"
                      >
                        <a href="mailto:pravisa1@lakeheadu.ca?subject=Inquiry from Portfolio">
                          pravisa1@lakeheadu.ca
                        </a>
                      </Button>
                      <br />
                      <Button
                        variant="link"
                        size="sm"
                        asChild
                        className="p-0 h-auto"
                      >
                        <a href="mailto:prajithravisankar@gmail.com?subject=Inquiry from Portfolio">
                          prajithravisankar@gmail.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="courses" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8" />
            Courses & Grades
          </h2>

          {/* Winter 2025 Term */}
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle>Winter 2025 (January 6 - April 4, 2025)</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">COMP-2430-WA</TableCell>
                    <TableCell>Mobile Computing Technology</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant={74 >= 80 ? "default" : "secondary"}>
                        74
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">COMP-4311-WDE</TableCell>
                    <TableCell>Big Data</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">91</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">COMP-4476-WA</TableCell>
                    <TableCell>Cryptography Network Security</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">92</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">SOCI-2755-WDF</TableCell>
                    <TableCell>Tech Soc Indi People Can</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">85</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Fall 2025 Term */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Fall 2025 (September 2 - December 2, 2025)</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">COMP-3415-FDE</TableCell>
                    <TableCell>Software Engineering</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">82</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">COMP-3473-FA</TableCell>
                    <TableCell>Operating Systems</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">80</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">COMP-4312-FDE</TableCell>
                    <TableCell>Cloud Computing</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">94</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">COMP-4411-FA</TableCell>
                    <TableCell>Programming Languages</TableCell>
                    <TableCell>0.50</TableCell>
                    <TableCell>
                      <Badge variant="default">87</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>
      <section
        id="certifications"
        className="py-16 px-4 bg-gray-50 relative z-0"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Certifications
          </h2>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent className="py-3">
              {/* Git Certification */}
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border-0 bg-white">
                  <div className="aspect-video bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/learn_git.png"
                      alt="Git Certification"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Git Fundamentals to Internals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Completed a comprehensive deep-dive into Git version
                      control, moving beyond basic commands to understand the
                      underlying architecture. Mastered professional workflows
                      including branching, rebasing, and remote collaboration
                      via GitHub, while gaining a unique understanding of Git's
                      "plumbing" and internal file system logic to handle
                      complex versioning scenarios.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Functional Programming Certification */}
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border-0 bg-white">
                  <div className="aspect-video bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/learn_functional_programming.png"
                      alt="Functional Programming Certification"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Functional Programming Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Transitioned from imperative to declarative programming
                      patterns, focusing on writing clean, predictable, and
                      side-effect-free code. Mastered the use of Pure Functions
                      and First-Class Functions to build modular software. By
                      leveraging concepts like Currying, Closures, and Function
                      Transformations, learned to create highly abstract and
                      reusable codebases that are significantly easier to test
                      and debug.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Go Certification */}
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border-0 bg-white">
                  <div className="aspect-video bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/learn_go.png"
                      alt="Go Certification"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Go (Golang) Systems Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Mastered the fundamentals and advanced patterns of the Go
                      programming language, focusing on writing idiomatic,
                      high-performance code. Gained deep expertise in Go's
                      unique approach to concurrency using Channels and Mutexes,
                      and learned to build flexible, decoupled systems through
                      Interfaces and Generics. This certification covers the
                      full spectrum of Go development, from memory management
                      with pointers to modern project organization using Go
                      Modules.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Linux Certification */}
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border-0 bg-white">
                  <div className="aspect-video bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/learn_linux.png"
                      alt="Linux Certification"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Linux Systems & CLI Fundamentals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed a strong foundation in Unix-like systems,
                      mastering the command-line interface to streamline
                      development workflows. Proficient in navigating complex
                      filesystems, managing user permissions, and automating
                      tasks through Input/Output redirection and piping.
                      Equipped with the skills to configure development
                      environments, manage system-wide packages, and utilize
                      powerful CLI utilities to process data and manage software
                      deployments efficiently.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Docker Certification */}
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border-0 bg-white">
                  <div className="aspect-video bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/learn_docker.png"
                      alt="Docker Certification"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Docker & Containerization Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Mastered the art of containerization to build, ship, and
                      run distributed applications. Proficient in creating
                      custom Dockerfiles to package applications and their
                      dependencies, ensuring consistency across development and
                      production environments. Gained hands-on experience
                      managing persistent data with Volumes, configuring
                      inter-container communication via Bridge Networks, and
                      optimizing the deployment lifecycle by publishing images
                      to Docker Hub.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>
      <section id="opensourcecontributions" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-2">
            <Github className="w-8 h-8" />
            Open Source Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PR 1: AlgoVisualizer Queue Hover Fix */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <span>Fix UI Flicker on Queue Hover</span>
                  <Badge variant="secondary" className="ml-2">
                    Merged
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  mahaveergurjar/AlgoVisualizer
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Fixed a UI bug where hovering over algorithm cards on the
                  Queue page caused blinking/flickering instead of smooth zoom
                  animation. Switched to CSS-only hover effects for consistent
                  behavior across all algorithm pages.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/130"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* PR 2: CLI Todo App Task Model Unification */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <span>Unify Task Model Across CLIs</span>
                  <Badge variant="secondary" className="ml-2">
                    Merged
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  flyingSaucer87/cli-todo-app
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Unified the task data model between Node.js and Python CLI
                  versions with priority-based display indexing. Added unit
                  tests, migration logic, and focus mode support for
                  high-priority tasks.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/flyingSaucer87/cli-todo-app/pull/58"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* PR 3: AlgoVisualizer Strings Import Fix */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <span>Fix ReferenceError in Strings.jsx</span>
                  <Badge variant="secondary" className="ml-2">
                    Merged
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  mahaveergurjar/AlgoVisualizer
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Resolved a runtime ReferenceError by adding the missing
                  PROBLEM_CATALOG import in Strings.jsx. Ensured all string
                  algorithm problems load correctly without console errors.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/250"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* PR 4: AlgoVisualizer Check Icon Fix */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <span>Fix Undefined Check Icon</span>
                  <Badge variant="secondary" className="ml-2">
                    Merged
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  mahaveergurjar/AlgoVisualizer
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Fixed ReferenceError caused by missing Check import in
                  catalog.js. Replaced with CheckCircle icon and verified the
                  app compiles and runs without errors.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/233"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* PR 5: AlgoVisualizer JSX Warning Fix */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <span>Fix JSX Build Warning</span>
                  <Badge variant="secondary" className="ml-2">
                    Merged
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  mahaveergurjar/AlgoVisualizer
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Resolved JSX parsing warning by escaping the '&gt;' character
                  in CountPrimes.js. Ensures clean builds with no console
                  warnings while maintaining correct display.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/mahaveergurjar/AlgoVisualizer/pull/219"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="personalprojects">
        <h2>Projects</h2>
      </section>
      <section id="hackathons">
        <h2>Hackathons</h2>
      </section>
      <section id="experience">
        <h2>Experience</h2>
      </section>
    </main>
  );
}

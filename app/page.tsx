"use client"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown, Code, Briefcase, User, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { SkillCard } from "@/components/skill-card"
import { TechShowcase } from "@/components/tech-showcase"
import { SectionHeader } from "@/components/section-header"
import { ProjectGallery } from "@/components/project-gallery"
import { useState, FormEvent, useRef, useEffect, useCallback } from "react"
import { toast } from "react-hot-toast"
import Resume from "@/components/pdf/pdf"

export default function Portfolio() {
  const [resumeExpanded, setResumeExpanded] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    const toastId = toast.loading("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a10026a6-4693-492c-8a22-52ef23b536b5");
    
    const resp = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await resp.json();
    toast.dismiss(toastId);
    if(data.success) {
      toast.success("Form Submitted!");
      const form = event.currentTarget;
      form.reset();
    } else {
      toast.error("Submission Error - Please email me!");
    }
  }

  const handleExpandResumeButtonClicked = () => {
    setResumeExpanded((currState) => !currState);
  }


  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <AnimatedBackground />
      {/* Header */}
      <header className="sticky top-0 z-40 w-full glassmorphism backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl relative group">
              <span className="text-gradient">Elliot Liu</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Resume" , "Projects" , "Skills", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium relative group">
                <span>{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="https://github.com/elliot-liu-12" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="https://www.linkedin.com/in/elliot-liu-/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="container py-12 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="space-x-2">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <span>Full Stack Developer</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <span>MSEC Student</span>
                </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm <span className="text-gradient">Elliot Liu</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  I'm an aspiring software engineer currently working towards a Masters in Economics and Computation at Duke University.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="rounded-full" size="lg" asChild>
                    <Link href="#contact">
                      <Send className="mr-2 h-4 w-4" />
                      Get in Touch
                    </Link>
                  </Button>
                  <Button variant="outline" className="rounded-full" size="lg" asChild>
                    <Link href="#projects">
                      <Code className="mr-2 h-4 w-4" />
                      View Projects
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative h-80 w-80 animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl animate-pulse-slow" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-xl">
                    <Image
                      src="/profile-headshot.png?height=320&width=320"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-1 shadow-lg animate-float-fast">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                    <span className="font-bold text-gradient">C++</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg animate-float-slow">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                    <span className="font-bold text-gradient-blue">TS</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 p-1 shadow-lg animate-float-slow">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                    <span className="font-bold text-gradient-orange">Python</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-3 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-slate-600 p-1 shadow-lg animate-float-slow">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                    <span className="font-bold text-gradient-dark-blue">R</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-gradient-custom">
          <div className="container">
            <SectionHeader title="About Me" subtitle="Get to know more about me and my experience" />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="About me"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-2xl font-bold">Elliot Liu</h3>
                    <p className="text-white/80">Full Stack Developer</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-primary/5 border-primary/10 hover:bg-primary/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-bold">Experience</h4>
                        <p className="text-3xl font-bold text-gradient">5+ Years</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/10 hover:bg-primary/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-bold">Projects</h4>
                        <p className="text-3xl font-bold text-gradient">10+</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  I'm a <span className="text-gradient">Full Stack Developer</span> with a passion for creating
                  beautiful, functional websites
                </h3>
                <p>
                  My journey in software development began when I built my first website in high school. Since then, I've dabbled in audio programming, bioinformatics,
                  machine learning, and a few old-fashioned web dev projects.
                </p>
                <p>
                  I'm most comfortable in C++, Python, and TypeScript, but I'm also proficient in Java, R, and Golang.
                  I'm passionate about clean code, performance optimization, and creating intuitive user experiences.
                </p>
                <div className="space-y-4 pt-4">
                  <h4 className="text-xl font-semibold">Education</h4>
                  <div className="space-y-6">
                    {[
                      {
                        degree: "Masters in Economics and Computation",
                        name: "Duke University",
                        interval: "2025-2027",
                        description: "Currently pursuing a CS + Economics degree.",
                      },
                      {
                        degree: "Bachelors in Computer Science",
                        name: "University of Florida",
                        interval: "2021-2025",
                        description: "Graduated cum laude from the University of Florida.",
                      },
                    ].map((uni, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                      >
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                        <h5 className="font-bold">{uni.degree}</h5>
                        <p className="text-sm text-muted-foreground">
                          {uni.name} | {uni.interval}
                        </p>
                        <p className="mt-2">{uni.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Subsection */}
          <div className="flex flex-col items-center pt-20 ">
              <Button variant="outline" className="rounded-full p-5 max-w-60" onClick={handleExpandResumeButtonClicked}>
                {resumeExpanded ? "Hide Resume": "Show Resume"}
              </Button>
              {resumeExpanded && (
                <Resume/>
              )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container">
            <SectionHeader title="My Projects" subtitle="Check out some of my recent work" align="center" />
            <ProjectGallery/>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-gradient-custom">
          <div className="container">
            <SectionHeader title="My Skills" subtitle="Technologies and tools I work with" align="center" />

            <div className="space-y-16">
              {/* Core Skills */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Programming Languages</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                    name="C & C++"
                    category="Systems Programming"
                    experience="3+ years"
                    description="Strong foundation in low-level programming, memory management, and performance-critical applications using C and C++."
                    icon="⚙️"
                    proficiency="Advanced"
                    relatedTechs={["STL", "Memory Management", "Dynamic Programming", "Performance Optimization", "Data Structures & Algorithms"]}
                  />

                  <SkillCard
                    name="JavaScript & TypeScript"
                    category="Programming Language"
                    experience="2+ years"
                    description="Expert in modern JavaScript (ES6+) and TypeScript for building scalable applications with strong typing and better developer experience."
                    icon="🟨🟦"
                    proficiency="Advanced"
                    relatedTechs={["ES6+", "Full Stack"]}
                  />

                  <SkillCard
                    name="Python"
                    category="Programming Language"
                    experience="4+ years"
                    description="Proficient in Python for backend development, data analysis, scripting, and automation tasks with extensive library ecosystem."
                    icon="🐍"
                    proficiency="Advanced"
                    relatedTechs={["Machine Learning", "Data Science", "Web Development"]}
                  />

                  <SkillCard
                    name="SQL & R"
                    category="Data & Analytics"
                    experience="2+ years"
                    description="Database design, complex queries, data analysis, and statistical computing using SQL and R for data-driven insights."
                    icon="📊"
                    proficiency="Advanced"
                    relatedTechs={["Machine Learning", "Databases", "Data Science", "Visualization"]}
                  />

                  <SkillCard
                    name="Golang"
                    category="Backend Language"
                    experience="2+ years"
                    description="Building efficient, concurrent backend services and microservices with Go's powerful concurrency model and standard library."
                    icon="🐹"
                    proficiency="Intermediate"
                    relatedTechs={["Backend"]}
                  />

                  <SkillCard
                    name="Java"
                    category="Enterprise Language"
                    experience="3+ years"
                    description="Developing enterprise applications, web services, and Android applications using Java's robust ecosystem and frameworks."
                    icon="☕"
                    proficiency="Intermediate"
                    relatedTechs={["Tree Walk Interpreter"]}
                  />

                </div>
              </div>

              {/* Technology Stack */}
              <div className="grid md:grid-cols-2 gap-12">
                <TechShowcase
                  title="Development Tools & Systems"
                  technologies={[
                    { name: "Git", icon: "📝", color: "#F05032" },
                    { name: "Unix", icon: "🐧", color: "#000000" },
                    { name: "Docker", icon: "🐳", color: "#2496ED" },
                    { name: "Shell Scripting", icon: "💻", color: "#4EAA25" },
                    { name: "Lua", icon: "🌙", color: "#2C2D72" },
                    { name: "Bun", icon: "🥟", color: "#FBF0DF" },
                    { name: "MySQL", icon: "🐬", color: "#4479A1" },
                    { name: "Jupyter Notebook", icon: "📓", color: "#F37626" },
                  ]}
                />

                <TechShowcase
                  title="Frameworks & Libraries"
                  technologies={[
                    { name: "React", icon: "⚛️", color: "#61DAFB" },
                    { name: "Next.js", icon: "▲", color: "#000000" },
                    { name: "Pandas", icon: "🐼", color: "#543543" },
                    { name: "TensorFlow", icon: "🌊", color: "#5436677" },
                    { name: "Node.js", icon: "🟢", color: "#339933" },
                    { name: "TanStack", icon: "🥞", color: "#FF4154" },
                    { name: "JUCE", icon: "🎵", color: "#8DC63F" },
                    { name: "Flask", icon: "🧪", color: "#8DC63F" },
                  ]}
                />
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Professional Skills</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Problem Solving",
                      icon: "🧩",
                      description: "Breaking down complex problems into manageable solutions",
                    },
                    {
                      name: "Team Collaboration",
                      icon: "🤝",
                      description: "Working effectively in cross-functional teams",
                    },
                    {
                      name: "Code Review",
                      icon: "👀",
                      description: "Providing constructive feedback and maintaining code quality",
                    },
                    { name: "Unit Testing", icon: "✅", description: "Verifying correctness with succinct and comprehensive unit tests"},
                    {
                      name: "Project Management",
                      icon: "📊",
                      description: "Planning and executing projects using Agile methodologies",
                    },
                    {
                      name: "Communication",
                      icon: "💬",
                      description: "Clearly explaining technical concepts to stakeholders",
                    },
                    {
                      name: "Continuous Learning",
                      icon: "📚",
                      description: "Staying updated with latest technologies and best practices",
                    },
                    {
                      name: "Performance Optimization",
                      icon: "⚡",
                      description: "Improving application speed and user experience",
                    },
                  ].map((skill, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="font-bold mb-2">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container">
            <SectionHeader
              title="Get In Touch"
              subtitle="Have a project in mind? Let's work together!"
              align="center"
            />

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none shadow-xl">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary to-purple-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="mb-8">I'm currently available for freelance work. Feel free to reach out!</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">Email</p>
                          <p>elliot.liu21@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">LinkedIn</p>
                          <Link
                            href="www.linkedin.com/in/elliot-liu"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          www.linkedin.com/in/elliot-liu
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Github className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">GitHub</p>
                          <Link
                            href="https://github.com/elliot-liu-12"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://github.com/elliot-liu-12
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <p className="text-sm text-white/70 mb-4">Follow me on social media</p>
                      <div className="flex gap-4">
                        {["github", "linkedin"].map((social) => (
                          <Link key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer">
                            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                              {social === "github" && <Github className="h-5 w-5" />}
                              {social === "linkedin" && <Linkedin className="h-5 w-5" />}
                              {social === "twitter" && (
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M22 4.01C21.9 4.3 21.8 4.59 21.7 4.87C21.1 6.5 20.1 7.9 18.9 9.1C18.8 15.4 15.8 19.5 10 21C8.2 21.5 6.3 21.7 4.4 21.5C3.1 21.4 1.8 21 0.5 20.5C2 20.6 3.6 20.2 5 19.5C6.4 18.8 7.6 17.8 8.5 16.5C7.1 16.5 5.8 16 4.7 15.1C3.6 14.2 2.9 13 2.6 11.6C3.3 11.8 4 11.8 4.8 11.7C3.5 11.3 2.4 10.6 1.6 9.5C0.8 8.4 0.4 7.1 0.5 5.8C1.2 6.2 1.9 6.5 2.7 6.6C1.1 5.5 0.3 3.6 0.8 1.7C2.7 4.1 5.3 5.7 8.1 6.3C8.3 6.3 8.4 6.4 8.6 6.4C9.1 6.5 9.6 6.5 10.1 6.5C10 6.2 9.9 5.9 9.8 5.6C9.3 4.3 9.4 2.9 10.1 1.7C10.8 0.5 12 -0.1 13.3 0C14.8 0.1 16 0.9 16.7 2.1C17.8 1.9 18.8 1.5 19.7 0.9C19.3 2 18.4 2.9 17.3 3.4C18.3 3.3 19.2 3 20.1 2.6C19.6 3.5 19 4.4 18.2 5.1C18.1 5.2 18.1 5.3 18.1 5.4C18 5.7 18 6 18 6.3V6.4C18 6.8 18 7.1 18 7.5C17.9 7.9 17.9 8.3 17.8 8.7C17.8 9.1 17.7 9.5 17.6 9.9C17.5 10.3 17.4 10.7 17.3 11.1C17.2 11.4 17.1 11.8 17 12.2C16.9 12.5 16.8 12.9 16.6 13.2C16.5 13.5 16.4 13.9 16.2 14.2C16.1 14.5 15.9 14.8 15.8 15.1C15.6 15.4 15.5 15.7 15.3 16C15.2 16.3 15 16.5 14.8 16.8C14.6 17.1 14.4 17.4 14.2 17.6C14 17.9 13.8 18.1 13.6 18.3C13.4 18.5 13.2 18.8 13 19C12.8 19.2 12.6 19.4 12.3 19.6C12.1 19.8 11.9 20 11.6 20.2C11.4 20.4 11.1 20.5 10.9 20.7C10.6 20.9 10.3 21 10.1 21.2C9.7 21.4 9.4 21.6 9 21.7L8.8 21.8C9.3 21.7 9.7 21.5 10.2 21.4C10.6 21.2 11 21.1 11.4 20.9C11.8 20.7 12.2 20.5 12.6 20.3C12.9 20.1 13.3 19.9 13.6 19.7C13.9 19.5 14.3 19.2 14.6 19C14.9 18.8 15.2 18.5 15.5 18.2C15.8 17.9 16.1 17.7 16.4 17.4C16.6 17.1 16.9 16.8 17.1 16.5C17.3 16.2 17.5 15.9 17.7 15.6C17.9 15.3 18.1 15 18.3 14.7C18.4 14.4 18.6 14.1 18.7 13.8C18.9 13.5 19 13.1 19.1 12.8C19.2 12.5 19.3 12.2 19.4 11.9C19.5 11.6 19.6 11.2 19.7 10.9C19.7 10.6 19.8 10.3 19.8 10C19.9 9.7 19.9 9.4 19.9 9.1C20 8.8 20 8.5 20 8.2C20 7.9 20 7.6 20 7.3C20 7 20 6.7 20 6.4C20 6.1 19.9 5.8 19.9 5.5C19.9 5.2 19.8 4.9 19.8 4.6C19.7 4.3 19.7 4 19.6 3.7C19.6 3.4 19.5 3.2 19.4 2.9C19.4 2.6 19.3 2.3 19.2 2.1L19 1.6C19.5 1.8 20 2 20.4 2.2C20.8 2.4 21.2 2.7 21.6 3C21.9 3.3 22.2 3.6 22.5 4C22.3 4 22.2 4 22 4.01Z"
                                fill="currentColor"
                                />
                        </svg>
                      )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <form className="space-y-6" onSubmit={onSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full md:w-auto rounded-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <Link href="/" className="font-bold text-2xl text-gradient mb-2 inline-block">
                Elliot Liu
              </Link>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-muted-foreground mb-4">
                &copy; {new Date().getFullYear()} Elliot Liu. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                {["github", "linkedin"].map((social) => (
                  <Button key={social} variant="ghost" size="icon" className="rounded-full h-10 w-10" asChild>
                    <Link href={`https://${social}.com`} target="_blank" rel="noopener noreferrer">
                      {social === "github" && <Github className="h-5 w-5" />}
                      {social === "linkedin" && <Linkedin className="h-5 w-5" />}
                      {social === "twitter" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M22 4.01C21.9 4.3 21.8 4.59 21.7 4.87C21.1 6.5 20.1 7.9 18.9 9.1C18.8 15.4 15.8 19.5 10 21C8.2 21.5 6.3 21.7 4.4 21.5C3.1 21.4 1.8 21 0.5 20.5C2 20.6 3.6 20.2 5 19.5C6.4 18.8 7.6 17.8 8.5 16.5C7.1 16.5 5.8 16 4.7 15.1C3.6 14.2 2.9 13 2.6 11.6C3.3 11.8 4 11.8 4.8 11.7C3.5 11.3 2.4 10.6 1.6 9.5C0.8 8.4 0.4 7.1 0.5 5.8C1.2 6.2 1.9 6.5 2.7 6.6C1.1 5.5 0.3 3.6 0.8 1.7C2.7 4.1 5.3 5.7 8.1 6.3C8.3 6.3 8.4 6.4 8.6 6.4C9.1 6.5 9.6 6.5 10.1 6.5C10 6.2 9.9 5.9 9.8 5.6C9.3 4.3 9.4 2.9 10.1 1.7C10.8 0.5 12 -0.1 13.3 0C14.8 0.1 16 0.9 16.7 2.1C17.8 1.9 18.8 1.5 19.7 0.9C19.3 2 18.4 2.9 17.3 3.4C18.3 3.3 19.2 3 20.1 2.6C19.6 3.5 19 4.4 18.2 5.1C18.1 5.2 18.1 5.3 18.1 5.4C18 5.7 18 6 18 6.3V6.4C18 6.8 18 7.1 18 7.5C17.9 7.9 17.9 8.3 17.8 8.7C17.8 9.1 17.7 9.5 17.6 9.9C17.5 10.3 17.4 10.7 17.3 11.1C17.2 11.4 17.1 11.8 17 12.2C16.9 12.5 16.8 12.9 16.6 13.2C16.5 13.5 16.4 13.9 16.2 14.2C16.1 14.5 15.9 14.8 15.8 15.1C15.6 15.4 15.5 15.7 15.3 16C15.2 16.3 15 16.5 14.8 16.8C14.6 17.1 14.4 17.4 14.2 17.6C14 17.9 13.8 18.1 13.6 18.3C13.4 18.5 13.2 18.8 13 19C12.8 19.2 12.6 19.4 12.3 19.6C12.1 19.8 11.9 20 11.6 20.2C11.4 20.4 11.1 20.5 10.9 20.7C10.6 20.9 10.3 21 10.1 21.2C9.7 21.4 9.4 21.6 9 21.7L8.8 21.8C9.3 21.7 9.7 21.5 10.2 21.4C10.6 21.2 11 21.1 11.4 20.9C11.8 20.7 12.2 20.5 12.6 20.3C12.9 20.1 13.3 19.9 13.6 19.7C13.9 19.5 14.3 19.2 14.6 19C14.9 18.8 15.2 18.5 15.5 18.2C15.8 17.9 16.1 17.7 16.4 17.4C16.6 17.1 16.9 16.8 17.1 16.5C17.3 16.2 17.5 15.9 17.7 15.6C17.9 15.3 18.1 15 18.3 14.7C18.4 14.4 18.6 14.1 18.7 13.8C18.9 13.5 19 13.1 19.1 12.8C19.2 12.5 19.3 12.2 19.4 11.9C19.5 11.6 19.6 11.2 19.7 10.9C19.7 10.6 19.8 10.3 19.8 10C19.9 9.7 19.9 9.4 19.9 9.1C20 8.8 20 8.5 20 8.2C20 7.9 20 7.6 20 7.3C20 7 20 6.7 20 6.4C20 6.1 19.9 5.8 19.9 5.5C19.9 5.2 19.8 4.9 19.8 4.6C19.7 4.3 19.7 4 19.6 3.7C19.6 3.4 19.5 3.2 19.4 2.9C19.4 2.6 19.3 2.3 19.2 2.1L19 1.6C19.5 1.8 20 2 20.4 2.2C20.8 2.4 21.2 2.7 21.6 3C21.9 3.3 22.2 3.6 22.5 4C22.3 4 22.2 4 22 4.01Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      <span className="sr-only">{social}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}

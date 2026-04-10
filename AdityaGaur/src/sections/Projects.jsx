import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const projects = [
  {
    title: "DevConnect",
    description:
      "A full-stack social platform for developers to share posts, follow users, and collaborate. Features real-time updates, authentication, and profile management.",
    image: "/devconnect.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://devconnect-app.vercel.app",
    github: "https://github.com/yourusername/devconnect",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes and provides ATS score, keyword suggestions, and improvement tips using NLP techniques.",
    image: "/resume-analyzer.jpg",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    link: "https://resume-analyzer.vercel.app",
    github: "https://github.com/yourusername/resume-analyzer",
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully functional e-commerce web app with product filtering, cart, payment integration, and admin dashboard for managing inventory.",
    image: "/ecommerce.jpg",
    tags: ["React", "Redux", "Stripe", "Express"],
    link: "https://ecommerce-store.vercel.app",
    github: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "LeetCode Tracker",
    description:
      "A productivity dashboard that tracks coding progress, visualizes solved problems, and provides daily streak analytics.",
    image: "/leetcode-tracker.png",
    tags: ["React", "Chart.js", "API Integration"],
    link: "https://leetcode-tracker.vercel.app",
    github: "https://github.com/yourusername/leetcode-tracker",
  },
]


const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Access */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
      {/* Section-Header */}
      <div className='text-center mx-auto max-w-3xl mb-16'>
        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
        <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Projects that
        <span className="font-serif italic font-normal text-white"> make an impact.</span>
        </h2>
        <p className='text-muted-foreground animate-fade-in animation-delay-200'>
          A selection of my recent work, from complex web applications to innovate tools that solve real-world problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project,idx)=>(
          <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
          style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}>
            {/* Image */}
            <div className='relative overflow-hidden aspect-video'>
              <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
              <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'/>

              {/* Overlay Links */}
              <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <a target='_blank' href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                  <ArrowUpRight className='w-5 h-5' />
                </a>
                <a target='_blank' href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all' >
                  <FaGithub className='w-5 h-5'/>
                </a>
              </div>
            </div>
            {/* Content */}
            <div className='p-6 space-y-4'>
              <div className='flex items-start justify-between'>
                <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-y-1 transition-all'/>
              </div>
              <p className='text-muted-foreground text-sm'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 '>
                {project.tags.map((tag,idx) => (
                  <span key={idx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View-All */}
      <div className='text-center mt-12 animate-fade-in animation-delay-500'>
        <AnimatedBorderButton>
        View All Projects
        <ArrowUpRight className='w-5 h-5' />
      </AnimatedBorderButton>
      </div>
      </div>
    </section>
  )
}
export default Projects
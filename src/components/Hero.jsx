import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const hero = {
    name: "Susanti Afrilia",
    title: "Information Systems Student | Data Analyst | Risk Management",
    description:
      "Final-year Information Systems student at Telkom University passionate about Data Analytics, Information Security, Business Process Improvement, and UI/UX Design.",
    github: "https://github.com/susanttii",
    linkedin: "www.linkedin.com/in/susanti-afrilia-a36174277",
    email: "susantiafrilia18@gmail.com"
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
              SA
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-600">{hero.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {hero.title}
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              Get In Touch
              <ArrowRight size={20} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md"
            >
              <Github size={24} />
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${hero.email}`}
              className="p-3 bg-white rounded-full shadow-md"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

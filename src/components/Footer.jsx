import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const contact = {
    github: "https://github.com/susanttii",
    linkedin: "https://bit.ly/4rdj0vy",
    email: "susantiafrilia18@gmail.com"
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Susanti Afrilia</h3>
            <p className="text-gray-400">
              Information Systems Student | Data Analyst | Risk Management 
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-400">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full"
              >
                <Github size={20} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-3 bg-gray-800 rounded-full"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Susanti Afrilia
            <span className="mx-2">|</span>
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

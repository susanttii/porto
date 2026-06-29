import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Information Security Risk Assessment using ISO/IEC 27005 & ISO/IEC 27001",
      description: "Conducted information security risk assessment for PUTI Telkom University by identifying assets, threats, vulnerabilities, evaluating likelihood-impact, and mapping Annex A controls.",
      technologies: ["ISO 27005", "ISO 27001", "Risk Assessment", "Information Security"],
      github: "#"
    },
    {
      title: "Automated Working Paper Development",
      description: "Developed automated Excel VBA applications for supervisory reporting at OJK.",
      technologies: ["Excel VBA", "Macro", "Automation", "Microsoft Office"],
      github: "#"
    },
    {
      title: "Web Scraping Project",
      description: "Built a web scraping application to extract and analyze data from websites for data collection and analysis purposes.",
      technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Data Analysis"],
      github: "#"
    },
    {
      title: "Dashboard Automation with Google Sheets",
      description: "Developed an automated dashboard system using Python, Pandas, and Google Colab to process Excel datasets, compare multiple worksheets, transform data, and synchronize the results directly into Google Sheets for real-time reporting.",
      technologies: ["Python", "Pandas", "Google Colab", "Google Sheets API", "gspread", "openpyxl", "Excel Automation"],
      github: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

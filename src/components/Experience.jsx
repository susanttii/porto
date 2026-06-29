import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experience = [
    {
      company: "Otoritas Jasa Keuangan",
      position: "Data Analyst Intern",
      period: "Jan 2026 - Apr 2026",
      description: [
        "Developed automated working papers using Excel VBA.",
        "Automated supervision and reporting processes.",
        "Improved reporting efficiency through Microsoft Excel Macro."
      ]
    },
    {
      company: "Telkom Indonesia",
      position: "Business Data Analyst Intern",
      period: "Jul 2025 - Aug 2025",
      description: [
        "Processed operational data using SQL and Excel.",
        "Created Power BI dashboards.",
        "Supported business decision making."
      ]
    },
    {
      company: "Telkom University",
      position: "Teaching Assistant - Data Warehouse & Business Intelligence",
      period: "Sep 2025 - Jan 2026",
      description: [
        "Prepared practicum materials.",
        "Assisted students in BI projects."
      ]
    },
    {
      company: "Telkom University",
      position: "Teaching Assistant - Business Process Modeling",
      period: "Sep 2025 - Jan 2026",
      description: [
        "Assisted students.",
        "Prepared teaching materials."
      ]
    },
    {
      company: "Telkom University",
      position: "Teaching Assistant - Database Systems",
      period: "Feb 2024 - Jun 2024",
      description: [
        "Prepared practicum materials.",
        "Guided students in SQL and Database."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

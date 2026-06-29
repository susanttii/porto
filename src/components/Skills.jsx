export default function Skills() {
  const skills = {
    Programming: ["Python", "SQL", "Java", "PHP", "JavaScript"],
    Data: ["Power BI", "Excel VBA", "Microsoft Excel", "Data Analysis", "Dashboard"],
    Security: ["ISO/IEC 27005", "ISO/IEC 27001", "Risk Management", "Internal Audit"],
    Tools: ["MySQL", "SAP", "Git", "ERP"],
    Design: ["Figma", "UI/UX"]
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

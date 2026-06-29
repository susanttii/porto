import { Code2, Database, Layout, Server, Smartphone, Zap } from 'lucide-react'

export default function About() {
  const about = `Final-year Information Systems undergraduate at Telkom University with internship
experience as a Data Analyst at Telkom Indonesia and Otoritas Jasa Keuangan.
Interested in Data Analytics, Information Security, Internal Audit,
Business Process Analysis, and UI/UX Design.

Experienced in SQL, Power BI, Excel VBA, ERP, Database,
and Information Security Risk Assessment.`

  const highlights = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Experienced in SQL, Power BI, and Excel VBA for data analysis and visualization'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Information Security',
      description: 'Knowledgeable in ISO/IEC 27005 & 27001 risk assessment frameworks'
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Business Process',
      description: 'Skilled in business process modeling and improvement analysis'
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
              {about}
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

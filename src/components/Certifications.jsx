import { Award, CheckCircle } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    "COBIT 2019 Foundation",
    "Microsoft Azure AI Fundamentals",
    "Scrum Foundation Professional Certification",
    "HackerRank SQL Basic",
    "SAP Certified"
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                <Award size={24} />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <span className="font-medium text-gray-900">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Trophy, Star } from 'lucide-react'

export default function Awards() {
  const awards = [
    {
      title: "Funding Awardee PKM-PM 2024",
      issuer: "Ministry of Education, Culture, Research and Technology"
    },
    {
      title: "Accepted Paper - INFINITYS 2026",
      issuer: "International Conference"
    }
  ]

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-primary-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                  <Trophy size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {award.title}
                    <Star size={20} className="text-yellow-500 fill-yellow-500" />
                  </h3>
                  <p className="text-gray-600">{award.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

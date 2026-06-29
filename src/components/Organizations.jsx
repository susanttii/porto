import { Users, Building2 } from 'lucide-react'

export default function Organizations() {
  const organizations = [
    {
      organization: "ESD Laboratory",
      position: "Staff"
    },
    {
      organization: "Telkom University",
      position: "Teaching Assistant"
    }
  ]

  return (
    <section id="organizations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Organizations
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {org.organization}
                </h3>
                <p className="text-primary-600 font-semibold">{org.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

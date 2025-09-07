

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <img className="w-full rounded-xl shadow-md ring-1 ring-slate-200 object-cover aspect-[4/3]" src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1757264729/foto_sobremi_ox40k2.webp" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Sobre mí</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">Soy la Lic. Andrea Cohen, nutricionista especializada en nutrición clínica y educación alimentaria. Con más de 10 años de experiencia, me dedico a ayudar a mis pacientes a lograr una alimentación saludable y mejorar su calidad de vida a través de planes nutricionales personalizados.</p>
          <p className="mt-3 text-slate-600 leading-relaxed">Mi enfoque se basa en la evaluación integral de cada paciente, combinando conocimientos científicos actualizados con un trato humano y cercano para lograr los mejores resultados en tu bienestar nutricional.</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">10+</div>
              <div className="text-sm text-slate-600">Años de experiencia</div>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">800+</div>
              <div className="text-sm text-slate-600">Pacientes atendidos</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-slate-900 mb-3">Formación académica:</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Licenciatura en Nutrición - Universidad de Buenos Aires
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Especialización en Nutrición Clínica
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Curso de Nutrición Deportiva
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}




import { HeartIcon, BoltIcon, ScaleIcon, AcademicCapIcon, SparklesIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const servicios = [
  {
    icon: HeartIcon,
    titulo: 'Nutrición clínica',
    descripcion: 'Tratamiento nutricional para diabetes, hipertensión, dislipidemias y otras patologías.',
  },
  {
    icon: BoltIcon,
    titulo: 'Nutrición deportiva',
    descripcion: 'Planes alimentarios para optimizar el rendimiento deportivo y la recuperación.',
  },
  {
    icon: ScaleIcon,
    titulo: 'Control de peso',
    descripcion: 'Programas personalizados para pérdida, mantenimiento o aumento de peso saludable.',
  },
  {
    icon: AcademicCapIcon,
    titulo: 'Nutrición infantil',
    descripcion: 'Alimentación saludable para niños y adolescentes con enfoque educativo familiar.',
  },
  {
    icon: SparklesIcon,
    titulo: 'Nutrición vegetariana',
    descripcion: 'Asesoramiento especializado para dietas vegetarianas y veganas balanceadas.',
  },
  {
    icon: BookOpenIcon,
    titulo: 'Educación alimentaria',
    descripcion: 'Talleres y consultoría para aprender hábitos alimentarios saludables.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Mis Servicios</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Ofrezco consultas nutricionales personalizadas con enfoque científico y humano para mejorar tu alimentación y calidad de vida.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, titulo, descripcion }) => (
            <div key={titulo} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-white border border-emerald-200 text-emerald-600 flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{titulo}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{descripcion}</p>
              <a href="#contacto" className="mt-4 inline-block text-emerald-600 font-medium hover:underline">Más información</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




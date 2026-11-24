import { ArrowUpRight, Boxes, Cpu, ShoppingBag } from 'lucide-react'
import { scrollToId } from '../utils.js'

const projects = [
  {
    name: 'Northstar Commerce',
    type: 'E-commerce Platform',
    desc: 'เพิ่มยอดขายออนไลน์ 210% ด้วยแพลตฟอร์มที่โหลดเร็วและ checkout ลื่นไหล',
    metric: '+210%',
    metricLabel: 'ยอดขาย',
    icon: ShoppingBag,
    theme: 'from-cyan-500/25 via-blue-500/10 to-transparent',
  },
  {
    name: 'FactorySense',
    type: 'IoT & Automation',
    desc: 'ระบบเฝ้าระวังโรงงานแบบเรียลไทม์ ลดเวลาหยุดผลิตลง 45%',
    metric: '-45%',
    metricLabel: 'Downtime',
    icon: Cpu,
    theme: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  },
  {
    name: 'Aura Media',
    type: 'AI Content Studio',
    desc: 'ผลิตคอนเทนต์สำหรับโซเชียลได้เร็วขึ้น 8 เท่า ด้วยระบบ AI ที่ดูแลแบรนด์',
    metric: '8x',
    metricLabel: 'ความเร็ว',
    icon: Boxes,
    theme: 'from-amber-500/25 via-orange-500/10 to-transparent',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-72 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
      <div className="container-x relative">
        <div className="text-center">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title mt-5">ผลงานที่สร้างความเปลี่ยนแปลง</h2>
          <p className="section-desc mx-auto">ตัวอย่างโปรเจกต์ที่เราส่งมอบให้ลูกค้าในหลายอุตสาหกรรม</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div key={project.name} className="glass-card group overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/30">
                <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.theme}`}>
                  <div className="grid-pattern absolute inset-0 opacity-60" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-transform group-hover:scale-110">
                    <Icon size={34} strokeWidth={1.5} />
                  </div>
                  <span className="absolute bottom-4 left-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
                    <div className="text-right">
                      <p className="text-lg font-extrabold text-accent-500">{project.metric}</p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">{project.metricLabel}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button onClick={() => scrollToId('contact')} className="btn-outline">
            อยากเห็นผลงานแบบนี้บ้าง? <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

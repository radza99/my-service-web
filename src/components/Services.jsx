import { ArrowUpRight, Code2, CloudCog, Cpu, PenTool, Sparkles, TrendingUp } from 'lucide-react'
import { scrollToId, servicesList } from '../utils.js'

const iconMap = { Code2, Cpu, Sparkles, PenTool, TrendingUp, CloudCog }

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="section-title mt-5">บริการของเรา</h2>
            <p className="section-desc">ทุกบริการเชื่อมต่อกันเป็นระบบเดียว ตั้งแต่แนวคิดจนถึงผลลัพธ์ที่วัดได้จริง</p>
          </div>
          <button onClick={() => scrollToId('contact')} className="btn-outline self-start md:self-auto">
            ปรึกษาทั้งหมด <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="glass-card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ${service.color}`}>
                  <Icon size={23} strokeWidth={1.9} />
                </div>
                <span className="absolute right-5 top-5 text-4xl font-black text-slate-200/70 dark:text-white/[0.06]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{service.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-600 transition-all group-hover:gap-3 dark:text-accent-400"
                >
                  ปรึกษาบริการนี้ <ArrowUpRight size={16} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

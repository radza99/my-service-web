import { useState } from 'react'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { packages } from '../utils.js'

export default function Pricing({ selectedPackage, onSelectPackage }) {
  const [cycle, setCycle] = useState('project')

  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_50%_0%,rgba(18,184,224,0.08),transparent_70%)]" />
      <div className="container-x relative">
        <div className="text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title mt-5">แพ็กเกจราคาที่ชัดเจน</h2>
          <p className="section-desc mx-auto">เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ ระบบจะส่งข้อมูลไปยังฟอร์มติดต่อให้ทันที</p>

          <div className="mx-auto mt-8 inline-flex rounded-xl border border-slate-200 bg-white/70 p-1 text-sm dark:border-white/10 dark:bg-white/[0.04]">
            {[
              { id: 'project', label: 'คิดตามโปรเจกต์' },
              { id: 'monthly', label: 'ดูแลรายเดือน' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCycle(item.id)}
                className={`rounded-lg px-4 py-2 font-semibold transition-all ${cycle === item.id ? 'bg-gradient-to-r from-accent-500 to-indigo-500 text-white shadow-md shadow-accent-500/20' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => {
            const active = selectedPackage === pkg.name
            return (
              <div
                key={pkg.name}
                className={`glass-card relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 ${active ? '!border-accent-500/60 ring-2 ring-accent-500/25' : ''} ${pkg.popular ? 'lg:scale-[1.03] lg:shadow-xl lg:shadow-accent-500/10' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-accent-500 to-indigo-500 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-accent-500/25">
                    <Sparkles size={12} /> ยอดนิยม
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{pkg.name}</h3>
                  {active && <span className="rounded-full bg-accent-500/15 px-2.5 py-1 text-[10px] font-bold text-accent-600 dark:text-accent-400">เลือกแล้ว</span>}
                </div>
                <p className="mt-2 min-h-10 text-sm text-slate-500 dark:text-slate-400">{pkg.tagline}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">฿</span>
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{pkg.price[cycle]}</span>
                  <span className="mb-1.5 text-sm text-slate-400">/{cycle === 'project' ? 'โปรเจกต์' : 'เดือน'}</span>
                </div>

                <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

                <ul className="flex-1 space-y-3.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`mt-8 w-full ${active ? 'btn-outline' : 'btn-primary'}`}
                >
                  {active ? 'เลือกแพ็กเกจนี้แล้ว' : 'เลือกแพ็กเกจนี้'} {!active && <ArrowRight size={17} />}
                </button>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-500">
          * ราคาเริ่มต้น สามารถปรับขอบเขตงานและฟีเจอร์ให้ตรงกับความต้องการได้ — ติดต่อเราเพื่อรับใบเสนอราคา
        </p>
      </div>
    </section>
  )
}

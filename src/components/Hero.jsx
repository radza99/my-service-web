import { Activity, ArrowRight, CheckCircle2, Cpu, Globe2, Play, Sparkles, Star, Zap } from 'lucide-react'
import { scrollToId } from '../utils.js'

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] py-6 lg:py-0">
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent-500/20 blur-[90px] animate-pulse-glow dark:bg-accent-500/25" />
      <div className="absolute -right-6 -top-4 -z-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="grid-pattern absolute -inset-8 -z-20" />

      <div className="glass-card overflow-hidden !rounded-3xl p-4 shadow-2xl shadow-slate-300/50 dark:shadow-black/40">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">nova / dashboard</span>
          <Activity size={15} className="text-accent-500" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">IoT Devices</span>
              <Cpu size={15} className="text-violet-500" />
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">248<span className="ml-1 text-xs font-medium text-emerald-500">+12%</span></p>
            <div className="mt-2 flex gap-1">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <span key={i} className="w-full rounded-full bg-violet-500/30" style={{ height: `${h / 9}px` }} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">AI Content</span>
              <Sparkles size={15} className="text-amber-500" />
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">1.2k<span className="ml-1 text-xs font-medium text-emerald-500">+38%</span></p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Website Performance</p>
              <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">99.9% <span className="text-xs font-medium text-slate-400">uptime</span></p>
            </div>
            <Zap size={18} className="text-accent-500" />
          </div>
          <svg viewBox="0 0 400 70" className="mt-3 h-16 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#12b8e0" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#12b8e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 55 L35 48 L70 52 L105 30 L140 38 L175 22 L210 34 L245 18 L280 26 L315 12 L350 20 L400 8 L400 70 L0 70 Z" fill="url(#chartFill)" />
            <path d="M0 55 L35 48 L70 52 L105 30 L140 38 L175 22 L210 34 L245 18 L280 26 L315 12 L350 20 L400 8" fill="none" stroke="#12b8e0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="absolute -left-2 top-8 flex animate-float items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-xl sm:-left-10 dark:border-white/10 dark:bg-[#111827]/95 dark:text-white">
        <CheckCircle2 size={16} className="text-emerald-500" /> Deploy สำเร็จ
      </div>
      <div className="absolute -bottom-2 right-0 flex animate-float-slow items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-xl sm:-right-8 dark:border-white/10 dark:bg-[#111827]/95 dark:text-white">
        <Globe2 size={16} className="text-accent-500" /> พร้อมให้บริการ 24/7
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(18,184,224,0.13),transparent_65%)]" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-70 dark:opacity-100" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fade-up">
          <div className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Digital & Creative Service Studio
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] dark:text-white">
            เปลี่ยนไอเดียเป็น{' '}
            <span className="bg-gradient-to-r from-accent-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">ระบบดิจิทัล</span>
            <br className="hidden sm:block" /> ที่ขับเคลื่อนธุรกิจ
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            รับทำเว็บไซต์ ระบบ IoT/Automation และผลิตคอนเทนต์ด้วย AI ครบวงจร — จากไอเดีย การออกแบบ ไปจนถึงการปล่อยระบบจริง พร้อมทีมดูแลหลังส่งมอบ
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollToId('contact')} className="btn-primary !px-6 !py-3.5">
              เริ่มโปรเจกต์ฟรี <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToId('work')} className="btn-outline !px-6 !py-3.5">
              <Play size={16} className="fill-current" /> ดูผลงานของเรา
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['N', 'A', 'V', 'O'].map((letter, i) => (
                  <span key={letter} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f5f7fb] text-[10px] font-bold text-white dark:border-[#070b14] ${['bg-cyan-600', 'bg-indigo-600', 'bg-violet-600', 'bg-rose-500'][i]}`}>
                    {letter}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={12} className="fill-current" />)}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">ลูกค้าเชื่อมั่น 120+ ธุรกิจ</p>
              </div>
            </div>
            <div className="h-9 w-px bg-slate-200 dark:bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={17} className="text-emerald-500" /> ส่งมอบตรงเวลา 98%
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="container-x relative mt-20 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-y border-slate-200 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:gap-x-16 dark:border-white/[0.07] dark:text-slate-600">
          <span>React</span><span>Next.js</span><span>Node.js</span><span>AWS</span><span>Python</span><span>Arduino</span><span>Figma</span>
        </div>
      </div>
    </section>
  )
}

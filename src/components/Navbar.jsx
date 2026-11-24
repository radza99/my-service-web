import { useState } from 'react'
import { ArrowRight, Check, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { scrollToId } from '../utils.js'

const navItems = [
  { label: 'บริการ', id: 'services' },
  { label: 'ผลงาน', id: 'work' },
  { label: 'แพ็กเกจราคา', id: 'pricing' },
  { label: 'จองคิว / ติดต่อ', id: 'contact' },
]

function Logo() {
  return (
    <button onClick={() => scrollToId('home')} className="group flex items-center gap-2.5" aria-label="NOVA Studio - กลับด้านบน">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 via-accent-500 to-indigo-600 text-white shadow-lg shadow-accent-500/25 transition-transform group-hover:rotate-6">
        <Sparkles size={18} strokeWidth={2.2} />
      </span>
      <span className="text-left text-lg font-extrabold leading-none tracking-tight text-slate-900 dark:text-white">
        NOVA<span className="text-accent-500">.</span>
        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">Studio</span>
      </span>
    </button>
  )
}

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/[0.07] dark:bg-[#070b14]/80">
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleTheme}
            aria-label={dark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => goTo('contact')} className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            เริ่มโปรเจกต์ <ArrowRight size={16} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="เปิดเมนู"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 md:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-up border-t border-slate-200/60 bg-white/95 px-5 py-4 md:hidden dark:border-white/10 dark:bg-[#070b14]/95">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-accent-500/10 dark:text-slate-200"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => goTo('contact')} className="btn-primary mt-2 w-full">
              เริ่มโปรเจกต์ <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.07]">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-slate-500 dark:text-slate-500">
            Digital & Creative Service Studio — สร้างเว็บไซต์ ระบบอัตโนมัติ และคอนเทนต์ AI เพื่อให้ธุรกิจของคุณเติบโตได้เร็วขึ้น
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToId(item.id)} className="transition-colors hover:text-accent-500">
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-600">© 2026 NOVA Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

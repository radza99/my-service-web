import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react'

const styles = {
  success: {
    icon: CheckCircle2,
    wrapper: 'border-emerald-500/30 bg-white dark:bg-[#0f1c1a]',
    iconColor: 'text-emerald-500',
    title: 'text-emerald-700 dark:text-emerald-400',
  },
  error: {
    icon: AlertCircle,
    wrapper: 'border-rose-500/30 bg-white dark:bg-[#1c1116]',
    iconColor: 'text-rose-500',
    title: 'text-rose-700 dark:text-rose-400',
  },
  info: {
    icon: Info,
    wrapper: 'border-accent-500/30 bg-white dark:bg-[#0d1820]',
    iconColor: 'text-accent-500',
    title: 'text-accent-700 dark:text-accent-400',
  },
}

export default function Toast({ toast, onClose }) {
  if (!toast) return null
  const style = styles[toast.type] || styles.info
  const Icon = style.icon

  return (
    <div role="status" aria-live="polite" className={`animate-toast-in fixed right-4 top-20 z-[60] flex w-[min(360px,calc(100vw-2rem))] items-start gap-3 rounded-2xl border p-4 shadow-2xl shadow-slate-400/20 sm:right-6 dark:shadow-black/40 ${style.wrapper}`}>
      <Icon size={21} className={`mt-0.5 flex-none ${style.iconColor}`} />
      <div className="flex-1">
        <p className={`text-sm font-bold ${style.title}`}>{toast.title}</p>
        {toast.message && <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{toast.message}</p>}
      </div>
      <button onClick={onClose} aria-label="ปิดการแจ้งเตือน" className="text-slate-400 transition-colors hover:text-slate-700 dark:hover:text-white">
        <X size={16} />
      </button>
    </div>
  )
}

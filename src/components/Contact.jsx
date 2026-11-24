import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react'
import { packages, servicesList } from '../utils.js'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  package: '',
  message: '',
}

export default function Contact({ selectedPackage, selectedService, onPackageChange, onServiceChange, notify }) {
  const [form, setForm] = useState({ ...initialForm, package: selectedPackage, service: selectedService })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  useEffect(() => {
    setForm((prev) => ({ ...prev, package: selectedPackage, service: selectedService }))
  }, [selectedPackage, selectedService])

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (field === 'package') onPackageChange(value)
    if (field === 'service') onServiceChange(value)
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'กรุณากรอกชื่อของคุณ'
    if (!form.email.trim()) next.email = 'กรุณากรอกอีเมล'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'รูปแบบอีเมลไม่ถูกต้อง'
    if (!form.service) next.service = 'กรุณาเลือกบริการที่สนใจ'
    if (form.message.trim().length < 10) next.message = 'กรุณาเขียนรายละเอียดอย่างน้อย 10 ตัวอักษร'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      notify('error', 'กรอกข้อมูลไม่ครบ', 'กรุณาตรวจสอบข้อมูลที่เน้นสีแดงแล้วลองอีกครั้ง')
      return
    }

    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      notify('success', 'ส่งคำขอเรียบร้อย!', `ขอบคุณ ${form.name} ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง`)
      setForm({ ...initialForm })
      setErrors({})
      onPackageChange('')
      onServiceChange('')
    }, 1100)
  }

  const contactInfo = [
    { icon: Mail, label: 'อีเมล', value: 'hello@nova.studio' },
    { icon: Phone, label: 'โทรศัพท์', value: '+66 81 234 5678' },
    { icon: MapPin, label: 'ที่อยู่', value: 'SUDS University, Nakhon Ratchasima' },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_50%_100%,rgba(18,184,224,0.1),transparent_70%)]" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <span className="eyebrow">Let's talk</span>
          <h2 className="section-title mt-5">เล่าไอเดียของคุณให้เราฟัง</h2>
          <p className="section-desc">
            กรอกข้อมูลด้านข้าง แล้วทีมงาน NOVA Studio จะติดต่อกลับพร้อมแนวทางและใบเสนอราคาภายใน 24 ชั่วโมง
          </p>

          <div className="mt-10 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="glass-card flex items-center gap-4 p-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-100">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.07] p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
              <Clock3 size={17} /> ตอบกลับรวดเร็ว
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              วันทำการ ตอบกลับภายใน 2–4 ชั่วโมง · นอกเวลาทำการ ตอบกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="glass-card !rounded-3xl p-6 shadow-xl shadow-slate-300/40 sm:p-8 dark:shadow-black/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">ฟอร์มจองคิว / สอบถาม</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ไม่มีค่าใช้จ่ายในการปรึกษา</p>
            </div>
            <ShieldCheck size={26} className="text-accent-500" />
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">ชื่อ-นามสกุล *</label>
              <input id="name" className={`field ${errors.name ? '!border-rose-500' : ''}`} placeholder="เช่น สมชาย ใจดี" value={form.name} onChange={(e) => update('name', e.target.value)} />
              {errors.name && <p className="mt-1.5 text-xs text-rose-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">อีเมล *</label>
              <input id="email" type="email" className={`field ${errors.email ? '!border-rose-500' : ''}`} placeholder="you@company.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
              {errors.email && <p className="mt-1.5 text-xs text-rose-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">เบอร์โทรศัพท์</label>
              <input id="phone" className="field" placeholder="08x-xxx-xxxx" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
            </div>
            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">บริการที่สนใจ *</label>
              <select id="service" className={`field ${errors.service ? '!border-rose-500' : ''}`} value={form.service} onChange={(e) => update('service', e.target.value)}>
                <option value="">-- เลือกบริการ --</option>
                {servicesList.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
              </select>
              {errors.service && <p className="mt-1.5 text-xs text-rose-500">{errors.service}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="package" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">แพ็กเกจที่เลือก</label>
              <select id="package" className="field" value={form.package} onChange={(e) => update('package', e.target.value)}>
                <option value="">-- ยังไม่เลือก / ปรึกษาแนะนำ --</option>
                {packages.map((pkg) => <option key={pkg.name} value={pkg.name}>{pkg.name}</option>)}
              </select>
              {form.package && (
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent-600 dark:text-accent-400">
                  <CheckCircle2 size={14} /> รับข้อมูลแพ็กเกจ "{form.package}" จากหน้าราคาแล้ว
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">รายละเอียดโปรเจกต์ *</label>
              <textarea id="message" rows={5} className={`field resize-none ${errors.message ? '!border-rose-500' : ''}`} placeholder="เล่าเป้าหมาย กลุ่มเป้าหมาย หรืองบประมาณโดยประมาณให้เราฟัง..." value={form.message} onChange={(e) => update('message', e.target.value)} />
              {errors.message && <p className="mt-1.5 text-xs text-rose-500">{errors.message}</p>}
            </div>
          </div>

          <button type="submit" disabled={sending} className="btn-primary mt-7 w-full !py-3.5">
            {sending ? (
              <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> กำลังส่ง...</>
            ) : (
              <>ส่งคำขอติดต่อ <Send size={17} /></>
            )}
          </button>
          <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
            ข้อมูลของคุณจะถูกเก็บเป็นความลับและใช้เพื่อติดต่อกลับเท่านั้น <ArrowRight size={11} className="inline" />
          </p>
        </form>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import Navbar, { Footer } from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Toast from './components/Toast.jsx'
import { scrollToId } from './utils.js'

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('nova-theme')
    return saved ? saved === 'dark' : true
  })
  const [selectedPackage, setSelectedPackage] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('nova-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(null), 4500)
    return () => window.clearTimeout(timer)
  }, [toast])

  const notify = (type, title, message) => setToast({ type, title, message, id: Date.now() })

  const handlePackageSelect = (name) => {
    setSelectedPackage(name)
    notify('info', 'เลือกแพ็กเกจแล้ว', `ข้อมูลแพ็กเกจ ${name} ถูกส่งไปยังฟอร์มติดต่อแล้ว`)
    scrollToId('contact')
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    notify('info', 'เลือกบริการแล้ว', `เราใส่ "${service}" ลงในฟอร์มให้คุณแล้ว`)
    scrollToId('contact')
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar dark={dark} onToggleTheme={() => setDark((prev) => !prev)} />
      <main>
        <Hero />
        <Services onSelectService={handleServiceSelect} />
        <Work />
        <Pricing selectedPackage={selectedPackage} onSelectPackage={handlePackageSelect} />
        <Contact
          selectedPackage={selectedPackage}
          selectedService={selectedService}
          onPackageChange={setSelectedPackage}
          onServiceChange={setSelectedService}
          notify={notify}
        />
      </main>
      <Footer />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const servicesList = [
  {
    title: 'พัฒนาเว็บไซต์',
    short: 'Website',
    desc: 'เว็บไซต์องค์กร Landing Page และระบบหลังบ้านที่ออกแบบให้โหลดเร็ว ใช้ง่าย และพร้อมขยายธุรกิจ',
    tags: ['React / Next.js', 'CMS', 'E-commerce'],
    icon: 'Code2',
    color: 'from-cyan-500/20 to-blue-500/5 text-accent-500 ring-accent-500/25',
  },
  {
    title: 'ระบบ IoT & Automation',
    short: 'IoT',
    desc: 'เชื่อมต่ออุปกรณ์ เก็บข้อมูลแบบเรียลไทม์ และสร้างระบบอัตโนมัติที่ลดงานซ้ำซากในทุกกระบวนการ',
    tags: ['Sensor', 'Dashboard', 'Workflow'],
    icon: 'Cpu',
    color: 'from-violet-500/20 to-fuchsia-500/5 text-violet-500 ring-violet-500/25',
  },
  {
    title: 'ผลิตคอนเทนต์ด้วย AI',
    short: 'AI Content',
    desc: 'ผลิตภาพ วิดีโอ และข้อความการตลาดด้วย AI พร้อมทีมดูแลคุณภาพให้ตรงกับแบรนด์ของคุณ',
    tags: ['AI Video', 'Image', 'Copywriting'],
    icon: 'Sparkles',
    color: 'from-amber-500/20 to-orange-500/5 text-amber-500 ring-amber-500/25',
  },
  {
    title: 'ออกแบบ UX / UI',
    short: 'Design',
    desc: 'ออกแบบประสบการณ์ผู้ใช้ตั้งแต่ Wireframe ไปจนถึง Design System ที่สอดคล้องและใช้งานจริง',
    tags: ['Figma', 'Prototype', 'Design System'],
    icon: 'PenTool',
    color: 'from-rose-500/20 to-pink-500/5 text-rose-500 ring-rose-500/25',
  },
  {
    title: 'การตลาดดิจิทัล',
    short: 'Marketing',
    desc: 'วางกลยุทธ์ SEO, ADS และ Social Media ให้ทุกช่องทางทำงานร่วมกันและวัดผลได้ชัดเจน',
    tags: ['SEO', 'Performance Ads', 'Analytics'],
    icon: 'TrendingUp',
    color: 'from-emerald-500/20 to-teal-500/5 text-emerald-500 ring-emerald-500/25',
  },
  {
    title: 'Cloud & DevOps',
    short: 'Cloud',
    desc: 'ตั้งค่าเซิร์ฟเวอร์ ระบบ Deploy อัตโนมัติ และเฝ้าระวังบริการให้พร้อมใช้งานตลอดเวลา',
    tags: ['AWS', 'CI/CD', 'Monitoring'],
    icon: 'CloudCog',
    color: 'from-sky-500/20 to-indigo-500/5 text-sky-500 ring-sky-500/25',
  },
]

export const packages = [
  {
    name: 'Starter',
    tagline: 'สำหรับผู้เริ่มต้นและธุรกิจขนาดเล็ก',
    price: { project: '19,000', monthly: '9,000' },
    features: [
      'เว็บไซต์ 1 หน้า / Landing Page',
      'ออกแบบตาม Identity เดิม',
      'รองรับมือถือ 100%',
      'ส่งมอบภายใน 7–10 วัน',
      'ดูแลและอัปเดต 1 เดือน',
    ],
  },
  {
    name: 'Pro',
    tagline: 'สำหรับธุรกิจที่ต้องการระบบครบวงจร',
    price: { project: '49,000', monthly: '19,000' },
    popular: true,
    features: [
      'เว็บไซต์หลายหน้า + CMS',
      'ออกแบบ UX/UI เฉพาะแบรนด์',
      'เชื่อมต่อระบบ IoT / API',
      'ผลิตคอนเทนต์ AI 10 ชิ้น/เดือน',
      'SEO พื้นฐาน + Google Analytics',
      'ดูแลและอัปเดต 3 เดือน',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'สำหรับองค์กรที่มีความต้องการเฉพาะทาง',
    price: { project: '129,000', monthly: '49,000' },
    features: [
      'ระบบเว็บแอปพลิเคชันเต็มรูปแบบ',
      'ออกแบบ Design System และ Prototype',
      'IoT Automation + Dashboard แบบเรียลไทม์',
      'ผลิตคอนเทนต์ AI แบบไม่จำกัด',
      'Cloud, CI/CD และ Monitoring',
      'ทีมดูแลเฉพาะ 24/7',
    ],
  },
]

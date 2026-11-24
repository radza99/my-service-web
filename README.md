<div align="center">

# NOVA Studio

**Digital & Creative Service Studio** — เว็บไซต์ธุรกิจบริการด้านดิจิทัล ครบวงจร ตั้งแต่การนำเสนอบริการ ไปจนถึงการจองคิวและติดต่อลูกค้า

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)

</div>

---

## ✨ ภาพรวม

NOVA Studio คือ Landing Page สำหรับธุรกิจที่ให้บริการ **รับทำเว็บไซต์ ระบบ IoT/Automation และผลิตคอนเทนต์ด้วย AI** ออกแบบในโทน **Dark Modern Tech** พร้อมระบบสลับ Theme ที่บันทึกค่าความชอบไว้ใน `localStorage` ทุกครั้ง

โครงสร้างโปรเจกต์ใช้ **React + Vite** เป็นฐาน มี **Tailwind CSS** เป็น Design System และใช้ **Lucide React** สำหรับ Iconography ทั้งหมด รองรับ Responsive ทุกขนาดหน้าจอและมี Smooth Scroll ไปยังแต่ละ Section

## 🚀 ฟีเจอร์หลัก

| ฟีเจอร์ | รายละเอียด |
| --- | --- |
| 🧭 **Navbar & Smooth Scroll** | เมนูเลยไปยัง บริการ / ผลงาน / แพ็กเกจราคา / จองคิว พร้อม Mobile Menu และปุ่ม CTA |
| 🎯 **Hero Section** | นำเสนอ 3 กลุ่มบริการหลัก พร้อม Dashboard Mockup, สถิติความเชื่อมั่น และ Tech Stack |
| 🧩 **Services Grid** | แสดงบริการหลัก 6 รายการแบบ Grid พร้อม Icon, คำอธิบาย, Tag และปุ่มปรึกษาบริการที่ส่งชื่อบริการเข้าฟอร์มอัตโนมัติ |
| 💰 **Interactive Pricing** | แพ็กเกจ **Starter / Pro / Enterprise** สลับโหมดคิดราคาได้ (ต่อโปรเจกต์ / รายเดือน) และเมื่อกดเลือก แพ็กเกจจะถูกส่งเข้า Form ทันที พร้อมเลื่อนหน้าจอไปที่ฟอร์ม |
| 📝 **Booking / Inquiry Form** | ฟอร์มจองคิวพร้อม Validation, สถานะ Loading ขณะส่ง และ **Toast Notification** แจ้งผลสำเร็จ/ข้อผิดพลาด |
| 🌗 **Dark / Light Mode** | ปุ่มสลับ Theme ที่ใช้งานได้ทันที บันทึกสถานะผ่าน `localStorage` และรองรับค่าเริ่มต้นจากระบบ |

## 🛠️ เทคโนโลยีที่ใช้

- **React 19** — UI Library สำหรับสร้าง Component แบบ Declarative
- **Vite 6** — Build Tool และ Dev Server ที่รวดเร็ว
- **Tailwind CSS 3** — Utility-first CSS พร้อม Custom Animation และ Dark Mode แบบ Class
- **Lucide React** — Icon Set น้ำหนักเบา
- **Google Fonts** — Inter + IBM Plex Sans Thai

## 📁 โครงสร้างโปรเจกต์

```text
src/
├── components/
│   ├── Contact.jsx     # Booking / Inquiry Form + Validation
│   ├── Hero.jsx        # Hero Section + Dashboard Visual
│   ├── Navbar.jsx      # Navigation + Theme Toggle + Footer
│   ├── Pricing.jsx     # Pricing Calculator / 3 Packages
│   ├── Services.jsx    # Services Grid (6 services)
│   ├── Toast.jsx       # Status Notification
│   └── Work.jsx        # Selected Work / Portfolio
├── App.jsx             # State Management (Theme, Package, Service, Toast)
├── index.css           # Tailwind Layers + Design Tokens
├── main.jsx            # React Entry Point
└── utils.js            # Data & Scroll Helper
```

## ⚙️ วิธีติดตั้งและรันใช้งาน

ต้องการ **Node.js 18+** และ npm

```bash
# 1.clone โปรเจกต์
git clone https://github.com/radza99/my-service-web.git
cd my-service-web

# 2. ติดตั้ง Dependencies
npm install

# 3. รัน Development Server
npm run dev
```

เปิดเบราว์เซอร์ที่ **http://localhost:5173** (หรือตาม Port ที่ Vite แสดงใน Terminal)

### คำสั่งอื่น ๆ

```bash
npm run build     # สร้าง Production Build ในโฟลเดอร์ dist/
npm run preview   # พรีวิว Production Build แบบ Local
```

## 📄 License

MIT © 2026 NOVA Studio

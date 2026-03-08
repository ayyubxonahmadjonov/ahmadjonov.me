import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  BookOpen,
  Smartphone,
  Calendar,
} from 'lucide-react';
import profileImage from "../assets/profile_image.png";

type TabType = 'about' | 'resume' | 'portfolio' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const skills = [
    { name: 'Flutter/Dart', level: 90 },
    { name: 'BLoC / Cubit / Provider', level: 85 },
    { name: 'Firebase', level: 85 },
    { name: 'RESTful APIs / WebSocket', level: 80 },
    { name: 'UI/UX (Figma to Flutter)', level: 80 },
    { name: 'SQLite / Hive / Shared Prefs', level: 75 },
    { name: 'Google Play & App Store Deploy', level: 90 },
    { name: 'English (IELTS 6.0)', level: 65 }
  ];

  const projects = [
    { name: 'TIIN LOYALTY', description: 'Cashback & loyalty cards for supermarkets. Barcode scanning, points tracking, special offers.', gradient: 'from-green-400 to-emerald-600', googlePlayUrl: 'https://play.google.com/store/apps/details?id=cashback.in1.uz', appStoreUrl: 'https://apps.apple.com/uz/app/tiin-loyalty/id1609771623', letter: 'T' },
    { name: 'INVAN MOBILE', description: 'Business management & inventory control app. Sales tracking, stock management, reports.', gradient: 'from-blue-400 to-indigo-600', googlePlayUrl: 'https://play.google.com/store/apps/details?id=invan2.in2.uz', appStoreUrl: 'https://apps.apple.com/uz/app/invan-mobile/id6749793383', letter: 'I' },
    { name: 'CARINFOPRO', description: "Scan a car sticker → see vehicle owner's contact data. QR-based system for Uzbekistan roads.", gradient: 'from-indigo-400 to-purple-600', appStoreUrl: 'https://apps.apple.com/uz/app/carinfopro/id6759032034', letter: 'C' },
    { name: 'DICTIONARY EVEREST', description: 'Smart Uzbek-English dictionary with fast search.', gradient: 'from-orange-400 to-red-600', googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.dic.randomic', letter: 'D' },
    { name: 'SAJDA MOBILE', description: 'Islamic prayer times, Qibla direction, Azan alerts.', gradient: 'from-teal-400 to-cyan-600', googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.ayyubxon.sajda_app', appStoreUrl: 'https://apps.apple.com/uz/app/sajda-mobile/id6754518453', letter: 'S' },
    { name: 'STROY BAZA N1', description: 'Construction materials marketplace app.', gradient: 'from-yellow-400 to-orange-600', googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.gold_house', appStoreUrl: 'https://apps.apple.com/uz/app/stroy-baza-n1/id6754191756', letter: 'S' },
    { name: 'TIC TAC TOE INFINITY', description: 'Multiplayer Tic Tac Toe with infinite board & AI opponent.', gradient: 'from-pink-400 to-rose-600', appStoreUrl: 'https://apps.apple.com/uz/app/tic-tac-toe-infinity/id6754776498', letter: 'T' },
    { name: 'VOCAB MASTER', description: 'English vocabulary learning app with spaced repetition.', gradient: 'from-purple-400 to-pink-600', googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.vocab_master', letter: 'V' },
    { name: 'INVAN POS', description: 'Point of Sale system: sales, discounts, barcode scanning, Bluetooth thermal printer, daily reports.', gradient: 'from-cyan-400 to-blue-600', isInternal: true, letter: 'P' }
  ];

  const contactItems = [
    { Icon: Mail, label: 'EMAIL', value: 'ayubxonahmadjonov43@gmail.com' },
    { Icon: Phone, label: 'PHONE', value: '+998 88 739 21 22' },
    { Icon: Calendar, label: 'BIRTHDAY', value: 'April 3, 2007' },
    { Icon: MapPin, label: 'LOCATION', value: 'Fergana, Uzbekistan' },
  ];

  const socialLinks = [
    { href: 'https://t.me/ayyubxon_akhmadjonov', Icon: MessageCircle },
    { href: 'https://www.instagram.com/ahmadjonov_2122/', Icon: Instagram },
    { href: 'https://github.com/ayyubxonahmadjonov', Icon: Github },
    { href: 'https://www.linkedin.com/in/ayyubxon-ahmadjonov', Icon: Linkedin },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* MAIN CARD */}
      <div style={{
        width: '100%',
        maxWidth: '1080px',
        display: 'flex',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
        border: '1px solid #2a2a2a',
        minHeight: '600px',
      }}>

        {/* ── LEFT SIDEBAR ── */}
        <aside style={{
          width: '280px',
          flexShrink: 0,
          backgroundColor: '#242424',
          borderRight: '1px solid #2a2a2a',
          display: 'flex',
          flexDirection: 'column',
          padding: '28px 20px',
          gap: '0',
        }}>

          {/* Profile Photo — square rounded like Azamov X */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
            <img
              src={profileImage}
              alt="Ayyubxon Ahmadjonov"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '16px',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: '20px', fontWeight: 700, textAlign: 'center',
            color: '#ffffff', marginBottom: '10px',
            fontFamily: "'DM Sans', sans-serif"
          }}>
            Ayyubxon Ahmadjonov
          </h1>

          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <span style={{
              fontSize: '13px', color: '#d1d5db',
              padding: '6px 20px', borderRadius: '8px',
              backgroundColor: '#2e2e2e',
            }}>
              Flutter Developer
            </span>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#333', marginBottom: '20px' }} />

          {/* Contact Cards — Azamov X style */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {contactItems.map(({ Icon, label, value }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                backgroundColor: '#2e2e2e', borderRadius: '10px', padding: '10px 14px',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  backgroundColor: '#383838',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ fontSize: '10px', color: '#6b7280', marginBottom: '1px', letterSpacing: '0.05em' }}>{label}</p>
                  <p style={{ fontSize: '12px', color: '#e5e7eb', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#333', marginBottom: '20px' }} />

          {/* Social Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {socialLinks.map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#6b7280', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f59e0b')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
              >
                <Icon style={{ width: '20px', height: '20px' }} />
              </a>
            ))}
          </div>
        </aside>

        {/* ── RIGHT CONTENT ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e', overflow: 'hidden' }}>

          {/* Top Nav */}
          <nav style={{ borderBottom: '1px solid #2a2a2a', flexShrink: 0, padding: '0 28px' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              {(['about', 'resume', 'portfolio', 'contact'] as TabType[]).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{
                    position: 'relative', padding: '16px 0 14px',
                    fontSize: '13px', fontWeight: 500,
                    color: activeTab === tab ? '#f59e0b' : '#9ca3af',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textTransform: 'capitalize', transition: 'color 0.2s',
                  }}
                >
                  {tab}
                  {activeTab === tab && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }} />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Scrollable content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '28px' }}>

            {/* ── ABOUT ── */}
            {activeTab === 'about' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <section>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>About Me</h2>
                  <div style={{ height: '3px', width: '44px', backgroundColor: '#f59e0b', borderRadius: '2px', marginBottom: '14px' }} />
                  <p style={{ color: '#d1d5db', lineHeight: 1.7, marginBottom: '10px', fontSize: '14px' }}>
                    I'm a Flutter Developer with nearly 1 year of experience building cross-platform mobile apps for both iOS and Android.
                    Currently working full-time at Invan Soft, Tashkent — developing production-grade apps used by real businesses.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: '#d1d5db' }}>
                    <p>🚀 Building clean architecture Flutter apps since 2023.</p>
                    <p>📱 10+ apps published on Google Play & App Store.</p>
                    <p>🎯 Focused on performance, clean code, and great UX.</p>
                  </div>
                </section>

                <section>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: "'DM Sans', sans-serif" }}>What I Do</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    {[
                      { Icon: Smartphone, grad: 'linear-gradient(135deg,#f59e0b,#ef4444)', title: 'Mobile Apps', desc: 'Professional Flutter development for iOS and Android with clean architecture, BLoC state management, Firebase integration.' },
                      { Icon: Code2, grad: 'linear-gradient(135deg,#a855f7,#ec4899)', title: 'Backend Integration', desc: 'RESTful APIs, WebSocket, Firebase (Auth, Firestore, Push Notifications), real-time data sync.' },
                    ].map(({ Icon, grad, title, desc }) => (
                      <div key={title}
                        style={{ backgroundColor: '#2a2a2a', border: '1px solid #333', borderRadius: '14px', padding: '18px', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = '#333')}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon style={{ width: '20px', height: '20px', color: '#fff' }} />
                          </div>
                          <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>{title}</h3>
                        </div>
                        <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.6 }}>{desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: "'DM Sans', sans-serif" }}>My Skills</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {skills.map(skill => (
                      <div key={skill.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <span style={{ fontSize: '13px', color: '#d1d5db', fontWeight: 500 }}>{skill.name}</span>
                          <span style={{ fontSize: '13px', color: '#f59e0b' }}>{skill.level}%</span>
                        </div>
                        <div style={{ height: '5px', backgroundColor: '#333', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ width: `${skill.level}%`, height: '100%', background: 'linear-gradient(to right,#f59e0b,#ef4444)', borderRadius: '999px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ── RESUME ── */}
            {activeTab === 'resume' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <section>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <BookOpen style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
                    <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>Experience</h2>
                  </div>
                  <div style={{ backgroundColor: '#2a2a2a', border: '1px solid #333', borderRadius: '16px', padding: '22px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg,#f59e0b,#ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Briefcase style={{ width: '22px', height: '22px', color: '#fff' }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>INVAN SOFT</h3>
                        <p style={{ fontSize: '12px', color: '#9ca3af' }}>Full-time · 1 yr 10 mos</p>
                        <p style={{ fontSize: '11px', color: '#6b7280' }}>Tashkent, Uzbekistan</p>
                      </div>
                    </div>
                    <div style={{ position: 'relative', paddingLeft: '22px' }}>
                      <div style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom,#f59e0b,#a855f7)' }} />
                      <div style={{ position: 'relative', marginBottom: '24px' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', border: '2px solid #2a2a2a' }} />
                        <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '14px', marginBottom: '2px' }}>Flutter Developer</h4>
                        <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '8px' }}>Jun 2025 – Present · 10 mos</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          {['5+ production apps built', 'POS system: sales, discounts, barcode scan, receipt print', 'Invan Mobile, Tiin Loyalty', 'Inventory Turnover analytics'].map(item => (
                            <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#d1d5db' }}>
                              <span style={{ color: '#f59e0b', marginTop: '1px' }}>•</span><span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#a855f7', border: '2px solid #2a2a2a' }} />
                        <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '14px', marginBottom: '2px' }}>Flutter Developer Intern</h4>
                        <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '8px' }}>Jun 2024 – May 2025 · 1 yr</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          {['BLoC & Clean Architecture', 'Real project contributions', 'Flutter & Dart training done'].map(item => (
                            <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#d1d5db' }}>
                              <span style={{ color: '#a855f7', marginTop: '1px' }}>•</span><span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <GraduationCap style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
                    <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>Education</h2>
                  </div>
                  <div style={{ position: 'relative', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '2px', backgroundColor: '#333' }} />
                    {[
                      { name: 'Invan Soft', sub: 'Flutter & Dart Training', period: '2023 – 2024', extra: 'Mobile Development Practical Course' },
                      { name: 'Vocational School No.1, Fergana', sub: 'IT Specialization', period: '2024 – 2026 (2nd year student)' },
                      { name: 'Everest Language Learning Center', sub: 'English Language Program', period: 'IELTS Band 6.0' },
                    ].map(({ name, sub, period, extra }) => (
                      <div key={name} style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '14px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', border: '2px solid #1e1e1e' }} />
                        <div style={{ backgroundColor: '#2a2a2a', border: '1px solid #333', borderRadius: '12px', padding: '14px' }}>
                          <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '13px', marginBottom: '2px' }}>{name}</h4>
                          <p style={{ fontSize: '12px', fontWeight: 600, color: '#f59e0b', marginBottom: '2px' }}>{sub}</p>
                          <p style={{ fontSize: '11px', color: '#9ca3af' }}>{period}</p>
                          {extra && <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>{extra}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ── PORTFOLIO ── */}
            {activeTab === 'portfolio' && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '20px', fontFamily: "'DM Sans', sans-serif" }}>Portfolio</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                  {projects.map((project) => (
                    <div key={project.name}
                      style={{ backgroundColor: '#2a2a2a', border: '1px solid #333', borderRadius: '14px', padding: '18px', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div className={`bg-gradient-to-br ${project.gradient}`} style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '22px', fontWeight: 700, color: '#fff' }}>{project.letter}</span>
                      </div>
                      <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '5px' }}>{project.name}</h3>
                      <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: 1.5, marginBottom: '10px' }}>{project.description}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {project.googlePlayUrl && (
                          <a href={project.googlePlayUrl} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: '#1a1a1a', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: '#fff', textDecoration: 'none' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#222')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
                          >
                            <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px' }}>
                              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#34A853" />
                            </svg>
                            Google Play
                          </a>
                        )}
                        {project.appStoreUrl && (
                          <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: '#1a1a1a', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: '#fff', textDecoration: 'none' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#222')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
                          >
                            <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px' }}>
                              <path d="M17.05 20.28C16.07 21.23 15.06 21.08 14.11 20.63C13.11 20.17 12.2 20.15 11.14 20.63C9.79 21.23 9.05 21.05 8.2 20.28C2.79 14.58 3.51 5.88 9.56 5.58C10.98 5.65 11.97 6.43 12.81 6.49C14.06 6.27 15.27 5.46 16.63 5.54C18.28 5.65 19.53 6.31 20.36 7.5C17.01 9.45 17.76 14.13 20.79 15.35C20.18 17 19.39 18.63 17.04 20.29M12.71 5.52C12.53 3.46 14.23 1.73 16.16 1.5C16.46 3.89 14.12 5.75 12.71 5.52Z" fill="white" />
                            </svg>
                            App Store
                          </a>
                        )}
                        {project.isInternal && (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#333', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: '#6b7280' }}>
                            Internal Product
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── CONTACT ── */}
            {activeTab === 'contact' && (
              <div style={{ maxWidth: '520px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(34,197,94,0.15)', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', color: '#86efac', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                    Open to work
                  </span>
                </div>
                <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>
                  Let's Work Together
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { href: 'mailto:ayubxonahmadjonov43@gmail.com', Icon: Mail, label: 'Email', value: 'ayubxonahmadjonov43@gmail.com' },
                    { href: 'tel:+998887392122', Icon: Phone, label: 'Phone', value: '+998 88 739 21 22' },
                    { href: 'https://t.me/ayyubxon_akhmadjonov', Icon: MessageCircle, label: 'Telegram', value: '@ayyubxon_akhmadjonov' },
                    { href: 'https://www.linkedin.com/in/ayyubxon-ahmadjonov', Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ayyubxon-ahmadjonov' },
                    { href: 'https://github.com/ayyubxonahmadjonov', Icon: Github, label: 'GitHub', value: 'github.com/ayyubxonahmadjonov' },
                    { href: 'https://www.instagram.com/ahmadjonov_2122/', Icon: Instagram, label: 'Instagram', value: 'instagram.com/ahmadjonov_2122' },
                  ].map(({ href, Icon, label, value }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: '#2a2a2a', border: '1px solid #333', borderRadius: '12px', padding: '12px 16px', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>{label}</p>
                        <p style={{ fontSize: '13px', color: '#e5e7eb' }}>{value}</p>
                      </div>
                    </a>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: '#2a2a2a', border: '1px solid #333', borderRadius: '12px', padding: '12px 16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Location</p>
                      <p style={{ fontSize: '13px', color: '#e5e7eb' }}>Fergana, Uzbekistan</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import {
  Mail, Phone, MapPin, Briefcase, GraduationCap,
  Code2, MessageCircle, Linkedin, Instagram, Github,
  BookOpen, Smartphone, Calendar,
} from 'lucide-react';
import profileImage from "../assets/profile_image.png";
import tiinImg from "../assets/tiin.png";
import invanImg from "../assets/invan.png";
import carinfoproImg from "../assets/carinfopro.jpg";
import dictionaryImg from "../assets/dictionary.png";
import sajdaImg from "../assets/sajda.jpg";
import stroybazaImg from "../assets/stroybaza.jpg";
import tictactoeImg from "../assets/tictactoe.png";
import vocabmasterImg from "../assets/vocabmaster.jpg";

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
    { name: 'English (IELTS 6.0)', level: 65 },
  ];

  const projects = [
    { name: 'INVAN POS', description: 'Enterprise POS system deployed on 100+ cashier terminals across Uzbekistan. Direct tax integration via tasnif.soliq.uz, payment systems: Payme, Click, Uzum. Features: barcode scanning, Bluetooth thermal printing, discounts, daily & monthly reports, inventory tracking.', img: null, isInternal: true },
    { name: 'TIIN LOYALTY', description: 'Cashback & loyalty cards for supermarkets. Barcode scanning, points tracking, special offers.', img: tiinImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=cashback.in1.uz', appStoreUrl: 'https://apps.apple.com/uz/app/tiin-loyalty/id1609771623' },
    { name: 'INVAN MOBILE', description: 'Business management & inventory control app. Sales tracking, stock management, reports.', img: invanImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=invan2.in2.uz', appStoreUrl: 'https://apps.apple.com/uz/app/invan-mobile/id6749793383' },
    { name: 'SAJDA MOBILE', description: 'Islamic prayer times, Qibla direction, Azan alerts.', img: sajdaImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.ayyubxon.sajda_app', appStoreUrl: 'https://apps.apple.com/uz/app/sajda-mobile/id6754518453' },
    { name: 'STROY BAZA N1', description: 'Construction materials marketplace app.', img: stroybazaImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.gold_house', appStoreUrl: 'https://apps.apple.com/uz/app/stroy-baza-n1/id6754191756' },
    { name: 'CARINFOPRO', description: "Scan a car sticker → see vehicle owner's contact data. QR-based system for Uzbekistan roads.", img: carinfoproImg,googlePlayUrl:'https://play.google.com/store/apps/details?id=com.carinfopro', appStoreUrl: 'https://apps.apple.com/uz/app/carinfopro/id6759032034' },
    { name: 'DICTIONARY EVEREST', description: 'Smart Uzbek-English dictionary with fast search.', img: dictionaryImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.dic.randomic' },
    { name: 'TIC TAC TOE INFINITY', description: 'Multiplayer Tic Tac Toe with infinite board & AI opponent.', img: tictactoeImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.sajdaapp', appStoreUrl: 'https://apps.apple.com/uz/app/tic-tac-toe-infinity/id6754776498' },
    { name: 'VOCAB MASTER', description: 'English vocabulary learning app with spaced repetition.', img: vocabmasterImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.vocab_master' },
  ];

  const accent = '#f59e0b';

  const StoreBtn = ({ href, type }: { href: string; type: 'play' | 'apple' }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: '#111', borderRadius: '8px', padding: '7px 10px', fontSize: '12px', color: '#fff', textDecoration: 'none', border: '1px solid #2a2a2a' }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e1e1e')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111')}
    >
      {type === 'play' ? (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px', flexShrink: 0 }}>
          <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#34A853" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px', flexShrink: 0 }}>
          <path d="M17.05 20.28C16.07 21.23 15.06 21.08 14.11 20.63C13.11 20.17 12.2 20.15 11.14 20.63C9.79 21.23 9.05 21.05 8.2 20.28C2.79 14.58 3.51 5.88 9.56 5.58C10.98 5.65 11.97 6.43 12.81 6.49C14.06 6.27 15.27 5.46 16.63 5.54C18.28 5.65 19.53 6.31 20.36 7.5C17.01 9.45 17.76 14.13 20.79 15.35C20.18 17 19.39 18.63 17.04 20.29M12.71 5.52C12.53 3.46 14.23 1.73 16.16 1.5C16.46 3.89 14.12 5.75 12.71 5.52Z" fill="white" />
        </svg>
      )}
      {type === 'play' ? 'Google Play' : 'App Store'}
    </a>
  );

  // Section header like Azamov X
  const SectionHeader = ({ Icon, title }: { Icon: any; title: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#2a2a2a', border: '1px solid #383838', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{ width: '18px', height: '18px', color: accent }} />
      </div>
      <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>{title}</h2>
    </div>
  );

  return (
    // outer background
    <div style={{ minHeight: '100vh', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', fontFamily: "'Inter', sans-serif" }}>

      {/* wrapper — sidebar + card side by side, NOT inside one rounded box */}
      <div style={{ width: '100%', maxWidth: '1240px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>

        {/* ── LEFT SIDEBAR — standalone rounded card ── */}
        <aside style={{
          width: '300px',
          flexShrink: 0,
          backgroundColor: '#1e1e1e',
          borderRadius: '20px',
          border: '1px solid #2a2a2a',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          padding: '32px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          position: 'sticky',
          top: '28px',
        }}>

          {/* Square photo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src={profileImage} alt="Ayyubxon Ahmadjonov"
              style={{ width: '175px', height: '175px', borderRadius: '18px', objectFit: 'cover' }}
            />
          </div>

          {/* Name */}
          <h1 style={{ fontSize: '21px', fontWeight: 700, textAlign: 'center', color: '#fff', marginBottom: '10px', fontFamily: "'DM Sans', sans-serif" }}>
            Ayyubxon Ahmadjonov
          </h1>

          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '13px', color: '#d1d5db', padding: '7px 22px', borderRadius: '8px', backgroundColor: '#2a2a2a' }}>
              Flutter Developer
            </span>
          </div>

          <div style={{ height: '1px', backgroundColor: '#2a2a2a', marginBottom: '22px' }} />

          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
            {[
              { Icon: Mail, label: 'EMAIL', value: 'ayubxonahmadjonov43@gmail.com' },
              { Icon: Phone, label: 'PHONE', value: '+998 88 739 21 22' },
              { Icon: Calendar, label: 'BIRTHDAY', value: 'May 3, 2008' },
              { Icon: MapPin, label: 'LOCATION', value: 'Fergana, Uzbekistan' },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: '#252525', borderRadius: '10px', padding: '11px 14px', border: '1px solid #2e2e2e' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '9px', backgroundColor: '#2e2e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon style={{ width: '16px', height: '16px', color: accent }} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ fontSize: '10px', color: '#6b7280', marginBottom: '2px', letterSpacing: '0.07em', fontWeight: 600 }}>{label}</p>
                  <p style={{ fontSize: '12.5px', color: '#e5e7eb', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: '1px', backgroundColor: '#2a2a2a', marginBottom: '22px' }} />

          {/* Social icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {[
              { href: 'https://t.me/ayyubxon_akhmadjonov', Icon: MessageCircle },
              { href: 'https://www.instagram.com/ahmadjonov_2122/', Icon: Instagram },
              { href: 'https://github.com/ayyubxonahmadjonov', Icon: Github },
              { href: 'https://www.linkedin.com/in/ayyubxon-ahmadjonov', Icon: Linkedin },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#6b7280', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = accent)}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
              >
                <Icon style={{ width: '20px', height: '20px' }} />
              </a>
            ))}
          </div>
        </aside>

        {/* ── RIGHT CONTENT — standalone rounded card ── */}
        <div style={{
          flex: 1,
          backgroundColor: '#1e1e1e',
          borderRadius: '20px',
          border: '1px solid #2a2a2a',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          minHeight: '600px',
        }}>

          {/* Nav */}
          <nav style={{ borderBottom: '1px solid #2a2a2a', padding: '0 32px', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '28px' }}>
              {(['about', 'resume', 'portfolio', 'contact'] as TabType[]).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{ position: 'relative', padding: '20px 0 18px', fontSize: '15px', fontWeight: 500, color: activeTab === tab ? accent : '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'capitalize', transition: 'color 0.2s' }}
                >
                  {tab}
                  {activeTab === tab && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: accent, borderRadius: '2px' }} />}
                </button>
              ))}
            </div>
          </nav>

          {/* Scrollable content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '36px' }}>

            {/* ── ABOUT ── */}
            {activeTab === 'about' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                <section>
                  <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '10px', fontFamily: "'DM Sans', sans-serif" }}>About Me</h2>
                  <div style={{ height: '3px', width: '44px', backgroundColor: accent, borderRadius: '2px', marginBottom: '18px' }} />
                  <p style={{ color: '#d1d5db', lineHeight: 1.8, fontSize: '15px', marginBottom: '14px' }}>
                    I'm a Flutter Developer with nearly 1 year of experience building cross-platform mobile apps for both iOS and Android.
                    Currently working full-time at Invan Soft, Tashkent — developing production-grade apps used by real businesses.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: '#d1d5db' }}>
                    <p>🚀 Building clean architecture Flutter apps since 2023.</p>
                    <p>📱 10+ apps published on Google Play & App Store.</p>
                    <p>🎯 Focused on performance, clean code, and great UX.</p>
                  </div>
                </section>

                <section>
                  <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '18px', fontFamily: "'DM Sans', sans-serif" }}>What I'm Doing</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                      { Icon: Smartphone, title: 'Mobile Apps', desc: 'Professional Flutter development for iOS and Android. Clean architecture, BLoC state management, Firebase integration.' },
                      { Icon: Code2, title: 'Backend Integration', desc: 'RESTful APIs, WebSocket, Firebase (Auth, Firestore, Push Notifications), real-time data sync.' },
                      { Icon: BookOpen, title: 'Clean Architecture', desc: 'Feature-first folder structure, separation of concerns, repository pattern, dependency injection.' },
                      { Icon: Briefcase, title: 'App Deployment', desc: 'Google Play Store and Apple App Store publishing, versioning, signing, and release management.' },
                    ].map(({ Icon, title, desc }) => (
                      <div key={title}
                        style={{ backgroundColor: '#252525', border: '1px solid #2e2e2e', borderRadius: '16px', padding: '22px', display: 'flex', gap: '16px', alignItems: 'flex-start', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e2e2e')}
                      >
                        <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#2e2e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon style={{ width: '22px', height: '22px', color: accent }} />
                        </div>
                        <div>
                          <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '16px', marginBottom: '7px' }}>{title}</h3>
                          <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: 1.6 }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '18px', fontFamily: "'DM Sans', sans-serif" }}>My Skills</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px' }}>
                    {skills.map(skill => (
                      <div key={skill.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '14px', color: '#d1d5db', fontWeight: 500 }}>{skill.name}</span>
                          <span style={{ fontSize: '13px', color: accent }}>{skill.level}%</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: '#2a2a2a', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ width: `${skill.level}%`, height: '100%', background: `linear-gradient(to right, ${accent}, #ef4444)`, borderRadius: '999px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ── RESUME — Azamov X style ── */}
            {activeTab === 'resume' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>

                {/* Work */}
                <section>
                  <SectionHeader Icon={Briefcase} title="Work" />
                  <div style={{ position: 'relative', paddingLeft: '32px' }}>
                    <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', backgroundColor: '#2e2e2e' }} />

                    {/* Role 1 */}
                    <div style={{ position: 'relative', marginBottom: '32px' }}>
                      <div style={{ position: 'absolute', left: '-26px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: accent }} />
                      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '17px', marginBottom: '3px' }}>Flutter Developer</h3>
                      <p style={{ fontSize: '14px', color: accent, marginBottom: '3px' }}>Jun 2025 – Present</p>
                      <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '12px' }}>Invan Soft, Tashkent</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {[
                          'Developed and maintained 5+ production mobile apps',
                          'Built POS system: sales, discounts, barcode scanning, receipt printing',
                          'Invan Mobile — inventory & business management app',
                          'Tiin Loyalty — cashback & loyalty card app for supermarkets',
                          'Inventory Turnover — stock rotation analytics',
                        ].map(item => (
                          <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                            <span style={{ color: accent, flexShrink: 0, marginTop: '1px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Role 2 */}
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-26px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#a855f7' }} />
                      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '17px', marginBottom: '3px' }}>Flutter Developer Intern</h3>
                      <p style={{ fontSize: '14px', color: accent, marginBottom: '3px' }}>Jun 2024 – May 2025</p>
                      <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '12px' }}>Invan Soft, Tashkent</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {[
                          'Learned BLoC and Clean Architecture patterns',
                          'Contributed to real production projects under senior guidance',
                          'Completed Flutter & Dart Training Program',
                        ].map(item => (
                          <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                            <span style={{ color: '#a855f7', flexShrink: 0, marginTop: '1px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <SectionHeader Icon={GraduationCap} title="Education" />
                  <div style={{ position: 'relative', paddingLeft: '32px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', backgroundColor: '#2e2e2e' }} />
                    {[
                      { name: 'Invan Soft', sub: 'Flutter & Dart Training', period: '2023 – 2024', extra: 'Mobile Development Practical Course' },
                      { name: 'Vocational School No.1, Fergana', sub: 'IT Specialization', period: '2024 – 2026', extra: '2nd year student' },
                      { name: 'Everest Language Learning Center', sub: 'English Language Program', period: 'IELTS Band 6.0', extra: undefined },
                    ].map(({ name, sub, period, extra }, i) => (
                      <div key={name} style={{ position: 'relative', paddingBottom: i < 2 ? '28px' : '0' }}>
                        <div style={{ position: 'absolute', left: '-26px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: accent }} />
                        <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '17px', marginBottom: '3px' }}>{name}</h3>
                        <p style={{ fontSize: '14px', color: accent, marginBottom: '3px' }}>{period}</p>
                        <p style={{ fontSize: '14px', color: '#d1d5db' }}>{sub}{extra ? ` — ${extra}` : ''}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <SectionHeader Icon={Code2} title="My Skills" />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 40px' }}>
                    {skills.map(skill => (
                      <div key={skill.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '14px', color: '#d1d5db', fontWeight: 500 }}>{skill.name}</span>
                          <span style={{ fontSize: '13px', color: accent }}>{skill.level}%</span>
                        </div>
                        <div style={{ height: '5px', backgroundColor: '#2a2a2a', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ width: `${skill.level}%`, height: '100%', background: `linear-gradient(to right, ${accent}, #ef4444)`, borderRadius: '999px' }} />
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
                <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Portfolio</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {projects.map((project) => (
                    <div key={project.name}
                      style={{ backgroundColor: '#252525', border: '1px solid #2e2e2e', borderRadius: '16px', padding: '20px', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e2e2e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{ width: '52px', height: '52px', borderRadius: '13px', overflow: 'hidden', marginBottom: '12px', backgroundColor: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {project.img
                          ? <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          : <span style={{ fontSize: '22px', fontWeight: 700, color: '#fff' }}>P</span>
                        }
                      </div>
                      <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{project.name}</h3>
                      <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.6, marginBottom: '12px' }}>{project.description}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {project.googlePlayUrl && <StoreBtn href={project.googlePlayUrl} type="play" />}
                        {project.appStoreUrl && <StoreBtn href={project.appStoreUrl} type="apple" />}
                        {project.isInternal && (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2a2a2a', borderRadius: '8px', padding: '7px', fontSize: '12px', color: '#6b7280' }}>
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
              <div style={{ maxWidth: '580px' }}>
                <div style={{ marginBottom: '18px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(34,197,94,0.15)', padding: '7px 16px', borderRadius: '999px', fontSize: '13px', color: '#86efac', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                    Open to work
                  </span>
                </div>
                <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#fff', marginBottom: '28px', fontFamily: "'DM Sans', sans-serif" }}>Let's Work Together</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { href: 'mailto:ayubxonahmadjonov43@gmail.com', Icon: Mail, label: 'Email', value: 'ayubxonahmadjonov43@gmail.com' },
                    { href: 'tel:+998887392122', Icon: Phone, label: 'Phone', value: '+998 88 739 21 22' },
                    { href: 'https://t.me/ayyubxon_akhmadjonov', Icon: MessageCircle, label: 'Telegram', value: '@ayyubxon_akhmadjonov' },
                    { href: 'https://www.linkedin.com/in/ayyubxon-ahmadjonov', Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ayyubxon-ahmadjonov' },
                    { href: 'https://github.com/ayyubxonahmadjonov', Icon: Github, label: 'GitHub', value: 'github.com/ayyubxonahmadjonov' },
                    { href: 'https://www.instagram.com/ahmadjonov_2122/', Icon: Instagram, label: 'Instagram', value: 'instagram.com/ahmadjonov_2122' },
                  ].map(({ href, Icon, label, value }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#252525', border: '1px solid #2e2e2e', borderRadius: '14px', padding: '14px 18px', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e2e2e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{ width: '44px', height: '44px', borderRadius: '11px', backgroundColor: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ width: '20px', height: '20px', color: accent }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>{label}</p>
                        <p style={{ fontSize: '15px', color: '#e5e7eb' }}>{value}</p>
                      </div>
                    </a>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#252525', border: '1px solid #2e2e2e', borderRadius: '14px', padding: '14px 18px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '11px', backgroundColor: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin style={{ width: '20px', height: '20px', color: accent }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Location</p>
                      <p style={{ fontSize: '15px', color: '#e5e7eb' }}>Fergana, Uzbekistan</p>
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
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, Phone, MapPin, Briefcase, GraduationCap,
  Code2, MessageCircle, Linkedin, Instagram, Github,
  BookOpen, Smartphone, Calendar, Download, Copy, Check, Globe, X,
} from 'lucide-react';
import profileImage from "../assets/profile_image.jpg";
import tiinImg from "../assets/tiin.png";
import invanImg from "../assets/invan.png";
import carinfoproImg from "../assets/carinfopro.jpg";
import dictionaryImg from "../assets/dictionary.png";
import sajdaImg from "../assets/sajda.jpg";
import stroybazaImg from "../assets/stroybaza.jpg";
import tictactoeImg from "../assets/tictactoe.png";
import vocabmasterImg from "../assets/vocabmaster.jpg";
import cvPdf from "../assets/ayyubxon_ahmadjonov_cv.pdf";
import { translations, LANGS, type Lang } from "./i18n";

type TabType = 'about' | 'resume' | 'portfolio' | 'contact';

const ACCENT = '#f59e0b';
const PURPLE = '#a855f7';

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

function StoreBtn({ href, type }: { href: string; type: 'play' | 'apple' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
        backgroundColor: '#161616', borderRadius: '8px', padding: '7px 10px',
        fontSize: '12px', color: '#d1d5db', textDecoration: 'none',
        border: '1px solid #333', fontFamily: "'DM Sans', sans-serif",
      }}
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
    </motion.a>
  );
}

function SkillGroup({ category, items, color }: { category: string; items: string[]; color: string }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '13px' }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 9px ${color}` }} />
        <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {category}
        </span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.06, y: -2 }}
            style={{
              padding: '6px 14px', borderRadius: '8px',
              fontSize: '13px', fontWeight: 500,
              backgroundColor: '#1e1e1e', border: `1px solid ${color}33`,
              color: '#e5e7eb', cursor: 'default', display: 'inline-block',
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose, isMobile, labels }: { project: any; onClose: () => void; isMobile: boolean; labels: { builtWith: string; visit: string; internal: string } }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '16px' : '32px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '560px', maxHeight: '88vh', overflowY: 'auto',
          backgroundColor: '#161616', border: '1px solid #2a2a2a', borderRadius: '20px',
          padding: isMobile ? '22px' : '30px', position: 'relative',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '16px', right: '16px',
            width: '32px', height: '32px', borderRadius: '9px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#222', border: '1px solid #2e2e2e',
            color: '#9ca3af', cursor: 'pointer',
          }}
        >
          <X style={{ width: '16px', height: '16px' }} />
        </button>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px', paddingRight: '32px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0,
            backgroundColor: '#252525', border: '1px solid #2e2e2e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {project.img
              ? <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <span style={{ fontSize: '26px', fontWeight: 800, background: `linear-gradient(135deg, ${ACCENT}, #ef4444)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>P</span>}
          </div>
          <div>
            <h3 style={{ fontSize: isMobile ? '18px' : '21px', fontWeight: 800, color: '#fff', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.2 }}>{project.name}</h3>
            {project.category && (
              <span style={{ display: 'inline-block', marginTop: '6px', fontSize: '11px', fontWeight: 600, color: '#f0c070', letterSpacing: '0.04em', padding: '3px 10px', borderRadius: '6px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.22)' }}>{project.category}</span>
            )}
          </div>
        </div>

        <p style={{ fontSize: isMobile ? '14px' : '15px', color: '#c9d1db', lineHeight: 1.75, marginBottom: '22px' }}>{project.description}</p>

        {project.tech && project.tech.length > 0 && (
          <div style={{ marginBottom: '22px' }}>
            <p style={{ fontSize: '11px', color: '#6b7280', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '11px' }}>{labels.builtWith}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t: string) => (
                <span key={t} style={{ fontSize: '13px', fontWeight: 500, color: '#e5e7eb', padding: '6px 13px', borderRadius: '8px', backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a' }}>{t}</span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.googlePlayUrl && <StoreBtn href={project.googlePlayUrl} type="play" />}
          {project.appStoreUrl && <StoreBtn href={project.appStoreUrl} type="apple" />}
          {project.webUrl && (
            <motion.a
              href={project.webUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                background: 'rgba(245,158,11,0.12)', borderRadius: '8px', padding: '8px 14px',
                fontSize: '13px', color: '#f0c070', textDecoration: 'none',
                border: '1px solid rgba(245,158,11,0.25)', fontWeight: 600,
              }}
            >
              <Globe style={{ width: '14px', height: '14px', flexShrink: 0 }} />
              {labels.visit}
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionHeader({ Icon, title, isMobile }: { Icon: React.ElementType; title: string; isMobile: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
      <div style={{
        width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
        background: `linear-gradient(135deg, rgba(245,158,11,0.18), rgba(245,158,11,0.04))`,
        border: `1px solid rgba(245,158,11,0.25)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon style={{ width: '18px', height: '18px', color: ACCENT }} />
      </div>
      <h2 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
        {title}
      </h2>
    </div>
  );
}

function StatCard({ value, label, suffix = '', active }: { value: number; label: string; suffix?: string; active: boolean }) {
  const count = useCountUp(value, 1100, active);
  return (
    <div style={{
      flex: 1, minWidth: '0',
      backgroundColor: '#222', border: '1px solid #2a2a2a', borderRadius: '14px',
      padding: '16px 10px', textAlign: 'center',
    }}>
      <div style={{ fontSize: '26px', fontWeight: 800, color: ACCENT, fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '6px', fontWeight: 500 }}>{label}</div>
    </div>
  );
}

const TAB_VARIANTS = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [statsActive, setStatsActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [lang, setLang] = useState<Lang>(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'en' || fromUrl === 'ru' || fromUrl === 'uz') return fromUrl;
    return (localStorage.getItem('lang') as Lang) || 'en';
  });

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    if (activeTab === 'about') {
      const t = setTimeout(() => setStatsActive(true), 350);
      return () => clearTimeout(t);
    }
  }, [activeTab]);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const skillColors = [ACCENT, '#60a5fa', '#22c55e', PURPLE, '#ec4899', ACCENT, '#60a5fa'];
  const skillItems = [
    ['Flutter', 'Dart', 'Clean Architecture', 'Responsive UI'],
    ['BLoC', 'Cubit', 'Provider'],
    ['Firebase', 'REST API', 'WebSocket', 'SQLite', 'Hive', 'Shared Prefs'],
    ['Claude Code', 'ChatGPT', 'Prompt Engineering', 'AI Pair Programming'],
    ['Figma', 'UI/UX', 'Git'],
    ['Google Play', 'App Store'],
    ['Uzbek (Native)', 'English (IELTS 6.0)'],
  ];
  const skillGroups = t.skillCategories.map((category, i) => ({ category, color: skillColors[i], items: skillItems[i] }));

  const techStack = [
    'Flutter', 'Dart', 'Firebase', 'BLoC', 'REST API',
    'WebSocket', 'Figma', 'Git', 'SQLite', 'Hive',
    'Google Play', 'App Store',
  ];

  const projectMeta = [
    { name: 'INVAN POS', tech: ['Flutter', 'Windows Desktop', 'WebSocket', 'REST API', 'Provider', 'ObjectBox', 'Fiscal API'], img: null as string | null, isInternal: true, webUrl: 'https://invan.uz' as string | undefined, googlePlayUrl: undefined as string | undefined, appStoreUrl: undefined as string | undefined },
    { name: 'TIIN LOYALTY', tech: ['Flutter', 'Firebase', 'REST API', 'BLoC', 'WebView', 'E-commerce'], img: tiinImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=cashback.in1.uz', appStoreUrl: 'https://apps.apple.com/uz/app/tiin-loyalty/id1609771623' },
    { name: 'INVAN MOBILE', tech: ['Flutter', 'REST API', 'Provider', 'WebSocket', 'Charts'], img: invanImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=invan2.in2.uz', appStoreUrl: 'https://apps.apple.com/uz/app/invan-mobile/id6749793383' },
    { name: 'SAJDA MOBILE', tech: ['Flutter', 'Geolocation', 'Local Notifications', 'Maps', 'REST API'], img: sajdaImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.ayyubxon.sajda_app', appStoreUrl: 'https://apps.apple.com/uz/app/sajda-mobile/id6754518453' },
    { name: 'STROY BAZA N1', tech: ['Flutter', 'REST API', 'BLoC'], img: stroybazaImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.gold_house', appStoreUrl: 'https://apps.apple.com/uz/app/stroy-baza-n1/id6754191756' },
    { name: 'CARINFOPRO', tech: ['Flutter', 'QR Scanner', 'Geolocation', 'REST API', 'Firebase'], img: carinfoproImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.carinfopro', appStoreUrl: 'https://apps.apple.com/uz/app/carinfopro/id6759032034' },
    { name: 'DICTIONARY EVEREST', tech: ['Flutter', 'SQLite', 'Offline'], img: dictionaryImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.dic.randomic' },
    { name: 'TIC TAC TOE INFINITY', tech: ['Flutter', 'Game Logic', 'AI Opponent'], img: tictactoeImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.sajdaapp', appStoreUrl: 'https://apps.apple.com/uz/app/tic-tac-toe-infinity/id6754776498' },
    { name: 'VOCAB MASTER', tech: ['Flutter', 'Hive', 'Spaced Repetition'], img: vocabmasterImg, googlePlayUrl: 'https://play.google.com/store/apps/details?id=uz.vocab_master' },
  ];
  const projects = projectMeta.map((p, i) => ({ ...p, category: t.projects[i].category, description: t.projects[i].description }));

  const contactLinks = [
    { href: 'mailto:ayubxonahmadjonov43@gmail.com', Icon: Mail, label: 'Email', value: 'ayubxonahmadjonov43@gmail.com', color: '#f97316' },
    { href: 'tel:+998887392122', Icon: Phone, label: 'Phone', value: '+998 88 739 21 22', color: '#22c55e' },
    { href: 'https://t.me/ayyubxon_akhmadjonov', Icon: MessageCircle, label: 'Telegram', value: '@ayyubxon_akhmadjonov', color: '#38bdf8' },
    { href: 'https://www.linkedin.com/in/ayyubxon-ahmadjonov', Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ayyubxon-ahmadjonov', color: '#60a5fa' },
    { href: 'https://github.com/ayyubxonahmadjonov', Icon: Github, label: 'GitHub', value: 'github.com/ayyubxonahmadjonov', color: '#d1d5db' },
    { href: 'https://www.instagram.com/ayyubxon_akhmadjonov/', Icon: Instagram, label: 'Instagram', value: 'instagram.com/ayyubxon_akhmadjonov', color: '#f472b6' },
  ];

  const serviceMeta = [
    { Icon: Smartphone, color: ACCENT },
    { Icon: Code2, color: '#60a5fa' },
    { Icon: BookOpen, color: '#34d399' },
    { Icon: Briefcase, color: PURPLE },
  ];
  const serviceCards = serviceMeta.map((s, i) => ({ ...s, title: t.doing.cards[i].title, desc: t.doing.cards[i].desc }));

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse at 8% 15%, rgba(245,158,11,0.05) 0%, transparent 45%),
        radial-gradient(ellipse at 92% 85%, rgba(168,85,247,0.05) 0%, transparent 45%),
        #0d0d0d
      `,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: isMobile ? '16px' : '28px',
      fontFamily: "'DM Sans', 'Inter', sans-serif",
    }}>
      <div style={{
        width: '100%', maxWidth: '1240px',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '16px' : '24px', alignItems: 'flex-start',
      }}>

        {/* ── SIDEBAR ── */}
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          style={{
            width: isMobile ? '100%' : '300px',
            flexShrink: 0,
            backgroundColor: '#181818',
            borderRadius: '20px',
            border: '1px solid #242424',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            padding: isMobile ? '24px 20px' : '32px 22px',
            display: 'flex', flexDirection: 'column',
            position: isMobile ? 'static' : 'sticky',
            top: '28px',
          }}
        >
          {/* ── Profile ── */}
          {isMobile ? (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: '90px', height: '90px', borderRadius: '16px', padding: '2px', background: `linear-gradient(135deg, ${ACCENT}, ${PURPLE})` }}>
                  <img src={profileImage} alt="Ayyubxon"
                    style={{ width: '100%', height: '100%', borderRadius: '14px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#22c55e', border: '2px solid #181818' }} />
              </div>
              <div>
                <h1 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>
                  Ayyubxon Ahmadjonov
                </h1>
                <span style={{ fontSize: '12px', color: '#f0c070', padding: '5px 12px', borderRadius: '7px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)', fontWeight: 500 }}>
                  {t.role}
                </span>
              </div>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '175px', height: '175px', borderRadius: '22px', padding: '3px', background: `linear-gradient(135deg, ${ACCENT}, ${PURPLE})` }}>
                    <img src={profileImage} alt="Ayyubxon"
                      style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{
                      position: 'absolute', bottom: '6px', right: '-10px',
                      display: 'flex', alignItems: 'center', gap: '5px',
                      backgroundColor: '#181818', border: '1px solid #2e2e2e',
                      borderRadius: '20px', padding: '5px 10px',
                    }}
                  >
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                    <span style={{ fontSize: '11px', color: '#86efac', fontWeight: 500 }}>{t.available}</span>
                  </motion.div>
                </div>
              </div>
              <h1 style={{ fontSize: '21px', fontWeight: 700, textAlign: 'center', color: '#fff', marginBottom: '10px', fontFamily: "'DM Sans', sans-serif" }}>
                Ayyubxon Ahmadjonov
              </h1>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '13px', color: '#f0c070', padding: '7px 20px', borderRadius: '8px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.22)', fontWeight: 600 }}>
                  {t.role}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', color: '#9ca3af', padding: '4px 14px', borderRadius: '6px', backgroundColor: '#222', border: '1px solid #2a2a2a' }}>
                  {t.atCompany}
                </span>
              </div>
            </>
          )}

          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a2a, transparent)', marginBottom: '16px' }} />

          {/* ── Contact info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {([
              { Icon: Mail, label: t.info.email, value: 'ayubxonahmadjonov43@gmail.com', copyKey: 'email' },
              { Icon: Phone, label: t.info.phone, value: '+998 88 739 21 22', copyKey: 'phone' },
              { Icon: Calendar, label: t.info.birthday, value: t.birthdayValue, copyKey: null },
              { Icon: MapPin, label: t.info.location, value: t.locationValue, copyKey: null },
            ] as { Icon: React.ElementType; label: string; value: string; copyKey: string | null }[]).map(({ Icon, label, value, copyKey }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '10px 12px',
                border: '1px solid #272727',
              }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px', flexShrink: 0,
                  background: `linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.03))`,
                  border: `1px solid rgba(245,158,11,0.15)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ width: '15px', height: '15px', color: ACCENT }} />
                </div>
                <div style={{ overflow: 'hidden', minWidth: 0, flex: 1 }}>
                  <p style={{ fontSize: '9px', color: '#6b7280', marginBottom: '1px', letterSpacing: '0.08em', fontWeight: 600 }}>{label}</p>
                  <p style={{ fontSize: '11.5px', color: '#e5e7eb', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</p>
                </div>
                {copyKey && (
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => copyToClipboard(value, copyKey)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexShrink: 0,
                      color: copiedKey === copyKey ? '#22c55e' : '#4b5563',
                      transition: 'color 0.2s',
                    }}
                    title={t.copy}
                  >
                    {copiedKey === copyKey
                      ? <Check style={{ width: '14px', height: '14px' }} />
                      : <Copy style={{ width: '14px', height: '14px' }} />}
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a2a, transparent)', marginBottom: '16px' }} />

          {/* ── Social icons ── */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {([
              { href: 'https://t.me/ayyubxon_akhmadjonov', Icon: MessageCircle, label: 'Telegram' },
              { href: 'https://www.instagram.com/ayyubxon_akhmadjonov/', Icon: Instagram, label: 'Instagram' },
              { href: 'https://github.com/ayyubxonahmadjonov', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/ayyubxon-ahmadjonov', Icon: Linkedin, label: 'LinkedIn' },
            ] as { href: string; Icon: React.ElementType; label: string }[]).map(({ href, Icon, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                title={label}
                style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: '#222', border: '1px solid #2a2a2a',
                  color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s, background-color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = ACCENT;
                  el.style.backgroundColor = 'rgba(245,158,11,0.1)';
                  el.style.borderColor = 'rgba(245,158,11,0.3)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#6b7280';
                  el.style.backgroundColor = '#222';
                  el.style.borderColor = '#2a2a2a';
                }}
              >
                <Icon style={{ width: '18px', height: '18px' }} />
              </motion.a>
            ))}
          </div>

          {/* ── Language switcher ── */}
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a2a, transparent)', margin: '16px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
            {LANGS.map(({ code, label }) => (
              <motion.button
                key={code}
                onClick={() => setLang(code)}
                whileTap={{ scale: 0.94 }}
                style={{
                  flex: 1, maxWidth: '72px', padding: '7px 0', borderRadius: '9px',
                  fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  background: lang === code ? 'rgba(245,158,11,0.14)' : '#222',
                  border: lang === code ? '1px solid rgba(245,158,11,0.4)' : '1px solid #2a2a2a',
                  color: lang === code ? ACCENT : '#9ca3af',
                  transition: 'color 0.2s, background-color 0.2s, border-color 0.2s',
                }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.aside>

        {/* ── MAIN CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{
            flex: 1,
            backgroundColor: '#181818',
            borderRadius: '20px',
            border: '1px solid #242424',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
            minHeight: isMobile ? 'auto' : '600px',
          }}
        >
          {/* ── Nav tabs ── */}
          <nav style={{ borderBottom: '1px solid #202020', padding: isMobile ? '0 16px' : '0 32px', flexShrink: 0, overflowX: 'auto' }}>
            <div style={{ display: 'flex', gap: isMobile ? '4px' : '28px', minWidth: 'max-content' }}>
              {(['about', 'resume', 'portfolio', 'contact'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    position: 'relative',
                    padding: isMobile ? '14px 12px 12px' : '20px 4px 18px',
                    fontSize: isMobile ? '13px' : '15px',
                    fontWeight: 500,
                    color: activeTab === tab ? ACCENT : '#6b7280',
                    background: 'none', border: 'none', cursor: 'pointer',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {t.nav[tab]}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabUnderline"
                      style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                        background: `linear-gradient(to right, ${ACCENT}, #ef4444)`,
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* ── Content area ── */}
          <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '20px 16px' : '36px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={TAB_VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.22 }}
              >

                {/* ══ ABOUT ══ */}
                {activeTab === 'about' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '44px' }}>

                    {/* About Me */}
                    <section>
                      <h2 style={{ fontSize: isMobile ? '24px' : '30px', fontWeight: 800, color: '#fff', marginBottom: '10px', fontFamily: "'DM Sans', sans-serif" }}>
                        {t.about.title}
                      </h2>
                      <div style={{ height: '3px', width: '48px', background: `linear-gradient(to right, ${ACCENT}, #ef4444)`, borderRadius: '2px', marginBottom: '18px' }} />
                      <p style={{ color: '#d1d5db', lineHeight: 1.85, fontSize: isMobile ? '14px' : '15px' }}>
                        {t.about.intro}
                      </p>
                    </section>

                    {/* Stats */}
                    <section>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <StatCard value={1} suffix="+" label={t.stats.years} active={statsActive} />
                        <StatCard value={10} suffix="+" label={t.stats.apps} active={statsActive} />
                        <StatCard value={40} suffix="K+" label={t.stats.downloads} active={statsActive} />
                        <StatCard value={9} suffix="" label={t.stats.projects} active={statsActive} />
                      </div>
                    </section>

                    {/* What I'm Doing */}
                    <section>
                      <h2 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: 700, color: '#fff', marginBottom: '18px', fontFamily: "'DM Sans', sans-serif" }}>
                        {t.doing.title}
                      </h2>
                      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
                        {serviceCards.map(({ Icon, title, desc, color }) => (
                          <motion.div
                            key={title}
                            whileHover={{ y: -4 }}
                            style={{
                              backgroundColor: '#1e1e1e', border: '1px solid #252525', borderRadius: '14px',
                              padding: isMobile ? '16px' : '20px', display: 'flex', gap: '14px', alignItems: 'flex-start',
                              transition: 'border-color 0.2s, box-shadow 0.2s',
                            }}
                            onMouseEnter={e => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.borderColor = `${color}35`;
                              el.style.boxShadow = `0 6px 24px ${color}10`;
                            }}
                            onMouseLeave={e => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.borderColor = '#252525';
                              el.style.boxShadow = 'none';
                            }}
                          >
                            <div style={{
                              width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              background: `linear-gradient(135deg, ${color}22, ${color}06)`,
                              border: `1px solid ${color}28`,
                            }}>
                              <Icon style={{ width: '20px', height: '20px', color }} />
                            </div>
                            <div>
                              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '15px', marginBottom: '6px' }}>{title}</h3>
                              <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: 1.6 }}>{desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </section>

                    {/* Tech Stack */}
                    <section>
                      <h2 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: "'DM Sans', sans-serif" }}>
                        {t.techStackTitle}
                      </h2>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.06, y: -2 }}
                            style={{
                              padding: '6px 14px', borderRadius: '8px',
                              fontSize: '13px', fontWeight: 500,
                              backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a',
                              color: '#d1d5db', cursor: 'default', display: 'inline-block',
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </section>

                    {/* Skills */}
                    <section>
                      <h2 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: 700, color: '#fff', marginBottom: '18px', fontFamily: "'DM Sans', sans-serif" }}>
                        {t.skillsTitle}
                      </h2>
                      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '26px 40px' }}>
                        {skillGroups.map((g) => <SkillGroup key={g.category} category={g.category} items={g.items} color={g.color} />)}
                      </div>
                    </section>
                  </div>
                )}

                {/* ══ RESUME ══ */}
                {activeTab === 'resume' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <motion.a
                        href={cvPdf}
                        download="Ayyubxon_Ahmadjonov_CV.pdf"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '8px',
                          background: `linear-gradient(135deg, ${ACCENT}, #f97316)`,
                          color: '#000', padding: '10px 22px', borderRadius: '10px',
                          fontSize: '14px', fontWeight: 700, textDecoration: 'none',
                          boxShadow: `0 4px 20px rgba(245,158,11,0.35)`,
                        }}
                      >
                        <Download style={{ width: '16px', height: '16px' }} />
                        {t.resume.downloadCv}
                      </motion.a>
                    </div>

                    <section>
                      <SectionHeader Icon={Briefcase} title={t.resume.workExp} isMobile={isMobile} />
                      <div style={{ position: 'relative', paddingLeft: '28px' }}>
                        <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', background: `linear-gradient(to bottom, ${ACCENT}, ${PURPLE})` }} />

                        <div style={{ position: 'relative', marginBottom: '32px' }}>
                          <div style={{ position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: ACCENT, boxShadow: `0 0 12px ${ACCENT}70` }} />
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                            <h3 style={{ fontWeight: 700, color: '#fff', fontSize: isMobile ? '15px' : '17px' }}>{t.resume.jobs[0].title}</h3>
                            <span style={{ fontSize: '12px', color: ACCENT, backgroundColor: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', padding: '3px 10px', borderRadius: '6px', whiteSpace: 'nowrap', fontWeight: 500 }}>
                              {t.resume.jobs[0].period}
                            </span>
                          </div>
                          <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '10px' }}>{t.resume.jobs[0].place}</p>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {t.resume.jobs[0].bullets.map(item => (
                              <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#d1d5db' }}>
                                <span style={{ color: ACCENT, flexShrink: 0, marginTop: '1px' }}>▸</span><span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div style={{ position: 'relative' }}>
                          <div style={{ position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: PURPLE, boxShadow: `0 0 12px ${PURPLE}70` }} />
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                            <h3 style={{ fontWeight: 700, color: '#fff', fontSize: isMobile ? '15px' : '17px' }}>{t.resume.jobs[1].title}</h3>
                            <span style={{ fontSize: '12px', color: PURPLE, backgroundColor: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', padding: '3px 10px', borderRadius: '6px', whiteSpace: 'nowrap', fontWeight: 500 }}>
                              {t.resume.jobs[1].period}
                            </span>
                          </div>
                          <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '10px' }}>{t.resume.jobs[1].place}</p>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {t.resume.jobs[1].bullets.map(item => (
                              <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#d1d5db' }}>
                                <span style={{ color: PURPLE, flexShrink: 0, marginTop: '1px' }}>▸</span><span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <SectionHeader Icon={GraduationCap} title={t.resume.education} isMobile={isMobile} />
                      <div style={{ position: 'relative', paddingLeft: '28px' }}>
                        <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', background: `linear-gradient(to bottom, ${ACCENT}, ${PURPLE})` }} />
                        {t.resume.edu.map(({ name, sub, period, extra }, i) => (
                          <div key={name} style={{ position: 'relative', paddingBottom: i < t.resume.edu.length - 1 ? '28px' : 0 }}>
                            <div style={{ position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: ACCENT, boxShadow: `0 0 10px ${ACCENT}55` }} />
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: isMobile ? '15px' : '17px' }}>{name}</h3>
                              <span style={{ fontSize: '12px', color: ACCENT, backgroundColor: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', padding: '3px 10px', borderRadius: '6px', whiteSpace: 'nowrap', fontWeight: 500 }}>
                                {period}
                              </span>
                            </div>
                            <p style={{ fontSize: '13px', color: '#d1d5db' }}>{sub}{extra ? ` — ${extra}` : ''}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <SectionHeader Icon={Code2} title={t.resume.skillsTitle} isMobile={isMobile} />
                      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '26px 40px' }}>
                        {skillGroups.map((g) => <SkillGroup key={g.category} category={g.category} items={g.items} color={g.color} />)}
                      </div>
                    </section>
                  </div>
                )}

                {/* ══ PORTFOLIO ══ */}
                {activeTab === 'portfolio' && (
                  <div>
                    <div style={{ marginBottom: '26px' }}>
                      <h2 style={{ fontSize: isMobile ? '24px' : '30px', fontWeight: 800, color: '#fff', marginBottom: '6px', fontFamily: "'DM Sans', sans-serif" }}>
                        {t.portfolio.title}
                      </h2>
                      <p style={{ color: '#6b7280', fontSize: '14px' }}>
                        {t.portfolio.subtitle(projects.length)}
                      </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '12px' }}>
                      {projects.map((project, i) => (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          whileHover={{ y: -5 }}
                          style={{
                            backgroundColor: '#1e1e1e', border: '1px solid #252525', borderRadius: '14px',
                            padding: isMobile ? '14px' : '18px', display: 'flex', flexDirection: 'column',
                            transition: 'border-color 0.2s, box-shadow 0.2s',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = 'rgba(245,158,11,0.35)';
                            el.style.boxShadow = '0 8px 28px rgba(245,158,11,0.08)';
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = '#252525';
                            el.style.boxShadow = 'none';
                          }}
                        >
                          <div
                            onClick={() => setSelectedProject(i)}
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', flex: 1 }}
                          >
                            <div style={{
                              width: '52px', height: '52px', borderRadius: '14px', overflow: 'hidden',
                              marginBottom: '12px', backgroundColor: '#252525', border: '1px solid #2e2e2e',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}>
                              {project.img
                                ? <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                : <span style={{ fontSize: '22px', fontWeight: 800, background: `linear-gradient(135deg, ${ACCENT}, #ef4444)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>P</span>
                              }
                            </div>
                            <h3 style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, color: '#fff', marginBottom: '6px', lineHeight: 1.3 }}>{project.name}</h3>
                            <p style={{
                              fontSize: isMobile ? '10px' : '12px', color: '#9ca3af', lineHeight: 1.55, marginBottom: '10px', flex: 1,
                              display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                            }}>{project.description}</p>
                            <span style={{ fontSize: '11px', color: ACCENT, fontWeight: 600, marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              {t.portfolio.details} →
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: 'auto' }}>
                            {project.googlePlayUrl && <StoreBtn href={project.googlePlayUrl} type="play" />}
                            {project.appStoreUrl && <StoreBtn href={project.appStoreUrl} type="apple" />}
                            {project.webUrl && (
                              <motion.a
                                href={project.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                                  background: 'rgba(245,158,11,0.12)', borderRadius: '8px', padding: '7px 10px',
                                  fontSize: '12px', color: '#f0c070', textDecoration: 'none',
                                  border: '1px solid rgba(245,158,11,0.25)', fontWeight: 600,
                                }}
                              >
                                <Globe style={{ width: '13px', height: '13px', flexShrink: 0 }} />
                                invan.uz
                              </motion.a>
                            )}
                            {project.isInternal && !project.webUrl && (
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: '#222', borderRadius: '8px', padding: '7px', fontSize: '11px', color: '#9ca3af', border: '1px solid #2a2a2a' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#60a5fa', flexShrink: 0 }} />
                                {t.modal.internal}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ══ CONTACT ══ */}
                {activeTab === 'contact' && (
                  <div style={{ maxWidth: '580px' }}>
                    <div style={{ marginBottom: '20px' }}>
                      <motion.span
                        animate={{ opacity: [0.75, 1, 0.75] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '8px',
                          backgroundColor: 'rgba(34,197,94,0.1)',
                          padding: '6px 16px', borderRadius: '999px',
                          fontSize: '12px', color: '#86efac',
                          border: '1px solid rgba(34,197,94,0.22)', fontWeight: 500,
                        }}
                      >
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                        {t.contact.openToWork}
                      </motion.span>
                    </div>
                    <h2 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 800, color: '#fff', marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>
                      {t.contact.title}
                    </h2>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '26px', lineHeight: 1.65 }}>
                      {t.contact.subtitle}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {contactLinks.map(({ href, Icon, label, value, color }) => (
                        <motion.a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '14px',
                            backgroundColor: '#1e1e1e', border: '1px solid #252525',
                            borderRadius: '12px', padding: '14px 16px',
                            textDecoration: 'none', transition: 'border-color 0.2s, background-color 0.2s',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = `${color}40`;
                            el.style.backgroundColor = `${color}09`;
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = '#252525';
                            el.style.backgroundColor = '#1e1e1e';
                          }}
                        >
                          <div style={{
                            width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: `linear-gradient(135deg, ${color}20, ${color}07)`,
                            border: `1px solid ${color}28`,
                          }}>
                            <Icon style={{ width: '18px', height: '18px', color }} />
                          </div>
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <p style={{ fontSize: '10px', color: '#6b7280', marginBottom: '2px', fontWeight: 600, letterSpacing: '0.07em' }}>{label.toUpperCase()}</p>
                            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#e5e7eb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
                          </div>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" style={{ flexShrink: 0 }}>
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </motion.a>
                      ))}

                      {/* Location */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '14px',
                        backgroundColor: '#1e1e1e', border: '1px solid #252525',
                        borderRadius: '12px', padding: '14px 16px',
                      }}>
                        <div style={{
                          width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: `linear-gradient(135deg, rgba(245,158,11,0.18), rgba(245,158,11,0.05))`,
                          border: `1px solid rgba(245,158,11,0.22)`,
                        }}>
                          <MapPin style={{ width: '18px', height: '18px', color: ACCENT }} />
                        </div>
                        <div>
                          <p style={{ fontSize: '10px', color: '#6b7280', marginBottom: '2px', fontWeight: 600, letterSpacing: '0.07em' }}>{t.contact.locationLabel}</p>
                          <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#e5e7eb' }}>{t.locationValue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
            isMobile={isMobile}
            labels={t.modal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

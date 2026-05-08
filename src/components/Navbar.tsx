'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Phone, CalendarCheck, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import styles from './navbar.module.css';

const procedures = [
  { label: 'Uterine Fibroids (UFE)', href: '/procedures/womens-health', tag: 'Women\'s Health', classTag: 'Women' },
  { label: 'Prostate Embolization (PAE)', href: '/procedures/mens-health', tag: 'Men\'s Health', classTag: 'Men' },
  { label: 'Chronic Knee Pain (GAE)', href: '/procedures/msk', tag: 'Pain Relief', classTag: 'Pain' },
  { label: 'MSK Intervention', href: '/procedures/msk', tag: 'Pain Relief', classTag: 'Pain' },
  { label: 'Vascular Care (PAD)', href: '/procedures/vascular', tag: 'Vascular', classTag: 'Vascular' },
  { label: 'Dialysis Interventions', href: '/procedures/dialysis', tag: 'Vascular', classTag: 'Vascular' },
  { label: 'Interventional Oncology', href: '/procedures/oncology', tag: 'Oncology', classTag: 'Oncology' },
];

const patientLinks = [
  { label: 'Patient Portal', href: '/patients' },
  { label: 'Forms', href: '/patients#forms' },
  { label: 'Quizzes', href: '/patients#quizzes' },
  { label: 'Resources', href: '/patients' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [patientsDropOpen, setPatientsDropOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const patientsDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (patientsDropRef.current && !patientsDropRef.current.contains(e.target as Node)) {
        setPatientsDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.navInner}`}>

          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image
              src="/emis-logo.png"
              alt="EMIS Health – Minimally Invasive Vascular Specialists"
              width={160}
              height={44}
              className={styles.logoImg}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {/* Procedures dropdown */}
            <div
              className={`${styles.dropWrap} ${dropdownOpen ? styles.dropActive : ''}`}
              ref={dropdownRef}
            >
              <button
                className={styles.navLink}
                onClick={() => setDropdownOpen(p => !p)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                id="proc-btn"
              >
                Procedures <ChevronDown size={15} className={styles.chevron} />
              </button>

              {dropdownOpen && (
                <div className={styles.dropdown} role="menu" aria-labelledby="proc-btn">
                  <div className={styles.dropGrid}>
                    {procedures.map(p => (
                      <Link
                        key={p.label}
                        href={p.href}
                        className={styles.dropItem}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className={`${styles.dropTag} ${styles[`tag${p.classTag}`]}`}>{p.tag}</span>
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#about" className={styles.navLink}>About Us</Link>
            
            {/* For Patients dropdown */}
            <div
              className={`${styles.dropWrap} ${patientsDropOpen ? styles.dropActive : ''}`}
              ref={patientsDropRef}
            >
              <button
                className={styles.navLink}
                onClick={() => setPatientsDropOpen(p => !p)}
                aria-expanded={patientsDropOpen}
                aria-haspopup="true"
                id="patients-btn"
              >
                For Patients <ChevronDown size={15} className={styles.chevron} />
              </button>

              {patientsDropOpen && (
                <div className={styles.dropdown} style={{ minWidth: '220px' }} role="menu" aria-labelledby="patients-btn">
                  <div className={styles.dropList}>
                    {patientLinks.map(p => (
                      <Link
                        key={p.label}
                        href={p.href}
                        className={styles.dropItemSimple}
                        role="menuitem"
                        onClick={() => setPatientsDropOpen(false)}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#contact" className={styles.navLink}>Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopActions}>
            <a href="tel:18172424984" className={styles.callBtn}>
              <Phone size={16} />
              (817) 242-4984
            </a>
            <Link href="/#contact" className="btn btn-cta" style={{ padding: '0.65rem 1.6rem' }}>
              <CalendarCheck size={17} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(p => !p)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.drawerContent}>
          <div className={styles.drawerSection}>
            <p className={styles.drawerLabel}>Procedures</p>
            {procedures.map(p => (
              <Link
                key={p.label}
                href={p.href}
                className={styles.drawerLink}
                onClick={() => setMobileOpen(false)}
              >
                <span className={`${styles.dropTag} ${styles[`tag${p.classTag}`]}`}>{p.tag}</span>
                {p.label}
              </Link>
            ))}
          </div>

          <div className={styles.drawerSection}>
            <p className={styles.drawerLabel}>Navigate</p>
            <Link href="/#about" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/#testimonials" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Patient Stories</Link>
            <Link href="/#contact" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>

          <div className={styles.drawerCtas}>
            <a href="tel:18172424984" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              <Phone size={16} /> (817) 242-4984
            </a>
            <Link href="/#contact" className="btn btn-cta" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
              <CalendarCheck size={17} /> Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}

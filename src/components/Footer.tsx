import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Procedures', href: '/#services' },
  { label: 'About Us', href: '/#about' },
  { label: 'Patient Stories', href: '/#testimonials' },
  { label: 'Contact Us', href: '/#contact' },
];

const procedureLinks = [
  { label: 'Fibroid Embolization', href: '/#services' },
  { label: 'Prostate Artery Embolization', href: '/#services' },
  { label: 'Geniculate Artery Embolization', href: '/#services' },
  { label: 'Spinal Cord Stimulation', href: '/#services' },
  { label: 'Peripheral Arterial Disease', href: '/#services' },
  { label: 'Dialysis Interventions', href: '/#services' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ── Main footer grid ── */}
      <div className={`container ${styles.footerGrid}`}>

        {/* Brand col */}
        <div className={styles.brandCol}>
          <Link href="/">
            <Image
              src="/emis-logo.png"
              alt="EMIS Health Logo"
              width={160}
              height={44}
              className={styles.footerLogo}
            />
          </Link>
          <p className={styles.brandDesc}>
            EMIS Texas specializes in the latest minimally invasive procedures — delivering
            outstanding patient care and life-changing results to over 2,000+ patients in the DFW Metroplex.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/profile.php?id=61550283064031"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="EMIS Health on Facebook"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/emistexas/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="EMIS Health on Instagram"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
          {/* Trust seal */}
          <div className={styles.trustSeal}>
            <span>✓</span>
            <div>
              <strong>Board-Certified</strong>
              <span>Society of Interventional Radiology</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.linkCol}>
          <h4 className={styles.colHead}>Emis Health</h4>
          <ul className={styles.linkList}>
            {quickLinks.map(l => (
              <li key={l.label}>
                <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
              </li>
            ))}
            <li><Link href="/patients" className={styles.footerLink}>Patient Resources</Link></li>
            <li><Link href="/patients#forms" className={styles.footerLink}>Referral Forms</Link></li>
          </ul>
        </div>

        {/* Procedures */}
        <div className={styles.linkCol}>
          <h4 className={styles.colHead}>Procedures</h4>
          <ul className={styles.linkList}>
            {procedureLinks.map(l => (
              <li key={l.label}>
                <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.colHead}>Contact Emis</h4>

          <div className={styles.contactItem}>
            <MapPin size={16} className={styles.contactIcon} style={{ flexShrink: 0 }} />
            <div>
              <strong>Irving</strong>
              <p>2150 Market Place Blvd Suite 140<br />Irving, TX 75063</p>
              <a href="tel:18172424984" className={styles.contactPhone}>
                <Phone size={13} /> (817) 242-4984
              </a>
            </div>
          </div>



          <div className={styles.contactItem}>
            <Mail size={16} className={styles.contactIcon} />
            <div>
              <p>FAX: (469) 262-5688</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <Clock size={16} className={styles.contactIcon} />
            <div>
              <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat &amp; Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p>&copy; {new Date().getFullYear()} EMIS Health Center. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.bottomSep}>·</span>
            <Link href="/#contact" className={styles.bottomLink}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

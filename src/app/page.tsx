'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Activity, CheckCircle2, Award,
  MapPin, Phone, Mail, Clock, Star,
  ChevronRight, Heart, Users, Calendar,
  Brain, Stethoscope, Zap, Droplets, Play
} from 'lucide-react';
import styles from './page.module.css';

/* ── DATA ── */
const stats = [
  { value: '10+', label: 'Years of Experience', icon: <Award size={28} /> },
  { value: '5,000+', label: 'Successful Procedures', icon: <Activity size={28} /> },
  { value: '2,000+', label: 'Happy Patients', icon: <Users size={28} /> },
  { value: '100%', label: 'Board Certified', icon: <ShieldCheck size={28} /> },
];

const services = [
  { 
    icon: <Heart size={22} />, 
    title: 'Uterine Fibroid Embolization', 
    desc: 'Non-surgical treatment for fibroids — no hysterectomy needed.', 
    tag: 'Women\'s Health',
    featured: true,
    majorField: 'Leading Specialist in Women\'s Health',
    link: '/procedures/womens-health'
  },
  { 
    icon: <Droplets size={22} />, 
    title: 'Prostate Artery Embolization', 
    desc: 'Minimally invasive relief for enlarged prostate (BPH).', 
    tag: 'Men\'s Health',
    featured: true,
    majorField: 'Advanced Care for Men\'s Health',
    link: '/procedures/mens-health'
  },
  { icon: <Zap size={22} />, title: 'Geniculate Artery Embolization', desc: 'Innovative relief for chronic knee pain without surgery.', tag: 'Pain Relief', link: '/procedures/msk' },
  { icon: <Brain size={22} />, title: 'Spinal Cord Stimulation', desc: 'Advanced neuromodulation for diabetic neuropathy & back pain.', tag: 'Pain Relief', link: '/procedures/msk' },
  { icon: <Activity size={22} />, title: 'Peripheral Arterial Disease', desc: 'Atherectomy, angioplasty, and stenting for improved blood flow.', tag: 'Vascular', link: '/procedures/vascular' },
  { icon: <Stethoscope size={22} />, title: 'Dialysis Interventions', desc: 'AV fistula creation, declots, and fistulagrams.', tag: 'Vascular', link: '/procedures/dialysis' },
  { icon: <CheckCircle2 size={22} />, title: 'Tumor Ablation', desc: 'Radiofrequency, microwave, and cryoablation options.', tag: 'Oncology', link: '/procedures/oncology' },
  { icon: <Users size={22} />, title: 'Biopsy Services', desc: 'Lung, kidney, liver, bone marrow, and thyroid biopsies.', tag: 'Oncology', link: '/procedures/oncology' },
];

const allServices = [
  'Biopsy (Lung, Bone Marrow, Kidney, Liver, Thyroid)',
  'Venous access (Ports, Permacaths, PICCs, Tunneled CVC)',
  'Dialysis Interventions (Declots, Fistulagrams, Endo AV fistula creation)',
  'Embolizations (Uterine fibroid, Prostate, Geniculate)',
  'Spinal Cord Stimulation (Peripheral diabetic neuropathy, Non surgical back pain, etc)',
  'Peripheral Arterial Disease (Atherectomy, Angioplasty, Stents)',
  'Peripheral Venous Disease (Varicose veins, DVT intervention)',
  'Vascular Interventions (Aneurysm coiling, AVM treatment, Pseudoaneurysm treatment)',
  'IVC filter placement and retrieval',
  'Kyphoplasty and vertebroplasty',
  'Lumbar puncture and intrathecal chemotherapy',
  'Drainage: Nephrostomy, PCNL, Cholecystostomy, Lymphocele/Cyst drainage sclerosis',
  'Tumor Ablation (Radiofrequency, Microwave, Cryoablation)'
];

const testimonials = [
  { name: 'Sarah Jenkins', title: 'Uterine Fibroid Embolization', stars: 5, text: 'I was told I needed a hysterectomy, but the team at EMIS offered a non-surgical alternative. The UFE procedure changed everything. I was back home the same day and my symptoms are completely gone. I am so grateful for Dr. Patel and his compassionate team.' },
  { name: 'Michael Henderson', title: 'Prostate Artery Embolization', stars: 5, text: 'After struggling with BPH symptoms for years, PAE was a total game-changer. The procedure was painless and the recovery was incredibly fast. Dr. Patel took the time to explain every detail. I highly recommend EMIS for any man looking for non-surgical relief.' },
  { name: 'Linda Martinez', title: 'Chronic Knee Pain (GAE)', stars: 5, text: 'Chronic knee pain had stopped me from enjoying long walks. The Geniculate Artery Embolization at EMIS was quick and highly effective. I felt immediate relief and was active again within days. Truly world-class medical expertise right here in Irving.' },
  { name: 'David Wilson', title: 'Vascular Care (PAD)', stars: 5, text: 'The precision and care at EMIS are unmatched. They treated my PAD with such expertise that I felt confident throughout the entire process. The staff is professional, the facility is high-tech, and the results have been life-changing for my mobility.' },
];

const tagColors: Record<string, string> = {
  'Women\'s Health': styles.tagWomen,
  'Men\'s Health': styles.tagMen,
  'Pain Relief': styles.tagPain,
  Vascular: styles.tagVascular,
  Oncology: styles.tagOncology,
};

export default function Home() {
  return (
    <main>

      {/* ═══════════════════════════════════════
          HERO — Centered Full-Screen
      ═══════════════════════════════════════ */}
      <section className={styles.heroCentered} id="home">
        
        {/* Full-screen background image with dark overlay */}
        <div className={styles.heroCenteredBg}>
          <Image
            src="/home.png"
            alt="EMIS Elite Minimally Invasive Specialists Clinic"
            fill
            className={styles.heroCenteredImage}
            priority
            sizes="100vw"
          />
          <div className={styles.heroDarkOverlay} />
        </div>

        <div className={`container ${styles.heroCenteredContainer}`}>
          <div className={styles.heroTextContent}>
            
            <h1 className={styles.heroHeadingLarge}>
              Leading Specialists in<br />
              <span>Vascular & Interventional Radiology</span>
            </h1>

            <p className={styles.heroDescLarge}>
              Board-certified interventional radiologists providing minimally invasive treatments for fibroids, enlarged prostate, and chronic pain. Same-day outpatient care with fast recovery.
            </p>

            <div className={styles.heroCtasLarge}>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                <Calendar size={20} /> Book Your Consultation
              </Link>
              <a href="tel:18172424984" className={styles.heroPhoneLarge}>
                <Phone size={20} /> (817) 242-4984
              </a>
            </div>

            <div className={styles.heroTrustLarge}>
              <div><CheckCircle2 size={18} /> Same-Day Procedures</div>
              <div className={styles.heroTrustSep} />
              <div><CheckCircle2 size={18} /> No Hospital Stays</div>
              <div className={styles.heroTrustSep} />
              <div><CheckCircle2 size={18} /> Fast Recovery</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          WHY INTERVENTIONAL RADIOLOGY
      ═══════════════════════════════ */}
      <section className={`${styles.irSection} section`} id="about">
        <div className="container">
          <div className={styles.irGrid}>
            {/* Image */}
            <div className={styles.irImgCol}>
              <div className={styles.irImgFrame}>
                <Image
                  src="/emis-elderly-patient.png"
                  alt="elderly patient with doctor at Emis Health Minimally Invasive Vascular Specialists Dallas Texas Arlington"
                  fill
                  className={styles.irImg}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Overlay trust chip */}
              <div className={styles.irChip}>
                <Award size={18} />
                <div>
                  <strong>Board Certified</strong>
                  <span>Society of Interventional Radiology</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className={styles.irText}>
              <div className="section-header" style={{ textAlign: 'left' }}>
                <h2>Meet Our Team of <span className="text-gradient">Highly Experienced Providers</span></h2>
                <div className="divider" style={{ margin: '1.2rem 0 0' }} />
              </div>

              <p className={styles.irPara}>
                Meet Our Team of Highly Experienced Providers who specialize in Vascular and Interventional Radiology.
              </p>

              <p className={styles.irPara}>
                Our physicians diagnose and treat a variety of disease and health issues. We use minimally invasive treatment to provide timely, high quality, convenient and low cost care. Our procedures are often used in place of traditional surgery and can eliminate the need for hospitalization.
              </p>

              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.3rem', color: 'var(--primary)' }}>What Sets Us Apart</h3>
              <p className={styles.irPara}>
                We perform routine screening to diagnose vascular health conditions and use our expertise to come up with the right intervention method that improves your quality of life. Here's what makes our practice stand out from the competition:
              </p>

              <div className={styles.irChecks}>
                {[
                  'Urgent & Same-Day Scheduling',
                  'Insurance-Optimized Care',
                  'Board-Certified Clinical Excellence',
                  'Convenient Outpatient Facilities',
                  'Compassionate, Personalized Care Plans'
                ].map(c => (
                  <div key={c} className={styles.irCheck}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <Link href="/#contact" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>
                Book Your Consultation <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          FEATURED SERVICES
      ═══════════════════════════════ */}
      <section className={`${styles.servicesSection} section`} id="services">
        <div className="container">
          <div className="section-header">
            <h2>Leading-Edge <span className="text-gradient">Clinical Solutions</span></h2>
            <div className="divider" />
            <p>Our board-certified specialists utilize the most advanced minimally invasive techniques to treat complex conditions with precision and care.</p>
          </div>

          {/* Major Services Grid (UFE & PAE) */}
          <div className={styles.servicesMajorGrid}>
            {services.filter((s: any) => s.featured).map((s: any, i: number) => (
              <div 
                key={i} 
                className={`${styles.serviceCardMajor} bento-card`} 
              >
                <div className={styles.majorServiceHeader}>
                  <div className={styles.majorServiceIconBox}>
                    {s.icon}
                  </div>
                </div>

                <div className={styles.majorServiceContent}>
                  <div className={styles.majorServiceBadge}>
                    <ShieldCheck size={14} className={styles.majorBadgeIcon} />
                    <span>{s.majorField}</span>
                  </div>
                  
                  <h3 className={styles.majorServiceTitle}>{s.title}</h3>
                  <p className={styles.majorServiceDesc}>{s.desc}</p>
                  
                  <Link href={s.link || "#"} className={styles.majorServiceLink}>
                    View Detailed Treatment Guide <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Services Grid */}
          <div className={styles.servicesSecondaryGrid}>
            {services.filter((s: any) => !s.featured).map((s: any, i: number) => (
              <Link key={i} href={s.link || "#"} className={styles.serviceCardMinor}>
                <div className={styles.minorServiceHeader}>
                  <div className={styles.minorServiceIcon}>{s.icon}</div>
                </div>
                <h4 className={styles.minorServiceTitle}>{s.title}</h4>
                <p className={styles.minorServiceDesc}>{s.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Learn More <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          {/* Full list */}
          <div className={styles.fullListWrap}>
            <h3>Our <span className="text-gradient">Main Services</span></h3>
            <div className={styles.fullList}>
              {allServices.map((item, i) => (
                <div key={i} className={styles.fullListItem}>
                  <ChevronRight size={16} className={styles.listChevron} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA banner */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBannerText}>
              <h2>Ready to Transform Your Health?</h2>
              <p>Talk to one of our specialists today. Most consultations are free.</p>
            </div>
            <div className={styles.ctaBannerActions}>
              <Link href="/#contact" className="btn btn-cta btn-pulse">
                <Calendar size={18} /> Book Appointment
              </Link>
              <a href="tel:18172424984" className={`btn ${styles.ctaBannerCall}`}>
                <Phone size={17} /> Call (817) 242-4984
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          MEET THE DOCTORS
      ═══════════════════════════════ */}
      <section className={`${styles.doctorsSection} section`}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="eyebrow">Expert-Led Care</div>
            <h2>Excellence in <span className="text-gradient">Interventional Radiology</span></h2>
            <div className="divider" />
            <p>Our fellowship-trained, board-certified specialists bring over 20 years of expertise to every procedure, ensuring the highest standards of safety and care.</p>
          </div>

          <div className={styles.doctorsGrid}>
            {[
              { 
                name: 'Dr. Lincoln Patel', 
                img: '/dr-lincolnpatel.png', 
                creds: 'Vascular and Interventional Radiologist', 
                bio: 'Dr. Lincoln Patel is a vascular and interventional radiologist serving the DFW area for more than 20 years. He previously was the head of Interventional Radiology for Radiology Associates of North Texas (RANT) - the largest private practice radiology group in the United States. He completed his undergraduate degree in Electrical Engineering at the University of Michigan, Ann Arbor and completed his medical degree at Medical College of Ohio. Subsequently completing residency in Diagnostic Radiology and fellowship in Vascular and Interventional Radiology at the University of Texas Southwestern' 
              },
              { 
                name: 'Dr. Jay Patel', 
                img: '/dr-jaypatel.png', 
                creds: 'Vascular and Interventional Radiologist', 
                bio: 'Dr. Jay Patel is a vascular and interventional radiologist serving the DFW area for more than 20 years. He previously was part of American Radiology Associates (ARA). He was chief of the department of radiology at Baylor Scott and White Irving and section chief of Interventional Radiology at Baylor Scott in White Irving, for 15 years. He completed his undergraduate degree in Biological Sciences at Southern Methodist University in Dallas and completed his medical degree at the University of Texas. Subsequently, completing residency in diagnostic radiology at UT Southwestern, where he was chief resident and fellowship in Vascular and Interventional Radiology at Baylor University Medical Center. Dr. Patel has been consistently named as one of D Magazine\'s Best Doctors in DFW and as Texas Monthly magazine\'s Super Doctors.' 
              },
            ].map((doc, i) => (
              <div key={i} className={styles.doctorCard}>
                <div className={styles.docImgWrap}>
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    fill
                    className={styles.docImg}
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className={styles.docImgOverlay} />
                </div>
                <div className={styles.docBody}>
                  <div className={styles.docCreds}>{doc.creds}</div>
                  <h3 className={styles.docName}>{doc.name}</h3>
                  <p className={styles.docBio}>{doc.bio}</p>
                  <div className={styles.docTrust}>
                    <span className="trust-badge"><ShieldCheck size={16} /> Board Certified</span>
                    <span className="trust-badge"><Award size={16} /> SIR Member</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.doctorsCta}>
            <Link href="/#about" className="btn btn-primary">
              Learn More About Our Team <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════ */}
      <section className={`${styles.testimonialsSection} section`} id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Patient Success Stories</div>
            <h2>Proven Clinical <span className="text-gradient">Outcomes</span></h2>
            <div className="divider" />
            <p>Trusted by thousands. Our patients experience a <strong>98% satisfaction rate</strong> across <strong>5,000+ specialized procedures</strong>.</p>
          </div>

          {/* Video Testimonials Section */}
          <div className={styles.videoReviews}>
            <div className={styles.videoReviewsHeader}>
              <div className={styles.videoBadge}>
                <Play size={14} fill="currentColor" />
                New Success Stories Every Friday
              </div>
              <h3>Featured Video <span className="text-gradient">Success Stories</span></h3>
            </div>
            
            <div className={styles.videoGrid}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.videoThumb}>
                  <Image src="/hero-render-bg.jpg" alt="Video Review Placeholder" fill className={styles.videoImg} sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className={styles.playOverlay}>
                    <div className={styles.playCircle}>
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className={styles.videoInfo}>
                  <strong>Patient Transformation: UFE Relief</strong>
                  <span>&ldquo;I found hope again without surgery...&rdquo;</span>
                </div>
              </div>
              
              <div className={styles.videoPlaceholder}>
                <div className={styles.videoThumb}>
                  <Image src="/hero-render-bg.jpg" alt="Video Review Placeholder" fill className={styles.videoImg} sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className={styles.playOverlay}>
                    <div className={styles.playCircle}>
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className={styles.videoInfo}>
                  <strong>Back to Active Living: PAE Story</strong>
                  <span>&ldquo;The best decision I ever made for my health...&rdquo;</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`${styles.testCard} bento-card`}>
                <div className={styles.testBadge}>
                  <ShieldCheck size={12} />
                  Verified Patient
                </div>
                <div className="stars">
                  {'★★★★★'.split('').slice(0, t.stars).map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className={styles.testText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testFooter}>
                  <div className={styles.testAvatar}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <strong className={styles.testName}>{t.name}</strong>
                    <span className={styles.testTitle}>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CONTACT / LOCATIONS
      ═══════════════════════════════ */}
      <section className={`${styles.contactSection} section`} id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our <span className="text-gradient">Clinic</span></h2>
            <div className="divider" />
            <p>Convenient location serving the greater DFW Metroplex.</p>
          </div>

          <div className={styles.contactGrid}>
            {/* Location Cards */}
            <div className={styles.locationsWrapper}>
              <div className={`${styles.locationCard} bento-card`}>
                <div className={styles.locationIcon}><MapPin size={24} /></div>
                <h3>Irving Location</h3>
                <p className={styles.locAddr}>2150 Market Place Blvd Suite 140<br />Irving, TX 75063</p>
                <div className={styles.locDetails}>
                  <a href="tel:18172424984" className={styles.locPhone}><Phone size={16} /> (817) 242-4984</a>
                  <div className={styles.locHours}><Clock size={16} /> Mon–Fri: 8:00 AM – 5:00 PM</div>
                </div>
                <a
                  href="https://goo.gl/maps/evaQ5x7YTjtzck2H6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline ${styles.dirBtn}`}
                >
                  Get Directions <ChevronRight size={16} />
                </a>
              </div>

              <div className={`${styles.locationCard} bento-card`}>
                <div className={styles.locationIcon}><MapPin size={24} /></div>
                <h3>Arlington Location</h3>
                <p className={styles.locAddr}>3050 S Center St Suite 160<br />Arlington, TX 76014</p>
                <div className={styles.locDetails}>
                  <a href="tel:14695995888" className={styles.locPhone}><Phone size={16} /> (469) 599-5888</a>
                  <div className={styles.locHours}><Clock size={16} /> Mon–Fri: 8:00 AM – 5:00 PM</div>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline ${styles.dirBtn}`}
                >
                  Get Directions <ChevronRight size={16} />
                </a>
              </div>
            </div>



            {/* Contact Form */}
            <div className={`${styles.contactForm} bento-card`}>
              <h3>Request an Appointment</h3>
              <p style={{ color: 'var(--text-2)', marginBottom: '1.5rem', fontSize: '0.93rem' }}>
                Fill out the form and our team will contact you within 1 business day.
              </p>
              <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="first-name">First Name *</label>
                    <input id="first-name" type="text" placeholder="John" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="last-name">Last Name *</label>
                    <input id="last-name" type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone-contact">Phone Number *</label>
                  <input id="phone-contact" type="tel" placeholder="(469) 000-0000" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="procedure">Procedure of Interest</label>
                  <select id="procedure">
                    <option value="">Select a procedure...</option>
                    {allServices.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={3} placeholder="Tell us more about your condition or questions..." />
                </div>
                <button type="submit" className="btn btn-cta" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Calendar size={18} /> Request Appointment
                </button>
                <p className={styles.formNote}>
                  <Mail size={14} /> FAX: (469) 262-5688 · info@emishealth.com
                </p>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className={`${styles.mapWrap} bento-card`}>
            <iframe
              src="https://maps.google.com/maps?q=3050%20S%20Center%20St%20Suite%20160,%20Arlington,%20TX%2076014&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: '12px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EMIS Health Locations Map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronRight, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ArrowLeft,
  ShieldCheck,
  Stethoscope,
  Activity
} from 'lucide-react';
import { procedureCategories } from '@/data/procedures';
import styles from './procedure.module.css';

export async function generateStaticParams() {
  return procedureCategories.map((category) => ({
    slug: category.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProcedurePage({ params }: PageProps) {
  const { slug } = await params;
  const category = procedureCategories.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className={styles.procedureMain}>
      {/* Hero Section */}
      <section className={styles.procedureHero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Link href="/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className={styles.heroTitle}>{category.title}</h1>
          <p className={styles.heroIntro}>{category.intro}</p>
        </div>
      </section>

      {/* Procedures Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2>Detailed <span className="text-gradient">Procedures</span></h2>
            <div className="divider" />
            <p>We use advanced imaging to guide minimally invasive instruments to the source of the problem.</p>
          </div>

          <div className={styles.proceduresGrid}>
            {category.procedures.map((proc, i) => (
              <div key={i} className={styles.procedureCard}>
                <div style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                  <ShieldCheck size={32} />
                </div>
                <h3 className={styles.procTitle}>{proc.title}</h3>
                <p className={styles.procDesc}>{proc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Info (Benefits/Reasons) */}
      {(category.benefits || category.reasons) && (
        <section className={styles.extraSection}>
          <div className="container">
            <div className={styles.extraGrid}>
              {category.benefits && (
                <div className={styles.listBlock}>
                  <h3>{category.benefitsTitle || 'Key Benefits'}</h3>
                  <div className={styles.checkList}>
                    {category.benefits.map((benefit, i) => (
                      <div key={i} className={styles.checkItem}>
                        <CheckCircle2 size={24} className={styles.checkIcon} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {category.reasons && (
                <div className={styles.listBlock}>
                  <h3>{category.reasonsTitle || 'Reasons for Referral'}</h3>
                  <div className={styles.checkList}>
                    {category.reasons.map((reason, i) => (
                      <div key={i} className={styles.checkItem}>
                        <Activity size={24} className={styles.checkIcon} style={{ color: 'var(--accent)' }} />
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaBox}`}>
          <h2 className={styles.ctaTitle}>Ready to Experience <span style={{ color: 'var(--secondary-light)' }}>Better Care?</span></h2>
          <p className={styles.ctaDesc}>
            Join the thousands of patients who have chosen EMIS for their minimally invasive treatments. 
            Most procedures are covered by insurance and require no hospital stay.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn btn-primary" style={{ background: '#fff', color: 'var(--primary)', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
              <Calendar size={20} /> Request Your Consultation
            </Link>
            <a href="tel:18172424984" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
              <Phone size={20} /> (817) 242-4984
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

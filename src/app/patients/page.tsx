import styles from './patients.module.css';
import { ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'For Patients | EMIS Health',
  description: 'Patient forms, interactive quizzes, and resources for your minimally invasive treatment.',
};

export default function PatientsPage() {
  const forms = [
    { title: 'Dialysis Access Referral', url: 'https://emistexas.com/wp-content/uploads/2023/08/NEW-TEXAS-DIALYSIS-REFERRAL-FORM.pdf' },
    { title: 'Peripheral Vascular Referral', url: 'https://emistexas.com/wp-content/uploads/2023/07/Vascular-Referral-Form-1.pdf' },
    { title: 'Interventional Pain Referral', url: 'https://emistexas.com/wp-content/uploads/2023/08/EMIS-Interventional-Pain-Referral-Form.pdf' },
    { title: 'Oncology Referral Form', url: 'https://emistexas.com/wp-content/uploads/2023/07/Oncology-Referral-Form-1.pdf' },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <h1>Patient Resources & Forms</h1>
            <p>Complete your intake forms or take an interactive quiz to see if you are a candidate for our minimally invasive procedures.</p>
          </div>
        </section>

        {/* Embedded Forms Grid */}
        <section className="section" id="forms">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="eyebrow">Required Documents</span>
              <h2>Referral <span className="text-gradient">Forms</span></h2>
              <div className="divider" style={{ margin: '1rem auto' }} />
              <p>View, fill out, or download the necessary forms for your visit.</p>
            </div>

            <div className={styles.formsGrid}>
              {forms.map((f, i) => (
                <div key={i} className={styles.formCard}>
                  <div className={styles.formHeader}>
                    <h3>{f.title}</h3>
                    <a href={f.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                      Open Full Screen <ChevronRight size={14} />
                    </a>
                  </div>
                  {/* Google Docs Viewer for embedding PDFs reliably across browsers */}
                  <iframe 
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(f.url)}&embedded=true`} 
                    className={styles.pdfEmbed}
                    title={f.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Quizzes */}
        <section className={styles.quizzesSection} id="quizzes">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="eyebrow">Interactive Quizzes</span>
              <h2>Are You A <span className="text-gradient">Candidate?</span></h2>
              <div className="divider" style={{ margin: '1rem auto' }} />
              <p>Complete a short quiz to see if you qualify for a FREE Phone Consultation.</p>
            </div>

            <div className={styles.quizGrid}>
              <div className={styles.quizCard}>
                <h3>Uterine Fibroids</h3>
                <p>Are you a candidate to be treated for Uterine Fibroids without surgery?</p>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Take Quiz</button>
              </div>
              <div className={styles.quizCard}>
                <h3>Diabetic Neuropathy</h3>
                <p>Are you a Spinal Stimulator candidate to treat your painful diabetic neuropathy?</p>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Take Quiz</button>
              </div>
              <div className={styles.quizCard}>
                <h3>Knee Pain</h3>
                <p>Are you a candidate to be treated for Geniculate Artery Embolization?</p>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Take Quiz</button>
              </div>
            </div>

            <div className={styles.legalNotice}>
              <strong>Legal Notice:</strong> All information contained in and produced by the EMIS Quiz is provided for educational purposes only. This information should not be used for the diagnosis or treatment of any health problem or disease. THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

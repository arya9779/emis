export interface Procedure {
  title: string;
  description: string;
}

export interface ProcedureCategory {
  id: string;
  title: string;
  slug: string;
  intro: string;
  procedures: Procedure[];
  benefitsTitle?: string;
  benefits?: string[];
  reasonsTitle?: string;
  reasons?: string[];
}

export const procedureCategories: ProcedureCategory[] = [
  {
    id: 'oncology',
    title: 'Interventional Oncology',
    slug: 'oncology',
    intro: 'At EMIS HEALTH Center, we provide targeted, minimally invasive cancer treatments that focus on destroying tumors while preserving healthy tissue and quality of life.',
    procedures: [
      {
        title: 'TACE / DEB-TACE',
        description: 'Our experienced physicians provide Transarterial Chemoembolization (TACE) and Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE) procedures to deliver targeted chemotherapy directly to tumors while minimizing the impact on healthy tissue.'
      },
      {
        title: 'Intra Arterial Chemotherapy Infusion',
        description: 'At EMIS HEALTH Center, we specialize in Intra Arterial Chemotherapy Infusion, a targeted treatment that delivers high concentrations of chemotherapy directly to cancerous tissues while reducing systemic side effects.'
      },
      {
        title: 'Intrathecal Methotrexate',
        description: 'Our team offers Intrathecal Methotrexate treatment, a method of administering chemotherapy directly into the cerebrospinal fluid to effectively treat cancers that affect the central nervous system.'
      },
      {
        title: 'RF Ablation for Liver, Renal, or Retroperitoneal Tumors',
        description: 'We provide Radiofrequency Ablation (RFA) for liver, renal, or retroperitoneal tumors. This minimally invasive procedure uses radiofrequency energy to destroy cancer cells and offers patients a quicker recovery time compared to traditional surgery.'
      },
      {
        title: 'Port Placement and Removal',
        description: 'EMIS HEALTH Center offers safe and efficient port placement and removal services, ensuring patients have a comfortable and convenient means of receiving intravenous treatments during their cancer care journey.'
      },
      {
        title: 'Arm Port Placement',
        description: 'We also provide arm port placement services, offering patients an alternative access point for their intravenous treatments.'
      },
      {
        title: 'Image-Guided Bone Marrow Biopsy',
        description: 'Our expert physicians utilize image-guided techniques to perform bone marrow biopsies, ensuring precision and minimizing discomfort during the procedure.'
      }
    ]
  },
  {
    id: 'vascular',
    title: 'Vascular Disease & PAD',
    slug: 'vascular',
    intro: 'We specialize in diagnosing and treating complex vascular conditions using state-of-the-art endovascular techniques to restore circulation and prevent complications.',
    procedures: [
      {
        title: 'Peripheral Arterial Disease (PAD)',
        description: 'At EMIS HEALTH Center, we specialize in diagnosing and treating Peripheral Arterial Disease (PAD). Our skilled physicians use minimally invasive techniques to improve blood flow and alleviate the painful symptoms of this common vascular condition.'
      },
      {
        title: 'Arterial or Venous Endovascular Stenting',
        description: 'We provide arterial and venous endovascular stenting services to restore blood flow and minimize the risk of complications. Our expertise in this procedure ensures a quick recovery and long-lasting results for our patients.'
      },
      {
        title: 'Angioplasty Stenting Thrombolysis Thrombectomy',
        description: 'Our team is highly experienced in performing angioplasty stenting, thrombolysis, and thrombectomy procedures to treat various vascular conditions. We utilize the latest technology to provide the most effective and least invasive treatments available.'
      },
      {
        title: 'Venous Disease and Ambulatory Phlebectomy',
        description: 'EMIS HEALTH Center is also proficient in treating venous diseases, such as varicose veins, through ambulatory phlebectomy. This less invasive procedure results in a quicker recovery period and minimal scarring in comparison to traditional surgery.'
      },
      {
        title: 'Pseudoaneurysm Evaluation and Treatment',
        description: 'We offer comprehensive pseudoaneurysm evaluation and treatment services, ensuring that patients receive the most appropriate and effective care for their specific condition.'
      },
      {
        title: 'Embolization of Vessels in Chest, Abdomen, or Pelvis as well as Extremities',
        description: 'EMIS HEALTH Center is skilled in embolization procedures for vessels located in the chest, abdomen, pelvis, and extremities. Our physicians use advanced techniques to treat a range of conditions, including aneurysms and vascular malformations.'
      },
      {
        title: 'Coiling of Arterial Aneurysms',
        description: 'Our team is experienced in coiling arterial aneurysms, a minimally invasive alternative to open surgery. This technique helps reduce the risk of aneurysm rupture and improves patient outcomes.'
      }
    ]
  },
  {
    id: 'mens-health',
    title: "Men's Health",
    slug: 'mens-health',
    intro: "We provide discrete, cutting-edge treatments for men's health issues, focusing on non-surgical solutions for varicoceles and enlarged prostate.",
    procedures: [
      {
        title: 'Testicular Varicocele Embolization',
        description: 'Our expert physicians perform Testicular Varicocele Embolization, a minimally invasive procedure to treat varicoceles, which are enlarged veins in the scrotum that can cause pain, swelling, and even infertility. By blocking the blood flow to the varicocele, this procedure can alleviate symptoms and improve fertility outcomes.'
      },
      {
        title: 'Prostate Artery Embolization for BPH',
        description: 'We provide Prostate Artery Embolization (PAE) as a cutting-edge treatment alternative for men dealing with Benign Prostatic Hyperplasia (BPH), commonly referred to as an enlarged prostate. This minimally invasive procedure reduces the size of the prostate gland by blocking its blood supply, helping to relieve symptoms like frequent urination, weak urine stream, and urinary retention.'
      }
    ]
  },
  {
    id: 'womens-health',
    title: "Women's Health",
    slug: 'womens-health',
    intro: 'Empowering women with non-surgical alternatives for uterine fibroids. Experience relief without the need for a hysterectomy.',
    procedures: [
      {
        title: 'Uterine Fibroid Embolization (UFE)',
        description: 'A minimally invasive technique employing a catheter to obstruct the blood supply to fibroids, leading to their reduction in size and eventual demise.'
      },
      {
        title: 'Pre-UFE Assessment',
        description: "Evaluation of the patient's medical history, symptoms, and imaging results to determine the suitability of UFE as a treatment option."
      },
      {
        title: 'Post-UFE Follow-up',
        description: "Monitoring the patient's progress and symptom relief after the procedure, ensuring proper recovery and assessing the need for any additional treatments."
      },
      {
        title: 'Fibroid Symptom Management',
        description: 'Providing guidance on managing symptoms and improving overall quality of life for patients living with uterine fibroids.'
      },
      {
        title: 'Alternative Fibroid Treatments',
        description: 'Providing information and options for alternative treatments if UFE is not suitable or desired.'
      }
    ]
  },
  {
    id: 'dialysis',
    title: 'Dialysis Access Maintenance',
    slug: 'dialysis',
    intro: 'Critical care for dialysis patients. We ensure your vascular access is functional and efficient to support your life-sustaining treatments.',
    procedures: [
      {
        title: 'Fistula and Graft Evaluation and Maintenance',
        description: 'Our skilled physicians assess and maintain arteriovenous (AV) fistulas and grafts, ensuring optimal blood flow and functionality for successful dialysis treatment.'
      },
      {
        title: 'Dialysis Catheter Insertion',
        description: 'We offer dialysis catheter insertion services to facilitate efficient and comfortable hemodialysis treatments, tailored to your specific needs and preferences.'
      },
      {
        title: 'Declotting of Fistula or Graft',
        description: 'Our team performs declotting procedures for fistulas and grafts, removing obstructions and restoring blood flow to ensure the effectiveness of dialysis treatments.'
      },
      {
        title: 'Central Venous Angioplasty and Stenting',
        description: 'EMIS HEALTH Center provides central venous angioplasty and stenting services to improve blood flow and alleviate complications associated with narrowed or blocked central veins.'
      },
      {
        title: 'Fibrin Sheath Removal',
        description: 'Our physicians offer fibrin sheath removal services to address catheter-related complications, ensuring proper function and reducing the risk of infection or thrombosis.'
      },
      {
        title: 'Central Vein Recanalization',
        description: 'We perform central vein recanalization procedures to restore blood flow through blocked or narrowed central veins, improving overall vascular access for dialysis patients.'
      }
    ]
  },
  {
    id: 'msk',
    title: 'MSK Intervention & Pain Management',
    slug: 'msk',
    intro: 'Innovative musculoskeletal treatments for chronic pain. We target the source of your discomfort to help you regain mobility and live pain-free.',
    procedures: [
      {
        title: 'Vertebroplasty',
        description: 'Our skilled physicians perform vertebroplasty procedures to stabilize and strengthen fractured vertebrae, providing pain relief and improved spinal stability for patients suffering from vertebral compression fractures.'
      },
      {
        title: 'Kyphoplasty',
        description: 'EMIS HEALTH Center offers kyphoplasty services to treat spinal compression fractures by inflating a balloon in the affected vertebra and injecting bone cement, helping to restore the height of the vertebra and reduce pain.'
      },
      {
        title: 'Facet Joint Injection',
        description: 'Our team provides facet joint injections to alleviate pain and inflammation caused by facet joint arthritis or degenerative conditions in the spine, offering patients relief and increased mobility.'
      },
      {
        title: 'Hip Joint Injection',
        description: 'We perform hip joint injections to diagnose and treat hip joint pain caused by arthritis, bursitis, or other inflammatory conditions, providing targeted pain relief and improved joint function.'
      },
      {
        title: 'Geniculate Artery Embolization for Knee Arthritis',
        description: 'Our interventional radiology physicians offer geniculate artery embolization as a minimally invasive treatment for knee arthritis, reducing pain and inflammation and promoting increased mobility.'
      }
    ],
    benefitsTitle: 'Benefits of Minimally Invasive MSK Intervention Procedures',
    benefits: [
      'Pain Relief: Targeted pain relief, allowing patients to resume their daily activities.',
      'Faster Recovery Times: Reduced downtime and minimizing disruption to daily routines.',
      'Lower Risk of Complications: Safer treatment experience compared to invasive surgery.',
      'Increased Mobility: Regain range of motion, improving overall function and well-being.',
      'Personalized Treatment Plans: Tailored solutions for each patient’s unique needs.'
    ],
    reasonsTitle: 'Reasons for Referral',
    reasons: [
      'Persistent back pain from vertebral compression fractures',
      'Hip or knee joint pain due to arthritis or inflammation',
      'Unexplained musculoskeletal pain affecting daily activities',
      'Failed conservative treatments for spinal pain',
      'Suspected facet joint arthritis'
    ]
  }
];

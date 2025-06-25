import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "./ClassDetails.css"; 
import { BookOpen, Brain, Users, ShieldCheck } from "lucide-react";



const courses = [
  {
    id: 1,
      title: "Radiographic Anatomy - Skull",
        description: "Understand the fundamental concepts behind Radiographic Anatomy of the spine.",
        outline: [
          <b>Module 1: Skull Bones Overview</b>,
          'Frontal, parietal, temporal, occipital',
          'Ethmoid and sphenoid',
      
          <b>Module 2: Facial Bones</b>,
          'Maxilla, mandible, nasal bones',
          'Orbits and zygomatic arches',
      
          <b>Module 3: Skull Projections</b>,
          'PA and Lateral Skull',
          'Towne’s, Water’s, Caldwell views',
      
          <b>Module 4: Sinuses and Mastoid Air Cells</b>,
          'Frontal, maxillary, ethmoid, sphenoid sinuses',
          'Common sinus pathologies',
      
          <b>Module 5: Radiographic Interpretation</b>,
          'Identifying fractures',
          'Normal landmarks and symmetry',
          'Evaluating sinus opacification'
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 2,
    title: "Basic Principles of X-ray Production",
    description: "Learn how X-rays are generated and the factors influencing image quality.",
    outline: [
      <strong>Module 1: Introduction to X-rays</strong>,
      "History and discovery",
      "Clinical applications",

      <strong>Module 2: The X-ray Tube and Components</strong>,
      "Cathode, anode, glass envelope",
      "Target material and focal spot",

      <strong>Module 3: Mechanism of X-ray Production</strong>,
      "Thermionic emission",
      "Bremsstrahlung and characteristic radiation",

      <strong>Module 4: Exposure Factors</strong>,
      "Role of kVp and mAs",
      "Filtration and collimation",

      <strong>Module 5: Types of Radiation</strong>,
      "Primary, secondary, scatter",
      "Interaction with matter",

      <strong>Module 6: Radiation Safety</strong>,
      "ALARA principle",
      "Shielding and personal dosimetry"
    ],
    outlinePdf: "/pdfs/skull-xray-outline.pdf",
    subscribeLink: "./subscription.js",
    fee: "$50",
    resources: [
      "Skull x-ray positioning guides",
      "Exposure setting tutorials",
      "Case studies",
    ],
    benefits: [
      "Master skull x-ray techniques.",
      "Understand common skull pathologies.",
      "Improve diagnostic accuracy with hands-on training.",
    ],
    schedule: "Live webinars every Tuesday and Friday from 2:00 PM to 4:00 PM (UTC).",
  },
  {
    id: 3,
    title: "Radiographic Anatomy – Chest",
    description: "Identify normal thoracic structures and distinguish key features in chest radiographs.",
    outline: [
      <strong>Module 1: Thoracic Skeletal Anatomy</strong>,
      "Ribs, sternum, clavicles, vertebrae",

      <strong>Module 2: Pulmonary Structures</strong>,
      "Lung lobes and hilum",
      "Trachea and bronchial tree",

      <strong>Module 3: Mediastinum and Heart Borders</strong>,
      "Great vessels",
      "Cardiothoracic ratio",

      <strong>Module 4: Diaphragm and Costophrenic Angles</strong>,
      "Normal contour",
      "Pathological changes",

      <strong>Module 5: Chest X-ray Interpretation</strong>,
      "ABCDE method",
      "Common abnormalities (effusion, consolidation)"
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 4,
    title: "Basics of chest X-ray pathologies",
  description: "Understand how to identify common pathological findings on chest radiographs and differentiate normal from abnormal patterns.",
  outline: [
    <strong>Module 1: Review of Normal Chest Radiograph</strong>,
    "Systematic approach to interpretation (ABCDE)",
    "Recognizing normal anatomy and variations",
    "Technical quality checks (penetration, inspiration, rotation)",

    <strong>Module 2: Pulmonary Pathologies</strong>,
    "Consolidation (pneumonia)",
    "Pulmonary edema and heart failure signs",
    "Atelectasis and hyperinflation",

    <strong>Module 3: Pleural Abnormalities</strong>,
    "Pleural effusion – blunting of costophrenic angles",
    "Pneumothorax – absence of lung markings",
    "Hydropneumothorax",

    <strong>Module 4: Mediastinal and Cardiac Pathologies</strong>,
    "Cardiomegaly – cardiothoracic ratio",
    "Mediastinal widening and masses",
    "Pericardial effusion signs",

    <strong>Module 5: Chest Wall and Diaphragm Findings</strong>,
    "Fractured ribs and subcutaneous emphysema",
    "Elevated vs flattened diaphragms",
    "Eventration or paralysis",

    <strong>Module 6: Tuberculosis and Other Infections</strong>,
    "Primary vs post-primary TB patterns",
    "Cavitations and miliary patterns",
    "Differential appearance of infections",

    <strong>Module 7: Neoplastic Patterns</strong>,
    "Lung masses and nodules",
    "Hilar enlargement",
    "Secondary metastases (cannonball appearance)"
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 5,
    title: "Ultrasound: Knobology and Techniques",
    description: "Learn the basic control functions and orientation techniques of diagnostic ultrasound.",
    outline: [
      <strong>Module 1: Basics of Ultrasound Physics</strong>,
      "Sound wave behavior",
      "Echogenicity terms",

      <strong>Module 2: Transducer Types</strong>,
      "Linear, curvilinear, phased array",
      "Frequency and depth selection",

      <strong>Module 3: Knob Functions</strong>,
      "Gain, depth, focus, TGC",
      "Freeze, zoom, calipers",

      <strong>Module 4: Scanning Planes</strong>,
      "Longitudinal, transverse, oblique",
      "Probe orientation and markers",

      <strong>Module 5: Patient Preparation</strong>,
      "Gel use",
      "Breathing techniques"
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 6,
    title: "Abdominal Ultrasound – Part 1",
    description: "Get introduced to abdominal scanning with a focus on liver, gallbladder, and kidneys.",
    outline: [
      <strong>Module 1: Overview of Abdominal Protocol</strong>,
      "Preparation and positioning",
      "Clinical indications",

      <strong>Module 2: Liver Anatomy</strong>,
      "Lobes and echotexture",
      "Portal/hepatic veins",

      <strong>Module 3: Gallbladder and Biliary Tree</strong>,
      "Normal appearance and wall thickness",
      "Common pathologies (e.g., gallstones)",

      <strong>Module 4: Kidneys</strong>,
      "Corticomedullary differentiation",
      "Renal sinus and pelvis",

      <strong>Module 5: Intro to Doppler (Optional)</strong>,
      "Basic color Doppler flow",
      "When to use it"
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 7,
    title: "Obstetric Ultrasound Basics",
    description: "Understand first and second trimester scan techniques, landmarks, and fetal measurements.",
    outline: [
      <strong>Module 1: First Trimester Scan</strong>,
      "Gestational sac, yolk sac",
      "CRL and fetal heartbeat",

      <strong>Module 2: Second Trimester Anatomy</strong>,
      "Head (BPD, HC), abdomen (AC)",
      "Femur length (FL)",

      <strong>Module 3: Amniotic Fluid and Placenta</strong>,
      "AFI assessment",
      "Placental grading",

      <strong>Module 4: Fetal Presentation & Behavior</strong>,
      "Cephalic, breech, transverse",
      "Normal movements",

      <strong>Module 5: Safety in Obstetric Scanning</strong>,
      "Thermal index, mechanical index",
      "Exposure time and ALARA"
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  {
    id: 8,
    title: "Soft Tissue Ultrasound",
    description: "Learn to identify and evaluate superficial structures such as muscles, tendons, masses, and fluid collections using ultrasound.",
    outline: [
      <strong>Module 1: Introduction to Soft Tissue Ultrasound</strong>,
      "Indications and clinical relevance",
      "Advantages over other imaging modalities",
      "Probe selection and settings for superficial scanning",
  
      <strong>Module 2: Musculoskeletal Anatomy Overview</strong>,
      "Skin, subcutaneous tissue, fascia layers",
      "Basic muscle and tendon anatomy",
      "Dynamic scanning techniques",
  
      <strong>Module 3: Evaluation of Soft Tissue Masses</strong>,
      "Cystic vs solid masses",
      "Lipomas, abscesses, and hematomas",
      "Soft tissue tumors – benign vs suspicious features",
  
      <strong>Module 4: Inflammatory and Infectious Conditions</strong>,
      "Cellulitis and abscess",
      "Foreign body detection",
      "Bursitis and tenosynovitis",
  
      <strong>Module 5: Soft Tissue Trauma</strong>,
      "Muscle tears and hematomas",
      "Tendon injuries",
      "Post-trauma fluid collections",
  
      <strong>Module 6: Ultrasound-Guided Interventions (Overview)</strong>,
      "Basics of needle visualization",
      "Drainage of abscesses",
      "Biopsy guidance principles"
        ],
      
    subscribeLink: "./subscription.js",
    fee: "N9,500",
    resources: [
      "Lecture slides (PDF)",
      "Suggested textbooks",
      "Video demonstrations",
    ],
    benefits: [
      "Understand fundamental radiographic anatomy.",
      "Gain practical skills for basic interpretation.",
      "Access expert guidance and tutorials.",
    ],
    schedule: "Weekly sessions on Mondays and Thursdays from 10:00 AM to 12:00 PM (UTC).",
  },
  
];

const benefits = [
  {
    icon: <BookOpen size={100} className="text-primary p-2 rounded" />, 
    title: "Comprehensive Learning Resources",
    description: "Access a wide range of expertly curated materials tailored to radiography students, covering fundamental to advanced topics.",
    align: "left",
  },
  {
    icon: <Brain size={100} className="text-primary p-2 rounded" />,
    title: "Interactive and Engaging Lessons",
    description: "Experience a dynamic learning environment with quizzes, case studies, and real-world scenarios to enhance understanding.",
    align: "right",
  },
  {
    icon: <Users size={100} className="text-primary p-2 rounded" />,
    title: "Community and Mentorship",
    description: "Join a network of radiography students and professionals for discussions, guidance, and mentorship opportunities.",
    align: "left",
  },
  {
    icon: <ShieldCheck size={100} className="text-primary p-2 rounded" />,
    title: "Certified and Trusted Content",
    description: "Our courses and materials are reviewed by industry experts to ensure accuracy and reliability for your studies.",
    align: "right",
  },
];

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <Container className="text-center mt-5">
        <h2 style={{marginTop: '150px'}} className="">We are sorry. This class is not available now. <br />check out our other classes</h2>
        <Button style={{width: '200px'}} variant="primary" onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container style={{}}  className="mt-5">
      {/* <Button style={{width: '200px', marginTop: '20px'}} 
        variant="outline-secondary"
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-2"
      >
        ← Back
      </Button> */}
      <Row style={{ paddingTop: '100px', paddingBottom: '100px'}}className="justify-content-between">
        <Col md={12}>
          <Card className="shadow-lg p-4">
            <h2 className="fw-bold">{course.title}</h2>
            <p className="text-muted">{course.description}</p>
            <h4 className="mt-4">Course Outline</h4>
            <ul>
              {course.outline.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <h4 className="mt-4">Subscription Fee: <span className="text-success">{course.fee}</span></h4>
            <Button 
            variant="success" 
            className="mt-3" 
            style={{ width: "100%"}}
            onClick={() => navigate(`/subscribe/`)}
          >
            Subscribe Now
            </Button>

          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default ClassDetails;

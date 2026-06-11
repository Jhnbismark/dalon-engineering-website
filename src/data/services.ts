export interface Service {
  id: string;
  title: string;
  blurb: string;
  description: string;
  scope: string[];
  /** Inline SVG path data, drawn on a 24x24 grid, stroked. */
  icon: string;
}

export const services: Service[] = [
  {
    id: 'construction',
    title: 'Construction Works',
    blurb:
      'Civil and building works delivered to specification, on schedule and to lasting quality.',
    description:
      'We undertake building and civil engineering works for residential, commercial, institutional and public clients. From site preparation and substructure through to finishes and handover, our works are managed by qualified engineers with strict quality assurance and site safety controls at every stage.',
    scope: [
      'Residential and commercial building construction',
      'Roads, drainage and other civil works',
      'Structural works and reinforced concrete',
      'Renovations, remodelling and extensions',
      'Water and sanitation infrastructure',
    ],
    icon: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 12h.01M15 12h.01',
  },
  {
    id: 'consultancy',
    title: 'Engineering Consultancy',
    blurb:
      'Independent engineering advice, designs and supervision grounded in sound practice.',
    description:
      'Our consultancy practice provides clients with dependable technical guidance across the project lifecycle. We prepare designs, drawings and specifications, review contractor submissions, and supervise works on site so that what is built matches what was designed — safely, economically and in compliance with Ugandan standards.',
    scope: [
      'Civil and structural design and detailing',
      'Feasibility studies and technical appraisals',
      'Construction supervision and quality assurance',
      'Condition assessments and structural audits',
      'Statutory approvals and documentation support',
    ],
    icon: 'M9.5 2h5L16 7l4.5 2.5v5L16 17l-1.5 5h-5L8 17l-4.5-2.5v-5L8 7l1.5-5zM12 8a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    blurb:
      'Single-point accountability for scope, budget, programme and quality.',
    description:
      'We act as the client’s representative from inception to close-out: planning the programme, procuring and coordinating contractors, controlling cost and risk, and reporting with full transparency. Our role is simple — protect the client’s interests and deliver the project as promised.',
    scope: [
      'Project planning and programming',
      'Procurement and contract administration',
      'Cost, risk and change control',
      'Stakeholder coordination and reporting',
      'Commissioning and project close-out',
    ],
    icon: 'M8 3h8v4H8zM4 7h16v14H4zM8 12h2m-2 4h2m4-4h4m-4 4h4',
  },
  {
    id: 'quantity-surveying',
    title: 'Quantity Surveying',
    blurb:
      'Accurate measurement and cost control that keeps budgets honest.',
    description:
      'Our quantity surveying service gives clients certainty over construction costs. We prepare bills of quantities and estimates, evaluate tenders, value works in progress, and settle final accounts — so every shilling spent on a project is measured, justified and documented.',
    scope: [
      'Bills of quantities and cost estimates',
      'Tender documentation and evaluation',
      'Interim valuations and payment certificates',
      'Variation assessment and claims management',
      'Final accounts and cost reporting',
    ],
    icon: 'M6 2h12v20H6zM6 7h12M10 11h.01M14 11h.01M10 15h.01M14 15h.01M10 19h4',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Development',
    blurb:
      'Engineering-led property development from land acquisition to occupation.',
    description:
      'We identify, plan and develop property with an engineer’s discipline. Because design, costing and construction sit under one roof, our developments are realistically budgeted, properly built and delivered with clean documentation — ready for sale, letting or owner occupation.',
    scope: [
      'Site identification and due diligence',
      'Development planning and approvals',
      'Residential and commercial developments',
      'Design-and-build delivery',
      'Property improvement and repositioning',
    ],
    icon: 'M3 21h18M6 21V8l6-4 6 4v13M12 21v-5M3 11l3-2m12 2l3-2',
  },
  {
    id: 'materials-plant',
    title: 'Materials & Plant Hire',
    blurb:
      'Quality-assured construction materials and reliable equipment, on time.',
    description:
      'We supply tested construction materials and hire out construction plant and equipment to contractors, developers and institutions. Sourcing through our network keeps prices competitive, while our engineers verify quality before anything reaches your site.',
    scope: [
      'Supply of aggregates, cement, steel and timber',
      'Hardware and finishing materials',
      'Plant and equipment hire',
      'Materials testing and quality verification',
      'Scheduled site deliveries',
    ],
    icon: 'M2 18h13M2 18v-4h8l3-5h4l-2 5h6v4h-2M5 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z',
  },
];

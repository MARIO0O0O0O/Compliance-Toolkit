export interface ChecklistItem {
  id: string;
  text: string;
  subItems?: string[];
  reference?: string;
}

export interface ComplianceChecklist {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  applicability: string;
  employeeThreshold?: number;
  category: string;
  items: ChecklistItem[];
  crossReferences?: string[];
  deadline?: string;
}

export const complianceCategories = [
  { id: 'harassment', name: 'Harassment Prevention', icon: 'Shield' },
  { id: 'safety', name: 'Workplace Safety', icon: 'HardHat' },
  { id: 'wage-hour', name: 'Wage & Hour', icon: 'DollarSign' },
  { id: 'leave', name: 'Leave Administration', icon: 'Calendar' },
  { id: 'hiring', name: 'Hiring & Termination', icon: 'Users' },
  { id: 'records', name: 'Records & Notices', icon: 'FileText' },
  { id: 'benefits', name: 'Benefits', icon: 'Heart' },
  { id: 'reporting', name: 'Reporting', icon: 'BarChart' },
];

export const complianceChecklists: ComplianceChecklist[] = [
  {
    id: 'harassment-prevention',
    title: 'California Harassment Prevention Compliance Checklist (2026)',
    shortTitle: 'Harassment Prevention',
    description: 'SB 1343 compliant harassment prevention training and policy requirements.',
    applicability: '5+ employees for training',
    employeeThreshold: 5,
    category: 'harassment',
    items: [
      {
        id: 'hp-1',
        text: 'Training (SB 1343)',
        subItems: [
          'Supervisors: 2 hours every 2 years',
          'Staff: 1 hour every 2 years',
          'New Hires: Within 6 months',
        ],
      },
      {
        id: 'hp-2',
        text: 'Policy (2 CCR § 11023)',
        subItems: [
          'Written policy distributed to all staff',
          'Bystander intervention training included',
        ],
      },
    ],
    crossReferences: ['Leave: Retaliation prohibited', 'Records: Metadata fields required (SB 513)', 'Violence: Threats can be harassment'],
  },
  {
    id: 'workplace-violence',
    title: 'California Workplace Violence Prevention Plan Checklist (SB 553)',
    shortTitle: 'Workplace Violence Prevention',
    description: 'Required workplace violence prevention plan under SB 553.',
    applicability: 'All employers',
    category: 'safety',
    items: [
      {
        id: 'wv-1',
        text: 'Written Plan Required',
        subItems: [
          'Identify responsible person(s)',
          'Employee involvement procedures',
          'Methods to report concerns',
        ],
      },
      {
        id: 'wv-2',
        text: 'Hazard Assessment',
        subItems: [
          'Identify workplace hazards',
          'Evaluate risk factors',
          'Document findings',
        ],
      },
      {
        id: 'wv-3',
        text: 'Training Requirements',
        subItems: [
          'Initial training for all employees',
          'Annual refresher training',
          'Document all training',
        ],
      },
      {
        id: 'wv-4',
        text: 'Incident Response',
        subItems: [
          'Post-incident response procedures',
          'Investigation protocols',
          'Recordkeeping requirements',
        ],
      },
    ],
    crossReferences: ['Harassment: Threats overlap', 'Safety: Cal/OSHA requirements'],
  },
  {
    id: 'sb294-know-your-rights',
    title: 'California SB 294 Know Your Rights Checklist',
    shortTitle: 'SB 294 Employee Notice',
    description: 'Required employee notices about rights under SB 294.',
    applicability: 'All employers',
    category: 'records',
    deadline: 'By Feb 1',
    items: [
      {
        id: 'sb294-1',
        text: 'Distribute SB 294 Notice to all employees',
      },
      {
        id: 'sb294-2',
        text: 'Include in new hire packets',
      },
      {
        id: 'sb294-3',
        text: 'Post in conspicuous location',
      },
      {
        id: 'sb294-4',
        text: 'Provide in employee\'s primary language',
      },
    ],
  },
  {
    id: 'posting-notices',
    title: 'California Posting Notice Requirements Checklist',
    shortTitle: 'Posting Requirements',
    description: 'Required workplace postings for California employers.',
    applicability: 'All employers',
    category: 'records',
    items: [
      {
        id: 'pn-1',
        text: 'State-Required Postings',
        subItems: [
          'California Minimum Wage',
          'Payday Notice',
          'Safety and Health Protection',
          'Workers\' Compensation',
          'Discrimination and Harassment',
        ],
      },
      {
        id: 'pn-2',
        text: 'Federal Postings',
        subItems: [
          'Federal Minimum Wage (FLSA)',
          'OSHA Safety',
          'FMLA (50+ employees)',
          'EEO Is the Law',
        ],
      },
      {
        id: 'pn-3',
        text: 'Local Ordinances',
        subItems: [
          'Check city/county specific requirements',
          'LA City requirements',
          'SF requirements',
        ],
      },
    ],
  },
  {
    id: 'ab692-stay-or-pay',
    title: 'California AB 692 Stay-Or-Pay Prohibition Checklist',
    shortTitle: 'AB 692 Training Agreements',
    description: 'Audit training repayment agreements under AB 692.',
    applicability: 'All employers with training agreements',
    category: 'hiring',
    deadline: 'By Jan 15',
    items: [
      {
        id: 'ab692-1',
        text: 'Audit all existing "Stay-or-Pay" clauses',
      },
      {
        id: 'ab692-2',
        text: 'Review training repayment agreements',
      },
      {
        id: 'ab692-3',
        text: 'Ensure compliance with AB 692 requirements',
      },
      {
        id: 'ab692-4',
        text: 'Update template agreements',
      },
    ],
  },
  {
    id: 'leave-1-49',
    title: 'California Leave Checklist (1-49 Employees)',
    shortTitle: 'Leave (1-49 Employees)',
    description: 'Leave requirements for small California employers.',
    applicability: '1-49 employees',
    employeeThreshold: 1,
    category: 'leave',
    items: [
      {
        id: 'lv1-1',
        text: 'Paid Sick Leave (PSL)',
        subItems: [
          'Minimum 5 days / 40 hours per year',
          'Accrual or frontload method',
          'Carryover rules',
        ],
      },
      {
        id: 'lv1-2',
        text: 'Pregnancy Disability Leave (PDL)',
        subItems: [
          'Up to 4 months',
          'All employer sizes',
        ],
      },
      {
        id: 'lv1-3',
        text: 'Bereavement Leave',
        subItems: [
          '5 days for death of family member',
          'Unpaid unless policy provides otherwise',
        ],
      },
      {
        id: 'lv1-4',
        text: 'Jury Duty / Witness Leave',
      },
      {
        id: 'lv1-5',
        text: 'Voting Time Off',
      },
    ],
    crossReferences: ['Benefits: SDI/PFL integration', 'Records: Leave tracking requirements'],
  },
  {
    id: 'leave-50-100',
    title: 'California Leave Checklist (50-100 Employees)',
    shortTitle: 'Leave (50-100 Employees)',
    description: 'Additional leave requirements for mid-size employers.',
    applicability: '50-100 employees',
    employeeThreshold: 50,
    category: 'leave',
    items: [
      {
        id: 'lv2-1',
        text: 'All requirements from 1-49 employees',
      },
      {
        id: 'lv2-2',
        text: 'CFRA / FMLA',
        subItems: [
          '12 weeks unpaid job-protected leave',
          'Serious health condition',
          'Care for family member',
          'Baby bonding',
        ],
      },
      {
        id: 'lv2-3',
        text: 'CFRA Designated Person Leave',
      },
      {
        id: 'lv2-4',
        text: 'Organ Donor Leave',
        subItems: [
          '30 days for organ donation',
          '5 days for bone marrow',
        ],
      },
    ],
    crossReferences: ['FMLA: Federal requirements', 'SDI/PFL: Wage replacement'],
  },
  {
    id: 'personnel-records',
    title: 'California Personnel Records Compliance Checklist',
    shortTitle: 'Personnel Records',
    description: 'Personnel file and records retention requirements.',
    applicability: 'All employers',
    category: 'records',
    items: [
      {
        id: 'pr-1',
        text: 'Personnel File Access',
        subItems: [
          'Provide within 30 days of request',
          'Current and former employees',
          'Copies must be provided',
        ],
      },
      {
        id: 'pr-2',
        text: 'Payroll Records Access',
        subItems: [
          'Provide within 21 days of request',
          'Include all required elements',
        ],
      },
      {
        id: 'pr-3',
        text: 'Retention Requirements',
        subItems: [
          'Personnel files: Duration of employment + 3 years',
          'Payroll records: 3 years',
          'I-9 forms: 3 years or 1 year after termination',
        ],
      },
      {
        id: 'pr-4',
        text: 'SB 513 Metadata Requirements',
        subItems: [
          'Harassment complaint tracking',
          'Required metadata fields',
        ],
      },
    ],
  },
  {
    id: 'wage-and-hour',
    title: 'California Wage and Hour Compliance Checklist (2026)',
    shortTitle: 'Wage & Hour',
    description: 'Minimum wage, breaks, and wage statement requirements.',
    applicability: 'All employers',
    category: 'wage-hour',
    deadline: 'By Jan 1',
    items: [
      {
        id: 'wh-1',
        text: 'Minimum Wage',
        subItems: [
          'State: $16.50/hr (verify current rate)',
          'Local: Check LA City/County rates',
          'Exempt Salary: 2x State Min Wage',
        ],
      },
      {
        id: 'wh-2',
        text: 'Meal & Rest Breaks',
        subItems: [
          'Meal: 30 min unpaid before 5th hour',
          'Rest: 10 min paid every 4 hours',
          'Penalty: 1 hour pay for violations',
        ],
      },
      {
        id: 'wh-3',
        text: 'Wage Statements',
        subItems: [
          'Must contain 9 mandatory items',
          'Include sick leave balance',
          'Itemized deductions',
        ],
      },
      {
        id: 'wh-4',
        text: 'Overtime Rules',
        subItems: [
          '1.5x after 8 hours/day or 40 hours/week',
          '2x after 12 hours/day',
          '7th consecutive day rules',
        ],
      },
    ],
  },
  {
    id: 'immigration-i9',
    title: 'California Immigration Compliance Checklist (I-9)',
    shortTitle: 'Immigration (I-9)',
    description: 'I-9 verification and immigration compliance requirements.',
    applicability: 'All employers',
    category: 'hiring',
    items: [
      {
        id: 'i9-1',
        text: 'I-9 Completion Timeline',
        subItems: [
          'Section 1: First day of work',
          'Section 2: Within 3 business days',
        ],
      },
      {
        id: 'i9-2',
        text: 'Document Verification',
        subItems: [
          'Accept any valid List A, or List B + C documents',
          'Do not specify which documents to provide',
          'Do not over-document',
        ],
      },
      {
        id: 'i9-3',
        text: 'Reverification',
        subItems: [
          'When work authorization expires',
          'Do not reverify U.S. citizens or permanent residents',
        ],
      },
      {
        id: 'i9-4',
        text: 'California AB 450',
        subItems: [
          'Restrict ICE workplace access',
          'Notice requirements',
          'Employee rights posting',
        ],
      },
    ],
  },
  {
    id: 'pay-data-transparency',
    title: 'California Pay Data Transparency Checklist (SB 1162)',
    shortTitle: 'Pay Data Reporting',
    description: 'Pay data reporting requirements for large employers.',
    applicability: '100+ employees',
    employeeThreshold: 100,
    category: 'reporting',
    deadline: 'By May 13',
    items: [
      {
        id: 'pd-1',
        text: 'Annual Pay Data Report',
        subItems: [
          'Submit by second Wednesday of May',
          'Include all required data fields',
          'Separate report for labor contractors',
        ],
      },
      {
        id: 'pd-2',
        text: 'Pay Scale Disclosure',
        subItems: [
          'Include in job postings (15+ employees)',
          'Provide to applicants upon request',
          'Provide to current employees',
        ],
      },
      {
        id: 'pd-3',
        text: 'Recordkeeping',
        subItems: [
          'Job titles and wage rate history',
          'Maintain throughout employment + 3 years',
        ],
      },
    ],
  },
  {
    id: 'calosha-safety',
    title: 'California Cal/OSHA Safety Compliance Checklist',
    shortTitle: 'Cal/OSHA Safety',
    description: 'Workplace safety requirements under Cal/OSHA.',
    applicability: 'All employers',
    category: 'safety',
    items: [
      {
        id: 'co-1',
        text: 'Injury & Illness Prevention Program (IIPP)',
        subItems: [
          'Written safety program required',
          'Identify workplace hazards',
          'Training requirements',
          'Recordkeeping',
        ],
      },
      {
        id: 'co-2',
        text: 'OSHA 300 Log',
        subItems: [
          'Record work-related injuries/illnesses',
          'Post annual summary (Feb 1 - Apr 30)',
          'Retain for 5 years',
        ],
      },
      {
        id: 'co-3',
        text: 'Heat Illness Prevention',
        subItems: [
          'Outdoor workers protection',
          'Water, shade, rest requirements',
          'Training on symptoms',
        ],
      },
      {
        id: 'co-4',
        text: 'COVID-19 Prevention (as applicable)',
        subItems: [
          'Follow current Cal/OSHA standards',
          'Outbreak response procedures',
        ],
      },
    ],
    crossReferences: ['Violence Prevention: SB 553', 'Records: Injury logs'],
  },
  {
    id: 'benefits-administration',
    title: 'California Benefits Administration Matrix',
    shortTitle: 'Benefits Administration',
    description: 'State disability, paid family leave, and benefits coordination.',
    applicability: 'All employers',
    category: 'benefits',
    items: [
      {
        id: 'ba-1',
        text: 'State Disability Insurance (SDI)',
        subItems: [
          'Employee-funded through payroll',
          'Coordinate with company disability',
        ],
      },
      {
        id: 'ba-2',
        text: 'Paid Family Leave (PFL)',
        subItems: [
          'Up to 8 weeks wage replacement',
          'Care for family member or baby bonding',
          'Coordinate with CFRA/FMLA',
        ],
      },
      {
        id: 'ba-3',
        text: 'Healthcare Continuation',
        subItems: [
          'Cal-COBRA for small employers',
          'Federal COBRA for 20+ employees',
        ],
      },
      {
        id: 'ba-4',
        text: 'Retirement Plans',
        subItems: [
          'CalSavers mandate (5+ employees)',
          'Auto-enrollment requirements',
        ],
      },
    ],
  },
  {
    id: 'recruitment-hiring',
    title: 'California Recruitment and Hiring Checklist',
    shortTitle: 'Recruitment & Hiring',
    description: 'Compliant hiring practices for California employers.',
    applicability: 'All employers',
    category: 'hiring',
    items: [
      {
        id: 'rh-1',
        text: 'Job Postings',
        subItems: [
          'Include pay scale (15+ employees)',
          'No discriminatory language',
          'Reasonable accommodation statement',
        ],
      },
      {
        id: 'rh-2',
        text: 'Background Checks',
        subItems: [
          'Fair Chance Act compliance',
          'No conviction questions on application',
          'Individualized assessment required',
        ],
      },
      {
        id: 'rh-3',
        text: 'Salary History Ban',
        subItems: [
          'Do not ask about prior salary',
          'Provide pay scale upon request',
        ],
      },
      {
        id: 'rh-4',
        text: 'Drug Testing',
        subItems: [
          'AB 2188: Cannot discriminate based on off-duty cannabis use',
          'Pre-employment testing limitations',
        ],
      },
      {
        id: 'rh-5',
        text: 'New Hire Documents',
        subItems: [
          'I-9 Form',
          'W-4 and DE 4',
          'All required notices',
          'Employee handbook acknowledgment',
        ],
      },
    ],
    crossReferences: ['Pay Transparency: SB 1162', 'Immigration: I-9'],
  },
  {
    id: 'termination-offboarding',
    title: 'California Termination and Offboarding Checklist',
    shortTitle: 'Termination & Offboarding',
    description: 'Compliant termination procedures for California employers.',
    applicability: 'All employers',
    category: 'hiring',
    items: [
      {
        id: 'to-1',
        text: 'Final Pay',
        subItems: [
          'Involuntary: Same day',
          'Voluntary with 72+ hours notice: Last day',
          'Voluntary without notice: Within 72 hours',
        ],
      },
      {
        id: 'to-2',
        text: 'Final Pay Contents',
        subItems: [
          'All wages earned',
          'Accrued vacation/PTO',
          'Expense reimbursements',
        ],
      },
      {
        id: 'to-3',
        text: 'Required Notices',
        subItems: [
          'COBRA/Cal-COBRA notice',
          'EDD unemployment information',
          'Change in relationship notice',
        ],
      },
      {
        id: 'to-4',
        text: 'Documentation',
        subItems: [
          'Document reason for termination',
          'Retain personnel file',
          'Return of company property',
        ],
      },
    ],
    crossReferences: ['Cal-WARN: Mass layoffs', 'Records: Retention requirements'],
  },
  {
    id: 'calwarn-layoff',
    title: 'California Cal-WARN Mass Layoff Checklist',
    shortTitle: 'Cal-WARN (Mass Layoffs)',
    description: 'Notice requirements for mass layoffs and plant closures.',
    applicability: '75+ employees at a covered establishment',
    employeeThreshold: 75,
    category: 'hiring',
    items: [
      {
        id: 'cw-1',
        text: 'Triggering Events',
        subItems: [
          'Mass layoff of 50+ employees',
          'Plant closure',
          'Relocation of 100+ miles',
        ],
      },
      {
        id: 'cw-2',
        text: 'Notice Requirements',
        subItems: [
          '60 days advance written notice',
          'To employees, EDD, and local officials',
          'Specific content requirements',
        ],
      },
      {
        id: 'cw-3',
        text: 'Exceptions',
        subItems: [
          'Unforeseeable business circumstances',
          'Natural disaster',
          'Faltering company (limited)',
        ],
      },
    ],
  },
  {
    id: 'independent-contractor',
    title: 'California Independent Contractor Analysis Checklist',
    shortTitle: 'Independent Contractor (ABC Test)',
    description: 'ABC Test analysis for worker classification.',
    applicability: 'All employers using contractors',
    category: 'hiring',
    items: [
      {
        id: 'ic-1',
        text: 'ABC Test (AB 5)',
        subItems: [
          'A: Free from control and direction',
          'B: Outside usual course of business',
          'C: Engaged in independent trade/business',
        ],
      },
      {
        id: 'ic-2',
        text: 'Documentation Required',
        subItems: [
          'Written contract',
          'Business license/insurance',
          'Evidence of independent business',
        ],
      },
      {
        id: 'ic-3',
        text: 'Exempt Professions',
        subItems: [
          'Check current exemption list',
          'Professional services exemptions',
          'Business-to-business exemption requirements',
        ],
      },
    ],
  },
  {
    id: 'lactation-accommodation',
    title: 'California Lactation Accommodation Checklist',
    shortTitle: 'Lactation Accommodation',
    description: 'Lactation accommodation requirements for California employers.',
    applicability: 'All employers',
    category: 'leave',
    items: [
      {
        id: 'la-1',
        text: 'Lactation Space Requirements',
        subItems: [
          'Not a bathroom',
          'Private and shielded from view',
          'Free from intrusion',
          'Close to work area',
        ],
      },
      {
        id: 'la-2',
        text: 'Amenities Required',
        subItems: [
          'Surface for pump and items',
          'Place to sit',
          'Access to electricity',
          'Access to sink and refrigerator',
        ],
      },
      {
        id: 'la-3',
        text: 'Break Time',
        subItems: [
          'Reasonable break time',
          'May run concurrently with rest breaks',
          'Unpaid if not concurrent',
        ],
      },
      {
        id: 'la-4',
        text: 'Policy Requirements',
        subItems: [
          'Written lactation policy',
          'Distribute to new hires',
          'Include in handbook',
        ],
      },
    ],
  },
  {
    id: 'remote-work-expenses',
    title: 'California Remote Work and Expense Checklist',
    shortTitle: 'Remote Work & Expenses',
    description: 'Expense reimbursement and remote work requirements.',
    applicability: 'All employers with remote workers',
    category: 'wage-hour',
    items: [
      {
        id: 'rw-1',
        text: 'Expense Reimbursement (Labor Code 2802)',
        subItems: [
          'All necessary business expenses',
          'Internet and phone (pro-rated)',
          'Equipment and supplies',
          'Home office furniture (if required)',
        ],
      },
      {
        id: 'rw-2',
        text: 'Remote Work Policy',
        subItems: [
          'Define eligible positions',
          'Work hours and availability',
          'Equipment and expense procedures',
          'Safety requirements at home',
        ],
      },
      {
        id: 'rw-3',
        text: 'Wage & Hour Compliance',
        subItems: [
          'Track hours worked',
          'Meal and rest break compliance',
          'Overtime tracking',
        ],
      },
    ],
  },
];

export function getChecklistsByCategory(category: string): ComplianceChecklist[] {
  return complianceChecklists.filter((c) => c.category === category);
}

export function getChecklistsByEmployeeCount(count: number): ComplianceChecklist[] {
  return complianceChecklists.filter(
    (c) => !c.employeeThreshold || c.employeeThreshold <= count
  );
}

export function getChecklistById(id: string): ComplianceChecklist | undefined {
  return complianceChecklists.find((c) => c.id === id);
}

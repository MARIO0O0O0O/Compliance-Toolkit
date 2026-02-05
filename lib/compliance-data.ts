export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
  category: string;
}

export interface ComplianceChecklist {
  id: string;
  title: string;
  description: string;
  category: string;
  items: ChecklistItem[];
}

export const complianceChecklists: ComplianceChecklist[] = [
  {
    id: 'new-hire-onboarding',
    title: 'New Hire Onboarding',
    description: 'Essential documents and processes for onboarding new employees in California',
    category: 'Onboarding',
    items: [
      { id: 'i9-form', title: 'Form I-9 Employment Eligibility', description: 'Complete within 3 business days of hire', required: true, category: 'Federal' },
      { id: 'w4-form', title: 'Form W-4 Tax Withholding', description: 'Federal tax withholding election', required: true, category: 'Federal' },
      { id: 'de4-form', title: 'Form DE 4 California Withholding', description: 'State tax withholding election', required: true, category: 'State' },
      { id: 'direct-deposit', title: 'Direct Deposit Authorization', description: 'Bank account information for payroll', required: false, category: 'Payroll' },
      { id: 'emergency-contact', title: 'Emergency Contact Form', description: 'Emergency contact information', required: true, category: 'Safety' },
      { id: 'handbook-ack', title: 'Employee Handbook Acknowledgment', description: 'Signed acknowledgment of receipt', required: true, category: 'Policy' },
      { id: 'at-will-ack', title: 'At-Will Employment Acknowledgment', description: 'California at-will employment notice', required: true, category: 'State' },
      { id: 'harassment-training', title: 'Harassment Prevention Training', description: 'Required within 6 months for supervisors, 1 year for employees', required: true, category: 'Training' },
    ],
  },
  {
    id: 'wage-hour-compliance',
    title: 'Wage & Hour Compliance',
    description: 'California wage and hour law requirements for employers',
    category: 'Compensation',
    items: [
      { id: 'min-wage', title: 'Minimum Wage Compliance', description: 'Verify compliance with state and local minimum wage', required: true, category: 'Wages' },
      { id: 'overtime', title: 'Overtime Policy', description: 'Daily and weekly overtime calculations', required: true, category: 'Wages' },
      { id: 'meal-breaks', title: 'Meal Break Policy', description: '30-minute meal break for shifts over 5 hours', required: true, category: 'Breaks' },
      { id: 'rest-breaks', title: 'Rest Break Policy', description: '10-minute rest break per 4 hours worked', required: true, category: 'Breaks' },
      { id: 'pay-stubs', title: 'Itemized Pay Stubs', description: 'All required information on wage statements', required: true, category: 'Documentation' },
      { id: 'final-pay', title: 'Final Pay Procedures', description: 'Immediate payment for termination, 72 hours for resignation', required: true, category: 'Termination' },
    ],
  },
  {
    id: 'workplace-safety',
    title: 'Workplace Safety (Cal/OSHA)',
    description: 'California Occupational Safety and Health requirements',
    category: 'Safety',
    items: [
      { id: 'iipp', title: 'Injury & Illness Prevention Program', description: 'Written IIPP required for all employers', required: true, category: 'Program' },
      { id: 'safety-training', title: 'Safety Training', description: 'Job-specific safety training for all employees', required: true, category: 'Training' },
      { id: 'hazcom', title: 'Hazard Communication Program', description: 'Chemical safety and SDS availability', required: true, category: 'Program' },
      { id: 'emergency-plan', title: 'Emergency Action Plan', description: 'Fire evacuation and emergency procedures', required: true, category: 'Program' },
      { id: 'first-aid', title: 'First Aid Supplies', description: 'Appropriate first aid kit maintained', required: true, category: 'Equipment' },
      { id: 'osha-poster', title: 'Cal/OSHA Poster', description: 'Safety & Health Protection on the Job poster', required: true, category: 'Posting' },
    ],
  },
  {
    id: 'leave-policies',
    title: 'Leave Policies',
    description: 'California-mandated leave requirements for employers',
    category: 'Benefits',
    items: [
      { id: 'sick-leave', title: 'Paid Sick Leave', description: 'Minimum 5 days/40 hours annually', required: true, category: 'Sick Leave' },
      { id: 'cfra', title: 'CFRA Leave Policy', description: 'California Family Rights Act (5+ employees)', required: true, category: 'Family Leave' },
      { id: 'pdl', title: 'Pregnancy Disability Leave', description: 'Up to 4 months for pregnancy-related disability', required: true, category: 'Family Leave' },
      { id: 'kin-care', title: 'Kin Care Policy', description: 'Use sick leave to care for family members', required: true, category: 'Sick Leave' },
      { id: 'bereavement', title: 'Bereavement Leave', description: '5 days for death of family member (5+ employees)', required: true, category: 'Other Leave' },
      { id: 'jury-duty', title: 'Jury Duty Leave', description: 'Time off for jury service', required: true, category: 'Other Leave' },
      { id: 'voting', title: 'Voting Time Off', description: 'Up to 2 hours for voting if insufficient time outside work', required: true, category: 'Other Leave' },
    ],
  },
  {
    id: 'anti-discrimination',
    title: 'Anti-Discrimination & Harassment',
    description: 'FEHA compliance and harassment prevention requirements',
    category: 'Compliance',
    items: [
      { id: 'feha-policy', title: 'FEHA Compliance Policy', description: 'Written anti-discrimination and harassment policy', required: true, category: 'Policy' },
      { id: 'harassment-training-sup', title: 'Supervisor Harassment Training', description: '2 hours every 2 years for supervisors', required: true, category: 'Training' },
      { id: 'harassment-training-emp', title: 'Employee Harassment Training', description: '1 hour every 2 years for non-supervisors (5+ employees)', required: true, category: 'Training' },
      { id: 'complaint-procedure', title: 'Complaint Procedure', description: 'Process for reporting discrimination/harassment', required: true, category: 'Policy' },
      { id: 'dfeh-poster', title: 'DFEH Poster', description: 'California Law Prohibits Workplace Discrimination poster', required: true, category: 'Posting' },
      { id: 'reasonable-accommodation', title: 'Reasonable Accommodation Process', description: 'Interactive process for disability accommodations', required: true, category: 'Policy' },
    ],
  },
  {
    id: 'required-postings',
    title: 'Required Workplace Postings',
    description: 'Mandatory federal and California workplace posters',
    category: 'Compliance',
    items: [
      { id: 'min-wage-poster', title: 'Minimum Wage Poster', description: 'Federal and California minimum wage notices', required: true, category: 'Wage' },
      { id: 'payday-notice', title: 'Payday Notice', description: 'Regular paydays and time/place of payment', required: true, category: 'Wage' },
      { id: 'workers-comp', title: 'Workers Compensation Notice', description: 'Notice to Employees poster', required: true, category: 'Safety' },
      { id: 'whistleblower', title: 'Whistleblower Protections', description: 'Whistleblowers are Protected poster', required: true, category: 'Rights' },
      { id: 'transgender-rights', title: 'Transgender Rights', description: 'Transgender Rights in the Workplace poster', required: true, category: 'Rights' },
      { id: 'family-leave', title: 'Family Leave Notice', description: 'CFRA and FMLA notices', required: true, category: 'Leave' },
      { id: 'edd-notices', title: 'EDD Notices', description: 'Unemployment, disability, and paid family leave notices', required: true, category: 'Benefits' },
    ],
  },
  {
    id: 'employee-classification',
    title: 'Employee Classification',
    description: 'Proper classification of workers under California law',
    category: 'Compliance',
    items: [
      { id: 'abc-test', title: 'ABC Test Compliance', description: 'Verify independent contractor classification under AB5', required: true, category: 'Classification' },
      { id: 'exempt-status', title: 'Exempt Employee Criteria', description: 'Salary and duties tests for exemptions', required: true, category: 'Classification' },
      { id: 'non-exempt', title: 'Non-Exempt Documentation', description: 'Time tracking and overtime eligibility', required: true, category: 'Classification' },
      { id: 'job-descriptions', title: 'Job Descriptions', description: 'Written job descriptions supporting classification', required: true, category: 'Documentation' },
      { id: 'contractor-agreements', title: 'Contractor Agreements', description: 'Written agreements for independent contractors', required: true, category: 'Documentation' },
    ],
  },
  {
    id: 'personnel-files',
    title: 'Personnel Files & Records',
    description: 'California requirements for employee records',
    category: 'Documentation',
    items: [
      { id: 'personnel-file', title: 'Personnel File Maintenance', description: 'Organized employee records', required: true, category: 'Records' },
      { id: 'access-rights', title: 'Employee Access Rights', description: 'Allow inspection within 30 days of request', required: true, category: 'Rights' },
      { id: 'payroll-records', title: 'Payroll Records Retention', description: 'Maintain for 4 years', required: true, category: 'Retention' },
      { id: 'i9-retention', title: 'I-9 Retention', description: '3 years from hire or 1 year after termination', required: true, category: 'Retention' },
      { id: 'medical-separation', title: 'Medical Records Separation', description: 'Keep medical information separate from personnel file', required: true, category: 'Privacy' },
    ],
  },
  {
    id: 'termination-procedures',
    title: 'Termination Procedures',
    description: 'Legal requirements for employee separations in California',
    category: 'Termination',
    items: [
      { id: 'final-pay-timing', title: 'Final Pay Timing', description: 'Immediate for termination, 72 hours for quit', required: true, category: 'Pay' },
      { id: 'vacation-payout', title: 'Vacation Payout', description: 'All accrued vacation paid at separation', required: true, category: 'Pay' },
      { id: 'cobra-notice', title: 'COBRA/Cal-COBRA Notice', description: 'Health insurance continuation notice', required: true, category: 'Benefits' },
      { id: 'edd-form', title: 'EDD Pamphlets', description: 'Provide unemployment and disability information', required: true, category: 'Benefits' },
      { id: 'hipp-notice', title: 'HIPP Notice', description: 'Health Insurance Premium Payment program notice', required: true, category: 'Benefits' },
      { id: 'exit-interview', title: 'Exit Interview', description: 'Document separation circumstances', required: false, category: 'Documentation' },
    ],
  },
  {
    id: 'privacy-compliance',
    title: 'Privacy & Data Protection',
    description: 'California privacy requirements for employee data',
    category: 'Privacy',
    items: [
      { id: 'ccpa-notice', title: 'CCPA Employee Notice', description: 'Privacy notice for employee personal information', required: true, category: 'Notice' },
      { id: 'social-media', title: 'Social Media Privacy', description: 'Policy prohibiting password requests', required: true, category: 'Policy' },
      { id: 'monitoring-notice', title: 'Electronic Monitoring Notice', description: 'Notify employees of workplace monitoring', required: true, category: 'Notice' },
      { id: 'data-security', title: 'Data Security Measures', description: 'Reasonable security for personal information', required: true, category: 'Security' },
      { id: 'breach-procedures', title: 'Data Breach Procedures', description: 'Notification requirements for security breaches', required: true, category: 'Security' },
    ],
  },
  {
    id: 'workers-compensation',
    title: 'Workers Compensation',
    description: 'California workers compensation requirements',
    category: 'Insurance',
    items: [
      { id: 'wc-coverage', title: 'Workers Comp Insurance', description: 'Maintain required coverage', required: true, category: 'Insurance' },
      { id: 'claim-form', title: 'DWC-1 Claim Form', description: 'Provide within 1 working day of injury report', required: true, category: 'Claims' },
      { id: 'posting', title: 'Workers Comp Poster', description: 'Notice to Employees posting', required: true, category: 'Posting' },
      { id: 'mpn', title: 'Medical Provider Network', description: 'Provide MPN information to employees', required: true, category: 'Medical' },
      { id: 'return-to-work', title: 'Return to Work Program', description: 'Modified duty and accommodation process', required: false, category: 'Policy' },
    ],
  },
  {
    id: 'payroll-taxes',
    title: 'Payroll Taxes & Reporting',
    description: 'California payroll tax obligations',
    category: 'Taxes',
    items: [
      { id: 'edd-registration', title: 'EDD Registration', description: 'Register with Employment Development Department', required: true, category: 'Registration' },
      { id: 'de9', title: 'Quarterly Tax Returns', description: 'DE 9 and DE 9C filings', required: true, category: 'Filing' },
      { id: 'sdi-sui', title: 'SDI/SUI Contributions', description: 'State disability and unemployment insurance', required: true, category: 'Withholding' },
      { id: 'pit', title: 'Personal Income Tax', description: 'California PIT withholding', required: true, category: 'Withholding' },
      { id: 'new-hire-report', title: 'New Hire Reporting', description: 'Report within 20 days of hire', required: true, category: 'Reporting' },
    ],
  },
  {
    id: 'pay-transparency',
    title: 'Pay Transparency (SB 1162)',
    description: 'California pay transparency and pay data reporting requirements',
    category: 'Compliance',
    items: [
      { id: 'pay-scale-posting', title: 'Pay Scale in Job Postings', description: 'Include salary range in all job postings', required: true, category: 'Hiring' },
      { id: 'pay-scale-request', title: 'Pay Scale Upon Request', description: 'Provide pay scale to employees and applicants', required: true, category: 'Disclosure' },
      { id: 'pay-data-report', title: 'Pay Data Report', description: 'Annual report for 100+ employees', required: true, category: 'Reporting' },
      { id: 'record-keeping', title: 'Job Title & Wage Records', description: 'Maintain records for duration of employment + 3 years', required: true, category: 'Records' },
    ],
  },
  {
    id: 'cannabis-accommodation',
    title: 'Cannabis Use Protections',
    description: 'AB 2188 off-duty cannabis use protections',
    category: 'Policy',
    items: [
      { id: 'policy-update', title: 'Drug Policy Update', description: 'Update policies to comply with AB 2188', required: true, category: 'Policy' },
      { id: 'testing-review', title: 'Drug Testing Review', description: 'Review testing for off-duty cannabis compliance', required: true, category: 'Testing' },
      { id: 'hiring-practices', title: 'Hiring Practices', description: 'Cannot discriminate based on off-duty cannabis use', required: true, category: 'Hiring' },
      { id: 'exceptions', title: 'Document Exceptions', description: 'Federal contractors and safety-sensitive positions', required: false, category: 'Documentation' },
    ],
  },
  {
    id: 'fast-food-council',
    title: 'Fast Food Council Compliance',
    description: 'AB 1228 Fast Food Council requirements (if applicable)',
    category: 'Industry-Specific',
    items: [
      { id: 'min-wage-ff', title: 'Fast Food Minimum Wage', description: '$20/hour minimum for covered employers', required: true, category: 'Wages' },
      { id: 'covered-employer', title: 'Covered Employer Analysis', description: 'Determine if employer is covered (60+ locations)', required: true, category: 'Classification' },
      { id: 'council-updates', title: 'Monitor Council Updates', description: 'Stay current on Fast Food Council regulations', required: true, category: 'Compliance' },
    ],
  },
  {
    id: 'reproductive-rights',
    title: 'Reproductive Rights Protections',
    description: 'SB 523 reproductive health decision-making protections',
    category: 'Policy',
    items: [
      { id: 'repro-policy-update', title: 'Update Anti-Discrimination Policy', description: 'Include reproductive health decision-making', required: true, category: 'Policy' },
      { id: 'repro-training-update', title: 'Update Training Materials', description: 'Include reproductive rights in harassment training', required: true, category: 'Training' },
      { id: 'repro-accommodation-process', title: 'Accommodation Process', description: 'Process for reproductive health accommodations', required: true, category: 'Accommodation' },
    ],
  },
  {
    id: 'covid-compliance',
    title: 'COVID-19 Compliance',
    description: 'Ongoing COVID-19 workplace requirements',
    category: 'Safety',
    items: [
      { id: 'exposure-notification', title: 'Exposure Notification', description: 'Notify employees of COVID-19 exposure', required: true, category: 'Safety' },
      { id: 'testing-policy', title: 'Testing Policy', description: 'COVID testing requirements if applicable', required: false, category: 'Policy' },
      { id: 'covid-sick-leave', title: 'COVID Sick Leave', description: 'Provide required COVID-related sick leave', required: true, category: 'Leave' },
      { id: 'covid-record-keeping', title: 'COVID Record Keeping', description: 'Maintain required exposure records', required: true, category: 'Records' },
    ],
  },
  {
    id: 'climate-preparedness',
    title: 'Climate Hazard Preparedness',
    description: 'Heat illness and wildfire smoke protections',
    category: 'Safety',
    items: [
      { id: 'heat-illness', title: 'Heat Illness Prevention', description: 'Written program for outdoor work', required: true, category: 'Program' },
      { id: 'water-shade', title: 'Water and Shade', description: 'Provide water, shade, and rest breaks', required: true, category: 'Equipment' },
      { id: 'wildfire-smoke', title: 'Wildfire Smoke Protection', description: 'AQI monitoring and N95 respirators', required: true, category: 'Safety' },
      { id: 'climate-training', title: 'Heat and Smoke Training', description: 'Train employees on hazard recognition', required: true, category: 'Training' },
    ],
  },
  {
    id: 'workplace-violence',
    title: 'Workplace Violence Prevention',
    description: 'SB 553 workplace violence prevention requirements',
    category: 'Safety',
    items: [
      { id: 'wvpp', title: 'Violence Prevention Plan', description: 'Written workplace violence prevention plan', required: true, category: 'Program' },
      { id: 'violence-training', title: 'Violence Prevention Training', description: 'Train employees on prevention and response', required: true, category: 'Training' },
      { id: 'incident-log', title: 'Violent Incident Log', description: 'Maintain log of workplace violence incidents', required: true, category: 'Records' },
      { id: 'hazard-assessment', title: 'Hazard Assessment', description: 'Assess workplace violence risks', required: true, category: 'Assessment' },
    ],
  },
  {
    id: 'freelance-worker',
    title: 'Freelance Worker Protections',
    description: 'SB 988 Freelance Worker Protection Act (effective 2025)',
    category: 'Compliance',
    items: [
      { id: 'written-contract', title: 'Written Contract', description: 'Written agreement for services $250+', required: true, category: 'Contract' },
      { id: 'payment-terms', title: 'Payment Terms', description: 'Pay within 30 days or per contract', required: true, category: 'Payment' },
      { id: 'freelance-record-keeping', title: 'Contract Records', description: 'Retain contracts for 4 years', required: true, category: 'Records' },
      { id: 'no-retaliation', title: 'Anti-Retaliation', description: 'No retaliation for exercising rights', required: true, category: 'Policy' },
    ],
  },
];

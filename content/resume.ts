export type ResumeEntry = {
  title: string;
  subtitle?: string;
  period?: string;
  details?: string[];
};

export type ResumeSection = {
  heading: string;
  entries: ResumeEntry[];
};

export const resumeSections: ResumeSection[] = [
  {
    heading: "Education",
    entries: [
      {
        title: "MIT Sloan School of Management",
        subtitle: "Master of Business Analytics (MBAn)",
        period: "Expected 2027",
        details: [
          "Relevant coursework: applied deep learning, analytics lab",
          "Activities: figure skating, healthcare club, sundai club",
        ],
      },
      {
        title: "Princeton University",
        subtitle: "B.S.E. Summa Cum Laude in Operations Research and Financial Engineering (ORFE) with French Minor",
        period: "2026",
        details: [
          "Relevant coursework: probability, optimization, statistical learning, networks, optimal control",
          "Activities: figure skating, skating volunteering project leader, math course assistant, friends of doctors without borders president",
        ],
      },
    ],
  },
  {
    heading: "Experience",
    entries: [
      {
        title: "Senior Thesis",
        subtitle: "ORFE Department",
        period: "May 2025 – April 2026",
        details: [
          "Developed software to optimize CT scanning regimens using decision-focused learning and neural networks",
          "Advised by Prof. Bartolomeo Stellato (Princeton University) and Prof. Agni Orfanoudaki (Oxford Saïd Business School)",
        ],
      },
      {
        title: "Summer Research Intern",
        subtitle: "l'Institut Pasteur",
        period: "Summer 2024",
        details: [
          "Conducted wet lab and computational research on Listeria monocytogenes",
          "Advised by Prof. Marc Lecuit, MD (Université Paris Cité)",
        ],
      },
    ],
  },
  {
    heading: "Skills",
    entries: [
      {
        title: "Technical",
        details: [
          "Languages: Python, Java, SQL",
          "Tools: PyTorch, pandas, Gurobi",
          "Methods: regression, data analysis, optimization",
        ],
      },
      {
        title: "Other",
        details: [
          "French",
          "Teaching",
          "Figure Skating",
        ],
      },
    ],
  },
];

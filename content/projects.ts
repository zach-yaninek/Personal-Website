export type Project = {
  title: string;
  category: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Healthcare Analytics Pipeline",
    category: "Data Science",
    description:
      "End-to-end pipeline for cleaning, modeling, and visualizing clinical datasets with reproducible workflows using MIMIC-IV.",
    href: "#",
    linkLabel: "In development",
  },
  {
    title: "Research Tracker",
    category: "Software Development",
    description:
      "Created a local web app to stay up to date on publications within subject areas and from specific researchers.",
    href: "https://github.com/zach-yaninek/Research-Tracker",
    linkLabel: "read more →",
  },
  {
    title: "Portfolio Manager",
    category: "Financial Engineering",
    description:
      "Developed a regime-aware quantitative portfolio management application using statistical jump models, XBoost regime predictors, and Sharpe ratio optimization.",
    href: "https://github.com/zach-yaninek/Portfolio-Manager",
    linkLabel: "read more →",
  },
  {
    title: "Senior Thesis",
    category: "Operations Research",
    description:
      "Combined decision-focused learning with rolling horizon optimization to create a CT scanning regimen planning simulator.",
    href: "https://github.com/zach-yaninek/Senior-Thesis",
    linkLabel: "read more →",
  },
  {
    title: "ORFE Co-Author Network",
    category: "Network Science",
    description:
      "Mapped the Princeton ORFE Department's co-authorship network using a three-layer BFS web scraping. Researchers were organized by their subject areas and application domains of interest using zero-shot text classification.",
      href: "https://github.com/zach-yaninek/ORFE-Network-Project",
    linkLabel: "read more →",
  },
];

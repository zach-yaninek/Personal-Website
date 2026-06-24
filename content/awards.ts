export type Award = {
  title: string;
  date: string;
  description?: string;
};

export const awards: Award[] = [
  {
    title: "Phi Beta Kappa",
    date: "May 2026",
    description: "Top 10% of Princeton University's graduating class.",
  },
  {
    title: "Sigma Xi",
    date: "May 2026",
    description: "Nominated by Princeton ORFE for senior thesis research.",
  },
  {
    title: "Kenneth H. Condit Prize",
    date: "May 2026",
    description: "Awarded to ORFE senior who demonstrated leadership through academic achievement and community service",
  },
  {
    title: "Fulbright France Grant Recipient (Declined)",
    date: "April 2026",
    description: "Recevied funding for Master's degree in France. Declined in favor of MIT Sloan Master of Business Analytics.",
  },
  {
    title: "Tau Beta Pi",
    date: "October 2024",
    description: "Top eighth percentile of engineering students at Princeton University.",
  },
    {
    title: "ORFE Summer Research Grant from the Vijay Kumar Gupta Fund",
    date: "March 2024",
    description: "Received funding to support research on Listeria monocytogenes at l'Institut Pasteur in Paris, France.",
  },
  {
    title: "United States Figure Skating Association National Development Team",
    date: "May 2019 - May 2022 ",
    description: "Nationally competitive figure skater for the United States to be considered for international competitions.",
  },
];

export type BlogBlock = {
  type: "paragraph";
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-orfe",
    title: "What is ORFE?",
    date: "2026-08-01",
    excerpt:
      "My answer to a question I'm frequently asked",
    tags: ["operations research", "learning", "impact"],
    body: [
      {
        type: "paragraph",
        text:
          "This is a question I’ve faced since my acceptance to Princeton. When I initially saw \“Operations Research and Financial Engineering\” listed as a potential major, I had no idea what that meant. The same was true for my parents and (almost) anyone who’s since asked me, \“What’s your major?\” Even within Princeton, few who haven’t taken classes in the department know what ORFE students do. Nonetheless, ORFE holds this mystique of prestige centered around its mathematical rigor, earning potential, and classmates who are allegedly plotting to take over the world (and perhaps optimize it as they do).",
      },
      {
        type: "paragraph",
        text:
          "This consistent need to explain myself and my chosen major has elicited much introspection on the subject and several efforts to distill and coalesce my thoughts in the hopes that it would offer some clarity. Indeed, this topic was my motivation for my ORFE Network project. There, I sought to explore \“What is ORFE?\” by analogy. Effectively, my answer was \“ORFE is like –– because these faculty collaborate on research in ––.\” Now, with this post, I’ll endeavor to answer it in a slightly more principled way.",
      },
      {
        type: "paragraph",
        text:
          "I’ll offer my short and long-winded versions of my response in turn. If someone doesn’t know me too well or I figure they’d rather a brief answer, I tell them, \“I major in applied math and statistics,\” or, \“It’s kind of like applied math mixed with computer and data science.\” That generally prompts a nod or further discussion, likely depending on the person’s intent and degree of expertise in the subjects I mention. Sometimes, I’ll continue with \“it applies math and AI to finance, often related to trading or portfolio management. But the skills you learn can translate to virtually any field.\” While this approach lacks some specificity, I’ve learned that it works fairly well. Most people exit the conversation with at least a vague understanding of what ORFE is.",
      },
      {
        type: "paragraph",
        text:
          "However, if the situation calls for it, I’ll provide my long-form answer. I’ll usually proceed as follows: \“ORFE positions itself as a ‘contemporary liberal education.’ It’s contemporary because it’s grounded in STEM, data, and technology. In fact, the department’s corresponding minor program is called ‘Optimization and Quantitative Decision Science.’ The major is ‘liberal’ in the sense that, although the program dedicates most of its application to finance, the knowledge you gain on how to approach data-driven decision making is applicable to almost anything.\” I then say, \“I think this is best explained by discussing ORFE’s core classes and how they fit together to form a complete picture of a quantitative decision framework. Most students start with the department’s ‘Fundamentals of Statistics’ class. This serves as your first introduction to how data can be used to make precise mathematical predictions about the world. Then, you take ‘Probability and Stochastic Processes,’ which teaches you how to rigorously understand and quantify uncertainty – a property inherent to almost all real-world systems. Next, you typically take ‘Optimization’ and ‘Introduction to Financial Mathematics.’ At last, you can appreciate the major’s impact potential. In ‘Optimization,’ you now transition from data to decisions via mathematical modeling while previewing various application domains. Then, in ‘Introduction to Financial Mathematics,’ you get a more detailed view of how the knowledge developed in the department’s core classes informs financial decision making. Finally, after completing those classes, the ORFE major becomes extremely flexible, and you’re free to choose elective classes from various fields, most commonly economics, energy, or pre-med while deepening your expertise in ORFE’s various subdomains, primarily optimization, machine learning, and quantitative finance. In this way, ORFE provides a strong technical foundation with the freedom to apply it to whatever interests you.\”",
      },
      {
        type: "paragraph",
        text:
          "This naturally begs the question: \“So what was ORFE like for you?\” And my response is that, throughout my time at Princeton, I was consistently driven to find solutions to healthcare’s clinical and operational challenges. Consequently, I sought to understand both the personal and technical sides of the problem. My pre-med studies, volunteer work, and other extracurriculars provided first-hand exposure to those affected by these issues: patients, clinicians, and administrators. In tandem, I developed the technical knowledge necessary to begin addressing them in a disciplined, quantitative fashion using data-driven optimization, machine learning, and AI. I then began to apply that knowledge with my senior thesis. Now, I believe my capabilities will continue compounding throughout my year in MIT’s Master of Business Analytics (MBAn) program. I’m especially excited by the hands-on experience offered by the program’s Analytics Lab and Capstone Project opportunities and the Operations Research Center’s research assistantship. The former will develop my ability to translate stakeholder problems into real-world analytics solutions, and the latter will position me to work at the cutting edge of healthcare analytics research with distinguished faculty such as Dimitris Bertsimas. Together, I’ll be even better equipped to scale these technologies and affect positive change on the healthcare system.",
      },
      {
        type: "paragraph",
        text:
          "ORFE professor Alain Kornhauser once told my classmates and me during ORFE’s introductory event for first-year students that there’s an advantage to the fact that \“people haven’t heard of ORFE before.\” It’s an opportunity for us to explain it to them in a way that fits each person’s needs and understanding and our communication goals. Inspired by that, I will continue to hone my ability to \“sell ORFE\” and what I view as its unique strengths to those in healthcare and beyond.",
      },
    ],
  },
  {
    slug: "knowledge-and-its-applications",
    title: "Knowledge and Its Applications",
    date: "2026-06-19",
    excerpt:
      "A short discussion of knowledge's relationship with \"the real world.\"",
    tags: ["learning", "life", "personal philosophy"],
    body: [
      {
        type: "paragraph",
        text:
          "When I think about mathematics (or knowledge more generally) and its relation to everyday life, my mind frequently centers on Raphael's *The School of Athens*. I distinctly recall contemplating this image during my first semester at Princeton. At the time, I was really enjoying the intellectual rigor of my first math class and knew I wanted to eventually make that the focus of my studies. One decision remained, given that I had to declare my major before the end of the spring semester (if I chose an engineering degree). Should I pursue pure mathematics or (the rather unique major) Operations Research and Financial Engineering (ORFE)?",
      },
      {
        type: "paragraph",
        text:
          "Having only taken classes in the Math Department up to that point, I felt as though I had a better understanding of what specializing in that subject would entail. And my understanding of that, combined with my positive experiences with the Department, appealed to me. Indeed, as I mentioned earlier, the idea of pursuing irrefutable logical truths (subject to axiomatic assumptions) felt noble and aesthetically satisfying in much the same way that I've been drawn to Plato's Realm of the Forms. Naturally, I'm not the first to note this parallel between mathematics and philosophy. In the *Republic*, Plato does so himself. And, even today, some scholars assert that most mathematicians are Platonists (at least to some extent). Likewise, I've appreciated the beauty in things that, once proven, are true forever and whose presence can be found in a variety of contexts one would never expect (e.g., complex numbers).",
      },
      {
        type: "paragraph",
        text:
          "However, it's at this point that I considered the other principal subject of *The School of Athens.* While Plato points upward towards the Realm of the Forms, Aristotle redirects his attention back to \"the real world.\" Similarly, I stopped to think about my ultimate goal for myself and how my education should align with that. I knew I wanted to combine my love for mathematics and technology with medicine to improve healthcare at scale, but I wasn't yet sure how I'd do that. Still, I figured the best way to discover that was to study something that was simultaneously quantitative and technologically fluent while also being broad in scope and potential applications. My premonition, despite not having taken any departmentals up to then, was that ORFE was exactly that.",
      },
      {
        type: "paragraph",
        text:
          "I couldn't be happier with my decision. Although I hope to eventually take some pure math classes, I know ORFE, with the deep fundamental knowledge of probability, statistics, and optimization it's given me, has uniquely prepared me to address the various challenges facing the healthcare system. Furthermore, it has helped me better understand myself. I do enjoy mathematics for its own sake, but I've also realized that I'm most excited to see the theory realized in practice, whether that be in finance, healthcare, or otherwise. In other words, there is beauty in truth itself, yet even more so when its impact is visible in something of *this* world. Perhaps I'm an Aristotelean after all.",
      },
    ],
  },
  {
    slug: "travel-changes-you",
    title: "Travel Changes You",
    date: "2026-06-16",
    excerpt:
      "How experiences abroad have influenced my sense of personal responsibility, confidence, and ability to communicate.",
    tags: ["travel", "life", "personal philosophy"],
    body: [
      {
        type: "paragraph",
        text:
          "I love to tell people about my experiences studying, working, and living abroad in France. I'm very fortunate to have had the opportunity to spend the past three summers in three (very unique) regions of the country. Yet, I'd argue that those experiences have done much more for me in addition to the self-evident linguistic and cultural immersion they've offered.",
      },
      {
        type: "paragraph",
        text:
          "In my first summer, I undertook a Princeton-sponsored course and internship in Aix-en-Provence. While I was there, my classmates and I explored Provence and the Riviera through both guided trips and excursions we planned ourselves. Highlights included the very picturesque Avignon, Arles, St. Tropez, Nice, and Monaco. Furthermore, staying with host families encouraged our integration into the language and local life. Overall, this was my first time in Europe and solo traveling, which I'll futher reflect upon below."
      },
      {
        type: "paragraph",
        text:
          "The following summer, I completed a research internship at the Pasteur Institute in Paris. I lived alone in an Airbnb in the 14th Arrondissement (though my favorite place to spend time soon became the 6th). Spending that summer in the City of Light was incredibly rewarding; although, I, like many true Parisians, did eventually love to hate how crowded the Metro becomes during Rush Hour. Nonetheless, as I integrated into this new environment over time, I observed how a once-unfamiliar place became my temporary home. I formed small friendships with co-workers, shopkeepers, and restaurant staff I saw repeatedly. I was no longer a total stranger. Yet, while wondering through the streets I no longer needed Google Maps to navigate, I was still aware of the unique degree of anonymity I possessed and the responsibility to look after myself that it entailed.",
      },
      {
        type: "paragraph",
        text:
          "At that point, my friends at Princeton and elsewhere already saw me as \"the guy who manages to spend his summers in France\". And although I didn't originally plan to go back a third time, that's what I ultimately did to fulfill the requirements of my language minor. This time, I enrolled in a newly-created Princeton-led study abroad program to the French Basque region. Importantly, the course emphasized an exchange component with students at the university in Bayonne. We also interacted with several NGOs from the area and frequently spoke with locals about their experiences in this uniquely multilingual area of France. That's not to say that we didn't also take advantage of the area's natural beauty as well, which includes the Atlantic Ocean and the lush green foothills of the Pyrenees. My personal favorite was a sunrise hike to the top of La Rhune.",
      },
      {
        type: "paragraph",
        text:
          "I frequently reflect on what I've learned from all these experiences. I think, beyond the cultural enrichment and ability to speak a foreign language, traveling and living abroad have transformed my sense of personal responsibility and how I interact with others. Before my time in France, I was a bit shy and not always inclined to speak to people I didn't know. That wasn't an option as a solo traveler, though. The consequences of not speaking up (even in a foreign language) and asking people for help far outweighed the social discomfort I might've experienced. For example, imagine not asking someone the direction a train is going. At best, you avoid the interaction and arrive at your destination. However, in the worst case, you travel across Europe in the wrong direction (which I've heard people say has happened to them before). More generally, if things go wrong while abroad, the onus falls on you to solve the problem. At the same time, it's also worth noting that the anonymity I had acted as a sort of buffer against my shyness. If things got awkward, I found solace in the reality that they had no idea who I was and was unlikely to ever see them again. Situations like these forced me out of my comfort zone frequently enough that I became confident that I could take care of myself (and others when family visited) and talk to practically anyone (and doing so in English was as if it was in Easy Mode).",
      },
      {
        type: "paragraph",
        text:
          "I'm writing about these ideas because I believe these insights and self-growth have and will continue to serve me well in the future. As I connect and communicate with various stakeholders on my journey to leverage machine learning, AI, and optimization to significantly impact healthcare, I'll need to employ the communication skills I've honed (and will continue to improve) to understand the complex interaction of technical capability, trust, workflow integration, and incentive alignment that are at the heart of the sector's inherent challenges. For, if you don't, you're likely to fall short of building something people want. Ultimately, I understand that it'll be my job to use conversation as a tool to empathetically unearth the nuances of the problems I intend to solve.",
      },
    ],
  },
  {
    slug: "skating-as-a-sport-for-life",
    title: "Skating As A Sport for Life",
    date: "2026-06-08",
    excerpt:
      "A reflection on how skating has shaped me.",
    tags: ["skating", "life", "personal philosophy"],
    body: [
      {
        type: "paragraph",
        text:
          "As the music stops, the steel blades of my figure skates glide across the ice as I enter my final pose. The spotlight settles on me. A crowd of Princeton students applauds. I skate to center ice, bow, and wave to friends and classmates as I leave the ice. After the skating show, several spectators, many previously unaware of the life I led before Princeton, compliment my performance and ask me about my skating background.",
      },
      {
        type: "paragraph",
        text:
          "Prior to attending Princeton University, I was an international-level competitive figure skater. I competed at U.S. Nationals three times at various age groups: twice in the singles discipline and once in pairs, where my partner and I won a silver medal. Of course, this success wasn't without effort. During the peak of the competitive season, I'd skate twice a day: in the morning before school and again in the afternoon. I'd travel from Hershey, PA to Northern Virginia twice a week for lessons on jump technique while doing homework in the car. After taking a gap year in 2021 to focus on skating, I matriculated to Princeton and quickly realized that being a student was a full-time job. I consequently decided that I would step away from competition and focus on my studies. Nonetheless, I didn't entirely let go of figure skating or the lessons I've learned from it. Rather, it's continued to shape me both on and off the ice.",
      },
      {
        type: "paragraph",
        text:
          "At the end of each semester, I performed in the Princeton University Skating Club's ice show. Practicing for these always drew me back onto the ice to sharpen the skills I'd put on hold throughout the earlier parts of the semester. Returning to the ice felt like a chance to briefly return to a previous life \u2014 one frozen in time. Additionally, the shows provided a welcome opportunity for me to showcase a different side of myself (one that synergizes artistry with athleticism) for my classmates, teachers, and colleagues.",
      },
      {
        type: "paragraph",
        text:
          "My time on the ice wasn't limited to just these performances, however. I also led a successful revitalization of Princeton's Special Olympics Skating Program. Princeton's previous program was discontinued during the COVID-19 pandemic. Reestablishing it required nearly a year of work alongside New Jersey's Special Olympics governing body and the Princeton administration, figure skating club, and varsity ice hockey teams. Now, the program has ten volunteer coaches who teach about fifteen athletes every Sunday morning at Princeton's Baker Rink. Despite the difficulties, the project has had a direct, demonstrable impact that I've found fulfilling and validating of my ability to enact real-world change.",
      },
      {
        type: "paragraph",
        text:
          "Even when I wasn't preparing for a performance or leading volunteer efforts, skating's influence on me remained. Despite my transition from athlete to student, my thought process, discipline, and tenacity remained. I approached any new class, concept, or skill the same way I would a new jump or spin: persistent practice coupled with the incorporation of constructive, actionable feedback. I prepared for exams the same way I would for any other competition or performance. And when I fell short of goals, I got up, analyzed how I could improve, and worked to implement any such revisions to my approach.",
      },
      {
        type: "paragraph",
        text:
          "As I see it, these are the skills one must hone to achieve any goal, whether that be going to the Olympics, acing a class, or building something that matters. Now transitioning into the next stage of my life at MIT Sloan, I've resolved to continue bringing my lessons from figure skating into everything I do.",
      },
    ],
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

import { Course } from "@shared/schema";

export const staticCourses: Course[] = [
  {
    id: 1,
    title: "Advanced Mathematics",
    category: "Mathematics",
    description: "A comprehensive program covering algebra, geometry, calculus, and statistics to develop strong analytical skills.",
    hoursPerWeek: 5,
    grades: "Grades 10-12",
    icon: "calculator"
  },
  {
    id: 2,
    title: "Biology & Life Sciences",
    category: "Science",
    description: "Explore the living world through laboratory experiments, field studies, and theoretical concepts in modern biology.",
    hoursPerWeek: 6,
    grades: "Grades 9-12",
    icon: "flask"
  },
  {
    id: 3,
    title: "Physics & Chemistry",
    category: "Science",
    description: "Develop understanding of fundamental physical and chemical principles through theory and practical experiments.",
    hoursPerWeek: 6,
    grades: "Grades 9-12",
    icon: "atom"
  },
  {
    id: 4,
    title: "English Language & Literature",
    category: "Languages",
    description: "Develop strong communication skills, critical thinking, and appreciation for diverse literary works.",
    hoursPerWeek: 5,
    grades: "All Grades",
    icon: "book"
  },
  {
    id: 5,
    title: "History & Geography",
    category: "Humanities",
    description: "Gain insights into our past and present world through historical analysis and geographical understanding.",
    hoursPerWeek: 4,
    grades: "All Grades",
    icon: "globe-africa"
  },
  {
    id: 6,
    title: "Computer Science",
    category: "Technology",
    description: "Learn programming, computational thinking, and digital literacy for the technology-driven future.",
    hoursPerWeek: 4,
    grades: "Grades 8-12",
    icon: "laptop-code"
  }
];

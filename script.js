function survey() {
  return {
    step: 1,
    userData: {
      name: "",
      dob: "",
      id: "",
      addr: "",
      // Add other user data properties here
    },
    yesNoQuestions: [
      {
        text: "Do you enjoy learning new programming languages?",
        answer: null,
      },
      { text: "Have you ever built a website from scratch?", answer: null },
      {
        text: "Do you prefer working in a team or individually?",
        answer: null,
      },
      { text: "Have you ever attended a hackathon?", answer: null },
      {
        text: "Do you have experience with version control systems like Git?",
        answer: null,
      },
      {
        text: "Have you ever contributed to open source projects?",
        answer: null,
      },
      {
        text: "Do you follow industry news and trends in technology?",
        answer: null,
      },
      {
        text: "Have you ever used a content management system (CMS) for website development?",
        answer: null,
      },
      { text: "Do you enjoy solving complex problems?", answer: null },
      { text: "Have you ever created a mobile app?", answer: null },
      // Add more yes/no questions here
    ],
    // Add data for other question types here
    multipleChoiceQuestions: [
      {
        text: "Which programming language do you feel most comfortable with?",
        options: ["JavaScript", "Python", "Java", "C++"],
        answer: null,
      },
      {
        text: "What is your preferred text editor or integrated development environment (IDE)?",
        options: ["Visual Studio Code", "Sublime Text", "Atom", "Eclipse"],
        answer: null,
      },
      {
        text: "Which area of software development interests you the most?",
        options: [
          "Web development",
          "Mobile app development",
          "Data science",
          "Game development",
        ],
        answer: null,
      },
      {
        text: "What is your preferred operating system for development?",
        options: ["Windows", "macOS", "Linux", "Other"],
        answer: null,
      },
      {
        text: "Which front-end framework do you prefer for web development?",
        options: ["React", "Angular", "Vue.js", "None"],
        answer: null,
      },
      {
        text: "Which back-end framework do you prefer for web development?",
        options: ["Express.js", "Django", "Spring Boot", "None"],
        answer: null,
      },
      {
        text: "What is your preferred database technology?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "Other"],
        answer: null,
      },
      {
        text: "Which cloud platform have you used for hosting applications?",
        options: [
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Google Cloud Platform (GCP)",
          "Other",
        ],
        answer: null,
      },
      {
        text: "What is your level of experience with test-driven development (TDD)?",
        options: ["None", "Beginner", "Intermediate", "Advanced"],
        answer: null,
      },
      {
        text: "Which software development methodology do you prefer?",
        options: ["Agile", "Waterfall", "Scrum", "Kanban"],
        answer: null,
      },
      // Add more multiple choice questions here
    ],
    multipleSelectionQuestions: [
      {
        text: "Which programming languages are you proficient in? (Select all that apply)",
        options: ["JavaScript", "Python", "Java", "C++"],
        answer: [],
      },
      {
        text: "Which front-end technologies have you worked with? (Select all that apply)",
        options: ["HTML", "CSS", "JavaScript", "React"],
        answer: [],
      },
      {
        text: "Which back-end technologies have you worked with? (Select all that apply)",
        options: ["Node.js", "Django", "Spring Boot", "Ruby on Rails"],
        answer: [],
      },
      {
        text: "Which development tools have you used? (Select all that apply)",
        options: ["Git/GitHub", "Docker", "Jenkins", "Travis CI"],
        answer: [],
      },
      {
        text: "Which cloud services have you used? (Select all that apply)",
        options: ["AWS", "Azure", "GCP", "Heroku"],
        answer: [],
      },
      {
        text: "Which databases have you worked with? (Select all that apply)",
        options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
        answer: [],
      },
      {
        text: "Which version control systems have you used? (Select all that apply)",
        options: ["Git", "SVN", "Mercurial", "Perforce", "Other"],
        answer: [],
      },
      {
        text: "Which development methodologies have you practiced? (Select all that apply)",
        options: ["Agile", "Scrum", "Kanban", "Waterfall"],
        answer: [],
      },
      {
        text: "Which testing frameworks have you used? (Select all that apply)",
        options: ["Jest", "Mocha", "JUnit", "PyTest"],
        answer: [],
      },
      {
        text: "Which continuous integration/continuous deployment (CI/CD) tools have you used? (Select all that apply)",
        options: ["Jenkins", "Travis CI", "CircleCI", "GitHub Actions"],
        answer: [],
      },
      // Add more multiple selection questions here
    ],
    openEndedQuestions: [
      {
        text: "What motivated you to pursue a career in software development?",
        answer: "",
      },
      {
        text: "Describe a challenging problem you encountered during a development project and how you solved it.",
        answer: "",
      },
      {
        text: "What do you consider to be your strongest programming skill, and why?",
        answer: "",
      },
      {
        text: "How do you stay updated with the latest trends and technologies in software development?",
        answer: "",
      },
      {
        text: "What is your approach to debugging and troubleshooting issues in your code?",
        answer: "",
      },
      {
        text: "What areas of software development are you looking to improve or learn more about?",
        answer: "",
      },
      {
        text: "How do you handle working under pressure and tight deadlines in a development environment?",
        answer: "",
      },
      {
        text: "What advice would you give to someone starting their journey in software development?",
        answer: "",
      },
      {
        text: "How do you collaborate with team members on development projects?",
        answer: "",
      },
      {
        text: "Describe a project you're particularly proud of and the role you played in its development.",
        answer: "",
      },
      // Add more open-ended questions here
    ],
    allQuestions: [],

    nextStep() {
      this.step++;
      if (this.step === 6) {
        this.compileAllQuestions();
      }
    },

    restart() {
      this.step = 1;
      this.userData = {
        name: "",
        dob: "",
        id: "",
        addr: "",
        // Reset other user data properties here
      };
      this.yesNoQuestions.forEach((q) => (q.answer = null));
      this.multipleChoiceQuestions.forEach((q) => (q.answer = null));
      this.multipleSelectionQuestions.forEach((q) => (q.answer = []));
      this.openEndedQuestions.forEach((q) => (q.answer = ""));
      this.allQuestions = [];
    },

    compileAllQuestions() {
      this.allQuestions = [
        ...this.yesNoQuestions,
        ...this.multipleChoiceQuestions,
        ...this.multipleSelectionQuestions,
        ...this.openEndedQuestions,
      ];
    },

    submitSurvey() {
      // Add code to handle form submission here
      console.log("Survey submitted");
      this.step = 7;
    },
  };
}

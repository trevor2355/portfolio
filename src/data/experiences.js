const experienceTimeLineData = [
  {
    id: 1,
    company: "Ascendant Anxiety",
    jobTitle: "Full-Stack Engineer",
    shortDescriptionPoints: [
      "Contract, part-time position",
      "Created therapist web-platform using vue.js",
      "Created ios/android application with React Native"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2020, 6, 1),
    endDate: new Date(),
    location: "Remote",
    logoName: "ascendant.png",
    displayed: false,
    listId: 1
  },
  {
    id: 2,
    company: "Hack Reactor",
    jobTitle: "Full-Stack Engineer",
    shortDescriptionPoints: [
      "Intensive immersive program",
      "Learned React to build front-end applications",
      "Learned many database technologies such as MySQL, Postgres, and MongoDB"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2020, 1, 1),
    endDate: new Date(2020, 4, 3),
    location: "Denver, Colorado",
    logoName: "hack-reactor.png",
    displayed: false,
    listId: 2
  },
  {
    id: 3,
    company: "Bell Photo",
    jobTitle: "Sales Representative",
    shortDescriptionPoints: [
      "Prepared and gave sales presentations",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2019, 0, 1),
    endDate: new Date(2019, 10, 30),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false,
    listId: 3
  },
  {
    id: 4,
    company: "Bell Photo",
    jobTitle: "Sales Representative",
    shortDescriptionPoints: [
      "Worked with production manager to make sure strict deadlines were met",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2018, 11, 31),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false,
    listId: 3
  },
  {
    id: 5,
    company: "Bell Photo",
    jobTitle: "Account Manager",
    shortDescriptionPoints: [
      "Managed a crew of up to 12 people each day",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2018, 0, 1),
    endDate: new Date(2018, 5, 30),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false,
    listId: 4
  },
  {
    id: 6,
    company: "Bell Photo",
    jobTitle: "Lead Photographer",
    shortDescriptionPoints: [
      "Managed a crew of up to 12 people each day",
      "Worked with production manager to make sure strict deadlines were met",
      "Prepared and gave sales presentations",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2017, 7, 15),
    endDate: new Date(2017, 11, 31),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false,
    listId: 5
  }
];

const experienceListData = [
  {
    id: 1,
    company: "Ascendant",
    jobTitle: "Full-Stack Engineer",
    shortDescriptionPoints: [
      "Contract, part-time position",
      "Created therapist web-platform using vue.js",
      "Created ios/android application with React Native"
    ],
    description:
      "As a Full-Stack Engineer at Ascedant I am working on an Android and iOS app that helps users track thier anxiety and other mental health symptoms.  Our goal at Ascendant is to give the patient something they can actively do while feeling symptoms of anxiety, depression, trauma, etc., which also helps them become more aware of their mental health symptoms. We then help them easily visualize the patterns of their mental health through the data we gather. This data can be connected with loved ones to help increase understanding and awareness for the loved one. The data can also be shared with a therapist to increase efficiency in therapy sessions.  Our team has also bulit a web-platform therapist that integrates with each patients app and provides the therapist with more understanding of the patients health patterns.",
    startDate: new Date(2020, 6, 1),
    endDate: new Date(),
    location: "Remote",
    logoName: "ascendant.png",
    displayed: false
  },
  {
    id: 2,
    company: "Hack Reactor",
    jobTitle: "Full-Stack Engineer",
    shortDescriptionPoints: [
      "Intensive immersive program",
      "Learned React to build front-end applications",
      "Learned many database technologies such as MySQL, Postgres, and MongoDB"
    ],
    description:
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2020, 1, 1),
    endDate: new Date(2020, 4, 3),
    location: "Denver, Colorado",
    logoName: "hack-reactor.png",
    displayed: false
  },
  {
    id: 3,
    company: "Bell Photo",
    jobTitle: "Sales Representative",
    shortDescriptionPoints: [
      "Managed a crew of up to 12 people each day",
      "Worked with production manager to make sure strict deadlines were met",
      "Prepared and gave sales presentations",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "As a Sales Representative I was responsible for all Sales in the northern utah terriotry within the sports pictures department.  I used a CRM to manage leads and prospects.  I prepared and gave presentations to existing and potential clients.",
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2019, 10, 30),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false
  },
  {
    id: 4,
    company: "Bell Photo",
    jobTitle: "Account Manager",
    shortDescriptionPoints: [
      "Managed a crew of up to 12 people each day",
      "Worked with production manager to make sure strict deadlines were met",
      "Prepared and gave sales presentations",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "As an Account Manager I was responsible for ensuring customer satisfaction for all sports and recreation contracts in the Nothern Utah Territory.  I was responsible for scheduleing all photo shoots and managing all respective employeess at each shoot.  I also worked with the production team to ensure strict dealines were met. ",
    startDate: new Date(2018, 0, 1),
    endDate: new Date(2018, 5, 30),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false
  },
  {
    id: 5,
    company: "Bell Photo",
    jobTitle: "Lead Photographer",
    shortDescriptionPoints: [
      "Managed a crew of up to 12 people each day",
      "Worked with production manager to make sure strict deadlines were met",
      "Prepared and gave sales presentations",
      "Worked directly with customer service to ensure customer satisfaction"
    ],
    description:
      "As a Lead Photographer I was responsible for ensuring success each school picture day.  I managed a crew of up to 10 people.  In a typical day we would take the pictures of around 750 students and staff members ",
    startDate: new Date(2017, 7, 15),
    endDate: new Date(2017, 11, 31),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false
  }
];

export { experienceTimeLineData };

export { experienceListData };

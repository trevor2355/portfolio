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
      "Managed a crew of up to 12 people each day",
      "Worked with production manager to make sure strict deadlines were met",
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
      "Managed a crew of up to 12 people each day",
      "Worked with production manager to make sure strict deadlines were met",
      "Prepared and gave sales presentations",
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
      "Worked with production manager to make sure strict deadlines were met",
      "Prepared and gave sales presentations",
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
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
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
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
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
      "Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB. Intensive immersive program. Learned React to build front-end applications. Learned many database technologies such as MySQL, Postgres, and MongoDB.",
    startDate: new Date(2017, 7, 15),
    endDate: new Date(2017, 11, 31),
    location: "Ogden, Utah",
    logoName: "bell.png",
    displayed: false
  }
];

export { experienceTimeLineData };

export { experienceListData };

<template>
  <div id="project">
    <h2>Projects</h2>
    <div class="line"></div>
    <div class="projects-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard
  },
  data: () => {
    return {
      year: 2020,
      projects: [
        {
          id: 1,
          name: "Garden Tracker",
          description:
            "This is a full stack web application ideal for mobile phone usage.  It allows the user to track the progress of thier garden by taking pictures of their plants and uploading them to the app.",
          libraries: ["React"],
          sourceCodeURL: "https://github.com/trevor2355/garden-tracker",
          liveSiteURL: "",
          inProgress: true,
          lastUpdated: new Date(2020, 6, 1),
          imageURL: "plant.png"
        },
        {
          id: 2,
          name: "Calcultor",
          description:
            "This is a full stack web application ideal for mobile phone usage.  It allows the user to track the progress of thier garden by taking pictures of their plants and uploading them to the app.",
          libraries: ["React"],
          sourceCodeURL:
            "https://github.com/trevor2355/rest-api-calculator-backend",
          liveSiteURL:
            "http://ec2-54-183-247-150.us-west-1.compute.amazonaws.com/",
          inProgress: false,
          lastUpdated: new Date(2020, 6, 1),
          imageURL: "dollar-signs.png"
        },
        {
          id: 3,
          name: "Loan Smasher",
          description:
            "This is a full stack web application ideal for mobile phone usage.  It allows the user to track the progress of thier garden by taking pictures of their plants and uploading them to the app.",
          libraries: ["React"],
          sourceCodeURL: "https://github.com/trevor2355/loan-smasher",
          liveSiteURL: "",
          inProgress: true,
          lastUpdated: new Date(2020, 6, 1),
          imageURL: "finance.png"
        },
        {
          id: 4,
          name: "Echo Park",
          description:
            "This is a full stack web application ideal for mobile phone usage.  It allows the user to track the progress of thier garden by taking pictures of their plants and uploading them to the app.",
          libraries: ["React"],
          sourceCodeURL: "https://github.com/SDC-ghrden03",
          liveSiteURL: "",
          inProgress: false,
          lastUpdated: new Date(2020, 6, 1),
          imageURL: "car-dealership.png"
        },
        {
          id: 5,
          name: "There by the Sea",
          description:
            "This is a full stack web application ideal for mobile phone usage.  It allows the user to track the progress of thier garden by taking pictures of their plants and uploading them to the app.",
          libraries: ["React"],
          sourceCodeURL: "https://github.com/There-By-The-Sea",
          liveSiteURL: "",
          inProgress: false,
          lastUpdated: new Date(2020, 6, 1),
          imageURL: "beach-house.png"
        },
        {
          id: 6,
          name: "Ascendant Anxiety",
          description:
            "This is a full stack web application ideal for mobile phone usage.  It allows the user to track the progress of thier garden by taking pictures of their plants and uploading them to the app.",
          libraries: ["React"],
          sourceCodeURL: "",
          liveSiteURL: "",
          inProgress: true,
          lastUpdated: new Date(2020, 6, 1),
          imageURL: "happy.png"
        }
      ]
    };
  },
  methods: {
    filtered(projects) {
      return projects;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#project {
  position: relative;
  min-height: 100vh;
  background-color: $veryLight;
}
.projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 5%;
}
h2 {
  margin-top: 0;
  padding-top: 48px;
  padding-left: 4%;
  color: $black;
  font-size: 48px;
}
.line {
  position: absolute;
  top: 110px;
  width: 22%;
  height: 12px;
  background-color: $blue;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
</style>

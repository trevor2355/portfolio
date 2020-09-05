<template>
  <div id="projects">
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
import projectsData from "@/data/projects";
export default {
  components: {
    ProjectCard
  },
  data: () => {
    return {
      year: 2020,
      projects: projectsData
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

#projects {
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

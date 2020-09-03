<template>
  <div id="app">
    <Home />
    <Projects />
    <Experience />
    <Travel />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Experience from "@/views/Experience.vue";
import Travel from "@/views/Travel.vue";
import Contact from "@/views/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Projects,
    Experience,
    Travel,
    Contact,
    Footer
  }
};
</script>
<style lang="scss">
@import "@/assets/colors.scss";

body {
  margin: 0;
}
#app {
  font-family: "Rubik", sans-serif;
  background-color: rgb(255, 253, 253);
  // height: 2000px;
}
</style>

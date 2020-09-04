<template>
  <div id="app">
    <NavBar />
    <Home />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Experience from "@/views/Experience.vue";
import Contact from "@/views/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    Projects,
    Experience,
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
}
</style>

<template>
  <nav id="nav">
    <a href="" v-scroll-to="'#home'">Home</a>
    <a href="" v-scroll-to="'#projects'">Projects</a>
    <a href="" v-scroll-to="'#experience'">Experience</a>
    <a href="" v-scroll-to="'#contact'">Contact Me</a>
  </nav>
</template>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 48px;
  background-color: white;
  color: $black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
  a {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 4%;
    color: $black;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
    color: $blue;
  }
}
</style>

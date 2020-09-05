<template>
  <div id="footer">
    <p>
      Trevor Bell v1.0.0 | updated: Aug 27 2020 | made using
      <a href="https://vuejs.org/" target="_blank">Vue.js</a> | source code on
      <a href="https://github.com/trevor2355/portfolio" target="_blank"
        >github</a
      >
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#footer {
  height: 64px;
  background-color: $blue;
}
p {
  text-align: center;
  color: white;
  font-size: 16px;
  padding-top: 24px;
  margin: 0;
}
a {
  color: white;
  text-decoration: underline;
}
</style>

<template>
  <div id="footer">
    <p>
      Trevor Bell v1.0.0 | updated: Aug 27 2020 | made using <u>Vue.js</u> |
      source code on <u>github</u>
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
u:hover {
  cursor: pointer;
}
</style>

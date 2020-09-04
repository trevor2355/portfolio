<template>
  <div id="contact">
    <h2>Contact Me</h2>
    <div class="line"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#contact {
  position: relative;
  height: 100vh;
  background-color: $veryLight;
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
  width: 27%;
  height: 12px;
  background-color: $blue;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
</style>

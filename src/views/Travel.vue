<template>
  <div id="travel">
    <h2>Travel Map</h2>
    <div class="line"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#travel {
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
  width: 26%;
  height: 12px;
  background-color: $blue;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
</style>

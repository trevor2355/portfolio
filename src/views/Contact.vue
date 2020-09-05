<template>
  <div id="contact">
    <h2>Contact Me</h2>
    <div class="line"></div>
    <div class="icons">
      <div class="icon-container">
        <a :href="`${publicPath}Trevor-Bell-Resume.pdf`" download
          ><Download :size="120"></Download
        ></a>
        <div>Download Resume</div>
      </div>
      <div class="icon-container">
        <a href="mailto:trevorjarombell@gmail.com" download
          ><Email :size="120"></Email
        ></a>
        <div>Send Me an Email</div>
        <div>trevorjarombell@gmail.com</div>
      </div>
    </div>
  </div>
</template>
<script>
import Download from "vue-material-design-icons/DownloadBox.vue";
import Email from "vue-material-design-icons/Email";
console.log(process.env.BASE_URL);
export default {
  data: () => {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Download,
    Email
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#contact {
  position: relative;
  // height: 100vh;
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
.icons {
  display: flex;
  justify-content: space-evenly;
  padding-top: 120px;
  padding-bottom: 120px;
}
.icon-container {
  text-align: center;
}
a {
  color: $black;
}
</style>

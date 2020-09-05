<template>
  <div class="project">
    <img :src="getUrl(project.imageURL)" :alt="project.imageUrl" />
    <div class="project-details">
      <div v-if="project.inProgress" class="inProgress">In Progress</div>
      <div class="title">
        {{ project.name }}
      </div>
      <div class="description">{{ project.description }}</div>
      <div class="footer">
        <a
          v-if="project.sourceCodeURL"
          :href="project.sourceCodeURL"
          target="_blank"
          class="src"
          ><GitHubIcon :size="16"></GitHubIcon> Source code</a
        >
        <a
          v-if="project.liveSiteURL"
          :href="project.liveSiteURL"
          target="_blank"
          class="visit-site"
          >Visit Site</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import GitHubIcon from "vue-material-design-icons/Github.vue";
export default {
  components: {
    GitHubIcon
  },
  data: () => ({
    imageUrl: "../assets/plant-icon.png"
  }),
  methods: {
    getUrl(name) {
      // return require("../assets/" + name);
      var images = require.context("@/assets/images", false, /\.png$/);
      let productImage = "";
      try {
        productImage = images(`./${name}`);
      } catch (error) {
        // Replace with place holder image
        productImage = images(`./logo.png`);
      }
      return productImage;
    }
  },
  props: {
    project: Object
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";
.project {
  width: 25%;
  margin: 4%;
  min-width: 300px;
  border-bottom: solid 12px $lightBlue;
  box-shadow: 7px 7px 14px #7d7d7d, -7px -7px 14px #ffffff;
}
.img-container {
  min-height: 220px;
}
img {
  width: 100%;
}
.project-details {
  position: relative;
}
.title {
  font-size: 18px;
  margin: 16px;
}
.description {
  font-size: 14px;
  margin: 16px;
}
.inProgress {
  position: absolute;
  right: 16px;
  background-color: #eb525c;
  color: white;
  font-size: 12px;
  width: 25%;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin: 16px;
}
.src {
  color: $black;
  text-decoration: none;
}
.src:hover {
  text-decoration: underline;
  cursor: pointer;
}
.visit-site {
  color: white;
  font-size: 12px;
  background-color: #698f3f;
  width: 25%;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
  text-decoration: none;
}
.visit-site:hover {
  cursor: pointer;
  background-color: #537132;
}
// .experience {
//   position: absolute;
//   height: 160px;
//   background-color: white;
//   color: $black;
//   text-align: center;
//   box-shadow: 7px 7px 14px #7d7d7d, -7px -7px 14px #ffffff;
// }
// .experience:hover {
//   cursor: pointer;
//   box-shadow: 8px 8px 16px #7d7d7d, -8px -8px 16px #ffffff;
// }
// .header {
//   border-bottom: solid 2px $blue;
//   padding: 8px;
// }
// .title {
//   font-size: 16px;
// }
// .info {
//   padding: 8px;
// }
// .jobTitle {
//   text-align: left;
//   font-size: 12px;
// }
// .point {
//   font-size: 12px;
//   text-align: left;
//   text-indent: -18px;
//   padding-left: 20px;
//   margin-top: 4px;
// }
</style>

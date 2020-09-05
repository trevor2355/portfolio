<template>
  <div
    class="experience-item"
    :id="`experience-${experience.id}`"
    v-on:click="toggleDisplay"
  >
    {{ experience.company }} - {{ experience.jobTitle }}
    <span v-if="!experience.displayed" class="cheveron"
      ><CheveronDown :size="32"></CheveronDown
    ></span>
    <span v-else class="cheveron"><CheveronUp :size="32"></CheveronUp></span>
    <div v-if="experience.displayed" class="additional-info">
      <div class="header-info">
        <div>
          <div class="date">
            <span class="bold">Start Date: </span>
            {{ experience.startDate | dateFormat }}
          </div>
          <div class="date">
            <span class="bold">End Date: </span>
            {{ experience.endDate | dateFormat }}
          </div>
          <div class="date">
            <span class="bold">Location: </span> {{ experience.location }}
          </div>
        </div>
        <img :src="getUrl(experience.logoName)" />
      </div>
      <p class="description">{{ experience.description }}</p>
    </div>
  </div>
</template>
<script>
import CheveronDown from "vue-material-design-icons/ChevronDown.vue";
import CheveronUp from "vue-material-design-icons/ChevronUp.vue";
export default {
  components: {
    CheveronDown,
    CheveronUp
  },
  props: {
    experience: Object
  },
  methods: {
    toggleDisplay() {
      if (!this.experience.displayed) {
        this.$emit("show-experience", this.experience.id);
      } else {
        this.experience.displayed = false;
      }
    },
    getUrl(name) {
      // return require("../assets/" + name);
      console.log(name);
      var images = require.context("@/assets/logos", false, /\.png$/);
      let productImage = "";
      try {
        productImage = images(`./${name}`);
      } catch (error) {
        // Replace with place holder image
        productImage = images(`./logo.png`);
      }
      return productImage;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";
.experience-item {
  position: relative;
  text-align: center;
  padding: 16px;
  border-bottom: solid 1px $light;
  cursor: pointer;
  font-size: 24px;
}
.additional-info {
  margin: 48px;
  text-align: left;
  font-size: 20px;
}
.header-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date {
  margin-top: 12px;
  margin-bottom: 12px;
}
.bold {
  font-weight: 700;
  margin-right: 8px;
}
img {
  height: 112px;
  margin-right: 48px;
}
.description {
  font-size: 18px;
  line-height: 1.5em;
}
</style>

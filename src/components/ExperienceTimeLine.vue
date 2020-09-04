<template>
  <div
    class="experience"
    v-bind:style="{
      left: this.findStartingPercentage(experience),
      width: this.findWidthPercentage(experience)
    }"
  >
    <div class="header">
      <div class="title">{{ experience.company }}</div>
    </div>
    <div class="info">
      <div class="jobTitle">{{ experience.jobTitle }}</div>
      <li
        class="point"
        v-for="point in experience.shortDescriptionPoints"
        :key="point"
      >
        {{ point }}
      </li>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    experience: Object
  },
  methods: {
    findStartingPercentage(experience) {
      const startOfYear = experience.startDate.startOfYear();
      const daysBetween = startOfYear.getDaysBetween(experience.startDate);
      const decimal = daysBetween / 365;
      let percentage = (decimal * 100).toFixed(0).toString() + "%";
      return percentage;
    },
    findWidthPercentage(experience) {
      const daysBetween = experience.endDate.getDaysBetween(
        experience.startDate
      );
      const decimal = daysBetween / 365;
      let percentage = (decimal * 100).toFixed(0).toString() + "%";
      return percentage;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";
.experience {
  position: absolute;
  height: 160px;
  background-color: white;
  color: $black;
  text-align: center;
  // border-radius: 20px;
  // background: #ffffff;
  box-shadow: 7px 7px 14px #7d7d7d, -7px -7px 14px #ffffff;
}
.experience:hover {
  cursor: pointer;
  box-shadow: 8px 8px 16px #7d7d7d, -8px -8px 16px #ffffff;
}
.header {
  border-bottom: solid 2px $blue;
  padding: 8px;
}
.title {
  font-size: 16px;
}
.info {
  padding: 8px;
}
.jobTitle {
  text-align: left;
  font-size: 12px;
}
.point {
  font-size: 12px;
  text-align: left;
  text-indent: -18px;
  padding-left: 20px;
  margin-top: 4px;
}
</style>

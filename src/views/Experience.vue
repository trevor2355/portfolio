<template>
  <div id="experience">
    <h2>Experience</h2>
    <div class="line"></div>
    <div class="experiencesBlock">
      <div
        class="experience"
        v-bind:style="{
          left: this.findStartingPercentage(experiences[0]),
          width: this.findWidthPercentage(experiences[0])
        }"
      >
        Ascendant{{ this.findStartingPercentage(experiences[0]) }}
      </div>
      <div
        class="experience"
        v-bind:style="{
          left: this.findStartingPercentage(experiences[1]),
          width: this.findWidthPercentage(experiences[1])
        }"
      >
        Ascendant{{ this.findWidthPercentage(experiences[0]) }}
      </div>
    </div>
    <div class="timelineContainer">
      <div class="timeline"></div>
      <div class="tickmark jan"></div>
      <div class="date jan">Jan</div>
      <div class="tickmark apr"></div>
      <div class="date apr">Apr</div>
      <div class="tickmark jul"></div>
      <div class="date jul">Jul</div>
      <div class="tickmark oct"></div>
      <div class="date oct">Oct</div>
      <div class="tickmark dec"></div>
      <div class="date dec">Dec</div>
    </div>
    <div class="year">
      <button v-on:click="year -= 1" :disabled="year < 2018">
        <ArrowLeftDropCircleOutlineIcon />
      </button>
      {{ year }}
      <button v-on:click="year += 1" :disabled="year === 2020">
        <ArrowRightDropCircleOutlineIcon />
      </button>
    </div>
  </div>
</template>
<script>
import ArrowLeftDropCircleOutlineIcon from "vue-material-design-icons/ArrowLeftDropCircleOutline.vue";
import ArrowRightDropCircleOutlineIcon from "vue-material-design-icons/ArrowRightDropCircleOutline.vue";
export default {
  components: {
    ArrowLeftDropCircleOutlineIcon,
    ArrowRightDropCircleOutlineIcon
  },
  data: () => {
    return {
      year: 2020,
      experiences: [
        {
          company: "Ascendant Anxiety",
          jobTitle: "Full-Stack Engineer",
          startDate: new Date(2020, 6, 1),
          endDate: new Date()
        },
        {
          company: "Hack Reactor",
          jobTitle: "Full-Stack Engineer",
          startDate: new Date(2020, 1, 1),
          endDate: new Date(2020, 4, 3)
        }
      ]
    };
  },
  methods: {
    findStartingPercentage(experience) {
      const startOfYear = experience.startDate.startOfYear();
      const daysBetween = startOfYear.getDaysBetween(experience.startDate);
      const decimal = daysBetween / 365;
      let percentage = (decimal * 100).toFixed(0).toString() + "%";
      console.log(percentage);
      return percentage;
    },
    findWidthPercentage(experience) {
      const daysBetween = experience.endDate.getDaysBetween(
        experience.startDate
      );
      const decimal = daysBetween / 365;
      let percentage = (decimal * 100).toFixed(0).toString() + "%";
      console.log(percentage);
      return percentage;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#experience {
  position: relative;
  height: 100vh;
  background-color: white;
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
  width: 28%;
  height: 12px;
  background-color: $blue;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
.experiencesBlock {
  position: relative;
  width: 80%;
  margin: 10%;
  height: 10px;
}
.timelineContainer {
  position: relative;
  width: 80%;
  margin: 10%;
}
.experience {
  position: absolute;
  height: 50px;
  background-color: $blue;
  color: white;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
}
.timeline {
  height: 5px;
  width: 100.4%;
  background-color: $blue;
}
.tickmark {
  width: 4px;
  height: 20px;
  background-color: $blue;
}
.date {
  margin-left: -1%;
  margin-top: 3%;
}
.jan {
  position: absolute;
}
.apr {
  position: absolute;
  left: 25%;
}
.jul {
  position: absolute;
  left: 50%;
}
.oct {
  position: absolute;
  left: 75%;
}
.dec {
  position: absolute;
  left: 100%;
}
button {
  font-size: 100%;
  font-family: "Courier New", Courier, monospace;
  border: 0;
  background-color: white;
  padding: 0;
}
.year {
  color: $black;
  text-align: center;
  font-size: 32px;
}
</style>

<template>
  <div id="experience">
    <h2>Experience</h2>
    <div class="line"></div>
    <div class="experiencesBlock">
      <ExperienceTimeLine
        v-for="experience in filtered(experienceTimeLineData)"
        :key="experience.id"
        :experience="experience"
        @show-experience="showExperienceById"
      />
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
    <div class="experience-details">
      <div class="color-section">DETAILS</div>
      <div class="experience-list">
        <ExperienceListItem
          v-for="experience in experienceListData"
          :key="experience.id"
          :experience="experience"
          @show-experience="showExperienceById"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ArrowLeftDropCircleOutlineIcon from "vue-material-design-icons/ArrowLeftDropCircleOutline.vue";
import ArrowRightDropCircleOutlineIcon from "vue-material-design-icons/ArrowRightDropCircleOutline.vue";
import ExperienceTimeLine from "@/components/ExperienceTimeLine.vue";
import ExperienceListItem from "@/components/ExperienceListItem.vue";
import { experienceTimeLineData, experienceListData } from "@/data/experiences";
export default {
  components: {
    ArrowLeftDropCircleOutlineIcon,
    ArrowRightDropCircleOutlineIcon,
    ExperienceListItem,
    ExperienceTimeLine
  },
  data: () => {
    return {
      year: 2020,
      experienceTimeLineData,
      experienceListData
    };
  },
  methods: {
    filtered(experiences) {
      return experiences.filter(
        experience =>
          experience.startDate.getTime() >= new Date(this.year, 0, 1) &&
          experience.startDate.getTime() <= new Date(this.year, 11, 31)
      );
    },
    showExperienceById(id) {
      console.log("id to be shown: ", id)
      this.experienceListData.forEach(experience => {
        experience.displayed = experience.id === id ? true : false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";

#experience {
  position: relative;
  min-height: 100vh;
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
  height: 48px;
}
.timelineContainer {
  position: relative;
  width: 80%;
  margin: 10%;
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
.experience-details {
  display: flex;
  flex-direction: row;
  border: solid 2px $black;
  margin: 10%;
  align-items: stretch;
}
.color-section {
  background-color: $blue;
  color: white;
  text-align: center;
  padding: 48px;
  font-size: 48px;
}
.experience-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // border: solid 1px $light;
}
</style>

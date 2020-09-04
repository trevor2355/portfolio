<template>
  <div class="experience-item">
    {{ experience.company }} - {{ experience.jobTitle }}
    <span class="cheveron"><CheveronDown></CheveronDown></span>
  </div>
</template>
<script>
import CheveronDown from "vue-material-design-icons/ChevronDown.vue";
export default {
  components: {
    CheveronDown,
  },
  props: {
    experience: Object
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";
.experience-item {
  text-align: center;
  padding: 16px;
  border-bottom: solid 1px $light;
}
.cheveron {
  margin-top: 24px;
}
</style>

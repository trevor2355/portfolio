import Vue from "vue";
import dateFormat from "dateformat";
import utils from "./utilityFunctions";

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return utils.capitalize(value);
});

Vue.filter("dateFormat", function(value) {
  if (!value) return "";
  return dateFormat(value, "mmmm d, yyyy");
});

Vue.filter("dateFormatShort", function(value) {
  if (!value) return "";
  return dateFormat(value, "m/d/yy");
});

Vue.filter("dayAndTimeFormat", function(value) {
  if (!value) return "";
  return dateFormat(value, "dddd h:MM TT");
});

Vue.filter("timeFormat", function(value) {
  if (!value) return "";
  return dateFormat(value, "h:MM TT");
});

Vue.filter("capitalizeList", function(values) {
  if (!values) return "";
  const capitalizedValues = values.map(value => utils.capitalize(value));
  return capitalizedValues.join(", ");
});

Date.prototype.startOfYear = function() {
  const newDate = new Date(this.getFullYear(), 0, 1);
  return newDate;
};

Date.prototype.dateOnly = function() {
  const newDate = new Date(this);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

Date.prototype.getDaysBetween = function(date) {
  const milliseconds = Math.abs(this.dateOnly() - date.dateOnly());
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  return Math.round(days);
};

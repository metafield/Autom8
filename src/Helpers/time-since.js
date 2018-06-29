const TimeSince = {
  timeSince(createdAt) {
    const dateUpdated = new Date(createdAt);
    let dateDiff = Date.now() - dateUpdated;
    const ttlSeconds = this.getSeconds(dateDiff);
    const ttlMins = this.getMinutes(dateDiff);
    const ttlHours = this.getHours(dateDiff);
    const ttlDays = this.getDays(dateDiff);

    if (ttlMins < 1) {
      return `${Math.floor(ttlSeconds)}s`;
    } else if (ttlMins < 60) {
      return `${Math.floor(ttlMins)}m ${Math.floor(ttlSeconds - Math.floor(ttlMins) * 60)}s`;
    } else if (ttlMins < 1440) {
      return this.formatTime(dateDiff, ttlMins, ttlHours);
    } else {
      return this.formatTime(dateDiff, ttlMins, ttlHours, ttlDays);
    }
  },
  formatTime(total, mins_ttl, hours_ttl, days_ttl) {
    if (!days_ttl) {
      // hours and minutes only
      const hours = Math.floor(hours_ttl);
      total -= hours * 1000 * 60 * 60;
      const minutes = Math.floor(this.getMinutes(total));
      return `${hours}h ${minutes}m`;
    } else {
      // including days
      const days = Math.floor(days_ttl);
      total -= days * 1000 * 60 * 60 * 24;

      let hours = Math.floor(this.getHours(total));
      total -= hours * 1000 * 60 * 60;

      const minutes = Math.floor(this.getMinutes(total));

      return `${days}d ${hours}h ${minutes}m`;
    }
  },
  getSeconds(time) {
    return time / 1000;
  },
  getMinutes(time) {
    return time / (1000 * 60);
  },
  getHours(time) {
    return time / (1000 * 60 * 60);
  },
  getDays(time) {
    return time / (1000 * 60 * 60 * 24);
  }
};

export default TimeSince;

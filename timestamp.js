module.exports = timeStamp = () => {
  const now = new Date();
  const date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
  for (let i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = '0' + time[i];
    }
  }
  return date.join('_') + '__' + time.join('_');
};

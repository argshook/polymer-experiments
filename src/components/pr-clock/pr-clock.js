export default prClock();

function prClock() {
  return {
    is: 'pr-clock',
    properties: {
      time: {
        type: String,
        value: getTime()
      },
    },
    ready() {
      setInterval(() => {
        this.time = getTime();
      }, 1000);
    },
    getTimeString: t => `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
  };
}

function getTime() {
  return new Date();
}


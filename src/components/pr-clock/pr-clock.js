export default prClock();

function prClock() {
  return {
    is: 'pr-clock',
    properties: {
      time: {
        type: String,
        value: getTime()
      },
      format: {
        type: String,
        value: '24h',
        observer: '_formatChanged',
        notify: true
      }
    },
    ready() {
      setInterval(() => {
        this.time = getTime();
      }, 1000);
    },
    getTimeString(t, format) {
      switch (format) {
        default:
        case '24h':
          return `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;

        case '12h':
          return `${pad(hours12(t.getHours()))}:${pad(t.getMinutes())}:${pad(t.getSeconds())} ${amOrPm(t.getHours())}`;
      }
    },
    _formatChanged(newValue) {
      console.log('pr-clock: time format changed to', newValue);
    },
    handleClick() {
      this.fire('custom-polymer-event', 'hello!');
    }
  };
}

function getTime() {
  return new Date();
}

function hours12(hours) {
  return hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
}

function amOrPm(hours) {
  return hours > 12 ? 'PM' : 'AM';
}

function pad(n) {
  return n < 10 ? '0' + n : n;
}


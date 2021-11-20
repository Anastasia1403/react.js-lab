const formatTime = (time, diration = 1) => {
  // input format is like 4:00 pm, output is 4 pm - 5 pm
  const periodStart = time.slice(-2);
  let hourEnd;
  let periodEnd;
  const hourStart = +time.split(':', 1).join();
  if (hourStart === 12) {
    periodEnd = periodStart === 'am' ? 'pm' : 'am';
    hourEnd = 1;
  } else {
    hourEnd = hourStart + diration;
    periodEnd = periodStart;
  }
  const formattedTime = `${hourStart} ${periodStart} - ${hourEnd} ${periodEnd}`;
  return formattedTime;
};

export default formatTime;

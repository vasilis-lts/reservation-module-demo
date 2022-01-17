export function formatDateAndTime(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    hours = '' + d.getHours(),
    minutes = '' + d.getMinutes(),
    seconds = '' + d.getSeconds(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  if (hours.length < 2)
    hours = '0' + hours;
  if (minutes.length < 2)
    minutes = '0' + minutes;
  if (seconds.length < 2)
    seconds = '0' + seconds;

  return [day, month, year].join('/');
  // return [day, month, year].join('/') + ` ${hours}:${minutes}:${seconds}`;
}
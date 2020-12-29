import moment from 'moment';

type typeFormDayWeek = {
  day: string;
  date: string;
  month: string;
  year: string;
  time: number;
};

const changeFormDayWeek = (number: number, type: number): typeFormDayWeek => {
  if (type) {
    const day = moment().subtract(-number, 'd').format('ddd');
    const date = moment().subtract(-number, 'd').format('DD');
    const month = moment().subtract(-number, 'd').format('MM');
    const year = moment().subtract(-number, 'd').format('YYYY');
    const time = moment().subtract(-number, 'd').valueOf();

    return {day, date, month, year, time};
  } else {
    const day = moment().subtract(number, 'd').format('ddd');
    const date = moment().subtract(number, 'd').format('DD');
    const month = moment().subtract(number, 'd').format('MM');
    const year = moment().subtract(number, 'd').format('YYYY');
    const time = moment().subtract(number, 'd').valueOf();
    return {day, date, month, year, time};
  }
};

interface DayWeek {
  day: string;
  date: string;
  month: string;
  year: string;
  time: number;
}

export const realDayWeek = (
  numberNextDay?: number,
  numberPreviousDay?: number,
) => {
  let days: Array<DayWeek> = [];
  if (numberNextDay && numberPreviousDay) {
    for (let i = 0; i <= numberNextDay; i++) {
      const resultTime = changeFormDayWeek(i, 0)
      days.push(resultTime);
    }
  }

  if (numberNextDay && numberPreviousDay) {
    for (let i = 1; i <= numberPreviousDay; i++) {
      const resultTime =   changeFormDayWeek(i, 1)
      days.push(resultTime);
    }
  }
  if (numberNextDay && !numberPreviousDay) {
    for (let i = 0; i <= numberNextDay; i++) {
      const resultTime = changeFormDayWeek(i, 0)
      days.push(resultTime);
    }
  }
  if (!numberNextDay && numberPreviousDay) {
    for (let i = 0; i <= numberPreviousDay; i++) {
      const resultTime = changeFormDayWeek(i, 1)
      days.push(resultTime);
    }
  }

  const sortDaysWeek = days.sort((a, b) => {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });

  return sortDaysWeek;
};

type timeNow = {
  dateNow: string;
  monthNow: string;
  yearNow: string;
};
export const defindTimeNow = (): timeNow => {
  const timeNow = moment();
  const dateNow = timeNow.format('DD');
  const monthNow = timeNow.format('MM');
  const yearNow = timeNow.format('YYYY');

  return {dateNow, monthNow, yearNow};
};

export const defineDateMonthYear = (time: number): timeNow => {
  const timeNow = moment(time);
  const dateNow = timeNow.format('DD');
  const monthNow = timeNow.format('MM');
  const yearNow = timeNow.format('YYYY');
  return {dateNow, monthNow, yearNow};
};

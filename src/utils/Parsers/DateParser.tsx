import React from 'react';

const dayParser = (dayNum: number) => {
  switch (dayNum) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
  }
};

export const dateParser = (date: Date): string => {
  const now = new Date();
  const startOfDate = new Date();
  startOfDate.setHours(0, 0, 0);
  const lastWeek = new Date(startOfDate.getTime() - 604800000);
  if (startOfDate.getTime() < date.getTime()) {
    return `${("0" + date.getHours().toString()).slice(-2)}:${(
      "0" + date.getMinutes().toString()
    ).slice(-2)}`;
  } else if (lastWeek.getTime() < date.getTime()) {
    return `${dayParser(date.getDay())}`;
  } else {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }
};

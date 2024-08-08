# default-date-by-weekly

JavaScript function that generates Date :date: by Weekly as per your syntax parameter.


## Syntax Parameters

:pushpin: Please note that the syntax is case-sensitive and no space in between. :+1:

| Syntax            | Description                            |
| ----------------- | -------------------------------------- |
| -{n}w,1 | Monday of {n} last week |
| -{n}w,7 | Sunday of {n} last week |	
| -1w,1 | Monday of last week |
| -1w,7 | Sunday of last week |
| 0w,1 | Monday of current week |
| 0w,7 | Sunday of current week |
| +1w,1 | Monday of next week |
| +1w,7 | Sunday of next week |	
| +{n}w,1 | Monday of {n} next week |
| +{n}w,7 | Sunday of {n} next week |

## Variables
| Variable            | Description                            |
| ----------------- | -------------------------------------- |
| 1 | Monday |
| 7 | Sunday |
| -, + | Directions |

## Usage/Examples

```javascript
const dte = new Date("November 17, 2023");

//-1w,1 - Monday of last week
const startDayOfLastWeek = getDefaultDateByWeekly('-1w,1', dte );
console.log('[-1w,0] Start DayOfLastWeek='+ startDayOfLastWeek);
//Output -> Mon Nov 06 2023

//-1w,7 - Sunday of last week
const endDayOfLastWeek = getDefaultDateByWeekly('-1w,7', dte);
console.log('[-1w,7] End DayOfLastWeek='+ endDayOfLastWeek);
//Output -> Sun Nov 12 2023

//0w,1 - Monday of current week
const startDayOfWeek = getDefaultDateByWeekly('0w,1', dte );
console.log('[0w,1] Start DayOfWeek='+ startDayOfWeek);
//Output -> Mon Nov 13 2023

//0w,7 - Sunday of current week
const endDayOfWeek = getDefaultDateByWeekly('0w,7', dte);
console.log('[0w,7] End DayOfWeek='+ endDayOfWeek);
//Output -> Sun Nov 19 2023

//+1w,7 - Monday of next week
const startDayOfNextWeek = getDefaultDateByWeekly('+1w,1', dte );
console.log('[+1w,1] Start DayOfNextWeek='+ startDayOfNextWeek);
//Output -> Mon Nov 20 2023

//+1w,7 - Sunday of next week
const endDayOfNextWeek = getDefaultDateByWeekly('+1w,7', dte);
console.log('[+1w,7] End DayOfNextWeek='+ endDayOfNextWeek);
//Output -> Sun Nov 26 2023
```

## License

[MIT](https://github.com/bryanbohol/default-date-by-weekly/blob/main/LICENSE)

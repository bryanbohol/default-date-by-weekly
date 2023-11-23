# default-date-by-weekly

JavaScipt function to generate Date by Weekly according from your syntax.


## Syntax Reference

| Syntax             | Description                            |
| ----------------- | -------------------------------------- |
| 0w,1 | Monday of current week |
| 0w,7 | Sunday of current week |
| -{n}w,1 | Monday of {n} last week |
| -{n}w,7 | Sunday of {n} last week |	
| -1w,1 | Monday of last week |
| -1w,7 | Sunday of last week 
| 0w,1 | Monday of current week |
| 0w,7 | Sunday of current week |
| +1w,1 | Monday of next week |
| +1w,7 | Sunday of next week |	
| +{n}w,1 | Monday of {n} next week |
| +{n}w,7 | Sunday of {n} next week |



## Usage/Examples

```javascript
const dte = new Date("November 17, 2023");

//-1w,1 - Monday of last week
const startDayOfLastWeek = getDefaultDateByWeekly('-1w,1', dte );
console.log('[-1w,0] Start DayOfLastWeek='+ startDayOfLastWeek);//Mon Nov 06 2023

//-1w,7 - Sunday of last week
const endDayOfLastWeek = getDefaultDateByWeekly('-1w,7', dte);
console.log('[-1w,7] End DayOfLastWeek='+ endDayOfLastWeek);//Sun Nov 12 2023

//0w,1 - Monday of current week
const startDayOfWeek = getDefaultDateByWeekly('0w,1', dte );
console.log('[0w,1] Start DayOfWeek='+ startDayOfWeek);//Mon Nov 13 2023

//0w,7 - Sunday of current week
const endDayOfWeek = getDefaultDateByWeekly('0w,7', dte);
console.log('[0w,7] End DayOfWeek='+ endDayOfWeek);//Sun Nov 19 2023

//+1w,7 - Monday of next week
const startDayOfNextWeek = getDefaultDateByWeekly('+1w,1', dte );
console.log('[+1w,1] Start DayOfNextWeek='+ startDayOfNextWeek);//Mon Nov 20 2023

//+1w,7 - Sunday of next week
const endDayOfNextWeek = getDefaultDateByWeekly('+1w,7', dte);
console.log('[+1w,7] End DayOfNextWeek='+ endDayOfNextWeek);//Sun Nov 26 2023
```

## License

[MIT](https://github.com/bryanbohol/default-date-by-weekly/blob/main/LICENSE)
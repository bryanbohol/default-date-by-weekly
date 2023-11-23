
/**
 * Author: Bryan Bohol
 * Git   : https://github.com/bryanbohol
 */

function getDefaultDateByWeekly(weeklySyntax, date){
    var numberOfDefaultDays = 0;
    
    if(/\d[w],\d$/.test(weeklySyntax)){
        const minMaxDay = parseInt(weeklySyntax.substring(weeklySyntax.indexOf(",")+1,weeklySyntax.length));
        const weekOffset = parseInt(weeklySyntax.substring(0,weeklySyntax.indexOf("w")));	
        numberOfDefaultDays = getDiffDaysFromMinMax(getDayOfTheWeek(date), weekOffset, minMaxDay);
    }
    date =  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) + (numberOfDefaultDays * 24 * 60 * 60 * 1000);
    return getDateAsString(date);
}

function getDiffDaysFromMinMax( dayOfWeek, weekOffset, minMaxDay){
    var weekOffsetVal = getDaysInWeek() * weekOffset;
    var weekOffsetMinMaxDay = weekOffsetVal + minMaxDay;
    return weekOffsetMinMaxDay - dayOfWeek;
}

function getDateAsString( dte) {
    return new Date(dte);//you can format your date here
};

function getDayOfTheWeek(date){
  const day = date.getDay();  
  return diff = day === 0 ? getDaysInWeek() : day;  
}

function getDaysInWeek(){
	return 7;
}
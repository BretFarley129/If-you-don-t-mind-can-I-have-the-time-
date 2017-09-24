var hour = 10;
var minute = 45;
var AM = true;
var relation;
var relTime;

function convertPhrase(str){
    if(str){
        return("in the morning");
    }
    else{
        return("at night");
    }
}

if(minute > 30){
    hour ++;
    relation = "to";
    relTime = 60-minute;
    if (hour == 13){
        hour = 1;
    }
}
else{
    relation = "past";
    relTime = minutes;
}
if(hour == 12){
    if(AM){
        console.log("It is ", relTime," minutes ", relation, "noon" );
    }
    else{
        console.log("It is ", relTime," minutes ", relation, "midnight" );    
    }
}
else if(minute == 0){
    console.log("It is ", hour, ":00 ", convertPhrase(AM) );
}
else if(minute == 15 || minute == 45){
    console.log("It is a quarter", relation, hour, convertPhrase(AM));
}
else if(minute == 30){
    console.log("It is half past", hour, ":00 ", convertPhrase(AM) );
    
}
else{
    console.log("It is ", relTime," minutes ", relation, hour, ":00 ", convertPhrase(AM) );
}
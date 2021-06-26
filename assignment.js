// inch to feet
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var result = inchToFeet(300);
console.log( 'Total Feet :' + result);



// Wood calculator
function woodCalculator(chair,table,bed){
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let bedWoood = bed * 5;
    let totalWood = chairWood + tableWood + bedWoood;
    return totalWood;
    }
    // get output
    const resultTotalWood = woodCalculator(14,3,7);
    console.log( 'Total Need Your Wood : ' + resultTotalWood);




// brick calculator
function brickCalculator(floor){
    if(floor <= 0){
        console.log("Enter Something Valid");
    }
    else{
        var firstToTen = (floor*15)*1000;
        var elevenToTwenty = (floor*12)*1000;
        var upToTwenty = (floor*10)*1000;
        if(floor<=10)
            console.log("You need Total", firstToTen, "bricks");
        else if(floor<=20)
            console.log("You need Total", elevenToTwenty, "bricks");
        else if(floor>20)
            console.log("You need Total", upToTwenty, "bricks");
        }
        
    }
    var result= brickCalculator(40);
    
    


    // tiny friend
    function tinyFriend(friendName) {
        let smallName = '';
            if(friendName.length > 0){
                for(let i = 0; i < friendName.length; i++){
                    if(typeof friendName[i] === 'string'){//only for String Will take;
                       if(smallName.length == 0){
                        smallName = friendName[i]; continue;
                       } 
                       if(friendName[i].length < smallName.length){
                        smallName = friendName[i]; 
                       }
                    }
                  }
                 }
                  return smallName;
               }
            //get output
            var resultTinyFriend = tinyFriend([' Shawon','Torikul',3, 'Asik islam', 'Saimun hosen','Imam hossen',2]);
            console.log( 'My Tiny Friend Name :' + resultTinyFriend);
function aStar(myMap,startPos) {
    var weg = [];
    var kweg = [];
    var rueckweg = [];
    var moeglicherweg = [];

    for(var i =0;i<myMap.length;i++){
        if(myMap[i].wall!=true){
            weg.push(myMap[i].id);
        }
    }


        console.log(weg.length);
    }




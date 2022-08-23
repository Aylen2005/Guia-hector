function os (a){
    for(i = 0 ; i < a.length ;i++){
        for(j = 1; j < j.length ; j++){
            if(a[i] > a[j]){
                [a[i], a[j]] = [a[j], a[i]];
            }
        }
    return a
    }
}

function particion(b){
    let i = 0;
    let j = a.length;
    let p = true;
    let center = Math.floor((i+j)/2)
    while(p == false){
        if (center == b){
            p = true;
        }
        else if(center < b){
            i = center;
            console.log("la i 1 es " + 1);
            console.log("la i 2 es " + 1);
        }
        else if(center > b){
            j = center;
            console.log("la j 1 es " + 1);
            console.log("la j 2 es " + 1);
        }
    }
    if (p == true){
        return true
    }
}
a = [3,8,1,0,7,2,9]
console.log(particion(os(a), 12));
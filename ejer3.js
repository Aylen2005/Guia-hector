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

alsjdhouy

function particion(b){
    let i = 0;
    let j = a.length;
    let p = true;
    let center = Math.floor((i+j)/2)
    while(p == false){
        if (center == b){
            p = true;
        }

    }
    if (p == true){
        return true
    }
}
a = [3,8,1,0,7,2,9]
console.log(particion(os(a), 12));
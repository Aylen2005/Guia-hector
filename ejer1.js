function bl (a,b){
    for(i = 0; i < a.length;i++){
        if(a[i] == b){
            return true
        }  
    }
    return false
}

console.log(bl([2,5,7,3,8,11], 16));

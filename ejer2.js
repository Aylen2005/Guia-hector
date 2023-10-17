function os (a){
    for(i = 0 ; i < a.length ;i++){
        for(j = 0; j < a.length ; j++){
            if(a[j] < a[i]){
                let inter = a[i]
                a[i] = a[j];
                a[j] = inter;
            }
        }
    }
    return a
}
console.log(os([2,1,7,3,8,11]));
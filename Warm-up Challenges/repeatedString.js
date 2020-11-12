function repeatedString(s, n) {
    var counter = 0;
    var index = Math.floor(n/s.length);
    var left = n % s.length;
    
    for( let i = 0; i<s.length; i++) {
        if(s[i] === "a"){
            counter++;
        }
    }
    
    counter = counter*index;
    
    for( let i = 0; i<left; i++){
        if(s[i] === "a"){
            counter++;
        }
    }
    
    return counter;
}

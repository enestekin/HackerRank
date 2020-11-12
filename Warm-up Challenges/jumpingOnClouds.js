function jumpingOnClouds(c) {

var counter = 0;

for ( let i=0; i<c.length-1; i++) {
    if( (i+2) < c.length && c[(i+2)] === 0) {
        counter++;
        i = i+1;
    }
    else {
        counter++;
    }
}
return counter;

}

function countingValleys(steps, path) {
    var index = 0;
    var count = 0;
    for( let i = 0; i<steps; i++) {
        if(path[i] === "U") {
            index++;
            if(index === 0) {
                count++;
            }
        }
        else {
            index--;
        }
    }
    return count;

}
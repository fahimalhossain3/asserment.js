function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return "Error: Distance can not be Negative or Zero";
    } else {
        var meter = kilometer * 1000;
    }
    return meter;
}
var result1 = kilometerToMeter(5);
console.log(result1);
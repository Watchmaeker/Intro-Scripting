// Binary search algorithm
function binaryAlgorithm(name, sides) {
    let frontSide = 0;
    let backSide = nameArray.length - 1;
    while (frontSide <= backSide) {
        let centreArray = Math.floor((frontSide + backSide) / 2);
        if (sides[centreArray] === name) {
            return centreArray;
        } else if (sides[centreArray] < name) {
            frontSide = centreArray + 1;
        } else {
            backSide = centreArray - 1;
        }
    }
    return -1;
}
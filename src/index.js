/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    preferences.unshift(0);
    let summ = 0;
    let obj = {};
    for (let i = 1; i < preferences.length; i++) {
        let first = preferences[i];
        let second = preferences[first];
        let third = preferences[second];
        if (third === i && obj[i] === undefined && obj[first] === undefined && obj[second] === undefined && first !== second && first !== third && second !== third) {
            obj[i] = true;
            obj[[preferences[i]]] = true;
            obj[[preferences[preferences[i]]]] = true;
            summ++;
        }
    }
    return summ;
};

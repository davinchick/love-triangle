/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let i = 1;
    const loveObj = (arr) =>
        Object.assign({}, ...arr.map(item => ({[i++]: item})));
    let lovers = loveObj(preferences);

    let countTriangles = 0;

    for (let j = 0; j < preferences.length; j++) {
        let man = preferences[j];
        let man2 = lovers[man];
        let man3 = lovers[man2];

        if ((man3 === (j + 1)) && man !== man2) {
            countTriangles++;
            delete lovers[j + 1];
            delete lovers[man];
            delete lovers[man2];
        }
    }

    return countTriangles;
};


//I: an array of integers
//O: a single integer representing largest difference between two elements where i is less than j AND a[i] is less than a[j]

function maxDifference(a) {
    let maxDiff = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (j !== i && i < j && a[i] < a[j]) {
                let diff = a[j] - a[i];
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
        }
    }
    if (maxDiff === 0) {
        maxDiff = -1;
    }
    return maxDiff;
}
//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
console.log(getShortestWord(danishWords)); // returns 'ø'

function getShortestWord (words) {
    return words.reduce((w1, w2) => w1.length < w2.length ? w1 : w2);
}


//Find and count the Danish letters
const danishString = "Jeg har en blå bil";
console.log(getLettersCount(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(getLettersCount(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

function getLettersCount(string) {
    const letters = ["å", "ø", "æ"];
    let count = {"total": 0};
    for (const letter of string.split("")) {
        if (letters.includes(letter)) {
            if (!count[letter]) {
                count[letter] = 0;
            }
            count[letter]++;
            count.total++;
        }
    }
 return count;
}
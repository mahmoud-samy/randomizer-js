var randomizer = require('../src/index');

var rand = randomizer('my-seed');
console.log(rand.next());               // Always 12
console.log(rand.randomLetter())        // Always v
console.log(rand.randomWord())          // Always zzxulda
console.log(rand.randomSentence())      // Always pcheigs bobsdgzl cdqtbaxu
console.log(rand.randomParagraph())     // Always osij flosnqe paa. eesrdr ehwgqcu nuv. cwehk ue knpovxfer uxx...
var dob = rand.randomDoB()
console.log(dob)                        // Always 1949-06-04T22:00:00.000Z
console.log(rand.randomDoD(dob))        // Always 1969-07-25T22:00:00.000Z
var ar = [410,120,360,470,850]
console.log(rand.randomArrayElement(ar))// Always 120
console.log(rand.randomFemaleName())    // Always Clarice
console.log(rand.randomMaleName())      // Always Ellis
console.log(rand.randomBoolean())       // Always true
console.log(rand.randomPerson())
// Always 
// {
//     isMale: true,
//     firstName: 'Bennie',
//     lastName: 'Valentine',
//     dob: 1966-03-10T22:00:00.000Z,
//     dod: 1993-03-12T22:00:00.000Z 
// }
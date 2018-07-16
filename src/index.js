'use strict';

const seedrandom = require('seedrandom');

const randomizer = (seed) => {
    const rng = seedrandom(seed);
    const next = (a, b) => {
        a = a === undefined ? 100 : a
        b = b === undefined ? 0 : b
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        return Math.floor((rng() * (max - min)) + min)
    };
    const femaleNameAr = ["Mai", "Birgit", "Arletha", "Reda", "Isabell", "Jesenia", "Malorie", "Lupita", "Mollie", "Venessa", "Tandra", "Lanita", "Dodie", "Dell", "Margy", "Florida", "Bev", "Hang", "Lavone", "Lashanda", "Charmain", "Syble", "Tai", "Irmgard", "Colette", "Candyce", "Rubie", "Shirl", "Lu", "Miesha", "Ladawn", "Toshia", "Maisha", "Emilee", "Lynsey", "Merri", "Roni", "Elia", "Ashli", "Piper", "Trula", "Ariane", "Lin", "Tanisha", "Sharon", "Libbie", "Kandra", "Lilia", "America", "Gussie", "Lida", "Francie", "Rosalind", "Annabel", "Klara", "Chasidy", "Zelma", "Rikki", "Mia", "Magda", "Elwanda", "Lan", "Jacquelyn", "Torie", "Renna", "Bok", "Jesusa", "Roseanna", "Jacklyn", "Maple", "Patti", "Kandis", "Nickole", "Oda", "Nichole", "Miriam", "Kaci", "Particia", "Ramona", "Wenona", "Tabitha", "Twanna", "Nikki", "Nidia", "Mathilda", "Emelina", "Stephanie", "Tatiana", "Shayna", "Ara", "Melina", "Twana", "Nita", "Chau", "Elissa", "Candyce", "Sabrina", "Caridad", "Margarett", "Fredda", "Sherley", "Etsuko", "Katheryn", "Izola", "Gwyn", "Eliana", "Teofila", "Myrtie", "Sebrina", "Camelia", "Zulema", "Katrice", "Terri", "Marketta", "Lucille", "Herlinda", "Shawana", "Kristi", "Ada", "Lona", "Aletha", "Emilee", "Sondra", "Ariane", "Brianne", "Keira", "Kathi", "Debbra", "Cecille", "Edra", "Mayme", "Mozella", "Delcie", "Hilaria", "Valeria", "Georgetta", "Dannette", "Kari", "Hwa", "Syreeta", "Elvia", "Dulcie", "Hedy", "Jane", "Rossana", "Tamela", "Latosha", "Lessie", "Lillia", "Taren", "Jaymie", "Caryl", "Adina", "Chae", "Winifred", "Manuela", "Teressa", "Vernita", "Leanna", "Delmy", "Alda", "Crystle", "Esta", "Deena", "Patria", "Joana", "Agripina", "Katrice", "Winona", "Darleen", "Shandi", "Alysa", "Melodie", "Lakiesha", "Zenaida", "Sofia", "Doreatha", "Delena", "Zina", "Lise", "Isabell", "Elizebeth", "Elyse", "Rae", "Izola", "Nancie", "Arline", "Ina", "Candance", "Clarice", "Sherron", "Sona", "Carolyne", "Diana", "Ka", "Toshiko", "Ellena", "Tamie", "Rebekah", "Julienne", "Layne", "Azalee", "Millie", "Basilia", "Alessandra", "Emilee", "Mahalia", "Dodie", "Shanice", "Emerita", "Drema", "Tatiana", "Kelsi", "Gracia", "Corie", "Belinda", "Valorie", "Lore", "Wilhemina", "Corazon", "Dorcas", "Janeen", "Sherryl", "Ludie", "Jaye", "Venessa", "Laree", "Anika", "Kalyn", "September", "Nyla", "Palma", "Heike", "Sebrina", "Emeline", "Claudine", "Melodie", "Eliza", "Jessika", "Launa", "Lettie", "Jenice", "Ivelisse", "Vivian", "Julie", "Tina", "Sabine", "Brittani", "Emiko", "Wilhemina", "Hyun", "Shawna", "Angelic", "Jamila", "Audie", "Alena", "Charlesetta", "Lorraine", "Jolie", "Machelle", "Mae", "Luana", "Sheilah", "Karla", "Shellie", "Lidia", "Ilene", "Vanna", "Suzan", "Lanelle", "Carole", "Kay", "Shirlee", "Loni", "Rosana", "Agueda", "Malika", "Lu", "Billye", "Beverly", "Ima", "Mignon", "Beatris", "Glennie", "Corina", "Janette", "Estella", "Twila", "Barbra", "Danika", "Audry", "Camellia", "Cathey", "Patrice", "Shona", "Rachel", "Georgette", "Tiffaney", "Janel", "Kasha", "Patti", "Haley", "Shan", "Olga", "Candelaria", "Linsey", "Elvira", "Takako", "Corina", "Darcy", "Nana", "Pandora", "Harriette", "Tonisha", "Abbey", "Portia", "Maybelle", "Dayna", "Alline", "Audrea", "Lauretta", "Yessenia", "Danica", "Liane", "Lakeshia", "Nikita", "Nichol", "Emelina", "Apryl", "Lizbeth", "Jamika", "Drucilla", "Latricia", "Liberty", "Evia", "Chelsey", "Macy", "Lizzie", "Lorraine", "Dorla", "Mabel", "Brandy", "Shaunta", "Joni", "Magnolia", "Bronwyn", "Vonda"];
    const maleNameAr = ["Kareem", "Jayson", "Humberto", "Ashley", "Johnathan", "Dustin", "Micah", "Lucio", "Ali", "Ernesto", "Anibal", "Gerry", "Raymundo", "Jeromy", "Santiago", "Nelson", "Genaro", "Hipolito", "Donny", "Damien", "Robert", "Eli", "Craig", "Merlin", "Rodolfo", "Johnie", "Seymour", "Dion", "Lindsey", "Mauro", "Napoleon", "Isaiah", "Monty", "Arturo", "Denis", "Clifton", "Keneth", "Elvis", "Edmund", "Emory", "Alonzo", "Jefferson", "Leonardo", "Maxwell", "Sol", "Lenard", "Leon", "Wesley", "Delbert", "Jospeh", "Alvaro", "Dirk", "Edwardo", "Ashley", "Wally", "Carson", "Wyatt", "Mike", "Jonah", "Arlie", "Adolph", "Bennie", "Raymond", "Herbert", "Millard", "Thomas", "Darius", "Emmitt", "Charlie", "Johnnie", "Jared", "Percy", "Garth", "Al", "Robby", "Clint", "Berry", "Clark", "Vicente", "Beau", "Harley", "Elwood", "Raleigh", "Zackary", "Kraig", "Trenton", "Giuseppe", "Eugenio", "Samual", "Federico", "Russell", "Sean", "Theodore", "Barrett", "Salvatore", "Lino", "Felipe", "Jeromy", "Kermit", "Rhett", "Manual", "Marvin", "Lyndon", "Florencio", "Sandy", "Rufus", "Vince", "Bennie", "Conrad", "Jewel", "Thomas", "Otha", "Dillon", "Sidney", "Carroll", "Shannon", "Dannie", "Ted", "Garry", "Tyrell", "Quintin", "Kelvin", "Irvin", "Santiago", "Orville", "Jacob", "Tyree", "Seymour", "Anibal", "Anderson", "Tim", "Normand", "Chester", "Wilber", "Clemente", "Andrew", "Buford", "Salvatore", "Asa", "Scottie", "Leonel", "Dylan", "Houston", "Lamont", "Aurelio", "Merle", "Herbert", "Owen", "Noah", "Jacques", "Zack", "Mitchel", "Russell", "Alton", "Carmine", "Wilford", "Howard", "Cordell", "Bradly", "Mohamed", "Jewell", "Huey", "Jerome", "Bryan", "Eugenio", "Joesph", "Nicky", "Walker", "Marlin", "Ruben", "Rich", "Deon", "Renaldo", "Max", "Johnie", "George", "Ferdinand", "Booker", "Dean", "Chet", "Rickie", "Floyd", "Sterling", "Garth", "Hobert", "Lavern", "Samual", "Hector", "Loyd", "Merle", "Reed", "Francis", "Hans", "Jamel", "Rupert", "Marcus", "Dino", "Emanuel", "Tod", "Lucio", "Lawerence", "Sydney", "Kraig", "Sung", "Leonardo", "Rueben", "Felipe", "Brendon", "Jackson", "Florentino", "Teddy", "Stanley", "Ellis", "Angelo", "King", "Lee", "Domenic", "Grant", "Basil", "Jarred", "Merlin", "Andrea", "Clair", "Darrick", "Eddie", "Alden", "Hayden", "Silas", "Roger", "Chris", "Wm", "Bradley", "Greg", "Tyler", "Dillon", "Marlon", "Otto", "Damon", "Rene", "Antony", "Mckinley", "Ellsworth", "Hank", "Columbus", "Courtney", "Ahmad", "Philip", "Santo", "Rupert", "Michel", "Jim", "Danilo", "Sandy", "Luigi", "Kelley", "Karl", "Marcelino", "Pat", "Frank", "Cristobal", "Mason", "Lauren", "Young", "Tracey", "Fredrick", "Donte", "Robt", "Foster", "Reinaldo", "Adalberto", "Rickey", "Horacio", "Jarvis", "Arden", "Tyler", "Asa", "Anthony", "Hugo", "Lloyd", "Damon", "Rubin", "Porter", "Kareem", "Andre", "Napoleon", "Alan", "Brice", "Bob", "Deandre", "Anibal", "Lesley", "Merle", "Fritz", "Vito", "Hung", "Jc", "Tyson", "Jerome", "Berry", "Eduardo", "Wesley", "Randal", "Wendell", "Fredrick", "Taylor", "Brice", "Adan", "August", "Jarrod", "Stanton", "Bo", "Dante", "Cristopher", "Silas", "Eldridge", "Whitney", "Brandon", "Horace", "Charlie", "Cortez", "Wilmer", "Jonathon", "Numbers", "Isaac", "Gail", "Vince", "Emil", "Danilo", "Burton", "Quincy", "Man", "Beau", "Carroll", "Teodoro", "Manual", "Darrel", "Marvin", "Nolan", "Galen", "Arlie", "Johnnie", "Lazaro", "Merle", "Allen", "Salvador", "Hobert", "Gregg", "Faustino", "Ezekiel", "Rodrick", "Kendrick", "Carter", "Abel", "Ernie", "Hung", "Oscar", "Brian", "Rufus", "Joel", "Boyd", "Lyndon", "Malik", "Antone", "Darrell", "Gilbert", "Jimmy", "Sol", "Jamie", "Rob", "Herman", "Cliff", "Clair", "Jonas", "Marcelo", "Sanford", "Jasper", "Lamont", "Stewart", "Sid", "Patrick", "Cyril", "Dalton", "Eduardo", "Rey", "Luis", "Tyrone", "Paul", "Britt", "Odell", "Erick", "Wilson", "Harold", "Grover", "Moses", "Ambrose", "Leopoldo", "Chet", "Otis", "Dick", "Truman", "Franklin", "Max", "Theodore", "Ellsworth", "Darrel", "Ronny", "Philip", "Chance", "Colton", "Jeremiah", "Vicente", "Kory", "Jared", "Juan", "Horace", "Harlan", "Hilton", "Morris", "Tom", "Lonny", "Oswaldo", "Nathanael", "Blake", "Hugo", "Darrin", "Octavio", "Alfredo", "Jacinto", "Elijah", "Ike", "Bradly", "Raymond", "Valentine", "Salvador", "Christian", "Milford", "Dewayne", "Taylor", "Dominick", "Rex", "Stacey", "Dominique", "Raleigh", "Luis", "Pasquale", "Alejandro", "Adolfo", "Randy", "Abdul", "Efrain", "Damon", "Abram", "Eddy", "Jewell", "Harold", "Ferdinand", "Arnoldo", "Brad", "Allen", "Fritz", "Charley", "Bruce", "Edward", "Linwood", "Gerald", "Ira", "Benedict", "Alfonzo", "Leon", "Randy", "Booker", "Harrison", "Cyril", "Trent", "Chi", "Preston", "Ted", "Sherwood", "Jim", "Doug", "Delbert", "Juan", "Benny", "Russ", "Tanner", "Stacy", "Trevor", "Daryl", "Rigoberto", "Rupert", "Dale", "Cole", "Lanny", "Rodney", "Kent", "Hans", "Courtney", "Eugenio", "Gaston", "Giovanni"];
    const alphabet = "abcdefghijklmnopqrstuvwyxzeeeiouea";
    const randomLetter = () => alphabet[next(alphabet.length)];
    const randomWord = () => Array.from({ length: next(2, 10) }, randomLetter).join("")
    const randomSentence = () => Array.from({ length: next(3, 8) }, randomWord).join(" ")
    const randomParagraph = () => Array.from({ length: next(30, 80) }, randomSentence).join(". ")
    const randomDoB = () => new Date(new Date().getFullYear() - next(20, 70), next(1, 12), next(1, 28))
    const randomDoD = (dob = randomDoB()) => new Date(next(dob.getFullYear() + 18, new Date().getFullYear() - 1), next(1,12), next(1,28))
    const randomArrayElement = (ar = []) => 
    ar[next(0, ar.length)]
    const randomFemaleName = () => randomArrayElement(femaleNameAr)
    const randomMaleName = () => randomArrayElement(maleNameAr)
    const randomBoolean = () => next() % 2 === 0 ? true : false;
    const randomPerson = () => {
        let isMale = randomBoolean();
        let dob = randomDoB();
        return {
            isMale,
            firstName: isMale ? randomMaleName() : randomFemaleName(),
            lastName: randomMaleName(),
            dob,
            dod: next() > 90 ? randomDoD(dob) : undefined
        };
    }

    return {
        next,
        randomLetter,
        randomWord,
        randomSentence,
        randomParagraph,
        randomDoB,
        randomDoD,
        randomArrayElement,
        randomFemaleName,
        randomMaleName,
        randomBoolean,
        randomPerson
    }
};

// function getAllMethods(object) {
//     return Object.getOwnPropertyNames(randomizer('hello')).filter(function (property) {
//         return typeof object[property] == 'function';
//     });
// }
// const debugRandomizer = () => {
//     let rand = randomizer();
//     getAllMethods(rand).forEach(fname => {
//         let result = rand[fname].apply(rand);
//         console.log(fname, result)
//     })
// }

// debugRandomizer()

module.exports = randomizer;
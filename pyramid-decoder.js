const { readFile } = require('fs/promises');

function decode(messageFile){
    readFile(messageFile, "utf-8").then((file) => {
        return file.split(`\n`)
    }).then((wordArray) => {
        wordLookupObject = {};
        wordArray.forEach((word) => {
            const splitWord = word.split(" ");
            wordLookupObject[splitWord[0]] = splitWord[1];
        });
        console.log(`${wordLookupObject[1]} ${wordLookupObject[3]} ${wordLookupObject[6]}`);
        return `${wordLookupObject[1]} ${wordLookupObject[3]} ${wordLookupObject[6]}`;
    })

    // const wordArray = fileContents.split(`\n`);
    // const wordObj = {};
    // wordArray.forEach((word) => {
    //     const splitWord = word.split(" ");
    //     wordObj[splitWord[0]] = splitWord[1];
    // })
    // console.log(`${wordObj[1]} ${wordObj[3]} ${wordObj[6]}`)
    // return `${wordObj[1]} ${wordObj[3]} ${wordObj[6]}`
}

module.exports = { decode }
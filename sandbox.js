"use strict";

const str = `Yesterday,12345 all 1my tr23oubles seemed so far away.
Now it looks as though they're here to stay.
Oh, I believe in yesterday.
Suddenly,
I'm noooot half the man I used to be,
There's a shadow hanging over me,
Oh, yesterday came suddenly.
Why she had to go
I don't know she wouldn't say.
I said something wrong,
Now I long for yesterday.
Yesterday, love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.
Why'd she had to go
I don't know she wouldn't say.
I said something wrong,
Now I long for yesterday.
Yesterday, love was such an easy game to play.`;

const regex1 = new RegExp("^[A-Z].*\\.$", "g");
const regex2 = /\b[A-Z][a-z]*\b/g;
// console.log(regex2.test(str));



const separator = /[,.!]?\s/;

const regexSearch = /\b[A-Z]{9}\b/gi;

const regexSearch2 = /\b(\d+)([a-z]+)\b/gi;
// const newReplece2 = '@@';
const newStr3 = str.replace(regexSearch2, '');
// console.log(newStr3);


const newReplece = '@@';
const newStr1 = str.replace(regexSearch, newReplece);
// console.log(newStr1);
const newStr2 = str.replace(regexSearch2,'');
// console.log(newStr2);

const arrWord = str.split(separator);
// console.log(arrWord);

const regex4Letter = /\b[A-Z]{4}\b/gi;
const arrWord4Letter = str.match(regex4Letter);
const arrWord4LetterIterator =str.matchAll(regex4Letter)
// console.log(...arrWord4LetterIterator);


// console.log();

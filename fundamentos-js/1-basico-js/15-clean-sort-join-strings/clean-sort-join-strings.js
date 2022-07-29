/*
 * @author Gabriel Moura Guimarães |
 */

palavra1 = "Javascript";
palavra2 = "Countryside";
palavra3 = "Downtown";

str1 = String;
str2 = String;


const cleanSortJoinStrings = (str1, str2) => {
    return (str1.replace('%','').replace(/^\w/i,str1[0].toUpperCase()) + str2.replace('%','').split('').reverse().join(''))
};


//PALAVRA 1
str1 = 'java';
str2 = 'tpi%rcs';
console.log("Resposta: ", cleanSortJoinStrings(str1, str2));


//PALAVRA 2
str1 = 'c%ountry';
str2 = 'tpi%rcs';
cleanSortJoinStrings(str1, str2);
console.log("Resposta: ", cleanSortJoinStrings(str1, str2));


//PALAVRA 3
str1 = 'down';
str2 = 'nw%ot';
cleanSortJoinStrings(str1, str2);
console.log("Resposta: ", cleanSortJoinStrings(str1, str2));
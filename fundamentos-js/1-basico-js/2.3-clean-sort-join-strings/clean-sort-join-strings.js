/*
 * @author Gabriel Moura Guimarães |
 */

palavra1 = "Javascript";
palavra2 = "Countryside";
palavra3 = "Downtown";

str1 = String;
str2 = String;


const cleanSortJoinStrings = (str1, str2) => {
    return (str1.replace('%', '').replace(/^\w/i, str1[0].toUpperCase()) + str2.replace('%', '').split('').reverse().join(''))
};


console.log(cleanSortJoinStrings('java', 'tpi%rcs'));       //Esperado: 'Javascript'
console.log(cleanSortJoinStrings('c%ountry', 'tpi%rcs'));   //Esperado: 'Countryside'
console.log(cleanSortJoinStrings('down', 'nw%ot'));         //Esperado: 'Downtown'
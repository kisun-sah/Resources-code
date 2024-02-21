/**
 * In this class we Explain  about more topic:- 
 * string 
 * stringmethod
 * Regex
 */



//Templet string

const tem ={name:"Iphone",brand:"Apple",price:120000};

const str = `The name of the product is ${tem.name} which belong to ${tem.brand} brand with a price ${tem.price}`;

console.log(str);

// string method 

const str1= "This is a new string"

//substring       ......................  ........................... ..............................  ............................... ..........

console.log(str1.substring(1,6)); //[1 ,6)] index .6 is not included
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

const arr = str1.split

console.log(str1.split(''));
console.log("..................................");
console.log(str1.split(""));
console.log("..................................");
console.log(str1.split());

console.log("..................................");
console.log(str1.charAt(2));
console.log(str1.at(2));

console.log("..................................");

const result  = str1.concat("  and this is a brand new string ");
console.log(result);


console.log("..................................");

const s = "  .  rljhgawfler     " //

console.log(s.trim());

console.log("..................................");


const y = "this is a another data";
console.log(y.replace("",""));
console.log(y.split(" ") .join(" "));


//Regex Introduce

/**
 * 

Regular expressions are sequences of characters that define a search pattern. They are used for pattern matching within strings. Here's a brief explanation of some common regex symbols and their meanings:

^: Anchors the regex at the start of the string.
$: Anchors the regex at the end of the string.
.: Matches any single character.
*: Matches zero or more occurrences of the preceding character or group.
+: Matches one or more occurrences of the preceding character or group.
?: Matches zero or one occurrence of the preceding character or group.
[]: Represents a character class, matching any single character within the brackets.
|: Acts like a logical OR, allowing for alternative patterns.
Now, let's go through a simple example:

Suppose you want to match valid email addresses. An email address typically consists of characters, numbers, dots, and an "@" symbol. Here's a basic regex for this:

regex
Copy code
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
Explanation:

^: Start of the string.
[a-zA-Z0-9._%+-]+: Matches one or more occurrences of letters, digits, dots, underscores, percent signs, plus signs, or hyphens.
@: Matches the "@" symbol.
[a-zA-Z0-9.-]+: Matches one or more occurrences of letters, digits, dots, or hyphens (domain name).
\.: Escapes the dot to match a literal dot.
[a-zA-Z]{2,}: Matches two or more occurrences of letters (top-level domain).
$: End of the string.
So, this regex would match strings that adhere to the basic structure of an email address. Keep in mind that this is a simplified example, and real-world email validation can be more complex due to various standards and edge cases.





 */


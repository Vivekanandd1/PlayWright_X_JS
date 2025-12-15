let fname = "Vatsal"
console.log(typeof fname)
console.log(fname)

console.log("Length of String: " + fname.length)

console.log("Character at index 2: " + fname.charAt(2))         
console.log("Index of 't': " + fname.indexOf('t'))

console.log("Substring from index 1 to 4: " + fname.substring(1,4)) 
console.log("Replace 'V' with 'B': " + fname.replace('V','B'))
console.log("Convert to Uppercase: " + fname.toUpperCase())
console.log("Convert to Lowercase: " + fname.toLowerCase())     
console.log("Concatenate with ' Patel': " + fname.concat(' Patel'))
console.log("Trimmed String: " + "   " + fname + "   ".trim())  
console.log("Split by 'a': " + fname.split('a'))    
console.log("Includes 'ts': " + fname.includes('ts'))
console.log("Starts with 'Va': " + fname.startsWith('Va'))
console.log("Ends with 'al': " + fname.endsWith('al'))      
console.log("Character code at index 3: " + fname.charCodeAt(3))
console.log("Index of last 'a': " + fname.lastIndexOf('a')) 
console.log("Repeat string 3 times: " + fname.repeat(3))
console.log("Slice from index 1 to 4: " + fname.slice(1,4))

console.log("Search for 'ts': " + fname.search('ts'))
console.log("Value of string: " + fname.valueOf())
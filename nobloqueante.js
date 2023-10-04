
var fs = require("fs");
console.log("\nAbriendo el archivo"); 

var content = fs.readFile("el_quijote.txt" , // Quitar Sync para trabajar de manera asincrona
"utf8", function(error,content){
    console.log(content);
}); 


console.log("\nHaciendo otra cosa\n");
console.log(process.uptime());
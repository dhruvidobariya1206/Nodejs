const fs=require('fs');
const path = require('path');
const readline = require("readline-sync");

// console.log(__filename);
const folPath = path.join(__dirname,'Files');
// const filePath = '${folPath}\Current-File.txt';

console.log("List");
console.log("1. New\n2. Write\n3. Update\n4. Rename\n5. Delete\n6. View All");

// const input = process.argv;
console.log("Enter Your Choice")
let choice = Number(readline.question());
// console.log(a);

if(choice==1) {
    console.log("Enter file name to be created")
    const fileName = String(readline.question());
    // const filePath = `${folPath}\${fileName}`;
    // fs.writeFileSync(filePath,'test');
    fs.open(fileName,'w+',function (err,f) {
        if (err)
            console.log(err);
        if(f)
            console.log("File created");
    });
}
else if(choice==2) {
    console.log("Enter file name to be written")
    const fileName = String(readline.question());
    console.log("Enter text")
    const text = String(readline.question());
    fs.write(fileName,text,
        {
            encoding: "utf8",
            flag: "w",
            mode: 0o666
        },
        function (err,f) {
            if (err)
                console.log(err);
            if(f)
                console.log("File Written");
        })
}
else if(choice==3) {

}
else if(choice==4) {

}
else {
    console.log("Invalid Choice");
}

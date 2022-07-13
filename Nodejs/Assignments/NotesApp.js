const fs=require('fs');
const path = require('path');
const readline = require("readline-sync");


const folPath = path.join(__dirname,'Files');


console.log("List");
console.log("1. New\n2. Write\n3. Update\n4. Rename\n5. Delete\n6. Read file\n7. View All");


let choice = Number(readline.question("Enter Your Choice : "));


if(choice==1) {
    
    const fileName = String(readline.question("Enter file name to be created : "));
    const file = `${folPath}/${fileName}`;
    
    fs.open(file,'w+',function (err,f) {
        if (err)
            console.log(err);
        if(f)
            console.log("File created");
    });
}
else if(choice==2) {
    
    const fileName = String(readline.question("Enter file name to be written : "));
    const file = `${folPath}/${fileName}`;
    const text = String(readline.question("Enter text : "));
    fs.writeFile(file, text, err => {
        if(err) {
            console.log(err)
        }
        else {
            console.log("File written");
        }
    })
}
else if(choice==3) {
    const fileName = String(readline.question("Enter file name to be written : "));
    const content = '\n'+String(readline.question("Enter text : "));
    const file = `${folPath}/${fileName}`;
    fs.appendFile(file, content, err => {
        if (err) {
          console.error(err);
        }
        else {
            console.log("File appended");
        }
      });
}
else if(choice==4) {
    const fileName = String(readline.question("Enter file name to be renamed : "));
    const newName = String(readline.question("Enter new file : "));
    const file = `${folPath}/${fileName}`;
    const newfile = `${folPath}/${newName}`;

    fs.rename(file, newfile,(err)=>{
            if(err){
              console.log('Error renaming file...');
              return;
            }
            else console.log("File is renamed...");
          });

}
else if(choice==5) {
    const fileName = String(readline.question("Enter file name to be written : "));
    const file = `${folPath}/${fileName}`;
    fs.unlinkSync(file);
}
else if(choice == 7) {
    fs.readdir(folPath, (err,files)=>{
        if(err){
          console.log('Error...');
          return;
        }
        else{
          files.forEach((fileName)=>{
            console.log(fileName);
          });
        }
      });
}
else {
    console.log("Invalid Choice");
}

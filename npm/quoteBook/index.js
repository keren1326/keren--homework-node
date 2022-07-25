const nationality = require("./api/nationality");
const args=process.argv.slice(2);
const command=args[0];
const fname=args[1]
switch (command) {
    case "name":
      
      nationality(command,fname)
        break;
case "author":
    author(client)
    break
    default: 
        break;
}
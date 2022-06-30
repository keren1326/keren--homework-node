const args=process.argv.slice(2)
const command =args[0];
const read= require("./api/read")
const create= require("./api/create");
const remove= require("./api/delete");
const update= require("./api/uptdate");

//console.log('command', command);
console.log('args', args);
const id =args[1];
const name =args[2]
const price = args[3]
const num =args [1];
const key =args[2];
const value =args[3]
switch (command) {
    case "read":
        read()
        break;
    case "create":
            create(id,name,price)
         break;
    case "delete":
            remove(num);
        break;
    case "update":
        update(num , key ,value)
        break;
    default:
        throw new Error ("sorry wrong command ! ")
        break;
}
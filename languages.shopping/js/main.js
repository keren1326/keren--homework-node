const greetArb=require("../arb")
const greetFr=require("../fr")
const greetHe=require("../he")

const args=process.argv.slice(2)
const fname =args[0]
const language = args[1]


// console.log( "fname",fname)
// console.log( "language ",language)

switch (language) {
    case "fr":
        greetFr(fname)
        break;
        case "he":
            greetHe(fname)
            break;
            case "ab":
                greetArb(fname)
                break;
    default:
        throw new Error("in don't speak this language")
        break;
}
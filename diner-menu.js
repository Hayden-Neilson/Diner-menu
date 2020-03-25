// function myentree() {
let entreeName = "";
let sideName = "";
let totalEntrees = 0;
let totalSides = 0;
let finalTotal = 0;
let waitressComment = "";

const userEntree = () => {
    const entreePrices = [12, 7, 15];
    entreeSel = prompt("Please select an entree: ");

    switch (entreeSel) {
        case "entreeOne":
            entreeName = "Chicken Fettuccine Alfredo";
            waitressComment = `Excellent choice! chicken is good for your heart, the price is $${entreePrices[0]}`;
            totalEntrees += entreePrices[0];
            break;

        case "entreeTwo":
            entreeName = "Bowl of cereal of your choice";
            waitressComment = `Excellent choice! cereal is good for your heart, the price is $${entreePrices[1]}`;
            totalEntrees += entreePrices[1];
            break;

        case "entreeThree":
            entreeName = "Chicken Pot Pie";
            waitressComment = `Excellent choice! chicken pot pie is good for your heart, the price is $${entreePrices[2]}`;
            totalEntrees += entreePrices[2];
            break;

        default:
            console.log("You need to choose the correct entree");
    }

    return totalEntrees;
};

const userSide = () => {
    const sidePrices = [6.5, 9.95];
    sideSel = prompt("Please select a side: ");

    switch (sideSel) {
        case "sideOne":
            sideName = "superior sweet potatoe fries -";
            waitressComment += `. Excellent side choice! french fries is good for your heart, the price is $${sidePrices[0]}`;
            totalSides += sidePrices[0];
            break;

        case "sideTwo":
            sideName = "Fried Macoroni and Cheese balls -";
            waitressComment += `. Excellent side choice! macaroni is good for your heart, the price is $${sidePrices[1]}`;
            totalSides += sidePrices[1];
            break;

        default:
            console.log("You need to choose the correct side");
    }

    return totalSides;
};

finalTotal = userEntree() + userSide();

console.log("The entree that you picked is: ", entreeName);
console.log("The side that you picked is: ", sideName);
console.log(`The waitress says this comment: \n${waitressComment}`);
console.log(`The final total would be: ${finalTotal}`);

// var waitress;
// var entreeTwo = prompt("please select a entree #");
// switch (entreeTwo) {
//   case "Toast":
//     waitress =
//       "Excellent choice! cereal is good for your heart, and which side can we get you today?";
//     console.log(waitress);
//     break;
//     var sideTwo =
//   case "fried macoroni n cheese balls":
//     waitress = "Great choice those are fantastic!";
//     break;
//   default:
//     var total = prompt("your total will be $16.95")
//     waitress = "your total will be $16.95";
//     break;
// }
// var waitress;
// var entreeOne = prompt("please select an entree and a side");
// switch (entreeOne) {
//   case "chicken Fettuccine alfredo":
//     waitress = "Excellent choice! that choice has so much flavor!,";
//     break;
//   case "superior sweet potatoe friess":
//     waitress = "Great choice those are my favorite!";
//     break;
//   default:
//     waitress = "your total will be $18.50";
//     break;
// }
// var waitress;
// var entreeThree = prompt("please select an entree and a side");
// switch (entreethree) {
//   case "Chicken Pot Pie":
//     waitress = "Excellent choice! on the entree!";
//     break;
//   case "fried macoroni n cheese balls":
//     waitress = "reat choice those are my favorite!";
//     break;
//   default:
//     waitress = "your total will be $24.95";
//     break;
// }














// var waitress;
// var entreeTwo = prompt("please select a entree #");
// switch (entreeTwo) {
//     case "Fruity Pebbles, Honeycomb, Frosted Flakes, Honey Nut Cherrioes, Crispix, Lucky Charms, Cookie, Crisp, Life, Toast":
//         waitress = "Excellent choice! cereal is good for your heart, and which side can we get you today?";
//         break;
//     case "fried macoroni n cheese balls":
//         waitress = "Great choice those are fantastic!";
//         break;
//     default:
//         waitress = "your total will be $16.95";
//         break;
// }
// var waitress
// var entreeOne = prompt("please select an entree and a side")
// switch (entreeOne) {
//     case "chicken Fettuccine alfredo":
//         waitress = "Excellent choice! that choice has so much flavor!,";
//         break;
//     case "superior sweet potatoe friess":
//         waitress = "Great choice those are my favorite!";
//         break;
//     default:
//         waitress = "your total will be $18.50";
//         break;
// }
// var waitress
// var entreeThree = prompt("please select an entree and a side")
// switch (entreethree) {
//     case "Chicken Pot Pie":
//         waitress = "Excellent choice! on the entree!";
//         break;
//     case "fried macoroni n cheese balls":
//         waitress = "reat choice those are my favorite!";
//         break;
//     default:
//         waitress = "your total will be $24.95";
//         break;
// } 

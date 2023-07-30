// Paste contents in
// https://www.typescriptlang.org/play
function calculateTotalPrice(product, quantity, discount) {
    var priceWithoutDiscount = product.unitPrice * quantity;
    var discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}
function playground() {
    var unitPrice;
    // unitPrice = "Table";
    var flag = false;
    // flag = "table";
    //let total :string = getTotal("1", 2, 3.2);
    var today = new Date();
    //today.addMonths(2);
    var flag2; // 'any' type
}
function misc() {
    fetch("https://swapi.dev/api/people/1")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        //.then((data:unknown) => {
        console.log("firstName", data.firstName);
    });
    fetch("https://swapi.dev/api/people/1")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (isCharacter(data)) {
            console.log("name", data.name);
        }
    });
}
function isCharacter(character) {
    return "name" in character;
}
function getTotal(unitPrice, quantity, discount) {
    var priceWithoutDiscount = unitPrice * quantity;
    var discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}
function logText(text) {
    console.log(text);
}
function foreverTask(taskName) {
    while (true) {
        console.log("Doing " + taskName + " over and over again ...");
        //break;
    }
}
var table = {
    name: "Table",
    purchase: function (quantity) {
        return console.log("Purchased " + quantity + " tables");
    },
};
table.purchase(4);
//# sourceMappingURL=calculateTotalPrice.js.map
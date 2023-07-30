// Paste contents in
// https://www.typescriptlang.org/play
function calculateTotalPrice(
    product: { name: string; unitPrice: number },
    quantity: number,
    discount: number
){
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

function playground() {

    let unitPrice: number;
    // unitPrice = "Table";

    let flag = false;
    // flag = "table";
    //let total :string = getTotal("1", 2, 3.2);

    let today = new Date();
    //today.addMonths(2);

    let flag2; // 'any' type
}

function misc() {
    fetch("https://swapi.dev/api/people/1")
        .then((response) => response.json())
        .then((data) => {
        //.then((data:unknown) => {
            console.log("firstName", data.firstName);
        });

    fetch("https://swapi.dev/api/people/1")
        .then((response) => response.json())
        .then((data: unknown) => {
            if (isCharacter(data)) {
                console.log("name", data.name);
            }
        });
}

function isCharacter(character: any): character is { name: string } { // type predicate
    return "name" in character;
}

function getTotal(
    unitPrice: number,
    quantity: number,
    discount: number
): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

function logText(text: string) {
    console.log(text);
}

function foreverTask(taskName: string): never {
    while (true) {
        console.log(`Doing ${taskName} over and over again ...`);
        //break;
    }
}

export const Playground = () => {

    const total1 = calculateTotalPrice(
        {
            name: "omelette",
            unitPrice: 7
        },2, 10);

    runBasic();
    runMisc();
    runArrayPlay();

    //let total: string = getTotal(500, "one", 0.1);

    if (false) {
        foreverTask("well.. fuck!");
    }

    return (
        <>
            <div>
                <span> "Omelettes:"  + {total1}</span>
            </div>
        </>
    );
};

function calculateTotalPrice(
    product: { name: string; unitPrice: number },
    quantity: number,
    discount: number
){
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

function foreverTask(taskName: string): never {
    while (true) {
        console.log(`Doing ${taskName} over and over again ...`);
        //break;
    }
}

enum Level {
    Low,
    Medium,
    High
}

enum AnotherLevel {
    Low = 1,
    Medium = 2,
    High = 3
}

enum StringLevel {
    Low = "L",
    Medium = "M",
    High = "H"
}

type UnionLevel = "H" | "M" | "L";
type RGB = "red" | "green" | "blue";

type MyNos = 1|2|3;

/*
function getTotal(
    unitPrice: number,
    quantity: number,
    discount: number
): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}
*/


class ProductClass {
    /*name?: string;
    unitPrice?: number;*/
    name = "";
    unitPrice = 0;
}

class ProductClass2 {
    name;
    unitPrice;
    constructor(name: string, unitPrice: number) {
        this.name = name;
        this.unitPrice = unitPrice;
    }
}

class ProductClass3 {
    constructor(public name: string, public unitPrice:
        number) {
        this.name = name;
        this.unitPrice = unitPrice;
    }

    getDiscountedPrice(discount: number): number {
        return this.unitPrice - discount;
    }
}

interface Order2 {
    name: string;
    unitPrice?: number;
}

interface DiscountedOrder extends Order2 {
    discount: number;
}
interface Purchase2 {(quantity: number): void}

interface Product2 {
    name: string;
    unitPrice?: number;
    purchase: Purchase2;
}

// Function
type Purchase = (quantity: number) => void;

type Order = {
    name: string;
    unitPrice?: number;
    purchase: Purchase;
};

function runBasic(){
    let unitPrice: number;
    //unitPrice = "Table";
    unitPrice = 3;
    console.log("> unitPrice: ", unitPrice); // needed because you cannot declare things and not use them

    let flag1 = false;
    // flag = "table";
    //let total :string = getTotal("1", 2, 3.2);
    console.log("> flag1: ", flag1);

    let today = new Date();
    //today.addMonths(2);
    console.log("> today: ", today);

    let flag2; // any
    flag2 = 10; // number

    console.log("> flag2: ", flag2);

    let score = "ten"
    console.log("> score: ", score, typeof score);

    let flag3 = false;
    console.log("> flag3: ", flag3);

    let table = {name: "Table", unitPrice: 450};
    console.log("> table: ", table);

    const table2: { name: string; unitPrice?: number } = {
        name: "Table",
    };
    console.log("> table2: ", table2);

    type Product = { name: string; unitPrice?: number };
    const product1: Product = { name: "Table"};
    console.log("> product1: ", product1);

    const product2: Product = { name: "Table", unitPrice: 40};
    console.log("> product2: ", product2);

    type DiscountedProduct = Product & { discount: number };
    const product3: DiscountedProduct = { name: "Omelette", unitPrice: 7, discount: 3};
    console.log("> product3: ", product3);

    let order1: Order = {
        name: "Omelette",
        purchase: (quantity) =>
            console.log(` >> Purchased ${quantity} omelettes`),
    };
    order1.purchase(4);

    let order2: DiscountedOrder = {
        name: "Omelette",
        unitPrice: 5,
        discount: 3
    };
    console.log("> order2: ", order2);

    let p0: Product2 = {
        name: "Omelette",
        purchase: (quantity) =>
            console.log(` >> Purchased ${quantity} omelettes`),
    };
    console.log("> p0: ", p0);

    let p1 = new ProductClass();
    console.log("> p1: ", p1);

    let p2 = new ProductClass2("Omellete", 3);
    console.log("> p2: ", p2);

    let p3 = new ProductClass3("Omellete", 3);
    console.log("> p3: ", p3);
    console.log("> p3.discounted: ", p3.getDiscountedPrice(2));

    let level = Level.Low;
    console.log(">> level:", level);
    level = Level.High
    console.log(">> level:", level);

    let level2 = AnotherLevel.Low;
    console.log(">> anotherLevel:", level2);
    level2 = AnotherLevel.High
    console.log(">> anotherLevel:", level2);

    let level3 = StringLevel.Low;
    console.log(">> stringLevel:", level3);
    level3 = StringLevel.High
    console.log(">> stringLevel:", level3);

    let level4 :UnionLevel = "L";
    console.log(">> unionLevel:", level4);

    let color: RGB = "red";
    //color = "yellow";
    console.log(">> color:", color);
}

function runArrayPlay(){
    const numbers1: number[] = [];
    numbers1.push(1);
    console.log("> numbers1.len:", numbers1.length);

    const numbers2: Array<number> = [];
    //numbers2.push("two");
    console.log("> numbers2.len:", numbers2.length);

    const numbers3 = [1, 2, 3];
    console.log("> numbers3.len:", numbers3.length);
    console.log("> numbers3[0]:", numbers3[0]);
    console.log("> numbers3.last:", numbers3.pop());
    console.log("> numbers3.lastIndexOf(2):", numbers3.lastIndexOf(2));
}


function runMisc(){
    fetch("https://swapi.dev/api/people/1")
        .then((response) => response.json())
        .then((data) => {
            //.then((data:unknown) => {
            console.log("> firstName: ", data.firstName);
        });

    fetch("https://swapi.dev/api/people/1")
        .then((response) => response.json())
        .then((data: unknown) => {
            if (isCharacter(data)) {
                console.log("> name: ", data.name);
            }
        });

    const x :MyNos = 1;
    console.log(">>> mytype: ", x);
}

function isCharacter(character: any): character is { name: string } { // type predicate
    return "name" in character;
}
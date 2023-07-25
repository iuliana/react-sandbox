
function Math () {

    const total1 = calculateTotalPrice(
        {
            name: "omelette",
            unitPrice: 2
        },2, 10);
    console.log(">> Omelettes cost ", total1);

    return (
        <>
            <div>
            </div>
        </>
    );
}

function calculateTotalPrice(
    product: { name: string; unitPrice: number },
    quantity: number,
    discount: number
){
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

export default Math
/** Calculate discount. */
export const calculateDiscount = async ({ price, discount }) => {
    /** If either price or discount less than zero return price. */
    if (price < 0 || discount < 0) {
        return price;
    }

    /** Calculate discounted price. */
    const discountedPrice = price - (price * discount) / 100;

    /** Return something. */
    return Number(discountedPrice.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 });
};

/** Calculate sub total. */
export const calculateSubTotal = async ({ price, discount, quantity }) => {
    /** If either price or discount less than zero return price. */
    if (price < 0 || discount < 0) {
        return price;
    }

    /** Calculate sub total. */
    const itemPrice = price - (price * discount) / 100;
    const subTotal = quantity != 0 ? itemPrice * quantity : itemPrice;

    /** Return something. */
    return Number(subTotal.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 });
};

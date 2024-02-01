/** Verify token. */
const calculateDiscount = async ({ price, discount }) => {
    /** If either price or discount less than zero return price. */
    if (price < 0 || discount < 0) {
        return price;
    }

    /** Calculate discounted price. */
    const discountedPrice = price - (price * discount) / 100;

    /** Return something. */
    return discountedPrice.toFixed(2);
};

export { calculateDiscount };

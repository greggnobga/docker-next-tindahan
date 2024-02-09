/** Capitalize first letter. */
export const ucFirst = (string) => {
    /** Set default value. */
    const str = string ? string : 'Default';

    /** Return capitalize string. */
    return str.charAt(0).toUpperCase() + str.slice(1);
};

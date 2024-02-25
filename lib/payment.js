/** Hash entered password. */
export const paymentDetails = async ({ method }) => {
    switch (method) {
        case 'gcash':
            return { method, owner: process.env.GCASH_OWNER, account: process.env.GCASH_ACCOUNT };
            break;
        case 'maya':
            return { method, owner: process.env.MAYA_OWNER, account: process.env.MAYA_ACCOUNT };
            break;
        case 'crypto':
            return { method, xrp: process.env.CRYPTO_XRP, xlm: process.env.CRYPTO_XLM };
            break;
        default:
            return { method, owner: 'Reijo N', account: '0000000000' };
    }
};

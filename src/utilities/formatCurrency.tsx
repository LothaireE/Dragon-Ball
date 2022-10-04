// const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { style: "currency", currency: "JPY"})

const CURRENCY_FORMATTER = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY"})




export function formatCurrency(number : number){
    return CURRENCY_FORMATTER.format(number)
};
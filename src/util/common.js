export const formatCurrency = currency => {
    return currency.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
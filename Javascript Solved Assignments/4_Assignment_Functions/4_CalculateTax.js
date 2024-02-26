function calculateTax(income) {
  let tax;
  if (income > 250000 && income <= 500000) {
    return (tax = 0);
  } else if (income > 500000 && income <= 750000) {
    tax = (income * 5) / 100;
    return tax;
  } else if (income > 750000 && income <= 1000000) {
    tax = (income * 8) / 100;
    return tax;
  } else if (income > 1000000 && income <= 1250000) {
    tax = (income * 10) / 100;
    return tax;
  } else if (income > 1250000 && income <= 1500000) {
    tax = (income * 14) / 100;
    return tax;
  } else if (income > 1500000 && income <= 1800000) {
    tax = (income * 18) / 100;
    return tax;
  } else {
    tax = (income * 25) / 100;
    return tax;
  }
}

console.log('Total tax =',calculateTax(900000));

function shippingSite(typeOfPackage) {
  switch (typeOfPackage) {
    case "standard":
      console.log("Your order might take 3-5 days to deliver");
      break;
    case "express":
      console.log("Your order might take 1-2 days to deliver");
      break;
    case "overnight":
      console.log("Your order would be delivered the next day");
      break;
    default:
      console.log("Sorry...You have't order anything");
      break;
  }
}

shippingSite("express");

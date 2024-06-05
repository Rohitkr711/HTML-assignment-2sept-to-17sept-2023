let loadButton = document.getElementById("lbtn");
console.log(loadButton);
let loadContentArea = document.querySelector("#content");
// loadButton.addEventListener("click", getProducts);

function getProducts() {
  let xhr = new XMLHttpRequest();

  // creating request
  // args: method, url, sunc/async, userid, pswd
  xhr.open("GET", "products.json", true);

  // sending request
  xhr.send();

  xhr.onprogress = function () {
    loadContentArea.innerHTML = "Loading...";
  };

  xhr.onload = function () {
    loadContentArea.innerHTML = "";
    
    let products = JSON.parse(xhr.responseText);
    console.log(products);
    let { arrayOfObjects } = products;
    // console.log(arrayOfObjects);
    arrayOfObjects.forEach((element) => {
      let html = `
        <div style="display: flex; font-size:14px;height: 130px; margin: 20px 10px;">
            <div><img src="${element.imgurl}" height="100" width="180"></div>
            <div style="padding: 5px 10px;"><p>${element.name}</p></div>
            <div style="font-size: 12px; padding: 5px 10px;"><p>${element.description}</p></div>
            <div style="padding: 5px 10px;"><p>${element.Price}</p></div>
        <div>`;

      loadContentArea.insertAdjacentHTML("beforeend", html);
    });
  };
}

// getProducts();

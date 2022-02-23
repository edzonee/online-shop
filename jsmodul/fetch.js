

 function myFunction()  {
    const url = "https://online-shop-79277-default-rtdb.europe-west1.firebasedatabase.app/.json";
    fetch(url, {})
  .then((r) => r.json())
  .then((data) => {
    console.log("FÅR UT DETTA", data);


        document.querySelector(".p-name").innerText =  data.products[0].name;
        document.querySelector(".price").innerText =  data.products[0].price;
        document.querySelector(".size").innerText =  data.products[0].quantity;
        document.querySelector(".img").src = data.products[0].photo     




        console.log(data.products[0].name)

       

  
    
  });


}

export { myFunction };

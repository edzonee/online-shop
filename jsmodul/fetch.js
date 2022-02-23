

 function myFunction()  {
    const url = "https://online-shop-79277-default-rtdb.europe-west1.firebasedatabase.app/.json";
    fetch(url, {})
  .then((r) => r.json())
  .then((data) => {
    console.log("FÅR UT DETTA", data);

  
    
  });


}

export { myFunction };

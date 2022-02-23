
export async function fetchurl() {
  const url =
    'https://online-shop-79277-default-rtdb.europe-west1.firebasedatabase.app/.json';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}






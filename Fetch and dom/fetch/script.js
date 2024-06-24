// // const response = fetch("https:dummyjson.com/products/1");
// // response.then((data) => {
// //   console.log(data);
// // });

async function fetchData() {
  try {
    const loadingElement = document.getElementById("loading");
    const phoneBox = document.getElementById("box");

    loadingElement.style.display = "block";
    phoneBox.style.display = "none";

    const response = await fetch("https://dummyjson.com/products/1");
    const jsonData = await response.json();
    console.log(jsonData);

    phoneBox.style.display = "block";
    loadingElement.style.display = "none";

    loadData(jsonData);
  } catch (error) {
    console.log(error);
  }
}
function loadData(jsonData) {
  const phoneTextElement = document.getElementById("phone-title");
  const phoneDescElement = document.getElementById("phone-desc");
  const phoneImg = document.getElementById("phone-img");

  const { title, description, thumbnail } = jsonData;

  phoneTextElement.innerHTML = title;
  phoneDescElement.innerHTML = description;
  phoneImg.src = thumbnail;
}

fetchData();

// Call using promise
// const response = fetch('https://dummyjson.com/products/1')
//     .then((response) => {
//     })
//     .catch(err => {
// console.log(error)
//     })

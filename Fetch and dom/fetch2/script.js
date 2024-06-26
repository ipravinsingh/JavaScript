// const userImage = document.getElementById("user-img");
// const userName = document.getElementById("user-name");
// const userEmail = document.getElementById("user-email");
// const userCard = document.getElementById("profile-card");
const userCardTemplate = document.getElementById("profile-card-template");
const container = document.getElementById("container");

async function fetchData() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const users = data.users;
  //   console.log(users);

  bindData(users);
}

function bindData(users) {
  users.forEach((user) => {
    // console.log(user);
    const userCardClone = userCardTemplate.content.cloneNode(true);
    // console.log(userCardClone);
    const userImage = userCardClone.querySelector("#user-img");
    const userName = userCardClone.querySelector("#user-name");
    const userEmail = userCardClone.querySelector("#user-email");

    userImage.src = user.image;
    userName.innerHTML = `${user.firstName} ${user.lastName}`;
    userEmail.innerHTML = user.email;

    container.appendChild(userCardClone);
  });
//   userCard.style.display = "none";
}

fetchData();

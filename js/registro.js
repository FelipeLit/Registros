let table = document.querySelector("#table");
let tbody = document.createElement("tbody");

let result = fetch("https://memin.io/public/api/users")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    data.forEach((user) => {
      let row = document.createElement("tr");
      table.appendChild(row);

      let idCell = document.createElement("td");
      idCell.innerHTML = user.id;
      row.appendChild(idCell);

      let name = document.createElement("td");
      name.innerHTML = user.name;
      row.appendChild(name);

      let email = document.createElement("td");
      email.innerHTML = user.email;
      row.appendChild(email);

      let btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "btn-danger", "mt-2", "me-3");
      btnDelete.innerHTML = "Delete";
      btnDelete.setAttribute("id", "btn-delete");
      btnDelete.setAttribute("onclick", `deleteUser(${user.id})`);
      row.appendChild(btnDelete);

      let btnUpdate = document.createElement("button");
      btnUpdate.classList.add("btn", "btn-success", "mt-2", "me-3");
      btnUpdate.setAttribute("id", "btn-update");
      btnUpdate.setAttribute("onclick", `bringDataUser(${user.id})`);
      btnUpdate.innerHTML = "Update";
      row.appendChild(btnUpdate);

      let btnDetails = document.createElement("button");
      btnDetails.classList.add("btn", "btn-secondary", "mt-2", "me-3");
      btnDetails.setAttribute("id", "btn-details");
      btnDetails.setAttribute("onclick", `openDetails(${user.id})`);
      btnDetails.innerHTML = "Details";
      row.appendChild(btnDetails);
    });

    table.appendChild(tbody);

    //btnDetails.onclick = detailsUser;
  });

//add new users
let btnAddorUpdate = document.getElementById("btnAddorUpdate");

function addUsers() {
  let nameUser = document.formUsers.nameUser.value;
  let emailUser = document.formUsers.emailUser.value;
  let passwordUser = document.formUsers.passwordUser.value;

  //console.log(nameUser, emailUser, passwordUser);

  let dates = {
    name: nameUser,
    email: emailUser,
    password: passwordUser,
  };

  let url = "https://memin.io/public/api/users";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(dates),
    headers: { "content-type": "application/json" },
  }).then((response) => response.json());
}

//modal add user
let btnModalAddUser = document.getElementById("myBtn");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

btnModalAddUser.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//clear form of add user
//clean's code

btnAddorUpdate.onclick = addUsers;

//details user
let btnDetails = document.getElementById("btn-details");
let modalDetails = document.getElementById("myModalDetails");

function openDetails(userid) {
  modalDetails.style.display = "block";

  fetch(`https://memin.io/public/api/users/${userid}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((details) => {
      let idUser = (document.getElementById("idUser").innerHTML = details.id);
      let nameUser = (document.getElementById("nameUser").innerHTML =
        details.name);
      let emailUser = (document.getElementById("emailUser").innerHTML =
        details.email);
      let emailVerified = (document.getElementById("emailverified").innerHTML =
        details.email_verified_at);
      let passwordUser = (document.getElementById("password").innerHTML =
        details.password);
      let rememberToken = (document.getElementById("remembertoken").innerHTML =
        details.remember_token);
      let created = (document.getElementById("created").innerHTML =
        details.created_at);
      let Update = (document.getElementById("update").innerHTML =
        details.created_at);
      //idUser.innerText = details.id;
      //console.log(details);
    });
}

window.onclick = function (event) {
  if (event.target == modalDetails) {
    modalDetails.style.display = "none";
  }
};

//delete user

let btnDeleteUser = document.getElementById("btn-delete");

function deleteUser(iduser) {
  if (confirm(`¿Are you sure you want to delete? ${iduser}`)) {
    fetch(`https://memin.io/public/api/users/${iduser}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()(window.location.reload()));
  }
}

//update user
//bring information of user
let nameUS = document.getElementById("nameForm");
let emailUS = document.getElementById("emailForm");
let passwordUS = document.getElementById("passwordForm");

function bringDataUser(iduser) {
  modal.style.display = "block";
  
  fetch(`https://memin.io/public/api/users/${iduser}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      nameUS.value = data.name;
      emailUS.value = data.email;
      passwordUS.value = data.password;
    });
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//update information user
let btnUpdate = document.getElementById("btn-update");

function updateDataUSer(iduser){

  let data = {
    name: nameUS.value,
    email: emailUS.value,
    password: passwordUS.value,
  };

  fetch(`https://memin.io/public/api/users/${iduser}`, {

  method: "PUT",
  body: JSON.stringify(data),
  headers: {'Content-Type': 'application/json'}
  })
  .then (response => console.log(response))
  .then ((idUSer)=>{
    id
  })
}

btnUpdate.onclick = updateDataUSer()


let table = document.querySelector('.table')
let tbody = document.createElement('tbody');


let result = fetch('https://memin.io/public/api/users')
    .then(result =>{
        return result.json()

    }).then(data =>{
        data.forEach(user => {
            
            let row = document.createElement('tr')
            table.appendChild(row)

            let idCell = document.createElement('td')
            idCell.innerHTML = user.id
            row.appendChild(idCell)

            let name = document.createElement('td')
            name.innerHTML = user.name
            row.appendChild(name)

            let email = document.createElement('td')
            email.innerHTML = user.email
            row.appendChild(email)

            let btnDelete = document.createElement('button')
            btnDelete.classList.add('btn', 'btn-danger', 'mt-2', 'me-3')
            btnDelete.innerHTML = 'Delate'
            row.appendChild(btnDelete)

            let btnUpdate = document.createElement('button')
            btnUpdate.classList.add('btn', 'btn-success', 'mt-2', 'me-3')
            btnUpdate.innerHTML = 'Update'
            row.appendChild(btnUpdate)

            let btnDetails = document.createElement('button')
            btnDetails.classList.add('btn', 'btn-secondary', 'mt-2', 'me-3')    
            btnDetails.innerHTML = 'Details'
            row.appendChild(btnDetails)


        });
        
        table.appendChild(tbody)
    });

    let btnAddorUpdate = document.getElementById('btnAddorUpdate')

    function updateUsers (){

        let nameUser = document.formUsers.nameUser.value
        let emailUser = document.formUsers.emailUser.value
        let passwordUser = document.formUsers.passwordUser.value

        //console.log(nameUser, emailUser, passwordUser);

        let url = fetch('https://memin.io/public/api/users');

        fetch(url, {
            method: "POST",
            
        })






    }

    btnAddorUpdate.onclick = updateUsers
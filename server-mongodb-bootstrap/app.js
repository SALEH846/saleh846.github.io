// var userIDs = [];

// document.querySelector('#dataTable').onclick = function(ev) {
    // ev.target <== td element
    // ev.target.parentElement <== tr
//     var index = ev.target.parentElement.rowIndex;
//     console.log(index);
//  }

var idForDeleteUser = "";

function getIdForDelete(element) {
    // alert("row" + element.parentNode.parentNode.rowIndex +
    //    " - column" + element.parentNode.cellIndex);
    let rNum = element.parentNode.parentNode.rowIndex;
    getIDFromColForDelete(rNum);
}

function getIDFromColForDelete(rowNumber) {
    var table = document.getElementById("dataTable");
    let row = table.rows[rowNumber];
    let colValue = row.cells[0].innerText;
    idForDeleteUser = colValue;
    // deleteUser(colValue);
}

var idForeditUser = "";

function getIdForEdit(element) {
    // alert("row" + element.parentNode.parentNode.rowIndex +
    //    " - column" + element.parentNode.cellIndex);
    let rNum = element.parentNode.parentNode.rowIndex;
    getIDFromColForEdit(rNum);
}

function getIDFromColForEdit(rowNumber) {
    var table = document.getElementById("dataTable");
    let row = table.rows[rowNumber];
    let idThis = row.cells[0].innerText;
    idForeditUser = idThis;
    document.getElementById("put_name").value = row.cells[1].innerText;
    document.getElementById("put_email").value = row.cells[2].innerText;
    document.getElementById("put_address").value = row.cells[3].innerText;
    // editUser(colValue);
}

const showData = data => {
    // userIDs = [];
    let dataRender = document.querySelector('#dataRender');
    dataRender.innerHTML = "";
    data.map((userData, _idx) => {
        // userIDs.push(userData._id);
        dataRender.innerHTML += `
        <tr>
            <td id="id">
                ${userData._id}
            </td>
            <td id="name">
                ${userData.name}
            </td>
            <td id="email">
                ${userData.email}
            </td>
            <td id="address">
                ${userData.address}
            </td>
            <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="getIdForEdit(this)">
                    Edit
                </button>
                <span> </span>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="getIdForDelete(this)">
                    Delete
                </button>
            </td>
        </tr>
        `;
    })
    // console.log(userIDs);
}

const showDataOne = data => {
    console.log(data);
    x = data;
    userIDs = [];
    let dataRender = document.querySelector('#dataRender');
    dataRender.innerHTML = "";
    userIDs.push(data._id);
    dataRender.innerHTML += `
    <tr>
        <td id="id">
            ${x.data._id}
        </td>
        <td id="name">
            ${x.data.name}
        </td>
        <td id="email">
            ${x.data.email}
        </td>
        <td id="address">
            ${x.data.address}
        </td>
        <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="getIdForEdit(this)">
                Edit
            </button>
            <span> </span>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="getIdForDelete(this)">
                Delete
            </button>
        </td>
    </tr>
    `;
    console.log(userIDs);
}

const getUsers = () => {
    axios.get('https://server-mogodb.herokuapp.com/users')
        .then(response => {
            showData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

const setUser = () => {
    let userName = document.querySelector('#post_name');
    let userEmail = document.querySelector('#post_email');
    let userAddress = document.querySelector('#post_address');
    submitData(userName.value, userEmail.value, userAddress.value);
    userName.value = "";
    userEmail.value = "";
    userAddress.value = "";
}

const submitData = (name, email, address) => {
    axios.post('https://server-mogodb.herokuapp.com/user', {name, email, address})
    .then(response => {
        getUsers();
    })
    .catch(err => {
        console.log(err);
    })
}

const getUser = () => {
    let search = document.querySelector('#search_query');
    // search = search.value.toLowerCase();
    axios.get(`https://server-mogodb.herokuapp.com/user/${search.value}`)
        .then(response => {
            showDataOne(response);
            search.value = "";
        })
        .catch(err => {
            console.log(err);
        })
    
}

const deleteUser = () => {
    axios.delete(`https://server-mogodb.herokuapp.com/user/${idForDeleteUser}`)
        .then(response => {
            getUsers();
            // console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
}

const editUser = () => {
    let userName = document.querySelector('#put_name');
    let userEmail = document.querySelector('#put_email');
    let userAddress = document.querySelector('#put_address');
    editUserDB(idForeditUser ,userName.value, userEmail.value, userAddress.value);
}

const editUserDB = (id, name, email, address) => {
    if (name) {
        axios.put(`https://server-mogodb.herokuapp.com/user/${id}`, {name})
            .then(response => getUsers())
    }
    if (email) {
        axios.put(`https://server-mogodb.herokuapp.com/user/${id}`, {email})
            .then(response => getUsers())
    }
    if (address) {
        axios.put(`https://server-mogodb.herokuapp.com/user/${id}`, {address})
            .then(response => getUsers())
    }
}
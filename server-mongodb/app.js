const showData = data => {
    let dataRender = document.querySelector('#dataRender');
    dataRender.innerHTML = "";
    data.map(userData => {
        if (userData.name != undefined) {
            dataRender.innerHTML += `<tr><td>${userData._id}</td><td>${userData.name}</td><td>${userData.email}</td><td>${userData.address}</td></tr>`
        }
    });
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

const getUser = () => {
    let userID = document.querySelector('#id_get');
    (userID.value == "") ? getUsers() : getUserFromDB(userID.value);
    userID.value = "";
}

const getUserFromDB = userID => {
    axios.get(`https://server-mogodb.herokuapp.com/user/${userID}`)
        .then(response => {
            const makeArr = [response.data];
            showData(makeArr);
        })
        .catch(function (error) {
            console.log(error);
        })
}

const setUser = () => {
    let userName = document.querySelector('#name_post');
    let userEmail = document.querySelector('#email_post');
    let userAddress = document.querySelector('#address_post');
    submitData(userName.value, userEmail.value, userAddress.value);
    userName.value = "";
    userEmail.value = "";
    userAddress.value = "";
}

const submitData = (name, email, address) => {
    axios.post('https://server-mogodb.herokuapp.com/user', {name, email, address})
        .then(response => {
            getUser();
        })
        .catch(err => {
            console.log(err);
        })
}

const editUser = () => {
    let userID = document.querySelector('#id_put');
    let userName = document.querySelector('#name_put');
    let userEmail = document.querySelector('#email_put');
    let userAddress = document.querySelector('#address_put');
    if (userID.value) {
        editUserDB(userID.value, userName.value, userEmail.value, userAddress.value)
    }
    userID.value = "";
    userName.value = "";
    userEmail.value = "";
    userAddress.value = "";
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
        axios.put(`https://server-mogodb.herokuapp.com//user/${id}`, {address})
            .then(response => getUsers())
    }
}

const deleteUser = () => {
    let userID = document.querySelector('#id_delete');
    if (userID.value) {
        axios.delete(`https://server-mogodb.herokuapp.com/user/${userID.value}`)
            .then(response => getUsers())
    }
    userID.value = "";
}
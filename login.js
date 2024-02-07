let users = [
    { "username": "usuario1", "password": "contraseña1" },
    { "username": "usuario2", "password": "contraseña2" }
];

function login(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return "Inicio de sesión exitoso";
        }
    }
    return "Nombre de usuario o contraseña incorrectos";
}

function attemptLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let result = login(username, password);
    if (result === "Inicio de sesión exitoso") {
        window.location.href = "player.html";
    } else {
        alert(result);
    }
}


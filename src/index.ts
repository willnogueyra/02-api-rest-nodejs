interface User {
    birthYear: number
}

function calcularIdadeDoUser(user: User) {
    return new Date().getFullYear() - user.birthYear
}

calcularIdadeDoUser({
    birthYear: 1998
})
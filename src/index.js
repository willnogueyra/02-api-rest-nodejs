function calcularIdadeDoUser(user) {
    return new Date().getFullYear() - user.birthYear;
}
calcularIdadeDoUser({
    birthYear: 1998
});

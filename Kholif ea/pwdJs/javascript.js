// let sepatu = ['adidi', 'conpus', 'niki'];
// console.log(sepatu);
// sepatu.push('sellow');
// console.log(sepatu);
// sepatu.pop();
// sepatu.push('and0');
// sepatu.push('Pumi');
// console.log(sepatu);
// sepatu.pop();
// console.log(sepatu);
// console.log(sepatu[3]);

// const user = {
//     nama : "Luke",
//     usia : 19,
//     noHp : 08977777,
//     gender : "Laki"
// };
// console.log("Nama anda "+user.nama);
// console.log(user);

let persons = [
    {
        nama : "Pepeng",
        angkatan : 2021,
        "tahun lahir" : 1945
    },
    {
        nama : "aep",
        angkatan : 2020,
        "tahun lahir" : 1965
    }
];

persons.forEach((person) => {
    console.log("Namanya " + person.nama + " Angkatan " + person.angkatan)
})

let a = persons.map((person) => {
    return person;
});
console.log(a)
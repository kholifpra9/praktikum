let buah=["apel", "melon", "salak"];

let orang=[
    {
    nama : "Cahyo",
    umur : 34,
    asal : "Semarang"
    },
    {
    nama : "Cahyo",
    umur : 34,
    asal : "Semarang"
    },
    {
    nama : "Cahyo",
    umur : 34,
    asal : "Semarang"
    }
]
console.log("ini foreach : ");
buah.forEach((d) => {
    console.log(d);
})

orang.filter((data) => data.asal === "Semarang" && console.log(data.nama));
/*console.log("ini map : ");
let a = orang.map((d) => {
    return d;
})
console.log(a);*/
function showProducts(){
    let parent = document.getElementById('list-product')
    let data =
    [
        {
            name : "N",
            price : "4.500.000"
        },
        {
            name : "M",
            price : "2.30000"
        },
        {
            name : "A",
            price: "100.000"
        }
    ];

    let newContent ='';
    products.forEach((products) =>{
        newContent +=`
        <div class ="card">
        <h1>
        `
    });
}
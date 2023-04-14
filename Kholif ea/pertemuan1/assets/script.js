const products = [{
        name : "Samsaung",
        desc : "Ini HP Samsung",
        Price : "1.000.000"
    },
    {
        name : "Noppo",
        desc : "Ini HP Oppo",
        Price : "1.200.000"
    },
    {
        name : "Xiaomay",
        desc : "Ini HP Xiaomay",
        Price : "1.800.000"
    },
    {
        name : "Sony wakwaw",
        desc : "Ini HP Sony",
        Price : "3.000.000"
    },
    {
        name : "AIPON",
        desc : "Ini HP Ipon",
        Price : "6.000.000"
    },
    {
        name : "Nukie",
        desc : "Ini HP Nokia",
        Price : "1.000.000"
    },
    {
        name : "Mito",
        desc : "Ini HP Mito",
        Price : "400.000"
    },
    {
        name : "Cininit",
        desc : "Ini HP Jadul",
        Price : "1.000.000"
    },
    {
        name : "BlackBaerry",
        desc : "Ini HP BlackBarry",
        Price : "1.500.000"
    }

];

let counter = 0;

function listProduct(){
    parent = document.getElementById('list-product');
    let newKonten = "";
    for(let i = counter; i < 3; i++){
        if(i < products.length){
            newKonten += `
            <div class="card">
                <h1>${products[i].name}</h1>
                <div class="desc">
                    <img class="imgc" width="150px" src="assets/somay.jpg" alt="">
                    <p>${products[i].desc}</p>
                </div>
                <h3>${products[i].Price}</h3>
            </div>
            `
        }
        counter++;
    }
    parent.innerHTML = newKonten;
}

function add(){
    parent = document.getElementById('list-product');
    let showMoreBtn = document.getElementById('show-more');
    let spinner = document.querySelector('.loading-spinner');
    let newKonten = ""
    showMoreBtn.style.display = "none";
    spinner.style.display = "block"

    setTimeout(function(){
        for (let i = counter; i < counter+3; i++) {
            if(i<products.length){
                newKonten += `
                <div class="card">
                    <h1>${products[i].name}</h1>
                    <div class="desc">
                        <img class="imgc" width="150px" src="assets/somay.jpg" alt="">
                        <p>${products[i].desc}</p>
                    </div>
                    <h3>${products[i].Price}</h3>
                </div>
                `
            }
        }
        parent.insertAdjacentHTML('beforeend', newKonten);
        counter += 3;
        if(counter >= products.length){
            showMoreBtn.style.display = "none";
        }else{
            showMoreBtn.style.display = "block";
        }
        spinner.style.display = "none";
    }, 1000)
}

function load(){
    setTimeout(() => {
        document.querySelector(".loading-spinner").style.display = "none";
        listProduct();
        document.getElementById('show-more').style.display = "block";
    }, 1000)
}
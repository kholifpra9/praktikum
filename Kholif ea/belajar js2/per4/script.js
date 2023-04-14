function changeById(){
    let element = document.getElementById('content');
    element.innerHTML ='Kalimat 1 berubah';
    element.style.color='blue';
}
function changeByClass(){
    let element = document.getElementsByClassName('content');

    for(let i = 0 ; i <2; i++){
        element[i].innerHTML = 'Kalimat  ${i+1} :Berubah';
    }
    element.innerHTML ="kalimat berubah";
}
function changeByTagName(){
    let element=document.getElementsByTagName('p');

    for(let i =0; i<3; i++){
        element[i].innerHTML ='Kalimat Berubah';
    }
}
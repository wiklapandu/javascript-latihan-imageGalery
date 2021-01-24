// Cara 1

const jumbo = document.querySelector('.jumbo');
// const thumbs = document.querySelectorAll('.thumb');
jumbo.setAttribute('src','img/image1.jpg');
// thumbs.forEach(thumb => {
//     thumb.addEventListener('click', function(e){
//         if(jumbo.attributes.getNamedItem('src')){
//             jumbo.attributes.removeNamedItem('src');
//         }
//         jumbo.setAttribute('src',e.target.getAttribute('src'));
//     });
// });


// Cara 2
const thumbs =document.querySelectorAll('.thumb');
const container = document.querySelector('.container');
const klik = document.querySelector('.klik');
var jm = 0;
klik.innerHTML = jm;
container.addEventListener('click',(e)=>{
    if(e.target.className == 'thumb'){
        // console.log(e.target.getAttribute('src'));
        jumbo.src = e.target.getAttribute('src');
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);
        thumbs.forEach(function(thumb){
            if( thumb.classList.contains('active') ){
                thumb.classList.remove('active');
            }
        });
        e.target.classList.add('active');
        jm+= 1;
        klik.innerHTML = jm;
        if(jm == 100){
            alert('selamat anda sudah mencapai ✨ '+jm+' ✨ kali klik 🎉🎉🎉');
        }
    }
});

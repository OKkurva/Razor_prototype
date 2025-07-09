const slider = document.querySelectorAll('.slider-img');
let index = 0;

slider.forEach(s => s.addEventListener('click', slide));

function slide(e){
    this.classList.remove('active');
    if(this.nextElementSibling){
        this.nextElementSibling.classList.add('active');
    } else {
        slider[0].classList.add('active');
    }
}


setInterval(()=> {
    deactivate(slider[index]);
    if (index < slider.length-1){
        index++;
    } else {
        index = 0;
    }
    activate(slider[index]);
    
},6000)

function activate(slide){
    slide.classList.add('active');
}

function deactivate(slide){
    slide.classList.remove('active');  
}
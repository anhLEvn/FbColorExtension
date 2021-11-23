// alert("OK"); 
// Create template 
let htmlTemplate = `
<div class="fb-color">
<button type="button" data-color="olive" class="btnOlive" >Olive</button>
<button type="button" data-color="yellow" class="btnYellow">Yellow</button>

</div>`; 

// console.log(htmlTemplate);
// load into expected page

window.onload =  function(){

    const wrapperObj = document.querySelector("body>div"); 
    console.log(wrapperObj);
    if(wrapperObj !==null) {
        wrapperObj.innerHTML += htmlTemplate;
    }
    
    const buttonObj = document.querySelectorAll('.fb-color button'); 
    const bodyObj = document.querySelector('body');
    const headerObj = document.querySelector('div[role=navigation]');

    // Load default color
    if(localStorage.getItem('currentColor')){
        let currentColor = localStorage.getItem('currentColor');
        bodyObj.style.backgroundColor = currentColor; 
        headerObj.style.backgroundColor = currentColor;
    }
    if(buttonObj !==null) {        
        buttonObj.forEach(function(item){
            item.onclick = function(){
                // alert("OK");
                // console.log(this.innerText); 

                // add active
                let btnActiveObj = document.querySelector('.fb-color button.active'); 
                if(btnActiveObj!==null){
                    btnActiveObj.classList.remove('active'); 
                }
                this.classList.add('active');

                //Change color
                let colorSelect = this.getAttribute('data-color'); 
                if(colorSelect !== null){

                    //inject into body
                    bodyObj.style.backgroundColor = colorSelect; 
                    headerObj.style.backgroundColor = colorSelect;
                    
                    //save values in local storage
                    localStorage.setItem('currentColor', colorSelect);
                }
        

            }
        })
    }
}

//clickListener

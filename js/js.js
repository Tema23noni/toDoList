let btn = document.querySelector('#btnad')
let adder = document.querySelector('#input')
let list = document.querySelector('#list')
function add(){
    if(adder.value.length == 0){
        alert('NN')
    }else{
        list.innerHTML += `
        <li>
            <p class = 'ready' >${adder.value}</p>
            <button class ='delete'><img src="icons8-мусор-30.png" alt=""></button>
        </li>
        `;
        let del = document.querySelectorAll('.delete')
        for(let i = 0; i < del.length;i++ ){
            del[i].onclick = function(){
                this.parentNode.remove();
            }   
        }
        let red = document.querySelectorAll('.ready')
        for(let i = 0; i<red.length; i++){
            red[i].onclick = function(){
                if(this.parentNode.style.textDecoration == 'none'){
                    this.parentNode.style.textDecoration = 'line-through'
                    this.parentNode.style.backgroundColor = 'rgba(34, 224, 34, 0.493)'
                }else{
                    this.parentNode.style.textDecoration = 'none'
                    this.parentNode.style.backgroundColor = 'rgba(250, 250, 250, 0.575)'
                }
            }
        }

       
    }
}
btn.addEventListener('click', add)
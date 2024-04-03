const name = document.getElementById('username')
const form = document.getElementById('forms')
form.addEventListener('submit', (e)=>{
    if(name.value == ''){
        e.preventDefault();
        alert('entre name');
    }
}



)
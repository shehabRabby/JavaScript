document.getElementById('input-delete')
.addEventListener('keyup',function(){
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');

    if(text === 'delete'){
        console.log('delete Type');
        btnDelete.removeAttribute('disabled');

        const secretTag = document.getElementById('secret-info');
        secretTag.style.display = 'none';
    }else{
        console.log('somethig else')
         btnDelete.setAttribute('disabled',true);
    }
});
const dropZone = document.getElementById('DropZone')
const fileList = document.getElementById('fileList')

//evita el comportamiento predeterminado de abrior el archivo en el navegador

function preventDefaults(e){

    e.preventDefault();
    e.stopPropagation();

}

['dragenter','dragover','dragleave','drop'].forEach(eventName => {

    dropZone.addEventListener(eventName,preventDefaults, false);
    
});

//cambiar el estilo del area de drop al arrastrar 

['dragenter','dragover'].forEach(eventName =>{

    dropZone.addEventListener(eventName,() => dropZone.classList.add('hover'),false);

});

['dragleave','drop'].forEach(eventName => {

    dropZone.addEventListener(eventName, ()=> dropZone.classList.remove('hover',false));

})

//manejar el drop del archivo
 
dropZone.addEventListener('drop',handleDrop,false);

function handleDrop(e){

    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files); 

}

//mostrar los archivos subidos
function handleFiles(files){

    //fileList.innerHTML='';
    [...files].forEach(file => {

        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);

    });

}
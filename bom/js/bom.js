const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', function() { 
    let inputvalue = input.value;
    if (inputvalue.length !=0){
        let chapter = input.value;
        input.value = '';
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('vutton');

        listItem.appendChild(listText);
        listText.textContent = chapter;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.onclick = function(e){
            list.removeChild(listItem);
        }
        input.focus();
    }
})
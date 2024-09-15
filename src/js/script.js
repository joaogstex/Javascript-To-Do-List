const createBtn = document.getElementById('create-btn');
const createdBox = document.getElementById('created-container-box');
    
    const newElements = [];

    let count = 0;
    
    createBtn.addEventListener('click', () => {

      const inputValue = document.getElementById('inputValue').value;
      
      if(inputValue.trim() === '') return;

      const outputBox = document.createElement('div');
      outputBox.className = "output-box";
      // Cria os IDs e incrementa 
      outputBox.dataset.id = count++;

      const output = document.createElement('p');
      output.textContent = inputValue;
      output.className = "output";

      // Adiciona os IDs e o valor do input
      newElements.push({ id: outputBox.dataset.id, value: inputValue }); // Armazena o valor com o ID

      outputBox.appendChild(output);
      outputBox.style.display = 'block';

      console.log(newElements);
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.fontSize = '12px';
      deleteBtn.className = "delete-btn";
    
      outputBox.appendChild(deleteBtn);
      
      deleteBtn.addEventListener('click', () => {
      // Remove o item do array
      const idToRemove = outputBox.dataset.id;
      const index = newElements.findIndex(item => item.id == idToRemove);
      if (index !== -1) {
      newElements.splice(index, 1);
      }

      outputBox.remove();

      console.log(newElements);
      
      });
      
      createdBox.appendChild(outputBox);
      
    });
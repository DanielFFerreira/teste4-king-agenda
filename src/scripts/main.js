/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function() {
  const lista = document.getElementById('lista');
  const novoItemInput = document.getElementById('novoItem');
  const adicionarButton = document.getElementById('adicionar');
  
  adicionarButton.addEventListener('click', function() {
    const novoItem = novoItemInput.value.trim();
    if(novoItem) {
      addItem(novoItem);
      novoItemInput.value = '';
    }
  });

  function addItem(item) {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = item;

    const removerButton = document.createElement('span');
    removerButton.className = 'remover';
    removerButton.textContent = ' X';
    removerButton.addEventListener('click', function () {
      removeItem(li);
    });

    li.appendChild(removerButton);
    lista.appendChild(li);

    saveItems();
  }

});





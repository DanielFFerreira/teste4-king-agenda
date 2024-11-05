/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function() {
  const lista = document.getElementById('lista');
  const novoItemInput = document.getElementById('novoItem');
  const adicionarButton = document.getElementById('adicionar');

  // Carrega itens do localStorage ao carregar a página
  loadItems();
  
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
      confirmarRemocao(li);
    });

    li.appendChild(removerButton);
    lista.appendChild(li);

    saveItems();
  }

  function confirmarRemocao(itemElement) {
    if (confirm('Deseja realmente excluir este item?')) {
      removeItem(itemElement);
    }
  }

  function removeItem(itemElement) {
    lista.removeChild(itemElement);
    saveItems();
  }

  function saveItems() {
    const items = [];
    lista.querySelectorAll('.item').forEach(function (itemElement) {
      items.push(itemElement.textContent.slice(0, -2));
    });
    localStorage.setItem('listaDeItens', JSON.stringify(items));
  }
  
  function loadItems() {
    const savedItems = localStorage.getItem('listaDeItens');
    if (savedItems) {
      JSON.parse(savedItems).forEach(function (item) {
        addItem(item);
      });
    }
  }

});





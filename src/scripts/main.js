/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function () {
  const lista = document.getElementById('lista');
  const novoItemInput = document.getElementById('novoItem');
  const adicionarButton = document.getElementById('adicionar');
  const toggleSwitch = document.getElementById('toggleSwitch');
  const body = document.body;

  loadItems();

  loadTheme();

  adicionarButton.addEventListener('click', function () {
    const novoItem = novoItemInput.value.trim();
    if (novoItem) {
      addItem(novoItem);
      novoItemInput.value = '';
    }
  });

  toggleSwitch.addEventListener('click', function () {
    if (toggleSwitch.classList.contains('day')) {
      toggleSwitch.classList.remove('day');
      toggleSwitch.classList.add('night');
      body.classList.add('dark-mode');
    } else {
      toggleSwitch.classList.remove('night');
      toggleSwitch.classList.add('day');
      body.classList.remove('dark-mode');
    }
    saveTheme();
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
    Swal.fire({
      title: 'Deseja realmente excluir este item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(itemElement);
        Swal.fire(
          'Excluído!',
          'O item foi excluído com sucesso.',
          'success'
        );
      }
    });
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

  function saveTheme() {
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }

  function loadTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      body.classList.add('dark-mode');
      toggleSwitch.classList.remove('day');
      toggleSwitch.classList.add('night');
    } else {
      body.classList.remove('dark-mode');
      toggleSwitch.classList.remove('night');
      toggleSwitch.classList.add('day');
    }
  }
});






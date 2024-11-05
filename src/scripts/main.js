/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function() {
  const lista = document.getElementById('lista');
  const novoItemInput = document.getElementById('novoItem');
  const adicionarButton = document.getElementById('adicionar');
  
  adicionarButton.addEventListener('click', function() {
    const novoItem = novoItemInput.value.trim();
    console.log(novoItem);
  });

});





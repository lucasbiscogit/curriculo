document.addEventListener("DOMContentLoaded", function () {
    // Carrega o conteúdo do menu a partir do arquivo menu.html
    fetch("menu.html")
      .then(response => response.text())
      .then(data => {
        // Insere o conteúdo do menu em todas as tags com a classe "menu-placeholder"
        const menuPlaceholders = document.querySelectorAll(".menu-placeholder");
        menuPlaceholders.forEach(placeholder => {
          placeholder.innerHTML = data;
        });
      })
      .catch(error => console.error("Erro ao carregar o menu: ", error));
  });
  
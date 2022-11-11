const recentPosts = document.querySelector(".btn-publicacoes");

function showPosts(publicacao) {
  publicacao.classList.toggle("display-none");
}

function loadPosts() {
  const posts = document.querySelectorAll(".publicacoes-conteudo");

  posts.forEach(showPosts);
}

recentPosts.addEventListener("click", loadPosts);

const { v4: generateId } = require("uuid");
let listaDeProdutos = [
  {
    id: generateId(),
    nome: "Site",
    descricao: "Seu site incrivel",
    imagem:
      "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg",
  },
  {
    id: generateId(),
    nome: "Plataforma",
    descricao: "Seu site incrivel",
    imagem:
      "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg",
  },
];

function cadastrarProduto(nome, descricao, imagem) {
  const novoProduto = {
    id: generateId(),
    nome,
    descricao,
    imagem,
  };

  return listaDeProdutos.push(novoProduto);
}

function excluirProduto(id) {
  const novaListaDeProdutos = listaDeProdutos.filter(
    (produto) => produto.id != id
  );

  if (novaListaDeProdutos.length >= listaDeProdutos.length) return false;

  listaDeProdutos = novaListaDeProdutos;

  return true;
}

module.exports = { listaDeProdutos, cadastrarProduto, excluirProduto };

function loadingDictionary() {
  let biographies = {
    bio01: {
      name: "Enedina Alves Marques",
      deeds: "Primeira Engenheira Negra do Brasil",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Enedina.png",
      about: "Sobre",
      description:
        "Foi a primeira mulher a se formar em engenharia no Paraná e a primeira engenheira negra do Brasil. Enedina nasceu em Curitiba, no dia 13 de janeiro de 1913. Formou-se em Engenharia Civil em 1945, pela Universidade Federaldo Paraná (UFPR).",
      quote:
        "Eu não desisto, eu vou até o fim, um dia eles enjoam da minha cara e me aprovam",
    },
    bio02: {
      name: "Rosa Parks",
      deeds: "Ativista dos direitos dos negros nos Estados Unidos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Rosaparks.jpg",
      about: "Sobre",
      description:
        "Rosa Louise McCauley, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1 de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
      quote: "Você nunca deve ter medo do que está fazendo quando está certo",
    },
    bio03: {
      name: "Carolina de Jesus",
      deeds: "Escritora, compositora e poetisa brasileira",
      image:
        "https://fernandapompeu.com.br/wp-content/uploads/2017/09/carolina.jpg",
      about: "Sobre",
      description:
        "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
      quote:
        "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é",
    },
    bio04: {
      name: "Viola Davis",
      deeds: "Atriz e produtora norte-americana",
      image: "https://static.ndmais.com.br/2019/08/content_pic.jpg",
      about: "Sobre",
      description:
        "Viola é uma atriz e produtora norte-americana. Vencedora de um Óscar, um Emmy Award, dois Tony Awards e um Grammy, dessa forma alcançando todos os principais prêmios da indústria do entretenimento, se tornando a décima oitava personalidade do mundo e a terceira mulher negra a conquistar o título EGOT.",
      quote:
        "Eu quero ficar para a história. Eu acredito que mereço estar na história e, acredito que minha história merece ser contada",
    },
    bio05: {
      name: "Antonieta de Barros",
      deeds: "Jornalista, professora e política brasileira",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Antonieta_de_Barros.webp",
      about: "Sobre",
      description:
        "Foi uma das primeiras mulheres eleitas no Brasil e a primeira negra brasileira a assumir um mandato popular. Tendo contribuído no parlamento, na imprensa e no magistério, foi uma ativa defensora da emancipação feminina, de uma educação de qualidade para todos e pelo reconhecimento da cultura negra, em especial no Sul do Brasil.",
      quote:
        "É a educação que transforma pigmeus em gigantes, dá aos homens força para enfrentar os mais sérios obstáculos",
    },
    bio06: {
      name: "Whitney Houston",
      deeds: "Cantora, compositora, atriz e produtora norte-americana",
      image:
        "https://images.zwierciadlo.pl/_resource/res/path/b2/55/b25555b9-1574-4067-b32f-210157a69776_f750x750",
      about: "Sobre",
      description:
        "Whitney Elizabeth Houston é considerada pela crítica musical como a melhor cantora de todos os tempos. Seus poderosos vocais, que alcançavam extensões muito altas e seu extremo talento artístico na composição de letras e melodias, fizeram-na ser conhecida como A Voz. Foi a artista mais premiada de todos os tempos, de acordo com o Guinness World Records, em 2009. Uma das artistas mais bem sucedidas do mundo da música, vendeu mais de 400 milhões de discos em todo o mundo e foi reconhecida internacionalmente como uma das maiores artistas de todos os tempos, devido ao seu talento, legado e está entre os 500 Maiores artistas de todos os tempos da Revista Rolling Stone.",
      quote:
        "Há muito tempo que decidi não seguir os passos de ninguém. Se eu perder ou ganhar, pelo menos foi do meu jeito",
    },
  };

  let content = document.getElementById("content");

  for (let bio in biographies) {
    content.innerHTML +=
      "<li>" +
      "<div>" +
      "<h2>" +
      biographies[bio].name +
      "</h2>" +
      '<div class="small">' +
      "<small>" +
      biographies[bio].deeds +
      "</small>" +
      "</div>" +
      '<img src="' +
      biographies[bio].image +
      '"width="150"/>' +
      "</div>" +
      "<section>" +
      "<details>" +
      "<summary>" +
      biographies[bio].about +
      "</summary>" +
      "<p>" +
      biographies[bio].description +
      "</p>" +
      " <blockquote>" +
      "<q>" +
      biographies[bio].quote +
      "</q>" +
      "</blockquote>" +
      "</details>" +
      "</section>" +
      "</li>";
  }
}

loadingDictionary();

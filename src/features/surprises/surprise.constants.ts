import type { Surprise } from "./surprise.types";

export const DEFAULT_SLUG = "eu-e-meu-amor";

export const localSurprise: Surprise = {
  id: "local-eu-e-meu-amor",
  slug: DEFAULT_SLUG,
  title: "Jardim de Nós",
  theme: "garden",
  is_active: true,
  created_at: "2026-06-12T00:00:00.000Z",
  updated_at: "2026-06-12T00:00:00.000Z",
  content: {
    coupleName: "Gabriel & Fernanda",
    senderName: "Gabriel",
    recipientName: "Fernanda",
    relationshipStartDate: "2026-01-08",
    hero: {
      eyebrow: "Uma surpresa feita com amor",
      title: "Jardim de Nós",
      subtitle: "Um lugar que só floresce porque existe a gente.",
      primaryActionLabel: "Ler minha carta",
      secondaryActionLabel: "Ver momentos",
    },
    counter: {
      eyebrow: "NOSSO TEMPO",
      title: "Nosso tempo, nossa história",
      description:
        "Cada segundo desde 8 de janeiro criou raízes no nosso jardim.",
    },
    letter: {
      badge: "Carta guardada",
      title: "Carta para você",
      message: [
        "Ainda que o mundo inteiro cultive jardins belíssimos,",
        "nenhum deles carrega a eternidade discreta do nosso.",
        "O Éden foi o primeiro sopro da criação,",
        "mas o nosso jardim nasceu de uma escolha diária,",
        "de duas almas aprendendo a permanecer,",
        "de um amor que não se contenta em florescer,",
        "porque deseja criar raízes para sempre.",
        "",
        "Em nós, cada gesto simples se torna sagrado.",
        "Teu carinho é a água que abranda meus desertos,",
        "tua presença é luz sobre aquilo que em mim era inverno,",
        "e tua voz tem a delicadeza rara das coisas eternas.",
        "Com você, até o silêncio ganha morada,",
        "até o tempo parece se curvar em reverência,",
        "porque Deus sabe o valor do que plantamos.",
        "",
        "Eu não desejo outro paraíso além do teu abraço.",
        "Não procuro outro céu que não tenha os teus olhos.",
        "Se a vida me oferecer mil caminhos, escolho o teu.",
        "Se os sonhos exigirem fé, sonharei contigo.",
        "Se o amor pedir constância, eu permanecerei.",
        "Porque entre todos os jardins possíveis da existência,",
        "o nosso é o único onde minha alma encontrou lar.",
      ].join("\n"),
      signature: "Com amor, o SEU Gabriel.",
    },
    gallery: {
      eyebrow: "NOSSOS MOMENTOS",
      title: "Um pouco de nós",
      description:
        "Pequenos instantes que, mesmo repetidos, eu sempre vou amar relembrar desse dia.",
      photos: [
        {
          url: "/media/eu-meu-amor/photo-01.jpg",
          caption: "Sim, eu sempre vou querer usar essas fotos",
          alt: "Gabriel e Fernanda sorrindo juntos",
        },
        {
          url: "/media/eu-meu-amor/photo-02.jpg",
          caption: "São definitivamente minhas favoritas, retraram nossa essência de uma forma tão genuína",
          alt: "Selfie de Gabriel e Fernanda",
        },
        {
          url: "/media/eu-meu-amor/photo-05.jpg",
          caption: "Eu sempre vou querer respousar em você, mesmo que seja em silêncio, apenas preciso de você",
          alt: "Gabriel e Fernanda em uma lembrança especial",
        },
        {
          url: "/media/eu-meu-amor/photo-04.jpg",
          caption: "Fazendo palhaçada ou lindando com a dor de cabeça é ser adulto, eu vou estar sempre com você",
          alt: "Momento divertido do casal",
        },
        {
          url: "/media/eu-meu-amor/photo-07.jpg",
          caption: "Partindo até mesmo da época que nem nos conhecíamos, mas eu tenho certeza mais que absoluta que seríamos tudo que somos hoje.",
          alt: "Foto antiga de uma memória afetiva",
        },
        {
          url: "/media/eu-meu-amor/photo-03.jpg",
          caption: "Carinho em detalhe",
          alt: "Selfie próxima de Gabriel e Fernanda",
        },
        {
          url: "/media/eu-meu-amor/photo-06.jpg",
          caption: "Dia leve",
          alt: "Gabriel e Fernanda brincando juntos",
        },
      ],
    },
    music: {
      provider: "youtube_music",
      badge: "NOSSA TRILHA",
      title: "A música do nosso jardim",
      description: "Mesmo que eu pudesse nos definir com diversas músicas, acho que é essa que sempre me faz sorrir lembrando de você.",
      name: "Exagerado",
      artist: "Cazuza",
      url: "https://music.youtube.com/watch?v=Qi5I7_RDd-8&si=pkZYGg0ggQ4iVlPA",
      embed: false,
    },
    timeline: {
      eyebrow: "CAPÍTULOS",
      title: "Nossa linha do tempo",
      events: [
        {
          date: "2025-12-08",
          displayDate: "08 Dez 2025",
          title: "Nos conhecemos",
          description: "Foi lá que a gente até hoje se assusta com o quanto podemos conversar em apenas um dia.",
        },
        {
          displayDate: "20 Dez 2025",
          title: "Primeiro encontro",
          description: "Nesse dia eu só sabia me sentir inseguro, não sabia se iria gostar, mas eu já tinha plena certeza de que já te amava.",
        },
        {
          displayDate: "20 Dez 2025",
          title: "Pedido oficial",
          description: "O coração disse sim, desde então eu me vi em um mundo mais completo, de mim, de você e da realidade que o mundo nos cerca.",
        },
        {
          displayDate: "Nossos momentos",
          title: "Cada dia juntos",
          description: "A cada dia que se passa, lutas que travamos juntos que só nós 2 sabemos, retrata tudo que estamos dispostos a viver juntos e eu apenas sei te mostrar gratidão por tudo isso.",
        },
        {
          displayDate: "Todos os dias",
          title: "E seguimos escrevendo",
          description: "E é assim que seguimos, escrevendo nossa história, vivendo nosso amor e construindo nosso jardim, que é o nosso lar, onde a gente se sente seguro, amado e feliz. E é aqui que eu quero estar, com você, para sempre.",
        },
      ],
    },
    finalMessage: {
      badge: "Pra ser sempre e apenas nós",
      title: "Obrigado por crescer e florescer comigo.",
      message:
        "Que nosso relacionamento cresça forte como qualquer raiz, floresça bonito como qualquer jardim, e resista a qualquer tempestade, porque o que temos é único, é nosso, é verdadeiro, e eu sou eternamente grato por cada momento ao seu lado.",
    },
    share: {
      eyebrow: "COMPARTILHAR",
      title: "Leve nosso jardim com você",
      description:
        "Escaneie para acessar sempre ou compartilhe com quem faz parte dessa história.",
    },
    settings: {
      showCounter: true,
      showGallery: true,
      showMusic: true,
      showTimeline: true,
      showFinalMessage: true,
      showShare: false,
      animationLevel: "soft",
    },
  },
};

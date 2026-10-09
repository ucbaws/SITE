export interface MembroEquipe {
  nome: string;
  cargo: string;
  descricao?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  foto: string;
  posicaoFoto: string;
}

export interface EventoComunidade {
  id: string;
  titulo: string;
  descricao: string;
  formato: 'Presencial' | 'Online' | 'Presencial e on-line';
  categoria: 'Workshop' | 'Meetup' | 'Comunidade' | 'Trilha';
  /** Data no formato AAAA-MM-DD. Omita em programas contínuos e use `periodo`. */
  data?: string;
  horario?: string;
  periodo?: string;
  local: string;
  linkIngresso: string;
  textoBotao?: string;
  status: 'aberto' | 'encerrado';
  detalhes: string[];
}

export const COMUNIDADE = {
  nome: 'AWS Student Builder Group at Universidade Católica de Brasília',
  nomeCurto: 'AWS Student Group at UCB',
  universidade: 'Universidade Católica de Brasília',
  cidade: 'Brasília, DF',
  descricao:
    'Somos um grupo oficial da AWS na UCB. Uma comunidade para estudantes interessados em computação em nuvem, unindo aprendizado, experiência e networking.',
  instagram: 'https://www.instagram.com/ucb.sbg/',
  linkedin: 'https://www.linkedin.com/company/aws-student-builder-group-ucb/',
  linkEntrada: 'https://www.meetup.com/aws-sbg-at-catholic-university-of-brasilia/',
} as const;

export const EQUIPE: MembroEquipe[] = [
  {
    nome: 'Grazielly Sabino',
    cargo: 'Líder SBG',
    descricao:
      'Líder da comunidade, responsável por definir as estratégias, representar a comunidade perante a AWS e a Universidade Católica de Brasília, coordenar o Core Team e garantir o cumprimento dos objetivos do programa AWS Student Builder Groups.',
    instagram: 'https://www.instagram.com/sabinoograzielly',
    linkedin: 'https://www.linkedin.com/in/sabinograzielly/',
    github: 'https://github.com/sabinograzielly',
    foto: 'images/Grazielly-web.jpg',
    posicaoFoto: 'center 30%',
  },
  {
    nome: 'Mickeias Charles',
    cargo: 'Diretor de Comunidade',
    descricao:
      'O Diretor de Comunidade é responsável por aproximar pessoas, fortalecer o relacionamento entre os membros e criar um ambiente acolhedor, colaborativo e engajado.',
    instagram: 'https://www.instagram.com/mickeiascharles/',
    linkedin: 'https://www.linkedin.com/in/mickeiascharles/',
    github: 'https://github.com/mickeiascharles',
    foto: 'images/Mickeias.jpg',
    posicaoFoto: 'center 34%',
  },
  {
    nome: 'Arthur Braga',
    cargo: 'Diretor Geral',
    descricao:
      'Atua como peça-chave na coordenação de equipes e processos, estimulando o engajamento, a organização e a produtividade nas entregas.',
    linkedin: 'https://www.linkedin.com/in/arthurvbraga/',
    instagram: 'https://www.instagram.com/arthur._vinii/',
    github: 'https://github.com/arthurbraga06',
    foto: 'images/Arthur.jpg',
    posicaoFoto: 'center 32%',
  },
  {
    nome: 'Júlio César Nascimento',
    cargo: 'Diretor de Eventos',
    descricao:
      'O Diretor de Eventos é responsável por transformar ideias em experiências memoráveis para a comunidade. Atua no planejamento e coordenação dos eventos, garantindo que cada atividade seja organizada, relevante e bem executada.',
    linkedin: 'https://www.linkedin.com/in/juliocesarlisboa/',
    github: 'https://github.com/JulioLisboa',
    instagram: 'https://www.instagram.com/juliollisboa/',
    foto: 'images/Julio.jpg',
    posicaoFoto: 'center 28%',
  },
  {
    nome: 'Lorrany Magalhaes',
    cargo: 'Diretora Técnica',
    descricao:
      'A Diretora Técnica é responsável por fortalecer o lado técnico da comunidade, ajudando na criação de conteúdos, workshops e experiências práticas relacionadas às tecnologias AWS.',
    linkedin: 'https://www.linkedin.com/in/lorrany-magalh%C3%A3es-/',
    instagram: 'https://www.instagram.com/lorrany_magalhaes/',
    github: 'https://github.com/lorranym',
    foto: 'images/Lorrany.jpg',
    posicaoFoto: 'center 30%',
  },
  {
    nome: 'Lucas Moreira',
    cargo: 'Diretor de Marketing',
    descricao:
      'O Diretor de Marketing é responsável por divulgar as ações da comunidade e fortalecer a presença da UCB Cloud Builders dentro e fora da universidade.',
    linkedin: 'https://www.linkedin.com/in/lucasmoreirapereira/',
    instagram: 'https://www.instagram.com/lucasmorpe/',
    github: 'https://github.com/lucas0mp',
    foto: 'images/Lucas-vertical.jpg',
    posicaoFoto: 'center 30%',
  },
];

export const ALBUNS = [
  {
    titulo: 'Encontro de 24 de setembro',
    descricao: 'Registros do encontro Carreira & Cloud do Zero.',
    link: 'https://drive.google.com/drive/folders/1h6gxwq4cHBddIE_AiwifVg4TdlO2YQua?usp=drive_link',
  },
  {
    titulo: 'Encontro de 30 de setembro',
    descricao: 'Fotos da abertura do AWS Student Builder Group na UCB.',
    link: 'https://drive.google.com/drive/folders/1uzW1E_YRUWOqYhVtvSGDg0fmUfMLS8TG?usp=drive_link',
  },
  {
    titulo: 'Universo Católica',
    descricao: 'Momentos da comunidade no Universo Católica.',
    link: 'https://drive.google.com/drive/folders/1Y6QaIkAU36UFhb0TK_xWjaQKmiVzZmf9?usp=drive_link',
  },
] as const;

export const EVENTOS: EventoComunidade[] = [
  {
    id: 'trilha-cloud-practitioner',
    titulo: 'Trilha de Certificação AWS Certified Cloud Practitioner',
    descricao:
      'Serão 3 meses de preparação intensiva, com muito aprendizado, troca de experiências e estudo em grupo para dominar os fundamentos da computação em nuvem da AWS e dar o primeiro passo rumo à certificação.',
    formato: 'Presencial e on-line',
    categoria: 'Trilha',
    periodo: '3 meses de preparação',
    local: 'UCB e on-line',
    linkIngresso:
      'https://forms.cloud.microsoft/pages/responsepage.aspx?id=rt8JIBHfx0mATf2o1c2YZbXwPPoO7t9Gj6S7pGf2cOJUM1E1UktTRkwxSFlBQ09WOEZEUkI4WVRYUy4u&route=shorturl',
    textoBotao: 'Fazer inscrição',
    status: 'aberto',
    detalhes: [
      'Oportunidade de conquistar a certificação oficial sem custos.',
      'Acesso aos materiais do AWS Academy para apoiar os estudos.',
      'Encontros presenciais e on-line para compartilhar conhecimentos, esclarecer dúvidas e evoluir juntos.',
      'Aprendizado colaborativo com foco na preparação para a prova de certificação.',
    ],
  },
];

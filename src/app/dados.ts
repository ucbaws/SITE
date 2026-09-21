export interface MembroEquipe {
  nome: string;
  cargo: string;
  descricao?: string;
  instagram?: string;
  linkedin?: string;
  foto: string;
  posicaoFoto: string;
}

export interface EventoComunidade {
  id: string;
  titulo: string;
  descricao: string;
  formato: 'Presencial' | 'Online';
  categoria: 'Workshop' | 'Meetup' | 'Comunidade';
  data: string;
  horario: string;
  local: string;
  linkIngresso: string;
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
  linkedin: 'https://www.linkedin.com/company/aws-student-builder-group-ucb',
  linkEntrada: 'https://www.meetup.com/aws-sbg-at-catholic-university-of-brasilia/',
} as const;

export const EQUIPE: MembroEquipe[] = [
  {
    nome: 'Grazielly Sabino',
    cargo: 'Líder SBG',
    descricao:
      'Líder da comunidade, responsável por definir as estratégias, representar a comunidade perante a AWS e a Universidade Católica de Brasília, coordenar o Core Team e garantir o cumprimento dos objetivos do programa AWS Student Builder Groups.',
    instagram: 'https://www.instagram.com/sabinograzielly/',
    linkedin: 'https://www.linkedin.com/in/sabinograzielly/',
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
    foto: 'images/Arthur.jpg',
    posicaoFoto: 'center 32%',
  },
  {
    nome: 'Júlio César Nascimento',
    cargo: 'Diretor de Eventos',
    descricao:
      'O Diretor de Eventos é responsável por transformar ideias em experiências memoráveis para a comunidade. Atua no planejamento e coordenação dos eventos, garantindo que cada atividade seja organizada, relevante e bem executada.',
    linkedin: 'https://www.linkedin.com/in/juliocesarlisboa/',
    instagram: 'https://www.instagram.com/juliollisboa/',
    foto: 'images/Julio.jpg',
    posicaoFoto: 'center 28%',
  },
  {
    nome: 'Lorrany Magalhaes',
    cargo: 'Diretora Técnica',
    descricao:
      'A Diretora Técnica é responsável por fortalecer o lado técnico da comunidade, ajudando na criação de conteúdos, workshops e experiências práticas relacionadas às tecnologias AWS.',
    linkedin: 'https://www.linkedin.com/in/lorrany-magalhaes-/',
    instagram: 'https://www.instagram.com/lorrany_magalhaes/',
    foto: 'images/Lorrany.jpg',
    posicaoFoto: 'center 30%',
  },
  {
    nome: 'Lucas Moreira',
    cargo: 'Diretor de Marketing',
    descricao:
      'O Diretor de Marketing é responsável por divulgar as ações da comunidade e fortalecer a presença da UCB Cloud Builders dentro e fora da universidade.',
    linkedin: 'https://www.linkedin.com/in/lucasmoreirapereira/',
    instagram: 'https://www.instagram.com/lucasmarpe/',
    foto: 'images/Lucas-vertical.jpg',
    posicaoFoto: 'center 30%',
  },
];

export const EVENTOS: EventoComunidade[] = [
  {
    id: 'abertura-sbg',
    titulo: 'Abertura SBG',
    descricao:
      'Evento de abertura do AWS Student Builder Group na UCB para quem quer conhecer a comunidade e começar sua jornada em computação em nuvem.',
    formato: 'Presencial',
    categoria: 'Comunidade',
    data: '2026-09-30',
    horario: '19:00',
    local: 'UCB · Bloco K · Auditório K',
    linkIngresso: 'https://www.meetup.com/aws-sbg-at-catholic-university-of-brasilia/events/316403251/',
    status: 'aberto',
    detalhes: [
      'Conhecer o AWS Student Builder Group da UCB.',
      'Entender caminhos para começar em computação em nuvem.',
      'Conectar-se com estudantes e participar das próximas atividades.',
    ],
  },
];

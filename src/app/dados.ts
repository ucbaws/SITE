import comunidade from '../conteudo/comunidade.json';
import equipe from '../conteudo/equipe.json';
import albuns from '../conteudo/albuns.json';
import eventos from '../conteudo/eventos.json';

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

function campoOpcional(valor: string | undefined): string | undefined {
  return valor?.trim() ? valor : undefined;
}

export const COMUNIDADE = comunidade;

export const EQUIPE: MembroEquipe[] = (equipe.equipe as MembroEquipe[]).map((membro) => ({
  ...membro,
  descricao: campoOpcional(membro.descricao),
  instagram: campoOpcional(membro.instagram),
  linkedin: campoOpcional(membro.linkedin),
  github: campoOpcional(membro.github),
}));

export const ALBUNS = albuns.albuns;

export const EVENTOS: EventoComunidade[] = (eventos.eventos as EventoComunidade[])
  .map((evento) => ({
    ...evento,
    data: campoOpcional(evento.data),
    horario: campoOpcional(evento.horario),
    periodo: campoOpcional(evento.periodo),
    textoBotao: campoOpcional(evento.textoBotao),
    detalhes: evento.detalhes?.filter((detalhe) => detalhe.trim()) ?? [],
  }))
  .sort((a, b) => {
    if (a.status !== b.status) return a.status === 'aberto' ? -1 : 1;
    if (a.data && b.data) return a.data.localeCompare(b.data);
    if (a.data) return -1;
    if (b.data) return 1;
    return 0;
  });

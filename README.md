# Portal AWS Student Builder Group UCB

Portal da comunidade AWS Student Builder Group da Universidade Católica de Brasília. O projeto reúne a página inicial, a agenda de eventos e a apresentação do Core Team.

## Executar o projeto

Requisitos: Node.js 22.22.3 ou uma versão compatível definida em `package.json`.

```powershell
npm install
npm start
```

O portal ficará disponível em `http://127.0.0.1:4200`.

## Validar antes de publicar

```powershell
npm run build
npm test
```

- `npm run build` gera a versão de produção em `dist/aws-ucb-portal`.
- `npm test` verifica navegação, acessibilidade, conteúdo e responsividade.

## Organização

```text
src/app/
├── app.ts                 # Estrutura geral, menu e acessibilidade
├── app.html               # Cabeçalho, rodapé e chamada da comunidade
├── app.routes.ts          # Rotas do portal
├── dados.ts               # Equipe, comunidade e eventos
├── icone.ts               # Ícones usados na interface
└── pages/
    ├── inicio.*           # Página inicial
    ├── eventos.*          # Agenda e ingresso
    ├── sobre.*            # Banner e Core Team
    └── pagina-nao-encontrada.ts

public/images/             # Logo, banner e fotos usadas no portal
e2e/portal.spec.ts         # Testes de navegação e responsividade
```

## Atualizar conteúdo

As informações editáveis ficam em `src/app/dados.ts`:

- `COMUNIDADE`: descrição e links oficiais;
- `EQUIPE`: nomes, cargos, textos, redes sociais e fotos;
- `EVENTOS`: agenda, local, data, detalhes e link de ingresso.

Ao adicionar uma imagem, coloque o arquivo em `public/images` e use no dado correspondente um caminho iniciado por `images/`.

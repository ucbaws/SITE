# Guia de edição do portal (sem código)

Este guia é para quem faz parte do Core Team e quer atualizar o portal do AWS Student Builder Group UCB: eventos, álbuns de fotos, membros da equipe e informações da comunidade. Você não precisa saber programar. Toda a edição é feita pelo navegador, no **Pages CMS**.

Site publicado: https://ucbaws.github.io/SITE/

---

## 1. Primeiro acesso

### 1.1 Crie uma conta no GitHub (se ainda não tiver)

1. Acesse https://github.com/signup e crie sua conta.
2. Envie o seu **nome de usuário do GitHub** para a liderança do Core Team.

### 1.2 Peça para ser colaborador do repositório

O site fica guardado no repositório **ucbaws/SITE**. Só colaboradores conseguem editar.

1. Peça a quem administra o repositório para adicionar você em **Settings → Collaborators** de `ucbaws/SITE`.
2. Você vai receber um convite por e-mail (e também em https://github.com/notifications). **Aceite o convite**, senão o acesso não funciona.

### 1.3 Entre no Pages CMS

1. Acesse https://app.pagescms.org
2. Clique em **Sign in with GitHub** e autorize o acesso.
3. Na lista de repositórios, escolha **ucbaws/SITE** (branch **main**).
4. No menu da esquerda aparecem as seções:
   - **Eventos**
   - **Álbuns de fotos (Google Drive)**
   - **Core Team**
   - **Informações da comunidade**
   - **Media** (as imagens do site)

> Dica: cada campo tem uma explicação curta embaixo dele. Na dúvida, leia a explicação antes de preencher.

---

## 2. Como funciona a publicação

- Quando você clica em **Save** (Salvar), o Pages CMS grava a mudança no GitHub.
- O site é **atualizado sozinho em cerca de 2 minutos**.
- Para acompanhar: abra https://github.com/ucbaws/SITE/actions. A execução mais recente de **"Publicar portal no GitHub Pages"** mostra:
  - bolinha amarela = publicando;
  - ✅ verde = publicado, é só recarregar o site;
  - ❌ vermelho = deu erro e o site **continua com a versão anterior**. Avise a equipe técnica (veja a seção 7).
- Se o site ainda mostrar a versão antiga depois do ✅, recarregue a página com **Ctrl + Shift + R** (ou abra em aba anônima).

> Cada clique em Save gera uma publicação. Prefira fazer todas as mudanças de uma seção e salvar uma vez só.

---

## 3. Eventos

Abra **Eventos** no menu. Você verá a **Lista de eventos**, cada um recolhido com o título e a situação.

### 3.1 Adicionar um evento

1. Clique em **Add an entry** (Adicionar item) no fim da lista.
2. Preencha os campos:

| Campo | O que colocar |
|---|---|
| **Identificador** | Nome curto e único, minúsculo e **sem espaços**, com hífens. Ex.: `trilha-cloud-2026`, `workshop-lambda-out-2026`. Não repita um identificador que já existe. |
| **Título** | Nome do evento como vai aparecer no site. |
| **Descrição** | Explique o evento em um ou dois parágrafos. |
| **Formato** | Presencial, Online ou Presencial e on-line. |
| **Categoria** | Workshop, Meetup, Comunidade ou Trilha. |
| **Data** | Escolha o dia no calendário. Em programas contínuos (como uma trilha de 3 meses) **deixe em branco** e preencha **Período**. |
| **Horário** | Opcional. Ex.: `19h às 21h`. |
| **Período** | Só para programas contínuos. Ex.: `3 meses de preparação`. |
| **Local** | Ex.: `UCB, Bloco M` ou `On-line`. |
| **Link de inscrição** | Link completo do formulário, Meetup ou Sympla (começando com `https://`). |
| **Texto do botão** | Opcional. Ex.: `Fazer inscrição`. |
| **Situação** | **Aberto** para eventos com inscrições abertas. |
| **Destaques** | Clique em adicionar para cada ponto importante (um por linha). |

3. Clique em **Save**.
4. Confira o site após ~2 minutos.

### 3.2 Encerrar um evento (manter no histórico)

Use quando as inscrições acabaram ou o evento já aconteceu, mas você quer que ele continue aparecendo.

1. Abra o evento na lista.
2. Mude **Situação** para **Encerrado**.
3. Clique em **Save**.

O botão de inscrição deixa de aparecer, e o evento continua no site como já realizado.

### 3.3 Remover um evento

Use só quando o evento não deve mais aparecer de jeito nenhum (ex.: foi cancelado ou cadastrado por engano).

1. Na lista de eventos, abra o menu do item (ícone de três pontinhos ou lixeira ao lado dele).
2. Escolha **Remove** (Remover).
3. Clique em **Save**.

> Na dúvida entre encerrar e remover, prefira **encerrar**.

---

## 4. Álbuns de fotos (Google Drive)

As fotos ficam no Google Drive. O site mostra apenas um card com o link para a pasta.

### 4.1 Antes de tudo: compartilhe a pasta do Drive

1. No Google Drive, clique com o botão direito na pasta → **Compartilhar**.
2. Em **Acesso geral**, mude de "Restrito" para **"Qualquer pessoa com o link"**, com permissão de **Leitor**.
3. Clique em **Copiar link** e depois em **Concluído**.

> ⚠️ Se a pasta ficar como "Restrito", quem clicar no site verá "Você precisa de permissão". Teste o link numa aba anônima antes de publicar.

### 4.2 Adicionar um álbum

1. Abra **Álbuns de fotos (Google Drive)** no Pages CMS.
2. Clique em **Add an entry**.
3. Preencha:
   - **Título**: ex.: `Encontro de 24 de setembro`
   - **Descrição**: uma frase curta, ex.: `Registros do encontro Carreira & Cloud do Zero.`
   - **Link da pasta no Drive**: cole o link copiado (começa com `https://drive.google.com/`).
4. Clique em **Save**.

### 4.3 Remover um álbum

1. Abra o menu do álbum na lista → **Remove**.
2. Clique em **Save**.

Isso só tira o card do site. As fotos continuam no Drive.

---

## 5. Core Team

### 5.1 Trocar a foto de um membro

1. Prepare a foto: vertical ou quadrada, em **JPG**, com até **500 KB** (use https://squoosh.app para diminuir, se precisar). Dê um nome simples, sem espaços nem acentos, ex.: `Joana-Silva.jpg`.
2. Abra **Core Team** e clique no membro.
3. No campo **Foto**, clique na imagem atual e depois em **Upload** para enviar a nova (ou escolha uma já enviada).
4. Ajuste o **Enquadramento da foto** se o rosto ficar cortado:
   - comece com `center 30%`;
   - número **menor** (ex.: `center 15%`) mostra mais a parte de **cima** da foto;
   - número **maior** (ex.: `center 50%`) mostra mais a parte de **baixo**.
5. Clique em **Save** e confira no site após ~2 minutos.

### 5.2 Adicionar ou remover um membro

- **Adicionar**: **Add an entry**, preencha nome, cargo, foto e enquadramento (descrição e redes sociais são opcionais) e salve.
- **Remover**: menu do membro → **Remove** → **Save**.
- **Mudar a ordem**: arraste o item na lista. A ordem da lista é a ordem do site.

Redes sociais devem ser o **link completo** (ex.: `https://www.linkedin.com/in/fulano/`). Deixe em branco se a pessoa não quiser divulgar.

---

## 6. Informações da comunidade

Em **Informações da comunidade** ficam o nome, a descrição, a cidade, o Instagram, o LinkedIn e o link do botão **Participar**. Mude apenas o necessário e salve. Esses textos aparecem em várias páginas do site.

---

## 7. Errei! Como desfazer

Nada se perde: o GitHub guarda todas as versões.

### Opção 1: corrigir pelo próprio Pages CMS (mais simples)

Se você lembra o que estava antes, abra a seção, coloque o valor certo de volta e clique em **Save**.

### Opção 2: voltar uma versão pelo GitHub

1. Acesse https://github.com/ucbaws/SITE/commits/main
2. Encontre a sua alteração (o Pages CMS registra seu nome e o arquivo, ex.: `Update src/conteudo/eventos.json`).
3. Clique nela para ver o que mudou: em vermelho o que saiu, em verde o que entrou.
4. Copie o texto antigo de volta pelo Pages CMS e salve.

### Opção 3: peça ajuda

Se aparecer ❌ vermelho em **Actions** ou você não souber o que aconteceu, **não tente várias correções seguidas**. Envie para a equipe técnica:

- o que você tentou mudar;
- o link da execução com erro em https://github.com/ucbaws/SITE/actions.

Enquanto isso, o site continua no ar com a última versão que funcionou.

---

## 8. Regras rápidas

- ✅ Sempre comece links com `https://`.
- ✅ Identificador de evento: minúsculo, sem espaços, com hífens.
- ✅ Pastas do Drive: "Qualquer pessoa com o link".
- ✅ Fotos em JPG, até 500 KB, nome sem espaços nem acentos.
- ❌ Não apague a seção inteira nem itens de outras pessoas sem combinar com o time.
- ❌ Não edite arquivos fora do Pages CMS (código do site). Para isso, fale com a equipe técnica.

## Iniciando projeto

baixe as dependências

```bash
npm install
# or
yarn
# or
pnpm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Decisões de projeto

1. Estilização

Foi proposto utilizar styled-components mas vendo a documentação com o next 13, percebi que ainda não está maduro o suficiente para utilizar criar as estilizações utilizando SSR, apenas renderizando em `client side`.

Visto que a empresa Leadster é uma solução de marketing, acredito que um grande critério seja as landing pages terem um carregamento rápido, tendo em vista que alguns segundos de diferença geram grandes resultados no número de vendas.

Claro que como é uma página simples com pouca estilização, acredito que não terá tanto impacto na performance mas mesmo assim preferi gerar com tailwind para ter a possibilidade de já deixar as páginas estáticas e ganhar alguns milésimos de segundos ou segundos no carregamento das páginas.

**Referências das informações**

[next documentation](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components)

[next github example](https://github.com/vercel/app-playground/blob/main/app/styling/styled-components/page.tsx)

[the cost of javascript in **2018**](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)

2. Modelo de construção da página

Normalmente quando vou realizar a construção de uam página responsiva utilizo a convecção ´mobile first´ mas como só foi disponibilizado a versão web, irei primeiro fazer a versão web e depois adaptar oq eu achar necessário para os outros tamanhos de tela.

3. Header e Footer no arquivo layout

Foi feito dessa forma pensando em escalabilidade, onde pode-se querer adicionar mais uma página a landing page e os componentes de header e footer iriam acompanhar as novas páginas.

4. utilizar uma thumbanailFake

Para simular uma api no json tem o campo thumbnail que esta sem um link valido, e para este projeto está sendo importado uma fake para ficar congruente com o mockup

5. Criação do CategorySchema

Criei dessa maneira como um Schema, pensando que esses filtros podem ser dinamicos vindo do banco de dados

6. Na seção de vídeos não terá uma tela para caso não tenha vídeos encontrados

Ela não terá uma opção de vídeo não encontrado por se tratar de uma landing page, então eu imagino que nunca qualquer categoria deva estar vazia

7. Ordenação e paginação via cliente

Está sendo feito desta maneira apenas para podermos validar as funcionalidades já que não foi disponibilizado um backend para fazer essas operações

8. Categoria de mídia paga com nomes alterados

Os cards do mídia paga estão com seus nomes alterados para poder testar a ordenação.

9. Modal

O modal por não ter muitas imagens para me basear e tentar achar um padrão, acabou que o componente não ficou muito opinativo com relação a padronização dos modais

10. Tags

Como eu só vi tags para fazer downloads de algum arquivo criei o componente pensando nisso, como um link

11. Responsividade

A menor resolução que está landing visa comportar é 360 x 800

[referencia](https://www.robsonmoulin.com.br/artigos/user-experience/resolucoes-de-tela-mais-usadas-em-2022/)

### Falta Fazer

- [ ] Skeleton animation on modal
- [ ] Animation on open and close modal
- [ ] Testes de Fluxo e testes Unitários
- [ ] Animação quando entra os vídeos

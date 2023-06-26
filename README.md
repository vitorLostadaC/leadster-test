## Iniciando projeto

baixe as dependencias

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

## Desisões de projeto

1. Estilizacao

Foi proposto utilizar styled-components mas vendo a documentação com o next 13, percenbi que ainda não está maduro o suficiente para utilizar criar as estilizacões utilizando SSR, apenas renderizando em `client side`.

Visto que a empresa Leadster é uma solução de marketing, acredito que um grande critério seja as landing pages terem um carregamento rápido, tendo em vista que alguns segundos de diferença geram grandes resultados no numero de vendas.

Claro que como é uma página simples com pouca estilização, acredito que não terá tanto impacto na performance mas mesmo assim preferi gerar com tailwind para ter a possibilidade de já deixar as páginas estaticas e ganhar alguns milésimos de segundos ou segundos no carregamento das páginas.

**Refêrencias das informacões**

[next documentation](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components)

[next github example](https://github.com/vercel/app-playground/blob/main/app/styling/styled-components/page.tsx)

[the cost of javascript in **2018**](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)

2. Modelo de construção da página

Normalmente quando vou realizar a construção de uam página responsiva utilizo a convecção ´mobile first´ mas como só foi disponibilizado a versão web, irei primeiro fazer a versão web e depois adaptar oq eu achar necessário para os outros tamanhos de tela.

3. Header e Footer no arquivo layout

Foi feito dessa forma pensando em escalabilidade, onde pode-se querer adicionar mais uma página a landing page e os componentes de header e footer iriam acompanhar as novas páginas.

4. utilizar uma thumbanilFake

Para simular uma api no json tem o campo thumbnail que esta sem um link valido, e para este projeto está sendo importado uma fake para ficar congruente com o mockup

5. Criação do CategorySchema

Criei dessa maneira como um Schema, pensando que esses filtros podem ser dinamicos vindo do banco de dados

6. Na seção de videos não terá uma tela para caso não tenha videos encontrados

Ela não terá uma opção de video não encontrado por se tratar de uma landing page, então eu imagino que nunca qualquer categoria deva estar vazia

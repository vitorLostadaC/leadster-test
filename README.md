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

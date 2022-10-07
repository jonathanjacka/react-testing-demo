import { rest } from 'msw';

//https://mswjs.io/docs/basics/response-resolver

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Chocolate', imagePath: `/images/chocolate.png` },
        { name: 'Vanilla', imagePath: `/images/vanilla.png` },
        { name: 'Strawberry', imagePath: `/images/strawberry.png` },
      ])
    );
  }),
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
        { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
      ])
    );
  }),
];

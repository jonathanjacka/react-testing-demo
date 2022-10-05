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
];

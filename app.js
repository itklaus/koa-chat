const Koa = require('koa');
const app = module.exports = new Koa();

app.use((ctx, next) => {
  ctx.body = "Hello, world!";
});
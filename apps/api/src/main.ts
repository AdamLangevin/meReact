import * as express from 'express';
import { addAboutRoutes } from './app/about';

const app = express();


app.get('/app', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
addAboutRoutes(app);

const port = process.env.port || 4200;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/app`);
});
server.on('error', console.error);

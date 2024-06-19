import express from 'express';
import bodyParser from 'body-parser';
import clientsRoutes from './routes/clients.routes.js'; 
import reservationsRoutes from './routes/reservations.routes.js'; 

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use('/clients', clientsRoutes);
app.use('/reservations', reservationsRoutes);
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

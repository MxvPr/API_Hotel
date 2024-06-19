import express from 'express';
import ClientsController from '../controllers/clients.controller.js';

const router = express.Router();

// http://localhost:3000/clients
router.get('/', (req, res) => {
  ClientsController.getAll(req, res);
});

// http://localhost:3000/clients/1
router.get('/:id', (req, res) => {
  ClientsController.getById(req, res);
});

// http://localhost:3000/clients/clients
router.post('/clients', (req, res) => {
  ClientsController.create(req, res);
});

// http://localhost:3000/clients/1
router.put('/:id', (req, res) => {
ClientsController.update(req, res);
});

// http://localhost:3000/clients/1
router.delete('/:id', (req, res) => {
  ClientsController.delete(req, res);
});

// http://localhost:3000/clients/1/reservations
router.post('/:id/reservations', (req, res) => {
  ClientsController.bookRoom(req, res);
});

// http://localhost:3000/clients/1/1
router.delete('/:id/:reservationId', (req, res) => {
  ClientsController.cancelReservation(req, res);
});



export default router;
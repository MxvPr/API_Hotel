import ClientsService from '../services/clients.service.js';

class ClientsController {

    getAll(res) {
        const clients = ClientsService.getAll();
        res.json(clients);
    }

    getById(req, res) {
        const id = req.params.id;
        const client = ClientsService.getById(id);
        if (client) {
            res.json(client);
        } else {
            res.status(404).send('Client not found');
        }
    }

    create(req, res) {
        const newClient = ClientsService.create(req.body);
        res.json(newClient);
    }

    update(req, res) {
        const id = req.params.id;
        const updatedClient = req.body;
        const result = ClientsService.update(id, updatedClient);
        res.json(result);
    }

    delete(req, res) {
        const id = req.params.id;
        ClientsService.delete(id);
        res.json('Client supprimé avec succès');
    }

    bookRoom(req, res) {
        const id = req.params.id;
        const reservation = req.body;
        const result = ClientsService.bookRoom(id, reservation);
        res.json(result);
    }

    
    cancelReservation(req, res) {
        const id = req.params.id;
        const reservationId = req.params.reservationId;
        const result = ClientsService.cancelReservation(id, reservationId);
        res.json(result);
    }
}

export default new ClientsController();
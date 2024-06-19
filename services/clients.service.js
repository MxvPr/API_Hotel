import fs from 'fs';

class ClientsService {

    constructor() {
        try {
            let jsonData = JSON.parse(fs.readFileSync('./json/clients.json', 'utf-8'));
            if (!Array.isArray(jsonData.clients)) {
                throw new Error('Invalid data');
            }
            this.clientData = jsonData.clients;
        }
        catch (err) {
            console.error(err);
            this.clientData = [];
        }
    }

    getAll() {
        return this.clientData;
    }

    getById(id) {
        console.log(this.clientData.clients);
        return this.clientData.find(client => client.id == id);
    }

    create() {
        return "Client ajouter";
    }

    update() {
        return "Client mis à jour";
    }

    delete() {
        return "Client supprimer";
    }

    bookRoom() {
        return "Réservation ajoutée";
    }

    cancelReservation() {
        return "Réservation annulée";
    }

}

export default new ClientsService();
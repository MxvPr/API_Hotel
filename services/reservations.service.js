import fs from 'fs';

class ReservationsService {

  constructor() {
    try {
      let jsonData = JSON.parse(fs.readFileSync('./json/hotel.json', 'utf-8'));
      if (typeof jsonData !== 'object') {
        throw new Error('Invalid data');
      }
      this.hotelData = jsonData.name;
      this.locationData = jsonData.location;
      this.contactData = jsonData.contact;
      this.facilitiesData = jsonData.facilities;
      this.roomsData = jsonData.rooms;
      this.reservationData = jsonData.reservations || [];
    } catch (err) {
      console.error(err);
      this.hotelData = null;
      this.roomsData = [];
      this.reservationData = [];
    }
  }

  getHotelInfo() {
    return {
      name: this.hotelData,
      location: this.locationData,
      contact: this.contactData,
      facilities: this.facilitiesData
    };
    
  }

  listRooms() {
    return this.roomsData;
  }

  getRoomInfo(roomId) {
    const room = this.roomsData.find(room => room.id === roomId);
    if (!room) {
      throw new Error(`Room with id ${roomId} not found`);
    }
    return room;
  }

  reserveRoom() {
    return "Réservation ajoutée";
  }
  
  cancelReservation() {
    return "Réservation annulée";
  }

}

export default new ReservationsService();
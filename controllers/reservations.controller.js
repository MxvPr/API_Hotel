import reservationsService from '../services/reservations.service.js';

class ReservationsController {

  jsonPath = '../json/hotel.json';

  getHotelInfo( res) {
    const hotelInfo = reservationsService.getHotelInfo();
    res.json(hotelInfo);
  }

  listRooms( res) {
    const rooms = reservationsService.listRooms();
    res.json(rooms);
  }

  getRoomInfo(req, res) {
    const roomId = parseInt(req.params.id);
    const room = reservationsService.getRoomInfo(roomId);
    res.json(room);
  }

  reserveRoom(req, res) {
    const { clientId, roomId } = req.body;
    const reservation = reservationsService.reserveRoom(clientId, roomId);
    res.json('Reservation created');
  }

  cancelReservation(req, res) {
    const { clientId, reservationId } = req.body;
    reservationsService.cancelReservation(clientId, reservationId);
    res.json('Reservation annulée avec succès');
  }

}

export default new ReservationsController();
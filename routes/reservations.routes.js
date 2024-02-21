import express from 'express';
import hotelController from '../controllers/reservations.controller.js';

const router = express.Router();

// http://localhost:3000/reservations/hotel
router.get('/hotel', hotelController.getHotelInfo);
// http://localhost:3000/reservations/rooms
router.get('/rooms', hotelController.listRooms);
// http://localhost:3000/reservations/rooms/1
router.get('/rooms/:id', hotelController.getRoomInfo);
// http://localhost:3000/reservations/reservations
router.post('/reservations', hotelController.reserveRoom);
// http://localhost:3000/reservations/reservations
router.delete('/reservations', hotelController.cancelReservation);



export default router;
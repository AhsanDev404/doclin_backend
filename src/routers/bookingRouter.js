import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from '../controllers/bookingController.js';

import { isAuthenticate } from '../middlewares/authMiddleware.js';
import { createBookingValidation, updateBookingValidation } from '../middlewares/formValidation.js';

const bookingRouter = express.Router();

bookingRouter.route('/bookings').post(isAuthenticate,createBookingValidation , createBooking) // Create a new booking
bookingRouter.route('/bookings').get(getAllBookings); // Get all bookings
bookingRouter.route('/bookings/:id').get(getBookingById) // Get a specific booking by ID
bookingRouter.route('/bookings/:id').put(isAuthenticate,updateBookingValidation, updateBooking) // Update a booking
bookingRouter.route('/bookings/:id').delete(isAuthenticate, deleteBooking); // Delete a booking

export default bookingRouter;
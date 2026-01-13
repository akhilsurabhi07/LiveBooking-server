const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// In-memory array to store bookings
const bookings = [];

// Sample venue names for generating random bookings
const venueNames = [
  'The Grand Ballroom',
  'Skyline Restaurant',
  'Ocean View Cafe',
  'Downtown Bistro',
  'Riverside Grill',
  'Mountain Lodge',
  'City Lights Bar',
  'Garden Terrace',
  'Harbor House',
  'Sunset Lounge'
];

// Function to generate a random booking
function generateRandomBooking() {
  const venueName = venueNames[Math.floor(Math.random() * venueNames.length)];
  const partySize = Math.floor(Math.random() * 8) + 1; // 1-8 people
  const now = new Date();
  const time = now.toLocaleTimeString();
  
  return {
    venueName,
    partySize,
    time
  };
}

// Function to broadcast a new booking
function broadcastNewBooking() {
  const newBooking = generateRandomBooking();
  bookings.push(newBooking);
  
  // Keep only the last 50 bookings to prevent memory issues
  if (bookings.length > 50) {
    bookings.shift();
  }
  
  // Broadcast the new booking to all connected clients
  io.emit('newBooking', newBooking);
  console.log('Broadcasting new booking:', newBooking);
}

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A client connected');
  
  // Send existing bookings to newly connected client
  socket.emit('existingBookings', bookings);
  
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

// Start broadcasting bookings every 5 seconds
setInterval(broadcastNewBooking, 5000);

// Start the server
const PORT = process.env.PORT || 3000;

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the live bookings`);
  });
}

// Export for Vercel
module.exports = app; 
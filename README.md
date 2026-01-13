# 🎉 Live Bookings Viewer

A real-time web application that displays live restaurant and venue bookings using Node.js, Express.js, and Socket.IO. Watch as new bookings appear in real-time with a beautiful, modern interface.

![Live Bookings Viewer](https://img.shields.io/badge/Node.js-Express.js-Socket.IO-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Real-time Updates**: New bookings appear instantly every 5 seconds
- **Beautiful UI**: Modern, responsive design with glassmorphism effects
- **Live Statistics**: Real-time dashboard showing booking analytics
- **Connection Status**: Visual indicators for connection state
- **Mobile Responsive**: Works perfectly on all devices
- **Auto-cleanup**: Prevents memory issues by keeping only the last 50 bookings

## 🚀 Live Demo

Visit the application to see live bookings in action:
- **Local**: `http://localhost:3000` (after running the server)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/live-bookings-viewer.git
   cd live-bookings-viewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   
   Or run directly with Node.js:
   ```bash
   node server.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the live bookings viewer.

## 📁 Project Structure

```
live-bookings-viewer/
├── server.js          # Main server file with Socket.IO logic
├── package.json       # Dependencies and scripts
├── README.md         # This file
└── public/
    └── index.html    # Frontend interface with real-time updates
```

## 🔧 How It Works

### Backend (server.js)
- **Express.js server** serves static files from the `public` folder
- **Socket.IO** handles real-time communication between server and clients
- **In-memory storage** maintains an array of the last 50 bookings
- **Automatic booking generation** creates new bookings every 5 seconds with:
  - Random venue names from a curated list
  - Party sizes between 1-8 people
  - Current timestamp

### Frontend (public/index.html)
- **Real-time connection** to the server via Socket.IO
- **Dynamic updates** display new bookings as they arrive
- **Live statistics** show total bookings, active venues, average party size
- **Connection status** indicates server connectivity
- **Responsive design** works on desktop and mobile devices

## 🎨 Features in Detail

### Real-time Booking Display
- New bookings appear with smooth slide-in animations
- Highlight effect for newly added bookings
- Most recent bookings displayed first
- Clean card-based layout with venue details

### Live Statistics Dashboard
- **Total Bookings**: Count of all bookings in the system
- **Active Venues**: Number of unique venues with bookings
- **Average Party Size**: Mean party size across all bookings
- **Last Update**: Timestamp of the most recent booking

### Connection Management
- Visual connection status indicator
- Automatic reconnection handling
- Existing bookings sent to newly connected clients
- Real-time status updates

## 🎯 Sample Booking Data

Each booking object contains:
```javascript
{
  venueName: "The Grand Ballroom",
  partySize: 4,
  time: "2:30:45 PM"
}
```

## 🏢 Available Venues

The system generates bookings for these venues:
- The Grand Ballroom
- Skyline Restaurant
- Ocean View Cafe
- Downtown Bistro
- Riverside Grill
- Mountain Lodge
- City Lights Bar
- Garden Terrace
- Harbor House
- Sunset Lounge

## 🛠️ Customization

### Changing the Broadcast Interval
To modify how often new bookings are generated, edit the `setInterval` call in `server.js`:
```javascript
// Change 5000 to your desired interval in milliseconds
setInterval(broadcastNewBooking, 5000);
```

### Adding New Venues
Add venue names to the `venueNames` array in `server.js`:
```javascript
const venueNames = [
  'Your New Venue',
  'Another Restaurant',
  // ... existing venues
];
```

### Modifying Party Size Range
Adjust the party size range in the `generateRandomBooking()` function:
```javascript
const partySize = Math.floor(Math.random() * 10) + 1; // 1-10 people
```

## 🔌 API Endpoints

- `GET /` - Serves the main HTML page
- `GET /socket.io/` - Socket.IO connection endpoint

## 📡 Socket.IO Events

### Server to Client
- `existingBookings` - Sends all existing bookings to new clients
- `newBooking` - Broadcasts new booking to all connected clients

### Client to Server
- `connect` - Client connects to server
- `disconnect` - Client disconnects from server

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Deployment
1. Set the `PORT` environment variable if needed
2. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "live-bookings-viewer"
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright © 2024 AKhilSurabhi. All Rights Reserved.**

**Contact Information:**
- 📞 Phone: +91 7981325207
- ✉️ Email: akhilsurabhi07@gmail.com

## 🙏 Acknowledgments

- Built with [Express.js](https://expressjs.com/)
- Real-time functionality powered by [Socket.IO](https://socket.io/)
- Beautiful UI with modern CSS and glassmorphism effects

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub.

---

**Made with ❤️ for real-time web applications** 
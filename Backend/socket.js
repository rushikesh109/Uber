const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        // Handle 'join' event
        socket.on('join', async (data) => {
            const { userId, userType } = data;

            try {
                if (userType === 'user') {
                    await userModel.findByIdAndUpdate(userId, {
                        socketId: socket.id // Correctly using socket.id here
                    });
                } else if (userType === 'captain') {
                    await captainModel.findByIdAndUpdate(userId, {
                        socketId: socket.id // Correctly using socket.id here
                    });
                }
            } catch (err) {
                console.error('Error in join handler:', err);
                socket.emit('error', { message: 'Failed to join' });
            }
        });

        // Handle 'update-location-captain' event
        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location' });
            }

            try {
                await captainModel.findByIdAndUpdate(userId, {
                    location: {
                        ltd: location.ltd,
                        lng: location.lng
                    }
                });
            } catch (err) {
                console.error('Error updating location:', err);
                socket.emit('error', { message: 'Failed to update location' });
            }
        });

        // Handle 'disconnect' event
        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

// Function to send a message to a specific socket ID
function sendMessageToSocketId(socketId, messageObject) {
    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };

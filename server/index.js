const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes.js');
const messageRoutes = require('./routes/messageRoutes.js');
const notificationRoutes = require('./routes/notificationRoutes.js'); 
const sequelize = require('./config/database.js');
const User = require('./models/user.js');
const Message = require('./models/messageModel.js');
const Notification = require('./models/notificationModel.js'); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3026;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    sequelize.sync({ alter: true })
        .then(() => {
            console.log('Database synced');
        })
        .catch(err => {
            console.error('Error syncing database:', err);
        });
});

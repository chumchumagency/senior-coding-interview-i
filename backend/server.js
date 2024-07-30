const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors')
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

require('dotenv').config();

app.use(cors({origin: 'http://localhost:3000', credentials: true}))

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// app.use(cookieParser());
// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

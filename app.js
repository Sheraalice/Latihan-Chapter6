require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/profile', profileRoutes);
app.get('/', (req,res) => res.json({message: 'Welcome'}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

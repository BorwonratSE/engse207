const express = require('express');
const studentRoutes = require('./src/presentation/routes/studentRoutes');
const errorHandler = require('./src/presentation/middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use(errorHandler);

app.listen(3000, () =>
    console.log('Server running on http://localhost:3000')
);

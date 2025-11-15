const express = require('express');
const userRoutes = require('./routes/user');
const app = express();

app.use(express.json());
app.use('/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // necessário para testes

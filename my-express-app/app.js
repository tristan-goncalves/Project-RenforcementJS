const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8081' 
}));

let items = [];

app.post('/api/add-item', (req, res) => {
  const newItem = req.body;
  items.push(newItem); 
  res.status(201).send('Item ajouté avec succès');
});

app.get('/api/items', (req, res) => {
  res.json(items); 
});

app.delete('/api/items/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < items.length) {
    items.splice(index, 1);
    res.status(200).send('Item supprimé avec succès');
  } else {
    res.status(404).send('Item non trouvé');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

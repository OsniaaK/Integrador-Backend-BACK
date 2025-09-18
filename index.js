import express from 'express';
import cors from 'cors';
import productsData from './products.js';

let products = productsData;

const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.post('/api/products', (req, res) => {
  const { name, price, description, image, category, discount } = req.body;
  
  if (!name || !price || !category) {
    return res.status(400).json({ error: 'Los campos name, price y category son obligatorios.' });
  }

  const newProduct = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    title: name,
    price,
    description: description || '',
    image: image || '/assets/Products/default.webp',
    category,
    discount: discount || false,
    search: name.toLowerCase(),
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});
app.delete('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);

  if (products.length === initialLength) {
    return res.status(404).json({ error: 'Producto no encontrado.' });
  }

  res.status(204).end();
});
app.put('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Producto no encontrado.' });
  }

  const updatedProduct = { ...products[productIndex], ...req.body };
  products[productIndex] = updatedProduct;

  res.json(updatedProduct);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
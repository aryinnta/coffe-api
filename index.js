const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware agar API bisa diakses dari React Native / Web
app.use(cors());
app.use(express.json());

// Data Kopi (disesuaikan dari CSV kamu)
const coffees = [
  {
    coffee_id: 1,
    coffee_title: "Caffè Latte",
    coffee_detail: "Rich, full-bodied espresso in steamed milk, lightly topped with foam.",
    coffee_thumbnails: "https://picsum.photos/id/1060/200",
    coffee_poster: "https://picsum.photos/id/1060/400"
  },
  {
    coffee_id: 2,
    coffee_title: "Cappuccino",
    coffee_detail: "Espresso with steamed milk, topped with a deep layer of foam.",
    coffee_thumbnails: "https://picsum.photos/id/1062/200",
    coffee_poster: "https://picsum.photos/id/1062/400"
  },
  {
    coffee_id: 3,
    coffee_title: "Caffè Mocha",
    coffee_detail: "Espresso with bittersweet mocha sauce and steamed milk, topped with whipped cream.",
    coffee_thumbnails: "https://picsum.photos/id/1069/200",
    coffee_poster: "https://picsum.photos/id/1069/400"
  }
];

// Route dasar
app.get('/', (req, res) => {
  res.send('API Kopi Aktif!');
});

// Endpoint GET untuk mengambil semua data kopi
app.get('/api/coffees', (req, res) => {
  res.json(coffees);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
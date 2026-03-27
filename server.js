const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  // Gelen isteğe göre farklı cevaplar dönelim (Basit bir yönlendirme)
  if (req.url === '/selam') {
    res.end(JSON.stringify({ mesaj: "Merhaba! Servis çalışıyor." }));
  } else if (req.url === '/saat') {
    res.end(JSON.stringify({ su_an: new Date().toLocaleString() }));
  } else {
    res.end(JSON.stringify({ hata: "Sayfa bulunamadı." }));
  }
});

server.listen(port, () => {
  console.log(`Servis mutfağı hazır! http://localhost:${port} adresinden ulaşabilirsin.`);
});
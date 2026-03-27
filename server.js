const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8'); // Türkçe karakter desteği için utf-8 ekledik
  
  if (req.url === '/selam') {
    res.end(JSON.stringify({ mesaj: "Selamlar Fırat! Servis artık bulutta ve güncel." }));
  } else if (req.url === '/saat') {
    // Türkiye saat dilimine göre formatlama yapıyoruz
    const turkiyeSaati = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });
    
    res.end(JSON.stringify({ 
      lokasyon: "İstanbul / Türkiye",
      su_an: turkiyeSaati 
    }));
  } else {
    res.end(JSON.stringify({ hata: "Sayfa bulunamadı." }));
  }
});

server.listen(port, () => {
  console.log(`Servis mutfağı 3000 portunda güncellendi!`);
});

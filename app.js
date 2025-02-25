const { name } = require('ejs');
const express = require('express');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); 

let hastaBilgileri = {
    isim: "Bilinmiyor",
    oda: "Bilinmiyor",
    sira: "Bilinmiyor",
    polikinlik: "Bilinmiyor",
    soyad: "Bilinmiyor",
    durum: "Bilinmiyor"
};
let hastaBilgileri1 = {
    adad: "Bilinmiyor",
    sonra: "Bilinmiyor",
    soyadad: "Bilinmiyor",
};
let hastaBilgileri2 = {
    oldu: "Bilinmiyor",
    door: "Bilinmiyor",
    aa: "Bilinmiyor",
    lastname: "Bilinmiyor",
    olay: "Bilinmiyor"
};

  app.get("/", (req, res) => {
    res.render("form");
});

app.get("/panel", (req, res) => {
    res.render("output", hastaBilgileri);
});
app.get("/panel1", (req, res) => {
    res.render("output1", hastaBilgileri1);
});
app.get("/panel2", (req, res) => {
    res.render("output2", {
        oldu: hastaBilgileri2.oldu || "Bilinmiyor",
        door: hastaBilgileri2.door || "Bilinmiyor",
        aa: hastaBilgileri2.aa || "Bilinmiyor",
        lastname: hastaBilgileri2.lastname || "Bilinmiyor",
        olay: hastaBilgileri2.olay || "Bilinmiyor",
        maskText: function(text) { return "***" + text; },
        maskTextt: function(text) { return "***" + text; }
    });
});




app.post("/updateData", (req, res) => {
    hastaBilgileri = req.body;
    res.sendStatus(200);
});
app.post("/updateData1", (req, res) => {
    hastaBilgileri1 = req.body;
    res.sendStatus(200);
});
app.post("/updateData2", (req, res) => {
    hastaBilgileri2 = req.body;
    res.sendStatus(200);
});

app.get("/getData", (req, res) => {
    res.render("output", hastaBilgileri);
});
app.get("/getData1", (req, res) => {
    res.render("output1", hastaBilgileri1);
});
app.get("/getData2", (req, res) => {
    res.render("output2", hastaBilgileri2);
});

app.post("/ameliyathane",(req, res)=> {
    res.send(`
        <body>
    
    
        

        <form  hx-target="this" hx-swap="innerHTML"></form>
        <div id="anasayfa"  class="container"  hx-target="this" hx-swap="outerHTML"  >

        <center><img src="https://dosyahastane.saglik.gov.tr/WebFiles/logolar/logo-tr.png" alt="Hastane Logosu" class="logo"></center>
        <h1>HASTA ÇAĞIRMA(ameliyathane)</h1>
        
               
            
            <label>Hasta Adı:</label>
            <input type="text" id="isim" name="isim" placeholder="İsim giriniz" required><br>
            <label>Hasta Soyadı:</label>
            <input type="text" id="soyad" name="soyad" placeholder="soyadını giriniz" required><br>
            <label>Oda:</label>
            <input type="number" min="0" id="oda" name="oda" placeholder="Oda numarasını giriniz" required><br>
            <label>Durumu:</label>
            <select id="durum" name="durum">
                <option name="AMELİYATHANE">AMELİYATHANE</option>
                <option name="YOĞUN BAKIM">YOĞUN BAKIM</option>
                
            </select>
            <button type="button" onclick="inputlariGuncelle()">Güncelle</button>
            
            <button type="button" onclick="window.location.href='/'">ANASAYFA</button>

        
        <button onclick="paneliAc()">Paneli Aç</button>
    </div>
        </form>
        
        
   
</body>
        
        
        `)
})

app.post("/gise",(req, res)=> {
   res.send(`
       <body>
   
   
       

       <form  hx-target="this" hx-swap="innerHTML"></form>
       <div id="anasayfa"  class="container"  hx-target="this" hx-swap="outerHTML"  >

       <center><img src="https://dosyahastane.saglik.gov.tr/WebFiles/logolar/logo-tr.png" alt="Hastane Logosu" class="logo"></center>
       <h1>HASTA ÇAĞIRMA(gişe)</h1>
       
              
           
           <label>Hasta Adı:</label>
           <input type="text" id="adad" name="adad" placeholder="İsim giriniz" required><br>
           <label>Hasta Soyadı:</label>
           <input type="text" id="soyadad" name="soyadad" placeholder="soyadını giriniz" required><br>
           <label>Sıra:</label>
            <input type="number" min="0" id="sonra" name="sonra" placeholder="Sıra numarasını giriniz" required><br>
           <button type="button" onclick="inputlariGuncelle1()">Güncelle</button>
           
           <button type="button" onclick="window.location.href='/'">ANASAYFA</button>

       
        <button onclick="paneliAc1()">Paneli Aç</button>
   </div>
       </form>
       
       
  
</body>
       
       
       `)
})
app.post("/rontgen",(req, res)=> {
    hastaBilgileri2 =req.body;
   res.send(`
       <body>
   
   
       

       <form  hx-target="this" hx-swap="innerHTML"></form>
       <div id="anasayfa"  class="container"  hx-target="this" hx-swap="outerHTML"  >

       <center><img src="https://dosyahastane.saglik.gov.tr/WebFiles/logolar/logo-tr.png" alt="Hastane Logosu" class="logo"></center>
       <h1>HASTA ÇAĞIRMA(röntgen)</h1>
       
              
           
           <label>Hasta Adı:</label>
           <input type="text" id="oldu" name="oldu"  placeholder="İsim giriniz" required><br>
           <label>Hasta Soyadı:</label>
           <input type="text" id="lastname" name="lastname" placeholder="soyadını giriniz" required><br>
           <label>Oda:</label>
           <input type="number" min="0" id="door" name="door" placeholder="Oda numarasını giriniz" required><br>
           <label>Sıra:</label>
            <input type="number" min="0" id="aa" name="aa" placeholder="Sıra numarasını giriniz" required><br>
           <label>Durumu:</label>
            <select id="olay" name="olay">
                <option name="ACİL">ACİL</option>
                <option name="NORMAL">NORMAL</option>
                
            </select>
           <button type="button" onclick="inputlariGuncelle2()">Güncelle</button>
           
           <button type="button" onclick="window.location.href='/'">ANASAYFA</button>

       
       <button onclick="paneliAc2()">Paneli Aç</button>
   </div>
       </form>
       
       
  
</body>
       
       
       `)
})


app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor!`);
});


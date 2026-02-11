// --- METİN DEĞERLERİ ---
function isimdegeri() {
    document.getElementById("cv-name").innerText = document.getElementById("adSoyad").value;
}
function unvandegeri() {
    document.getElementById("cv-title").innerText = document.getElementById("unvan").value;
}
function telefondegeri() {
    document.getElementById("cv-phone").innerText = document.getElementById("telefon").value;
}
function maildegeri() {
    document.getElementById("cv-mail").innerText = document.getElementById("mail").value;
}
function webdegeri() {
    document.getElementById("cv-web").innerText = document.getElementById("web").value;
}
function adresdegeri() {
    document.getElementById("cv-address").innerText = document.getElementById("adres").value;
}
function egitimBilgisi() {
    document.getElementById("cv-education").innerText = document.getElementById("egitim").value;
}

// --- OKUL INPUTLARI ---
function okulGir() {
    const adet = document.getElementById("okulSayisi").value;
    const div = document.getElementById("okulInputu");
    div.innerHTML = "";
    for (let i = 1; i <= adet; i++) {
        const label = document.createElement("label");
        label.textContent = i + ". Okul : ";
        const input = document.createElement("input");
        input.type = "text";
        input.id = "okul" + i;
        input.placeholder = "Okul adı";
        const aciklama = document.createElement("input");
        aciklama.type = "text";
        aciklama.id = "okulAciklama" + i;
        aciklama.placeholder = "Açıklama";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(aciklama);
        div.appendChild(document.createElement("br"));
    }
}

// --- YETENEKLER ---
function yetenekAciklamasi() {
    document.getElementById("cv-skills").innerText = document.getElementById("yetenekAciklama").value;
}
function yetenekGir() {
    const adet = document.getElementById("yetenekSayisi").value;
    const div = document.getElementById("yetenekInputu");
    div.innerHTML = "";
    for (let i = 1; i <= adet; i++) {
        const label = document.createElement("label");
        label.textContent = i + ". Yetenek : ";
        const input = document.createElement("input");
        input.type = "text";
        input.id = "yetenek" + i;
        input.placeholder = "Yetenek adı";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(document.createElement("br"));
    }
}

// --- ORTA PANEL GÖRÜNÜŞ ---
const inputs = document.querySelectorAll('.panel-middle input[type="color"]');
const selects = document.querySelectorAll('.panel-middle select');

const bgColorInput = inputs[0];        
const leftColColorInput = inputs[1]; 
const nameBoxColorInput = inputs[2];  
const nameTextColorInput = inputs[3]; 
const lineColorInput = inputs[4];     

const fontSelect = selects[0];        
const photoSelect = selects[1];      
const lineStyleSelect = selects[2];   

const solKolon = document.querySelector('.solKolon');
const isimKutusu = document.querySelector('.isimKutusu');
const isimDiv = document.querySelector('#cv-name');
const cizgi = document.querySelector('.isimKutusu .cizgi');
const foto = document.querySelector('.foto');

// Renkler
bgColorInput.addEventListener('input', () => document.body.style.backgroundColor = bgColorInput.value);
leftColColorInput.addEventListener('input', () => solKolon.style.backgroundColor = leftColColorInput.value);
nameBoxColorInput.addEventListener('input', () => isimKutusu.style.backgroundColor = nameBoxColorInput.value);
nameTextColorInput.addEventListener('input', () => isimDiv.style.color = nameTextColorInput.value);
lineColorInput.addEventListener('input', () => updateLineStyle());

// Yazı tipi
fontSelect.addEventListener('change', () => document.body.style.fontFamily = fontSelect.value);

photoSelect.addEventListener('change', () => {
    foto.style.borderRadius = photoSelect.value === 'Daire' ? '50%' : '0';
});

lineStyleSelect.addEventListener('change', updateLineStyle);

function updateLineStyle() {
    const style = lineStyleSelect.value;
    if (style === 'Düz') cizgi.style.borderBottom = `2px solid ${lineColorInput.value}`;
    else if (style === 'Kesikli') cizgi.style.borderBottom = `2px dashed ${lineColorInput.value}`;
    else if (style === 'Noktalı') cizgi.style.borderBottom = `2px dotted ${lineColorInput.value}`;
}


document.querySelectorAll('.panel-left .section-group').forEach(group => {
    const baslik = group.querySelector('h3')?.textContent?.trim();
    const ta = group.querySelector('textarea');
    if (!ta || !baslik) return;

    if (baslik === 'Hakkımda') {
     
        ta.addEventListener('input', (e) => {
            document.getElementById('cv-about').innerText = e.target.value;
        });
        
        window.hakkimdaDegeri = function() {
            document.getElementById('cv-about').innerText = ta.value;
        };
    } else if (baslik === 'İş Deneyimi' || baslik === 'İş Deneyimi') {
        ta.addEventListener('input', (e) => {
            document.getElementById('cv-experience').innerText = e.target.value;
        });
        window.isDeneyimiDegeri = function() {
            document.getElementById('cv-experience').innerText = ta.value;
        };
    }
});


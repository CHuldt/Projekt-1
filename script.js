// Data för musterier
const musterier = [
    {
        namn: "Skånska Musteriet",
        plats: "Lund, Skåne",
        öppettider: "Mån-Fre: 09:00 - 18:00, Lör-Sön: 10:00 - 16:00"
    },
    {
        namn: "Äppelbo Musteri",
        plats: "Äppelbo, Dalarna",
        öppettider: "Mån-Fre: 08:00 - 17:00, Lördag: 09:00 - 14:00"
    },
    {
        namn: "Göteborgs Musteri",
        plats: "Göteborg, Västra Götaland",
        öppettider: "Tis-Sön: 10:00 - 19:00"
    },
    {
        namn: "Stockholms Äppelmusteri",
        plats: "Stockholm, Stockholm",
        öppettider: "Alla dagar: 09:00 - 17:00"
    }
];

// Funktion för att rendera musterier på sidan
function laddaMusterier() {
    const musteriList = document.getElementById('musteri-list');

    musterier.forEach(musteri => {
        const musteriDiv = document.createElement('div');
        musteriDiv.classList.add('musteri');

        const title = document.createElement('h2');
        title.textContent = musteri.namn;
        musteriDiv.appendChild(title);

        const plats = document.createElement('p');
        plats.textContent = `Plats: ${musteri.plats}`;
        musteriDiv.appendChild(plats);

        const öppettider = document.createElement('p');
        öppettider.innerHTML = `<span class="open-time">Öppettider:</span> ${musteri.öppettider}`;
        musteriDiv.appendChild(öppettider);

        musteriList.appendChild(musteriDiv);
    });
}

// Kör funktionen när sidan har laddats
window.onload = laddaMusterier;

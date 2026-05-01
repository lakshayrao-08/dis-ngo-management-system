var map = L.map('map').setView([28.400, 77.0250], 10); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const areapoints = [
    { lat: 28.450, lng: 77.0266, name: "XYZ FOOD", url: "recycle.html" },
    { lat: 28.4500, lng: 77.0330, name: "LIFE CAFE", url: "lifecafe.html" },
    { lat: 28.4100, lng: 77.029, name: "RECYCLE RESTAURANT",  url: "xyzfood.html" },
    { lat: 28.4901, lng: 77.2500, name: "OLD RESTAURANT", url: "oldrestaurant.html" }
];

areapoints.forEach(zone => {
    let color = 'blue';
    
    const popupHTML = `
        <b>${zone.name}</b><br>
        ${zone.url ? `<a href="${zone.url}" target="_blank" style="color: blue; text-decoration: underline;">Visit Site</a>` : ''}
    `;

    L.circle([zone.lat, zone.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 500 
    })
    .addTo(map)
    .bindPopup(popupHTML); // Pass the custom HTML here
});

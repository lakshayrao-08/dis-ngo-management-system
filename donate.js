const paymentSelect = document.getElementById('payment-method');
const detailsDiv = document.getElementById('payment-details');

paymentSelect.addEventListener('change', function() {
    const choice = this.value;

    if (choice === 'cash') {
        detailsDiv.innerHTML = `<p>✅ Please drop off cash at the <strong>XYZFOOD</strong> main desk.</p>`;
    } 
    else if (choice === 'upi') {
        detailsDiv.innerHTML = `<p> UPI ID <strong>dithisngo@sbiokxxx</strong></p>`;
    } 
    else if (choice === 'qr') {
        detailsDiv.innerHTML = `
            <p> Scan to Donate:</p>
            <img src="qr.jpg" alt="QR Code" style="width:150px; border: 5px solid #e3d2d2;">
        `;
    } 
    else if (choice === 'cheque') {
        detailsDiv.innerHTML = `
            <p>✍️ Cheque payable to: <strong>"DI'S NGO FOUNDATION"</strong></p>
            <input type="text" placeholder="Enter Cheque Number">
        `;
    }
    
    detailsDiv.style.display = 'block';
});
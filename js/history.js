// Sample data for donation history
const donationHistory = [
    {
        amount: 96500,
        cause: "famine-2024 at Feni, Bangladesh",
        date: "Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)"
    },
    {
        amount: 6500,
        cause: "Flood Relief in Feni, Bangladesh",
        date: "Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)"
    },
    {
        amount: 15500,
        cause: "Aid for Injured in the Quota Movement, Bangladesh",
        date: "Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)"
    }
];

// Function to display donation history
function loadDonationHistory() {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = '';
    donationHistory.forEach(donation => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        historyItem.innerHTML = `
            <h3>{donation.amount} Taka is Donated for {donation.cause}</h3>
            <p>Date: {donation.date}</p>
        `;

        historyContainer.appendChild(historyItem);
    });
}

// Load donation history on page load
window.onload = loadDonationHistory;

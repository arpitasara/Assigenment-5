document.getElementById('donateButton').addEventListener('click', function() {
  let donationAmount = document.getElementById('donationAmount').value;
  if (donationAmount) {
      console.log('Thank you for donating ${donationAmount} BDT to the Quota Movement Aid!');
  } else {
      alert('Please enter a valid donation amount.');
  }
});

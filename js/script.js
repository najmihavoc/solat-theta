// Function to fetch and display prayer times for Shah Alam on 11-Mar-2025
function getWaktuSolatShahAlam() {
  const apiUrl = 'https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=year&zone=SGR03';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Log the full data to inspect its structure
      console.log("API Response:", data);

      // Access prayer times for the year
      const prayerTimes = data.prayerTime;

      if (prayerTimes && prayerTimes.length > 0) {
        // Filter for the specific date (11-Mar-2025)
        const specificDate = prayerTimes.find(day => day.date === "11-Mar-2025");

        if (specificDate) {
          console.log("Prayer Times for 11-Mar-2025:", specificDate);

          // Update your HTML with prayer times
          document.querySelector('.imsak').textContent = specificDate.imsak || 'N/A';
          document.querySelector('.subuh').textContent = specificDate.fajr || 'N/A';
          document.querySelector('.syuruk').textContent = specificDate.syuruk || 'N/A';
          document.querySelector('.dhuha').textContent = specificDate.dhuha || 'N/A';
          document.querySelector('.zohor').textContent = specificDate.dhuhr || 'N/A';
          document.querySelector('.asar').textContent = specificDate.asr || 'N/A';
          document.querySelector('.maghrib').textContent = specificDate.maghrib || 'N/A';
          document.querySelector('.isyak').textContent = specificDate.isha || 'N/A';
        } else {
          console.error("No prayer times available for 11-Mar-2025.");
        }
      } else {
        console.error("No prayer times available.");
      }
    })
    .catch(error => {
      console.error("Error fetching prayer times:", error);
    });
}

// Call the function
getWaktuSolatShahAlam();

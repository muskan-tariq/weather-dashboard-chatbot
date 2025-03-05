function updateCharts(data) {
    const labels = data.list.slice(0, 5).map(entry => new Date(entry.dt_txt).toLocaleDateString());
    const temperatures = data.list.slice(0, 5).map(entry => entry.main.temp);
  
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: temperatures,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          borderRadius: 10
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#333'
            }
          }
        }
      }
    });
  
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Sunny', 'Cloudy', 'Rainy'],
        datasets: [{
          data: [60, 20, 20], // Example values; change based on actual weather data
          backgroundColor: ['#FFD700', '#C0C0C0', '#00BFFF']
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              color: '#333'
            }
          }
        }
      }
    });
  
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
          tension: 0.3  // Smooth line
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#333'
            }
          }
        }
      }
    });
  }
  
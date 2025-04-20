const ctxRevenue = document.getElementById('modernRevenueChart').getContext('2d');
new Chart(ctxRevenue, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue ($)',
      data: [5100, 7400, 6700, 8300, 9100, 9800],
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      borderColor: '#2ecc71',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#2ecc71'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const ctxBookings = document.getElementById('modernBookingChart').getContext('2d');
new Chart(ctxBookings, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Bookings',
      data: [120, 180, 200, 150],
      backgroundColor: '#3498db',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

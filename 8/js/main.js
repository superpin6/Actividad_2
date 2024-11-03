// Array para almacenar los votos de cada partido
let votes = [0, 0, 0, 0, 0];

// Configuración del gráfico con Chart.js
const ctx = document.getElementById('voteChart').getContext('2d');
const voteChart = new Chart(ctx, {
  type: 'doughnut', // Gráfico tipo doughnut (anillo)
  data: {
    labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
    datasets: [
      {
        data: votes,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#9B59B6', '#4CAF50'],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Desactiva la leyenda automática
      },
    },
  },
});

// Función para añadir un voto al partido seleccionado
function vote(partyIndex) {
  votes[partyIndex]++;
  updateChart();
}

// Función para actualizar el gráfico con los nuevos datos
function updateChart() {
  voteChart.data.datasets[0].data = votes;
  voteChart.update();
}

// Función para resetear los votos
function reset() {
  votes = [0, 0, 0, 0, 0];
  updateChart();
}

$('.toggle_btns').click(function (e) {
   $('.admin_siderbarr').toggleClass('sgit howw');
});

$('.flag-lists_in a').click(function (e) {
   $('.flag-lists_in').removeClass('active');
   $(this).parent().addClass('active');
});
document.getElementsByTagName('body')[0].onload = function () {
   setTimeout(function () {
      $("#loader").addClass('d-none');
      $('.main-content').addClass('d-block');
   }, 500);
}
// line chart 
const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
   type: 'line',
   data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
         label: 'Last week',
         backgroundColor: 'rgba(161, 198, 247, 1)',
         borderColor: 'rgb(47, 128, 237)',
         data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
         fill: true // Fill area under the line
      }]
   },
   options: {
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true
            }
         }]
      },
      plugins: {
         dataLabels: {
            enabled: false
         },
         legend: {
            display: false // Hide the legend
         },
         tooltip: {
            enabled: false // Disable tooltips
         },
         title: {
            display: false // Hide chart title
         }
      },
      interaction: {
         mode: 'index',
         intersect: false
      }
   }
});
$(document).ready(function ($) {
   $(".order-view").click(function () {
      window.location.href = "view-order.html";
   });
});

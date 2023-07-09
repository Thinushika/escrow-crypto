document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var spinner = document.querySelector(".spinner");
        var content = document.querySelector(".content");

        spinner.style.display = "none";
        content.style.display = "block";
    }, 3000);
});



//   clear field
document.getElementById("clearEmail").addEventListener("click", function () {
    document.getElementById("email").value = "";
});

//   hide show password
var passwordInput = document.getElementById("password");
var togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
        passwordInput.type = "password";
        togglePasswordButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
});


// Toggle the sidebar
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
  }



//   badge color



// canvass
// document.addEventListener('DOMContentLoaded', function() {
//     var ctx = document.getElementById('lineGraph').getContext('2d');
  
//     // Define your data
//     var data = {
//       labels: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
//       datasets: [{
//         label: 'Stock Prices',
//         data: [50, 60, 55, 70, 65, 80],
//         borderColor: '#007BFF',
//         backgroundColor: 'transparent',
//         pointBackgroundColor: '#007BFF',
//         pointRadius: 5,
//         pointHoverRadius: 7,
//         borderWidth: 2
//       }]
//     };
  
//     // Create the line graph
//     var lineGraph = new Chart(ctx, {
//       type: 'line',
//       data: data,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           yAxes: [{
//             ticks: {
//               callback: function(value, index, values) {
//                 return '$' + value;
//               }
//             }
//           }]
//         },
//         tooltips: {
//           enabled: false
//         },
//         legend: {
//           display: false
//         }
//       }
//     });
  
//     // Add marker functionality
//     var chartContainer = document.querySelector('.chart-container');
//     var chartMarker = document.createElement('div');
//     chartMarker.classList.add('chart-marker');
//     chartContainer.appendChild(chartMarker);
  
//     var chartArea = chartContainer.getBoundingClientRect();
  
//     chartContainer.addEventListener('mousemove', function(e) {
//       var mouseX = e.clientX - chartArea.left;
//       var mouseY = e.clientY - chartArea.top;
  
//       var activePoint = lineGraph.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true)[0];
  
//       if (activePoint) {
//         var xPos = activePoint.tooltipPosition().x + chartArea.left;
//         var yPos = activePoint.tooltipPosition().y + chartArea.top;
  
//         chartMarker.style.left = xPos + 'px';
//         chartMarker.style.top = yPos + 'px';
//         chartMarker.innerText = '$' + activePoint.yLabel;
//         chartMarker.style.display = 'block';
//       } else {
//         chartMarker.style.display = 'none';
//       }
//     });
//   });
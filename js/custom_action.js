$(document).ready(function(){
    $('.card-counter').counterUp({
        delay: 5,
        time: 1000
    });
});


// Line Chart 

const dataArr = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const orderCounter = [6, 7, 11, 21, 17, 14, 19, 23, 18,15];
const viewerCounter = [2,4,5,9,7,6,11,13,8,5];

const ov = document.getElementById('order&viewer').getContext('2d');
const myChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: dataArr,
        datasets: [{
            label: 'Order Count',
            data: orderCounter,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4,
            fill: true,
            borderWidth: 0.5,
            pointRadius: 0,
            pointHoverRadius: 3
        },
        {
            label: 'Viewer Count',
            data: viewerCounter,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            tension: 0.4,
            fill: true,
            borderWidth: 0.5,
            pointRadius: 0,
            pointHoverRadius: 3
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                }
            }

        }
    }
});

// Doughnut Chart 

const ctx = document.getElementById('op').getContext('2d');
const op = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['ရန်ကုန်', 'ထားဝယ်', 'မြိတ်', 'မြစ်ကြီးနား', 'တောင်ကြီး', 'ကလော'],
        datasets: [{
            label: 'Place',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverOffset: 4
        }]
    },
    options: {
        parsing: {
            key: 'nested.value'
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                }
            }
        }
    }
    
});
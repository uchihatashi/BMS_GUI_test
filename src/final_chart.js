
const labels = ['Cell1', 'Cell2', 'Cell3', 'Cell4', 'Cell5', 'Cell6', 'Cell7', 'Cell8', 'Cell9', 'Cell10', 'Cell11', 'Cell12', 'Cell13', 'Cell14', 'Cell15', 'Cell16'];
// Generate random values between 6 and 25 for each cell
const randomValues = Array.from({ length: 16 }, () => Math.floor(Math.random() *(20 - 15 + 1))+15);
const max = Math.max(...randomValues); // Find the maximum value
const min = Math.min(...randomValues); // Find the minimum value

const data = {
    labels: labels,
    datasets: [{
        label: 'BMS Each Cell Voltage',
        data: randomValues,
        backgroundColor: randomValues.map((value) => getColor(value)),
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
    }]
};

function getColor(value) {
    if (value === max) {
        return 'rgba(255, 0, 0, 0.2)'; // Red for the highest value
    } else if (value === min) {
        return 'rgba(250, 250, 0, 0.4)'; // Yellow for the lowest value
    } else {
        return 'rgba(0, 255, 0, 0.2)'; // Green for the lowest value
    }
}

// config 
const config = {
type: 'bar',
data,
options: {
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
};

// render init block
const myChart = new Chart(
document.getElementById('myChart1'),
config
);


//#############################################################################
//############################### Chart 2 #####################################
//#############################################################################

const labels2 = ['Temp1', 'Temp2', 'Temp3', 'Temp4', 'Temp5', 'Temp6', 'Temp7', 'Temp8'];
// Generate random values between 0 and 50 for each temperature
const randomValues2 = Array.from({ length: 8 }, () => Math.floor(Math.random() * 51));
const max2 = Math.max(...randomValues2); // Find the maximum value
const min2 = Math.min(...randomValues2); // Find the minimum value

const data2 = {
labels: labels2,
datasets: [{
    label: 'Temperature',
    data: randomValues2,
    backgroundColor: randomValues2.map((value) => getColor2(value)),
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1
}]
};

function getColor2(value) {
if (value === max2) {
    return 'rgba(255, 0, 0, 0.2)'; // Red for the highest value
} else if (value === min2) {
    return 'rgba(250, 250, 0, 0.4)'; // Green for the lowest value
} else {
    return 'rgba(0, 255, 0, 0.2)'; // Green for other values
}
}

// config
const config2 = {
type: 'bar',
data: data2,
options: {
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
};

// render init block
const myChart2 = new Chart(
document.getElementById('myChart2'),
config2
);


// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;


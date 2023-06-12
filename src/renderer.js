// const { ipcMain } = require('electron');

// import { ipcMain } from 'electron';

const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const resultDiv = document.getElementById('result');

document.getElementById('add').addEventListener('click', () => {
  const sum = parseFloat(label1.value) + parseFloat(label2.value) + parseFloat(label3.value) + parseFloat(label4.value);
  resultDiv.textContent = `Result: ${sum}`;
});

document.getElementById('subtract').addEventListener('click', () => {
  const difference = parseFloat(label1.value) - parseFloat(label2.value) - parseFloat(label3.value) - parseFloat(label4.value);
  resultDiv.textContent = `Result: ${difference}`;
});

document.getElementById('multiply').addEventListener('click', () => {
  const product = parseFloat(label1.value) * parseFloat(label2.value) * parseFloat(label3.value) * parseFloat(label4.value);
  resultDiv.textContent = `Result: ${product}`;
});

document.getElementById('openWindow').addEventListener('click', () => {
  const resultValue = document.getElementById('result').textContent;
  window.open(`login.html?value=${resultValue}`, '_blank', 'width=1000,height=650');
});

document.getElementById('openWindow2').addEventListener('click', () => {
  // const resultValue = document.getElementById('result').textContent;
  window.open(`result2.html`, '_blank', 'width=1000,height=650');
});


document.getElementById('openWindow3').addEventListener('click', () => {
  window.open(`final_chart.html`, '_blank', 'width=1000,height=680');
});

document.getElementById('openWindow4').addEventListener('click', () => {
  window.open(`test_code.html`, '_blank', 'width=1000,height=650');
});



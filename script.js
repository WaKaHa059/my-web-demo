const lis = document.querySelectorAll('li');
const datas = document.querySelectorAll('.data');
const homeGrid = document.getElementById('home');

// 初始化顯示狀態，確保一開始顯示 main-grid 並隱藏其他 data 區塊
window.addEventListener('DOMContentLoaded', function() {
    console.log('JS loaded');
    document.getElementById('home').classList.add('show');
    document.querySelectorAll('.data').forEach(data => data.classList.remove('show'));
    document.querySelector('li[data-target="home"]').classList.add('active');
});

lis.forEach(li => {
    li.addEventListener('click', function() {
        const targetId = this.dataset.target;
        lis.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // 隱藏所有 data 區塊
        datas.forEach(data => data.classList.remove('show'));
        // 隱藏 home 區塊
        homeGrid.classList.remove('show');
        if (this.textContent.trim() === 'home') {
            homeGrid.classList.add('show');
        } else {
            document.getElementById(targetId).classList.add('show');
        }
    });
});

document.getElementById('submitButton').addEventListener('click', function() {
    const data = {
        dateInput: document.getElementById('dateInput').value,
        printerId: document.getElementById('printerId').value,
        code1: document.getElementById('code1').value,
        code2: document.getElementById('code2').value,
        code3: document.getElementById('code3').value,
        code4: document.getElementById('code4').value,
        code5: document.getElementById('code5').value,
        code6: document.getElementById('code6').value,
        code7: document.getElementById('code7').value,
        code8: document.getElementById('code8').value
    };
    fetch('https://script.google.com/macros/s/AKfycbzEDkqt6hI3BQcqkPuagUxYkUQvxQy0a5dkEhhfWrrdw26WvFDL4CszZe4sdhXO17sgyQ/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // 改為 application/json
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => alert('已送出到 Google Sheet！'))
    .catch(err => alert('送出失敗: ' + err));
});
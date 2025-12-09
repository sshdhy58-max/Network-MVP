// ====== الرسم 1: نسبة الهجمات ======
const attackCtx = document.getElementById('attacksChart');

new Chart(attackCtx, {
    type: 'pie',
    data: {
        labels: ['DoS', 'Probe', 'R2L', 'U2R'],
        datasets: [{
            data: [45, 30, 15, 10],
            backgroundColor: ['#4cc9f0', '#4895ef', '#4361ee', '#7209b7']
        }]
    }
});

// ====== الرسم 2: البروتوكولات ======
const protoCtx = document.getElementById('protoChart');

new Chart(protoCtx, {
    type: 'bar',
    data: {
        labels: ['TCP', 'UDP', 'ICMP'],
        datasets: [{
            label: 'عدد الاتصالات',
            data: [90000, 30000, 6000],
            backgroundColor: '#4cc9f0'
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// ====== الرسم 3: أفضل خدمات ======
const servCtx = document.getElementById('servicesChart');

new Chart(servCtx, {
    type: 'bar',
    data: {
        labels: ['HTTP','HTTPS','FTP','SSH','SMTP','DNS','TELNET','POP3','IMAP','SNMP'],
        datasets: [{
            label: 'عدد الطلبات',
            data: [40000,30000,25000,20000,15000,12000,9000,8000,6000,5000],
            backgroundColor: '#4895ef'
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
});
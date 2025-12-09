// PIE CHART ==================================================
new Chart(document.getElementById("attackPie"), {
    type: "pie",
    data: {
        labels: ["neptune", "smurf", "back", "other"],
        datasets: [{
            data: [52.7, 17.6, 13.6, 16.1],
            backgroundColor: ["#1e56a0", "#36a58d", "#ff8c42", "#c4c4c4"]
        }]
    }
});

// TYPES BAR CHART ===========================================
new Chart(document.getElementById("typesBar"), {
    type: "bar",
    data: {
        labels: ["smurf", "teardrop", "land", "ipsweep", "portsweep"],
        datasets: [{
            label: "عدد الهجمات",
            data: [90000, 30000, 15000, 40000, 45000],
            backgroundColor: "#1e56a0"
        }]
    },
    options: {
        indexAxis: "y",
        plugins: { legend: { display: false } }
    }
});

// PROTOCOLS BAR =============================================
new Chart(document.getElementById("protBar"), {
    type: "bar",
    data: {
        labels: ["TCP", "UDP", "ICMP"],
        datasets: [{
            label: "عدد الاتصالات",
            data: [95, 30, 15],
            backgroundColor: "#36a58d"
        }]
    },
    options: {
        indexAxis: "y",
        plugins: { legend: { display: false } }
    }
});

// SERVICES BAR ==============================================
new Chart(document.getElementById("serviceBar"), {
    type: "bar",
    data: {
        labels: ["http", "private", "smtp", "ftp_data"],
        datasets: [{
            label: "استخدام",
            data: [88000, 25000, 20000, 16000],
            backgroundColor: "#ff8c42"
        }]
    },
    options: {
        indexAxis: "y",
        plugins: { legend: { display: false } }
    }
});
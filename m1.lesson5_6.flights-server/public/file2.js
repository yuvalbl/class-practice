function renderTable(data, target) {
    data.forEach(entry => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${entry.id}</td>
                    <td>${entry.from}</td>
                    <td>${entry.to}</td>
                    <td>${entry.departure}</td>
                    <td>${entry.arrival}</td>
                    <td>${entry.by}</td>
                `;
        target.appendChild(tr)
    });
}
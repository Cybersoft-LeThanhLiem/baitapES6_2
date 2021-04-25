const average = (marks) => marks.reduce((a, b) => a + b) / marks.length;

document.getElementById("btnDiemTB").addEventListener("click", e => {
    e.preventDefault();
    let hocVien = {};
    let arrTd = [];
    let arrInput = document.querySelectorAll('.form-input input');
    for (const tagInput of arrInput) {
        let {id, value, title} = tagInput;
        hocVien = {...hocVien, [id]:value};
        arrTd = [...arrTd, title];
    }

    arrTd.push("Điểm TB");

    let contentTr = "";
    arrTd.forEach(td => contentTr += `<td>${td}</td>`);
    document.querySelector(".table thead tr").innerHTML = contentTr;

    const marks = [];
    let contentTrBody = "";
    
    for (const [key, value] of Object.entries(hocVien)) {
        contentTrBody += `<td>${value}</td>`;
        if (!isNaN(value) && !isNaN(parseFloat(value))) {
            marks.push(parseFloat(value));
        }
    }

    // Tính điểm TB
    hocVien["diemTB"] = average(marks).toFixed(2);

    contentTrBody += `<td>${hocVien["diemTB"]}</td>`;
    document.querySelector(".table tbody tr").innerHTML = contentTrBody;
});
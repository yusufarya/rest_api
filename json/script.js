// const mahasiswa = {
//     nama    : "Yusuf Aryadilla",
//     nim     : "12182345",
//     email   : "aryaherby29nov2k@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));


// AJAX

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.stringify(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// // untuk menjalankan
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// JQERY 

$.getJSON('coba.json', function (data) {
    console.log(data);
});
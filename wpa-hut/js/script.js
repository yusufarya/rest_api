function tampilAllmenu() {
    // mengambil data dari json
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        // looping pada JS 
        $.each(menu, function (i, data) {
            // append = untuk menambahkan sebuah elemen baru tanpa harus menyertakan element tersebut di tag HTML
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-2"><img src="img/menu/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><h5 class="card-title">Rp.'+ data.harga +'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
        })
    })
}

tampilAllmenu();

// membuat link yg sedang aktif karna di klik agar menyala 
$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')

    // membuat var kategori 
    let kategori = $(this).html()
    $('h1').html(kategori)

    if (kategori == 'All Menu') {
        tampilAllmenu()
        return
    }
    
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu
        let content = ''

        // melakukan pengulangan untuk menampilkan data menu makanan pada konten
        $.each(menu, function (i, data) {
            // berdasarkan kategori
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-2"><img src="img/menu/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><h5 class="card-title">Rp.'+ data.harga +'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        })
        $('#daftar-menu').html(content);
    })
})
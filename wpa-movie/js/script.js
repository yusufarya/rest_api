function searchMovie() {
    // mengosongkan isi dari movies-list
    $('#movies-list').html('')
    
    // menjalankan ajax 
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get', // type nya get karna cuma ingin mengambil atau menampilkan data
        dataType: 'json',
        data: { // berupa objek
            'apikey': '5e3feb62',
            's'     : $('#search-input').val()
        },
        // ketika sukses akan menampilkan hasil 
        success : function (result) {
            if (result.Response == "True") {

                let movies = result.Search
                
                // melakukan pengulangan 
                $.each(movies, function (i, data) {
                    // append = untuk menambahkan sebuah elemen baru tanpa harus menyertakan element tersebut di tag HTML
                    $('#movies-list').append(` 
                    <div class="col-md-4"> 
                        <div class="card mb-2">
                            <img src="`+ data.Poster+`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title+`</h5>
                                <h6 class="card-subtittle mb-2 text-muted">` + data.Year + `</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `)
                })

                // mengosongkan kolom inouot pencarian
                $('#search-input').val('')

            } else { // jika gagal
                $('#movies-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error +`</h1>
                </div>
                `)
            }
        }
    })
}

// pada saat tombol search di klik
$('#search-button').on('click', function () {

    searchMovie()
    
})

// pada saat tombol yg di klik dilepas 
// 13 itu kunci dari enter
$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie()
    }
})

// mencari elemen movies-list dan ketika see-detail di klik
$('#movies-list').on('click', '.see-detail', function () {
    // menjalankan ajax 
    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get', // type nya get karna cuma ingin mengambil atau menampilkan data
        data: { // berupa objek
            'apikey': '5e3feb62',
            'i' : $(this).data('id') //saat data-id di klik pada tombol see detail
        },
        // jika berhasil 
        success: function (movie) {
            // jika id nya benar ada 
            if (movie.Response == "True") {
                
                $('.modal-body').html(`
                    <div class = "container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="` + movie.Poster+ `" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group list-group-flush">
                                    <h4 class="list-group-item">` + movie.Title + `</h4>
                                    <li class="list-group-item">Released : ` + movie.Released + `</li>
                                    <li class="list-group-item">Runtime : ` + movie.Runtime + `</li>
                                    <li class="list-group-item">Genre : ` + movie.Genre + `</li>
                                    <li class="list-group-item">Director : ` + movie.Director + `</li>
                                    <li class="list-group-item">Writer : ` + movie.Writer + `</li>
                                    <li class="list-group-item">Actors : ` + movie.Actors + `</li>
                                    <li class="list-group-item">Decs. <br> ` + movie.Plot + `</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)
            }
        }
    })
})
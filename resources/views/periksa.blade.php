@extends('layouts.main')

@section('content')
<main>
<br>
<br>
<br>
<br>
<!-- nav broadcrumb -->
<div class="container">
    <nav aria-label="breadcrumb" class="sign">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('app.index') }}" class="a-underlined">Beranda</a></li>
            <li class="breadcrumb-item active" aria-current="page">Periksa</li>
        </ol>
    </nav>
</div>
<!-- end nav broadcrumb -->

<section class="result" id="result">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- <img src="./src/img/Group 3.png" alt="image-result">
            <div class="result-text">
                <h4>Hasil Deteksi: </h4>
                <h2>Tuberculosis / Normal</h2>
                <p>Ditemukan / tidak ditemukan tanda tuberculosis pada hasil x-ray anda.</p>
            </div> -->
            </div>

        </div>
    </div>

</section>

<section class="upload">
    <div class="container">
        <div class="row text-center">
            <div class="col-8 offset-4">
                <!-- <h5 class="text-danger text-center">PERHATIAN!! Tolong jangan upload foto lain selain foto chest
                    X-Ray.</h5> -->
                    <div class="input-group mb-2">
                        <form name="periksa" class="periksa" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="file" class="form-control scan" name="scan" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/png, image/jpeg">
                        </form>
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick="tambah()">Upload</button>
                    </div>
                </div>
                <small class="text-center">*DISCLAIMER. Sistem Deteksi yang ada di website ini bukan merupakan alat medis, oleh karena itu data dan hasil deteksinya hanya dapat dijadikan sebagai referensi dan tidak boleh digunakan sebagai dasar diagnosis atau pengobatan medis.</a></span></small>
        </div>
    </div>
</section>
<br>
<br>
<div class="container">
    <article>
        <div class="information-text d-none">
            <p>Berikut merupakan hal yang harus dilakukan setelah hasil deteksi menunjukkan anda tuberculosis:
            </p>
            <ul>
                <li>Jika anda belum mendapatkan pengobatan, segera laporkan kepada tim investigasi kontak TBC di
                    puskesman atau rumah sakit terdekat untuk mendapatkan penanganan lebih lanjut</li>
                <li>Ikuti saran dari tim tersebut supaya penanganan bisa berjalan dengan baik</li>
                <li>Minum obat yang telah diberikan dengan teratur sesuai arahan dokter</li>
                <li>Konsultasikan kepada petugas kesehatan setempat jika terdapat hal yang tidak dimengerti</li>
            </ul>
        </div>
    </article>
    <hr>
</div>

<section id="keluhan" class="keluhan">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-sm-12">
                <div class="section-title">
                    <h1 class="title">Form Keluhan</h1>
                    <p class="text">Isi form di bawah apabila anda mengalami kendala saat menggunakan layanan
                        dari kami</p>
                </div> <!-- end section title -->
            </div> <!-- end col -->
        </div> <!-- end row -->

        <form method="POST" name="form-keluhan" class="form-keluhan">
                    @csrf
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="nama">Nama</label>
                                <input type="text" class="form-control" name="nama" id="nama">
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" name="email" id="email">
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="deskripsi">Keluhan / Permasalahan</label>
                                <textarea class="form-control" name="deskripsi" id="deskripsi" rows="5"></textarea>
                            </div>
                        </div> <!-- end col -->

                        <div class="col-12">
                            <small>*Kami memastikan bahwa data data yang anda berikan AMAN dan TIDAK AKAN disebarluaskan
                                kepada pihak manapun.</small>
                        </div>
                    </div> <!-- end row -->
                </form>
                <button class="btn btn-outline-dark" onClick="tambahKeluhan()">Kirim</button>
                

            </div> <!-- end container -->
        </section>
    </main>

@endsection

@include('layouts.partials.scripts')

@section('extra-script')
<script type="text/javascript">
    function tambahKeluhan(){
        let form = $('.form-keluhan')[0];
        let data = new FormData(form);
        $.ajax({
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            url: "{{ route('app.keluhan') }}",
            success: function(response) {
                if (response.status == "berhasil") {
                    // alert('berhasil');
                    Swal.fire({
                        title: "Berhasil",
                        text: "Data berhasil disimpan",
                        icon: "success",
                        showConfirmButton: true,
                    });
                    setTimeout(function () {
                        window.location.href = "{{ route('app.periksa') }}";
                    }, 3000);

                } else if (response.status == "gagal") {
                    alert('gagal');
                    console.log(response.message);
                }
            },
            error: function(request, status, error) {
                    console.log(request.responseText);
            }
        });
    }

    $('.custom-file-input').on('change', function() { 
        let fileName = $(this).val().split('\\').pop(); 
        $(this).next('.custom-file-label').addClass("selected").html(fileName); 
    });

    async function check_image(image) {
        var form = new FormData();
        form.append("uploaded_file", image);

        return $.ajax({
            url: "http://127.0.0.1:5000/predict",
            type: "POST",
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: form,
        });
    }

    async function tambah(){
        let form = $('.periksa')[0];
        let formData = new FormData(form);
        let image = $('.scan')[0].files[0];
        if (!image) {
            return alert('Please select a file to upload.');
        }
        let image_result = await check_image(image);
        let result = JSON.parse(image_result);
        if (result.status =="gagal") {
            Swal.fire({
                title: "Gagal",
                text: result.model_prediction,
                icon: "error",
                showConfirmButton: true,
            });
        } else {
            formData.append("result",result.model_prediction);
            formData.append("percentage",result.model_prediction_confidence_score);
            $.ajax({
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            url: "{{ route('app.simpan-periksa') }}",
            success: function(response) {
                if (response.status == "berhasil") {
                    Swal.fire({
                        title: "Berhasil",
                        text: "Data berhasil disimpan",
                        icon: "success",
                        showConfirmButton: true,
                    });
                    window.location.href = "{{ route('app.hasil-periksa') }}";
    
                } else if (response.status == "gagal") {
                    alert('gagal');
                    console.log(response.message);
                }
            },
            error: function(request, status, error) {
                    console.log(request.responseText);
                }
            });
        }
    }





</script>

@endsection

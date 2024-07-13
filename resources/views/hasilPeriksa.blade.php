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
            <li class="breadcrumb-item"><a href="{{ route('app.periksa') }}" class="a-underlined">Periksa</a></li>
            <li class="breadcrumb-item active" aria-current="page">Hasil Periksa</li>
        </ol>
    </nav>
</div>
<!-- end nav broadcrumb -->

<section class="result" id="result">
    <div class="container text-center">
        <div class="row text-center">
            <div class="col-12">
                <img src="{{ asset($image_source) }}" alt="image-result" style="width: 400px; height: 400px;">
                    <div class="result-text mt-3">
                        <h5>Hasil Deteksi: </h5>
                        <h2 class="result-diagnosis">{{$hasil->result}}</h2>
                        <p><span class="tb">Ditemukan</span> <span class="non-tb">Tidak ditemukan</span> tanda tuberculosis pada hasil x-ray anda.</p>
                    </div>
            </div>

        </div>
    </div>

</section>

<br>
<br>
<div class="container">
    <article>
        <div class="information-text tb">
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

</main>
@endsection

@section('extra-script')
<script>
    $(document).ready(function() {
        var hasil = $('.result-diagnosis').html();
        var diagnosis = $(".result-diagnosis");
        console.log(hasil);
        if(hasil == "NORMAL"){
            diagnosis.css("color", "green");
            $(".tb").addClass("d-none");
            $(".non-tb").removeClass("d-none");
        } else {
            diagnosis.css("color", "red");
            $(".tb").removeClass("d-none");
            $(".non-tb").addClass("d-none");
        }
    });
</script>
@endsection
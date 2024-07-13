@extends('layouts.main')
@section('extra-style')
    <style>
        #map {
            height: 80%;
            width: 80%;
            margin: 0 auto 0 auto;
        }

        html,
        body {
            height: 100%;
        }
    </style>
@endsection

@section('content')
<body>
    <div class="main-item container border-bottom">
        <div class="row align-items-center pt-4">
            <div class="col-auto text-gray-500 font-weight-light">
                <h3><b>Daftar 15 Gempabumi M 5.0+</b></h3>
            </div>
        </div>
    </div>
    <br>


    <div class="container" id="map"></div>
    <!-- <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiRncAHPx3uNScCZ3RPUiErghVhZZD1vQ&callback=inicio"></script> -->
    <script>
            mapboxgl.accessToken = 'pk.eyJ1IjoiYnBhY2h1Y2EiLCJhIjoiY2lxbGNwaXdmMDAweGZxbmg5OGx2YWo5aSJ9.zda7KLJF3TH84UU6OhW16w';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v10',
                //style: 'mapbox://styles/mapbox/dark-v10',
                center: [118.0574193, -1.82974],
                zoom: 4.1
            });
            map.addControl(new mapboxgl.NavigationControl());
            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });
            var data = {!!$data!!};
            for (var i = 0; i < data.length; i++) {
                var coord = JSON.parse("[" + data[i].point + "]");
                description = `<div>Lokasi : ${data[i].Wilayah}</div>
                <div>Magnitude: ${data[i].Magnitude} SR</div>`;

                const marker1 = new mapboxgl.Marker()
                    .setLngLat([coord[1], coord[0]])
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(description)
                    )
                    .addTo(map)
            }


            // map.setMapTypeId('satellite');

            // map.data.loadGeoJson('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson');
    </script>

    <br>

    <section class="content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card card-outline card-danger">
                        <div class="card-header">
                            <strong>Data Gempa</strong>
                        </div>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table id="gempa" class="table table-bordered table-striped">
                                    <thead class="text-center">
                                        <th>No</th>
                                        <th>Tanggal</th>

                                        <th>Jam</th>
                                        <th>Magnitude</th>
                                        <th>Kedalaman</th>
                                        <th>Koordinat</th>
                                        <th>Wilayah</th>
                                        <th>Potensi Tsunami</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @php $i = 1; @endphp
                                        @foreach($data as $d)
                                            <tr>
                                                <td class="text-center">{{$i}}</td>
                                                <td>{{$d->Tanggal}}</td>
                                                <td>{{$d->Jam}}</td>
                                                <td>{{$d->Magnitude}}</td>
                                                <td>{{$d->Kedalaman}}</td>
                                                <td>{{$d->point}}</td>
                                                <td>{{$d->Wilayah}}</td>
                                                <td>{{$d->Potensi}}</td>
                                            </tr>
                                            @php $i += 1; @endphp
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <!-- Awal Footer -->
    <footer class="section-footer mt-4 mb-4 pb-3 border-top">
        <div class="container-fluid border-top">
            <div class="row justify-content-center align-items-center pt-3">
                <div class="col-auto text-gray-500 font-weight-light">
                    <a href="https://www.bmkg.go.id/"><b>Sumber Data : BMKG (Badan Meteorologi,Klimatologi, dan Geofisika)</b></a>
                </div>
            </div>
        </div>
    </footer>
    <!-- Akhir Footer -->
</body>

@endsection

@include('layouts.partials.scripts')

@section('extra-script')
<script type="text/javascript">

</script>
@endsection
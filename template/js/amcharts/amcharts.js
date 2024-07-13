function createPie(chart,txt,param,level,fullname){
    // Add and configure Series
    chart.contentHeight = "200px";
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "jumlah";
    pieSeries.dataFields.category = param;
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.propertyFields.fill = "color";

    pieSeries.tooltip.label.interactionsEnabled = true;
    pieSeries.tooltip.keepTargetHover = true;
    // pieSeries.slices.template.tooltipHTML = '<a onclick="window.open(\'https://en.wikipedia.org/wiki/{category.urlEncode()}\',\'_blank\', \'width=300, height=300\');" style="color:white">{category} : {value.percent.formatNumber("#.0")}% ({value})</a>';
    pieSeries.slices.template.tooltipHTML = '<a onclick="popUpData(\''+param+'\',\'{category}\',\''+level+'\',\''+fullname+'\',)" style="color:white">{category} : {value.percent.formatNumber("#.0")}% ({value})</a>';

    var slice = pieSeries.slices.template;
    slice.states.getKey("hover").properties.scale = 1;
    slice.states.getKey("active").properties.shiftRadius = 0;

    chart.legend = new am4charts.Legend();
    chart.legend.valueLabels.template.text = "{value.percent.formatNumber('#.0')}% ({value})";
    chart.legend.maxHeight = 100;
    chart.legend.useDefaultMarker = true;
    chart.legend.scrollable = true;
    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    chart.innerRadius = am4core.percent(50);

    var label = pieSeries.createChild(am4core.Label);
    // label.text = $("<a></a>").html("{jumlahs.jumlah.sum}");
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 40;
    label.html = "<h5>"+txt+"<br>{values.value.sum}</h5>"
}

function popUpData(param, value , level,fullname){
	$("#loadMe",parent.document).modal("show");
    data_loc = []
    $.ajax({ 
        type: "GET",
        data: {
            level:level,
            fullname:fullname,
            value:value,
            param:param
        },
        url: "dashboard/getDetail",
        success: function(data){   
			$("#loadMe",parent.document).modal("hide");
            $('#myModal',parent.document).modal('show');

            $('#table_wrapper_detail',parent.document).remove();
            // $("#level",parent.document).html(String(obj.level))  
            // $("#fullname",parent.document).html(String(obj.fullname))  
            var val = JSON.parse(data) 
            var dataSet = [];
            for (i = 0; i < val.length; i++) {
                dataSet.push([
                    // val[i].divisi,
                    val[i].wilayah,
                    val[i].lokasi,
                    val[i].kategori,
                    val[i].tipe_perangkat,
                    val[i].merk,
                    val[i].tipe,
                    val[i].serial_number,
                    val[i].kap_tps,
                    val[i].kap_tpk,
                    val[i].beban,
                    val[i].kondisi,
                    val[i].status,
                    val[i].periode,
                    // val[i].keterangan,
                    val[i].ruangan,
                    val[i].kat_usia
                ])
            }

            $('#table_shell_detail',parent.document).append($("<div></div>").attr('id', 'table_wrapper_detail'));
            $('#table_wrapper_detail',parent.document).append($("<table></table>").attr('id', 'table_detail').addClass("table table-sm table-border table-striped"));
            var cols = [
                "wilayah",
                "lokasi",
                "kategori",
                "tipe_perangkat",
                "merk",
                "tipe",
                "serial_number",
                "kap_tps",
                "kap_tpk",
                "beban",
                "kondisi",
                "status",
                "periode",
                "ruangan",
                "kat_usia"]
            var columns = []
            for (i = 0; i<cols.length; i++){
                var x = {title : cols[i]+'</br><input type="text" class="form-control input-sm" placeholder="Search '+cols[i]+'"  data-index="'+(i+1)+'" />'}
                columns.push(x);
            }

            var table = $('#table_detail',parent.document).DataTable( {
                columns: columns,
                data: dataSet,
                scrollY: "400px",
                scrollX:true,
                scrollCollapse: true,
                paging: true,
                fixedColumns:   {
                    leftColumns: 4
                }, 
                columnDefs: [
                    { className: "table-light table-striped", "targets": [ 0,1,2,3] }
                  ],
                fixedHeader: {
                    header: true,
                    footer: true
                }
            } );

            $( table.table().container() ).on( 'keyup', 'thead input', function () {
                table
                    .column( $(this).data('index') )
                    .search( this.value )
                    .draw();
                })

             console.log("okeee3322313")
        }
    })
}

function defColor(col){
    var color  = { 
        "CONNECT" : am4core.color("#679acd"),
        "IDLE" : am4core.color("#679acd"),
        "GANGGUAN" : am4core.color("#ed601c"),
        "11-20 TAHUN" : am4core.color("#ed601c"),
        "OPERASI" : am4core.color("#28a745"),
        "NORMAL" : am4core.color("#28a745"),
        "<10 TAHUN" : am4core.color("#28a745"),
        "RUSAK" : am4core.color("#ed1c1c"),
        ">20 TAHUN" : am4core.color("#ed1c1c"),
        "UNKNOWN" : am4core.color("#edad1c")
    }

    return color[col]
}

//https://codepen.io/codersdesign/pen/evaBXm
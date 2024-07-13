			data_loc = []
			$.ajax({ 
				type: "GET",
				data: {level:"<?php echo $this->input->get(id);?>"},
				url: "getLocationChild",
				success: function(data){   
					var val = JSON.parse(data) 
					for (i = 0; i < val.length; i++) {
				
						data_loc.push({id:val[i].id, abbreviation:val[i].abbreviation, lat:val[i].lat, lon:val[i].lon, level:val[i].level, fullname:val[i].fullname, level:val[i].level})
					}
				}
			})
			// data_loc = [
			// 	{abbreviation:"MLG", lat:-7.950610, lon: 112.642670, level:"WITEL", fullname:"MALANG"},
			// 	{abbreviation:"SBU", lat:-7.261500, lon: 112.737210, level:"WITEL", fullname:"SURABAYA UTARA"},
			// 	{abbreviation:"JER", lat:-8.1742309, lon:113.6856838, level:"WITEL", fullname:"JEMBER"},
			// 	{abbreviation:"DPS", lat:-8.6734378, lon:115.2233434, level:"WITEL", fullname:"DENPASAR"},
			// ]

			for (i=0;i<data_loc.length;i++){
				var buildingPoints = [
				{
				    "type": "Feature",
				    "geometry": {
				        "type": "Point",
				        "coordinates": [data_loc[i].lat, data_loc[i].lon]
				    },
				    "properties": {
				        "abbreviation": data_loc[i].abbreviation,
				        "fullname": data_loc[i].fullname,
				        "level": data_loc[i].level,
				        "radius": 5
				    }
				}];

				function whenClicked(e) {
					var obj = e.target.feature.properties
					// url = "http://10.60.170.172/dashboard/infra/index.php/dashboard/cablemap?level="+String(obj.level)+"&fullname="+String(obj.fullname)
					$.ajax({ 
						type: "GET",
						data: {level:String(obj.level),fullname:String(obj.fullname)},
						url: "resume",
						success: function(data){   
							$("#level",parent.document).html(String(obj.level))  
							$("#fullname",parent.document).html(String(obj.fullname))  
							var val = JSON.parse(data) 
							$('#table_wrapper',parent.document).remove();
 						// 	val.forEach(myFunction);
 							var dataSet = [];
 							for (i = 0; i < val.length; i++) {
								dataSet.push([val[i].tipe_perangkat, val[i].jumlah])
 							}
							console.log(dataSet);
							$('#table_shell',parent.document).append($("<div></div>").attr('id', 'table_wrapper'));
							$('#table_wrapper',parent.document).append($("<table></table>").attr('id', 'table_resume').addClass("table table-bordered"));
							$('#table_resume',parent.document).DataTable( {
					            data: dataSet,
					            columns: [
					                { title: "Tipe Perangkat" },
					                { title: "Jumlah" }
					            ]
					        } );
						}
					})
				}

				function whenDoubleClicked(e) {
				  var obj = e.target.feature.properties
				  // url = "http://10.60.170.172/dashboard/infra/index.php/dashboard/cablemap?level="+String(obj.level)+"&fullname="+String(obj.fullname)
				  // location.replace(url)
				  url = "http://10.60.170.172/dashboard/infra/index.php/Dashboard?level="+String(obj.level)+"&fullname="+String(obj.fullname)
				  window.parent.location.href = url
				}

				var Label = new L.geoJson(buildingPoints, {
				    pointToLayer: function(feature, latlng) {
				        return new L.CircleMarker([data_loc[i].lat, data_loc[i].lon], {radius: feature.properties.radius});
				    },
				    onEachFeature: function(feature, layer) {
				        var text = L.tooltip({
				            permanent: true,
				            direction: 'center',
				            className: 'text'
				        })
				        .setContent(feature.properties.abbreviation)
				        .setLatLng(layer.getLatLng());
				        text.addTo(mymap);
				        layer.on({
					        click: whenClicked
					    });
					    layer.on({
					    	dblclick : whenDoubleClicked
						});
				        // var text2 = L.tooltip({
				        //     direction: 'top',
				        //     className: 'text2'
				        // })
				        // .setContent(feature.properties.abbreviation)
				        // .setLatLng(layer.getLatLng());
				        // layer.bindTooltip(text2);
				    }
				}).addTo(mymap);
			}

			console.log('<?php echo $this->input->get(id);?>')

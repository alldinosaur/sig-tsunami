			ln_sub1 = [
				["0",-5.53942, 119.43651],
				["2",-5.32539, 116.70235],
				["1",-5.32631, 113.53697],
				["Surabaya_hub",-6.90738, 112.46708],
			]

			ln_sub2 = [
				["4",-4.06692, 114.4062],
				["4",-4.28063, 114.27437],
				["1",-4.28063, 117.13352],
				["0",-5.53942, 119.43651],
			]

			ln_sub3 = [
				["0",-6.80094, 112.44236],
				["1",-3.99569, 114.34578],
				["Banjarmasin_hub",-3.92593, 114.62175],
			]

			mk_sub=[
				["Makassar",-5.42113, 119.36715,[ln_sub1[0]]],
				["Banjarmasin",-3.92593, 114.62175,[ln_sub2[0]]],
				["Surabaya",-6.90738, 112.46708,[ln_sub3[0]]],
			]

			for (i=0;i<mk_sub.length;i++){
				var marker = L.circleMarker([ mk_sub[i][1], mk_sub[i][2]],{radius:1,color:'#B00900',fillColor:'#B00900'}).addTo(mymap);
				// marker.bindTooltip(mk_sub[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#B00900', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_sub[i][1], mk_sub[i][2]);
				xln_subs = [a]
				for(j in mk_sub[i][3]) {
					var b = new L.LatLng(mk_sub[i][3][j][1], mk_sub[i][3][j][2]);
					xln_subs.push(b)
				}
				Geodesic.setLatLngs([xln_subs]);
			}

			ln_sub1s = []
			for (i=0;i<ln_sub1.length;i++){
				// var marker = L.circleMarker([ ln_sub1[i][1], ln_sub1[i][2]],{radius:1,color:'#B00900',fillColor:'#B00900'}).addTo(mymap);
				// marker.bindTooltip(ln_sub1[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#B00900', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_sub1[i][1], ln_sub1[i][2]);
				ln_sub1s.push(a)
			}
			Geodesic.setLatLngs([ln_sub1s]);

			ln_sub2s = []
			for (i=0;i<ln_sub2.length;i++){
				// var marker = L.circleMarker([ ln_sub2[i][1], ln_sub2[i][2]],{radius:1,color:'#B00900',fillColor:'#B00900'}).addTo(mymap);
				// marker.bindTooltip(ln_sub2[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#B00900', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_sub2[i][1], ln_sub2[i][2]);
				ln_sub2s.push(a)
			}
			Geodesic.setLatLngs([ln_sub2s]);

			ln_sub3s = []
			for (i=0;i<ln_sub3.length;i++){
				// var marker = L.circleMarker([ ln_sub3[i][1], ln_sub3[i][2]],{radius:1,color:'#B00900',fillColor:'#B00900'}).addTo(mymap);
				// marker.bindTooltip(ln_sub3[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#B00900', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_sub3[i][1], ln_sub3[i][2]);
				ln_sub3s.push(a)
			}
			Geodesic.setLatLngs([ln_sub3s]);


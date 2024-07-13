			ln_hpbb=[
				["0",1.9717, 102.42008],
				["1",1.10974, 103.57925],
				["2",1.24964, 104.07902],
			]

			mk_hpbb = [
				["Dumai",1.64228, 101.51096,[ln_hpbb[0]]],
				["Batam",1.18099, 104.12022,[ln_hpbb[2]]],
				["Lampung",-5.74434, 105.02384,[["Serang",-6.15684, 105.85331]]],
			]

			for (i=0;i<mk_hpbb.length;i++){
				var marker = L.circleMarker([ mk_hpbb[i][1], mk_hpbb[i][2]],{radius:1,color:'#BB0000',fillColor:'#BB0000'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BB0000', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_hpbb[i][1], mk_hpbb[i][2]);
				xln_hpbbs = [a]
				for(j in mk_hpbb[i][3]) {
					var b = new L.LatLng(mk_hpbb[i][3][j][1], mk_hpbb[i][3][j][2]);
					xln_hpbbs.push(b)
				}
				Geodesic.setLatLngs([xln_hpbbs]);
			}



			ln_hpbbs = []
			for (i=0;i<ln_hpbb.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BB0000', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_hpbb[i][1], ln_hpbb[i][2]);
				ln_hpbbs.push(a)
			}
			Geodesic.setLatLngs([ln_hpbbs]);

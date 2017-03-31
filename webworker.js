self.addEventListener('message', function(e){
	var data = e.data;
	
	var R =  6371;
	
	var lat1 = data.currlat;
	var lon1 = data.currlon;
	var lat2 = data.latt;
	var lon2 = data.lonn;	
	
	var dlat = lat2 - lat1;
	dlat = toRads(dlat);
	var dlon = lon2 - lon1;
	dlon = toRads(dlon);
	
	lat1 = toRads(lat1);
	lat2 = toRads(lat2);
						
	var a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon/2) * Math.sin(dlon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	d = Math.round(d * 100) / 100;
	self.postMessage(d + " Km");
}, false);

			
function toRads(x)
{
	return x * Math.PI/180;
}
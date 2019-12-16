javascript:(function()
	{
		
		var STATION_IDmin;
		var STATION_IDmax;
		var STATION_NMmin;
		var STATION_NMmax;
		var DATE_OBSmin;
		var DATE_OBSmax;
		var TMPMAXmax= 0;
		var TMPMAXmin =0;
		var TMPMNmax= 0;
		var TMPMNmin= 0;
		var PRECIPmin;
		var PRECIPmax;
		var Dmin;
		var Dmax;
		var table = document.getElementsByTagName("table")[0];
		for (var i=1 ; i< table.rows.length; i++)
			{
				if(Number(table.rows[i].cells[3].firstChild.data)>TMPMAXmax)
					{
						STATION_NMmax= table.rows[i].cells[1].firstChild.data;
						STATION_IDmax= table.rows[i].cells[0].firstChild.data;
						DATE_OBSmax= table.rows[i].cells[2].firstChild.data;
						TMPMAXmax= table.rows[i].cells[3].firstChild.data;
						TMPMNmax= table.rows[i].cells[7].firstChild.data;
						PRECIPmax= table.rows[i].cells[9].firstChild.data;
						Dmax = table.rows[i].cells[11].firstChild.data;
					}
					if (Number(table.rows[i].cells[7].firstChild.data)<TMPMNmin)
						{
							STATION_NMmin= table.rows[i].cells[1].firstChild.data;
							STATION_IDmin= table.rows[i].cells[0].firstChild.data;
							DATE_OBSmin= table.rows[i].cells[2].firstChild.data;
							TMPMAXmin= table.rows[i].cells[3].firstChild.data;
							TMPMNmin= table.rows[i].cells[7].firstChild.data;
							PRECIPmin= table.rows[i].cells[9].firstChild.data;
							Dmin = table.rows[i].cells[11].firstChild.data;
						}
					}
	var minmin = "Самый холодный день: "+STATION_IDmin+" "+STATION_NMmin+" "+DATE_OBSmin+" Max temp: "+TMPMAXmin+" Min temp: "+TMPMNmin+"   "+PRECIPmin+"   "+Dmin+"\n"+"Самый теплый день: "+STATION_IDmax+" "+STATION_NMmax+" "+DATE_OBSmax+" Max temp: "+TMPMAXmax+" Min temp: "+TMPMNmax+"   "+PRECIPmax+"   "+Dmax;
	alert(minmin);
		})()
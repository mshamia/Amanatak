function GetURLParameter(sParam){var sPageURL=window.location.search.substring(1);var sURLVariables=sPageURL.split('&');for(var i=0;i<sURLVariables.length;i++){var sParameterName=sURLVariables[i].split('=');if(sParameterName[0]==sParam){return sParameterName[1];}}}var value1=GetURLParameter('value1')
var value2=GetURLParameter('value2')
if(value1==null)value1=0;if(value2==null)value2=2000;var FormSliders=function(){return{initFormSliders:function(){$('#slider1').slider({min:0,max:500,slide:function(event,ui){$('#slider1-value').text(ui.value);}});$('#slider2').slider({min:0,max:500,range:true,values:[75,300],slide:function(event,ui){$('#slider2-value1').text(ui.values[0]);$('#slider2-value2').text(ui.values[1]);}});$('#slider3').slider({min:0,max:500,step:100,slide:function(event,ui){$('#slider3-value').text(ui.value);}});$('#slider1-rounded').slider({min:0,max:500,slide:function(event,ui){$('#slider1-value-rounded').text(ui.value);}});$('#slider2-rounded').slider({min:0,max:2000,range:true,values:[value1,value2],slide:function(event,ui){$('#slider2-value1-rounded').val(ui.values[0]);$('#slider2-value2-rounded').val(ui.values[1]);}});$('#slider3-rounded').slider({min:0,max:500,step:100,slide:function(event,ui){$('#slider3-value-rounded').text(ui.value);}});}};}();
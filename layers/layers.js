var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> -<br />\
    <img src="styles/legend/_1_1.png" /> Alianza Cambiemos<br />\
    <img src="styles/legend/_1_2.png" /> Alianza Frente Justicialista Creer Entre Rios<br />\
    <img src="styles/legend/_1_3.png" /> Empate Alianza Frente Justicialista Creer Entre Rios / Alianza Cambiemos<br />\
    <img src="styles/legend/_1_4.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1];
lyr__1.set('fieldAliases', {'departamen': 'departamen', 'circuito': 'circuito', 'Diputados_Circuito': 'Diputados_Circuito', 'Diputados_Ganador': 'Diputados_Ganador', 'Diputados_SER': 'Diputados_SER', 'Diputados_C. V. Entre Rios': 'Diputados_C. V. Entre Rios', 'Diputados_PS': 'Diputados_PS', 'Diputados_Nueva Izquierda': 'Diputados_Nueva Izquierda', 'Diputados_Creer Entre Rios': 'Diputados_Creer Entre Rios', 'Diputados_Cambiemos': 'Diputados_Cambiemos', 'Diputados_Nulos': 'Diputados_Nulos', 'Diputados_Recurridos': 'Diputados_Recurridos', 'Diputados_En blanco': 'Diputados_En blanco', 'Diputados_Impugnados': 'Diputados_Impugnados', 'Diputados_Totales': 'Diputados_Totales', });
lyr__1.set('fieldImages', {'departamen': 'TextEdit', 'circuito': 'TextEdit', 'Diputados_Circuito': 'TextEdit', 'Diputados_Ganador': 'TextEdit', 'Diputados_SER': 'TextEdit', 'Diputados_C. V. Entre Rios': 'TextEdit', 'Diputados_PS': 'TextEdit', 'Diputados_Nueva Izquierda': 'TextEdit', 'Diputados_Creer Entre Rios': 'TextEdit', 'Diputados_Cambiemos': 'TextEdit', 'Diputados_Nulos': 'TextEdit', 'Diputados_Recurridos': 'TextEdit', 'Diputados_En blanco': 'TextEdit', 'Diputados_Impugnados': 'TextEdit', 'Diputados_Totales': 'TextEdit', });
lyr__1.set('fieldLabels', {'departamen': 'header label', 'circuito': 'no label', 'Diputados_Circuito': 'header label', 'Diputados_Ganador': 'header label', 'Diputados_SER': 'header label', 'Diputados_C. V. Entre Rios': 'header label', 'Diputados_PS': 'header label', 'Diputados_Nueva Izquierda': 'header label', 'Diputados_Creer Entre Rios': 'header label', 'Diputados_Cambiemos': 'header label', 'Diputados_Nulos': 'header label', 'Diputados_Recurridos': 'header label', 'Diputados_En blanco': 'header label', 'Diputados_Impugnados': 'header label', 'Diputados_Totales': 'header label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
$(function () {

    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {
        
        // Initiate the chart
        $('#container').highcharts('Map', {

            title: {
                text: 'Tooltip formatter demo'
            },
            
            legend: {
                title: {
                    text: 'Population density per km²'
                }
            },
        
            tooltip: {
                formatter: function () {
                    return '<b>Series name: ' + this.series.name + '</b><br>' +
                        'Point name: ' + this.point.name + '<br>' +
                        'Value: ' + this.point.value;
                }
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series : [{
                data : data,
                mapData: Highcharts.maps.world,
                joinBy: 'code',
                name: 'Population density',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                tooltip: {
                    valueSuffix: '/km²'
                }
            }]
        });
    });
});
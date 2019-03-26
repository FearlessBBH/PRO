$(document).ready(function () {
    // 折线图
    var lineChart = echarts.init(document.getElementById('line'));
    option1 = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#748AA1"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#748AA1"
                }
            }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            lineStyle: {
                color: '#ff8200'
            }
        }]
    };
    lineChart.setOption(option1);

    // 柱状图
    var barChart = echarts.init(document.getElementById('bar'));
    option2 = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#748AA1"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#748AA1"
                }
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: '30px',
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#ff8200'
            },
        }]
    };
    barChart.setOption(option2);

    // 饼图
    var pieChart = echarts.init(document.getElementById('pie'));
    var data = genData(4);
    option3 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.legendData,
            selected: data.selected
        },
        series: [{
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    function genData(count) {
        var nameList = [
            '贾', '路', '娄', '危'
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < 4; i++) {
            name = Math.random() > 0.65 ?
                makeWord(4, 1) + '·' + makeWord(3, 0) :
                makeWord(2, 1);
            legendData.push(name);
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
            selected[name] = i < 6
        }

        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };

        function makeWord(max, min) {
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
            }
            return name.join('');
        }
    }
    pieChart.setOption(option3);

});

window.onload = function () {
    setInterval(function () {
        //Date
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var DD = year + "年" + month + "月" + day + "日";

        //$(".head>.center>h4 ").html(DD);
        var time = new Date();
        var t = getNow(time.getHours()) + ":" +
            getNow(time.getMinutes()) + ":" + getNow(time.getSeconds());
        $(".head>.center>h4").html(DD + ' ' + t);
    }, 1000);
};

function getNow(s) {
    return s < 10 ? '0' + s : s;
}
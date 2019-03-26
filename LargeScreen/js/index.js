﻿$(document).ready(function () {
    // 走马灯
    $('.column-5').liMarquee({ hoverstop: false });
    //$(".column-4 > .left .tb").liMarquee({ direction: 'up', hoverstop: false });

    //Date
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var DD = year + "年" + month + "月" + day + "日";

    $(".column-1 .center label:nth-child(1)").html(DD);

    var mySwiper = new Swiper('.swiper-container', {

        loop: false, // 循环模式选项
        //autoplay: {
        //    delay: 5000
        //},

        // 如果需要前进后退按钮
        //navigation: {
        //    nextEl: '.swiper-button-next',
        //    prevEl: '.swiper-button-prev',
        //},

    })

    // 折线图
    var lineChart = echarts.init(document.getElementById('line'));
    option1 = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#fff"
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


    // 饼图
    var pieChart = echarts.init(document.getElementById('pie'));
    var data = genData(50);
    option2 = {
        title: {
            text: '同名数量统计',
            subtext: '纯属虚构',
            x: 'center'
        },
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
        series: [
            {
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
            }
        ]
    };
    function genData(count) {
        var nameList = [
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < 50; i++) {
            name = Math.random() > 0.65
                ? makeWord(4, 1) + '·' + makeWord(3, 0)
                : makeWord(2, 1);
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
    pieChart.setOption(option2);

});

window.onload = function () {
    setInterval(function () {
        var time = new Date();
        var t = getNow(time.getHours()) + ":"
        + getNow(time.getMinutes()) + ":" + getNow(time.getSeconds());
        $(".column-1 .center label:nth-child(2)").html(t);
    }, 1000);
};
function getNow(s) {
    return s < 10 ? '0' + s : s;
}
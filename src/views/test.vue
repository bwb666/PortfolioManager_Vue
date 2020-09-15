<template>
    <div>
       <h1>test</h1>
        <div id="chartLine" class="HelloWorld echart-box" style="width: 100%;height: 280px;"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        data () {
            return {
                datas3:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                datas4:[20, 80, 51, 90, 80, 30, 20],
                list:[],
                date:[],
                value:[]
            }
        },
        mounted:function() {
            this.drawLineChart();
        },
        methods: {

            drawLineChart() {
                let myLineChart = this.$echarts.init(document.getElementById("chartLine"));
                let option = {
                    backgroundColor: "#fff",
                    color: ["#37A2DA","#FFDB5C", "#ff9f7f"],

                    title: {
                        text: "XXX",
                        left: "center",
                    },
                    grid: {
                        top: '10%',
                        left: '3%',
                        right: '4%',
                        bottom: '6%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.datas3
                    },
                    yAxis: {
                        x: 'center',
                        type: 'value',
                    },
                    series: [{
                        name: '销量',
                        type: 'line',
                        data: this.datas4
                    },
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        }]
                };
                // 使用刚指定的配置项和数据显示图表
                myLineChart.setOption(option);
            },
        },
        created:function () {

            const _this=this;
            axios.get('http://localhost:3000/drawLineChartTest').then((response) => {
                const a=response.data;
                let arr1 = [];
                let arr2 = [];
                arr1=Object.keys(a);
                arr2=Object.values(a);
                console.log(arr1.length);
                console.log(Object.values(a));

                if (response.status == 200) {
                    this.datas3.length = 0; //清空数组
                    this.datas4.length = 0; //清空数组
                    for (let i = 0; i < arr1.length; i++) {
                        this.datas3.push(arr1[i]);
                        console.log(this.datas3);
                        // console.log(this.datas1[i].type);
                    }
                    for (let i = 0; i < arr2.length; i++) {
                        this.datas4.push(arr2[i]);
                        // console.log(this.datas4);
                        // console.log(this.datas1[i].type);
                    }
                }
            });
        },
        watch: {
            datas3:{
                handler: function () {
                    this.drawLineChart();
                },
                deep: true,
            },
            datas4:{
                handler: function () {
                    this.drawLineChart();
                },
                deep: true,
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
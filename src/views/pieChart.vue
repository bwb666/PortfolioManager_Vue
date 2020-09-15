<template>
    <div>
        <div
                class="HelloWorld echart-box"
                id="myChart1"
                :style="{width: '1000px', height: '500px',background:'#ffffff'}"
        ></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 定义图表，各种参数
                msg: "扇形图",
                datas: [
                    { value: 64, name: "男" },
                    { value: 32, name: "女" },
                    { value: 12, name: "未知" },
                ],
            };
        },
        mounted: function () {
            this.drawLine(); //按照默认值绘制图表
        },
        created() {
            this.$axios.get("findPatientSex").then((response) => {
                console.log(response);
                if (response.data.statusCode == 200) {
                    this.datas.length = 0; //清空数组
                    for (let i = 0; i < response.data.data.length; i++) {
                        this.datas.push(response.data.data[i]);
                        console.log(this.datas);
                    }
                }
            });
        },
        watch: {
            datas: {
                handler: function () {
                    this.drawLine();
                },
                deep: true,
            },
        },
        methods: {
            drawLine() {
                // 1、基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("myChart1"));
                //2、构造图表数据
                let options = {
                    title: {
                        text: "婚姻情况分析",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                        data: ["男", "女", "未知",],
                    },
                    series: [
                        {
                            name: "访问来源",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: this.datas,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)",
                                },
                            },
                        },
                    ],
                };
                // 3、绘制图表
                myChart.setOption(options);
            },
        },
    };
</script>

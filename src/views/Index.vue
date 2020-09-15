<template>
    <div>
        <el-container>
            <el-header >
                <el-row>
                    <el-col :span="24" style="text-align: center; font-size: 30px">
                        <div class="grid-content bg-purple-dark">
                            <img  src="../image/图片2.png" height="38" width="71"/>
                            <span>Personal Portfolio Manager</span>
                        </div>
                    </el-col>

                </el-row>

            </el-header>

            <el-container>
                <el-aside width="250px"  style="height:740px">
                    <el-menu :default-openeds="['/']" :default-active="$route.path"
                             router
                             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%" >
                        <el-menu-item index="/" style="height: 70px">
                            <template slot="title"><i class="el-icon-s-home"></i>HOME</template>
                        </el-menu-item>

                        <el-menu-item index="/Diagram" style="height: 70px">
                            <template slot="title"><i class="el-icon-s-marketing"></i>Data Analysis</template>
                        </el-menu-item>

                        <el-menu-item index="/Allportfolio" style="height: 70px">
                            <template slot="title"><i class="el-icon-s-management"></i>Portfolios</template>
                        </el-menu-item>

                    </el-menu>
                </el-aside>


                <el-main >

                    <el-row :gutter="20">
                        <el-col :span="24">
                            <div class="num" style="display: flex;flex-wrap: wrap;justify-content: space-between">
                                <el-card style="width:32%;margin-bottom: 20px" :style="{background:item.color}" shadow="hover"  v-for="item in card" :key="item.value" :body-style="{display:'flex',padding:0}">
                                    <i class="icon" style="font-size: 30px;width:80px;height:100px;text-align: center;line-height: 120px;color:#f9fafc;" :class="`el-icon-${item.icon}`"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">${{item.value}}</p>
                                        <p class="txt" style="font-size:14px;text-align: center;color:#f9fafc">{{ item.name }}</p>
                                    </div>
                                </el-card>
                            </div>
                            <div class="graph" style="margin-top:20px;display: flex;justify-content: space-between">
                                <el-card style="width:38%" shadow=hover>
                                    <div id="myChart1" style="height:360px"></div>
                                </el-card>
                                <el-card style="width:58%" shadow="hover">
                                    <div id="myChart" style="height:360px" ></div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>


                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import echarts from 'echarts'
    export default {

        data(){
            return {
                card:null,
                XData:[],
                series:[],
                datas1: [
                    { value: 64, name: "Bond" },
                    { value: 32, name: "ETFS" },
                    { value: 12, name: "Futures" },
                    { value: 45, name: "未" },
                ],
            }
        },
        mounted(){
            this.drawLineChart();
            this.drawLine1();
        },
        methods: {

            drawLineChart() {
                let myChart = this.$echarts.init(document.getElementById("myChart"));
                myChart.setOption({
                    backgroundColor: "#fff",
                    color: ["#37A2DA", "#FFDB5C", "#ff9f7f"],

                    title: {
                        text: "NetWorth",
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
                        data: this.xData
                    },
                    yAxis: {
                        x: 'center',
                        type: 'value',
                    },
                    series: [{
                        name: 'net',
                        type: 'line',
                        data: this.series
                    }]
                });
            },
            drawLine1() {
                // 1、基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("myChart1"));
                //2、构造图表数据
                let options = {
                    color: ["#9FE6B8", "#37A2DA", "#FFDB5C", "#fb7293"],
                    title: {
                        text: "Gain",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                        data: this.datas1,
                    },
                    series: [
                        {
                            name: "Type",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: this.datas1,
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
        created() {
            const _this = this;
            _this.axios.get('http://localhost:3000/countData').then(function(resp){
                _this.card = resp.data //表示的最上面彩色块块的值
                //    console.log(resp.data)
            })
            _this.axios.get('http://localhost:3000/orderData').then(function(resp){
                _this.Order = resp.data //表示的最上面彩色块块的值

                _this.xData = _this.Order.date
                console.log(_this.xData)

                _this.series = _this.Order.value
                console.log( _this.series)
            })
        },
        watch:{
            datas1: {
                handler: function () {
                    this.drawLine1();
                },
            },
            xData:{
                handler: function () {
                    this.drawLineChart();
                },
            },
            series:{
                handler: function () {
                    this.drawLineChart();
                },
            },
            deep: true,
        },
        computed:{
        },
    }
</script>

<style scoped>
    .bg-purple-dark {
        background: #99a9bf;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>

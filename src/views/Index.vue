<template>
    <div>
        <el-container>
            <el-header style="padding:0px" >
                <el-row>
                    <el-col :span="24" style="text-align: center; font-size:30px">
                        <div class="grid-content bg-purple-dark">
                            <img  src="../image/图片2.png" height="38" width="71"/>
                            <span>Personal Portfolio Manager</span>
                        </div>
                    </el-col>

                </el-row>

            </el-header>

            <el-container>
                <el-aside width="200px"  style="height:800px">
                    <el-menu :default-openeds="['/']" :default-active="$route.path"
                             router
                             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%" >
                        <el-menu-item index="/" style="height: 70px">
                            <template slot="title" ><i class="el-icon-s-home"></i>HOME</template>
                        </el-menu-item>

                        <el-menu-item index="/Diagram" style="height: 70px">
                            <template slot="title"><i class="el-icon-s-marketing"></i>Data Analysis</template>
                        </el-menu-item>

                        <el-menu-item index="/Allportfolio" style="height: 70px">
                            <template slot="title"><i class="el-icon-s-management"></i>Portfolios</template>
                        </el-menu-item>

                    </el-menu>
                </el-aside>


                <el-main style="padding:0" >

                    <el-row :gutter="20">
                        <el-col :span="24">
                            <div class="num" style="display: flex;flex-wrap: wrap;justify-content: space-between;">
                                <el-card style="width:32%;margin-bottom:20px;background:#FFBB66;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-success" style="font-size: 50px;width:80px;height:80px;text-align: center;padding:20px;line-height:120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left:15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom:10px;color:#f9fafc">{{card[0]}}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;margin-bottom: 20px;background:#409EFF;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-platform-eleme" style="font-size:50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">{{card[1]}}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;margin-bottom: 20px;background:#F56C6C;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-user" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">{{card[2]}}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;background:#F08080;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-success" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">{{card[3]}}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;background:#FFC0CB;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-success" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">{{card[4]}}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;background:#67C23A;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-success" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">{{card[5]}}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                            </div>
                            <div class="graph" style="margin-top:20px;display: flex;justify-content: space-between">
                                <el-card style="width:50%" shadow=hover>
                                    <div id="myChart1" style="height:250px"></div>
                                </el-card>
                                <el-card style="width:60%" shadow="hover">
                                    <div id="myChart" style="height:250px" ></div>
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
                card:[],
                xkey:[],
                yvalue:[],
                datas1: [
                    { name: "CashValue",value: 64},
                    { name: "InvestmentValue",value: 32 },
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
                        trigger: 'axis',
                        axisPointer:{
                            lineStyle:{
                                color:'#57617B'
                            }
                        }
                    },
                    /* legend:{
                       top:20,
                       icon:'circle' ,
                       itemWidth:14,
                       itemHeight:5,
                       itemGap:13,
                       data:['NetWorth'],
                       right:'4%',
                       textStyle:{
                         fontSize:12,
                         color:'#F1F1F3'
                       }
                     },*/
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.xkey
                    },
                    yAxis: {
                        x: 'center',
                        type: 'value',
                    },
                    series: [{
                        name: 'net',
                        type: 'line',
                        data: this.yvalue
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
                        text: "NetWorth",
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
                            center: ["60%", "50%"],
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
            _this.apiUrl =' http://portfolio-manager-git-portfolio-manager.apps.us-east-2.starter.openshift-online.com'
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            let seperator1 = "-";
            let year1 = start.getFullYear();
            let month1 = start.getMonth() + 1;
            let strDate1 = start.getDate();
            if (month1 >= 1 && month1 <= 9) {
                month1 = "0" + month1;
            }
            if (strDate1 >= 0 && strDate1 <= 9) {
                strDate1 = "0" + strDate1;
            }

            let year2 = end.getFullYear();
            let month2 = end.getMonth() + 1;
            let strDate2 = end.getDate();
            if (month2 >= 1 && month2 <= 9) {
                month2 = "0" + month2;
            }
            if (strDate2 >= 0 && strDate2 <= 9) {
                strDate2 = "0" + strDate2;
            }
            let lastweek = year1 + seperator1 + month1 + seperator1 + strDate1;
            let currentdate = year2 + seperator1 + month2 + seperator1 + strDate2;
            //   console.log(lastweek);
            //  console.log(currentdate);
//获取结束
            // console.log(_this.apiUrl);
            _this.axios.get('http://localhost:3000/countData').then(function(resp){
                _this.card = resp.data //表示的最上面彩色块块的值
                //  console.log(_this.card)
            });
            _this.axios.get(_this.apiUrl+'/portfolio/investmentVal?startDate='+lastweek+'&endDate='+currentdate).then(function(resp){
                _this.Order = resp.data //表示的最上面彩色块块的值
                // console.log(resp.data)

                _this.xkey=Object.keys( _this.Order);
                _this.yvalue=Object.values( _this.Order);

            });

            let pie_date='2020-09-12'
            //console.log(pie_date)
            /*  _this.axios.get(_this.apiUrl+'/portfolio/investmentVal?startDate='+pie_date+'&endDate='+pie_date).then(function(resp){
                _this.Order_pie = resp.data //表示的最上面彩色块块的值
                 console.log(resp.data)
                 _this.datas1=_this.Order_pie
                 console.log(_this.datas1)
               });*/
        },
        watch:{
            datas1: {
                handler: function () {
                    this.drawLine1();
                },
            },
            xkey:{
                handler: function () {
                    this.drawLineChart();
                },
            },
            yvalue:{
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
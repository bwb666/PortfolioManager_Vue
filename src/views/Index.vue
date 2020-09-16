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
                                        <p class="money" style="font-size: 30px;margin-bottom:10px;color:#f9fafc">${{ card[1] }}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">CashValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;margin-bottom: 20px;background:#409EFF;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-platform-eleme" style="font-size:50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">${{ card[0] }}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">InvestmentValue</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;margin-bottom: 20px;background:#F56C6C;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-user" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 40px;margin-bottom:10px;color:#f9fafc">{{ bondshare }}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">Bond</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;background:#F08080;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-chat-dot-square" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 40px;margin-bottom: 10px;color:#f9fafc">{{ Stockshare }}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">Stocks</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;background:#FFC0CB;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-news" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 40px;margin-bottom: 10px;color:#f9fafc">{{ Futureshare }}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">Futures</p>
                                    </div>
                                </el-card>
                                <el-card style="width:32%;background:#67C23A;height:200px;" shadow="hover" body-style="display:flex;padding:0">
                                    <i class="el-icon-s-data" style="font-size: 50px;width:80px;height:100px;text-align: center;padding:20px;line-height: 120px;color:#f9fafc;"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 40px;margin-bottom: 10px;color:#f9fafc">{{ ETFshare }}</p>
                                        <p class="txt" style="font-size:30px;text-align: center;color:#f9fafc">ETFs</p>
                                    </div>
                                </el-card>
                            </div>
                            <div class="graph" style="display: flex;justify-content: space-between">
                                <el-card style="width:50%" shadow=hover>
                                    <div id="myChart1" style="height:320px"></div>
                                </el-card>
                                <el-card style="width:60%" shadow="hover">
                                    <div id="myChart" style="height:320px" ></div>
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
                datas1: [],
                bondshare:0,
                Stockshare:0,
                Futureshare:0,
                ETFshare:0,
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
                        text: "wealth",
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
                            radius: "75%",
                            center: ["55%", "55%"],
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
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
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
            _this.axios.get(_this.apiUrl+'/investment').then(function(resp){
                // _this.card = resp.data //表示的最上面彩色块块的值
                console.log(resp.data)

                for(let i = 0;i<resp.data.length;i++){
                    if(resp.data[i].type == "STOCK"){
                        _this.Stockshare = _this.Stockshare + 1 ;
                    }else if(resp.data[i].type == "ETF"){
                        _this.ETFshare = _this.ETFshare + 1;
                    }else if(resp.data[i].type == "BOND"){
                        _this.bondshare = _this.bondshare + 1 ;
                    }else if(resp.data[i].type == "FUTURE"){
                        _this.Futureshare = _this.Futureshare + 1;
                    }
                    //  console.log(resp.data[i].type)
                    //  console.log(_this.Stockshare)
                }
            });
            _this.axios.get(_this.apiUrl+'/portfolio/investmentVal?startDate='+lastweek+'&endDate='+currentdate).then(function(resp){
                _this.xkey=Object.keys( resp.data);
                _this.yvalue=Object.values( resp.data);

            });

            _this.axios.get(_this.apiUrl+'/portfolio/cashAndInvestmentVal').then(function(resp){
                _this.datas1 = resp.data //表示的最上面彩色块块的值
                //  console.log(_this.datas1[1].value ),
                // console.log( _this.datas1[0].value)
                for(let i = 0; i < 2 ; i++ ){
                    _this.card.push(_this.datas1[i].value)
                }
            });
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

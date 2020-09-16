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
                <el-aside width="200px" style="height: 750px">
                    <el-menu :default-openeds="['/Diagram']" :default-active="$route.path"
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
                <el-main>
                    <el-row>
                        <el-col :span="18"><div class="grid-content bg-purple">
                            <el-form :inline="true" :model="formInline" class="demo-form-inline" style="text-align: center">

                                <el-form-item label="Choose Time">
                                    <el-date-picker
                                            v-model="formInline.DataSelect"
                                            type="daterange"
                                            align="right"
                                            unlink-panels
                                            range-separator="to"
                                            start-placeholder="Start Date"
                                            end-placeholder="End Date"
                                            :picker-options="pickerOptions"
                                            format="yyyy-MM-dd"
                                            value-format="yyyy-MM-dd">

                                    </el-date-picker>
                                </el-form-item>
                                <el-button type="primary" style="margin-left: 25px" @click="showDiagram()">Show Diagram</el-button>
                            </el-form>

                            <div id="chartLine" class="HelloWorld echart-box" style="width: 100%;height: 280px;"></div>

                            <el-divider></el-divider>
                            <h3>Today</h3>
                            <el-row>
                                <el-col :span="12"><div class="grid-content bg-purple">

                                    <div
                                            class="HelloWorld echart-box"
                                            id="myChart1"
                                            style="width:500px; height:300px;background:#ffffff;margin-top:20px"
                                    ></div>
                                </div></el-col>
                                <el-col :span="12"><div class="grid-content bg-purple-light">

                                    <div id="myChart2" style="width:500px; height:300px;background:#ffffff;margin-top:20px"
                                    ></div>


                                </div></el-col>
                            </el-row>


                        </div></el-col>

                        <el-col :span="6"><div class="grid-content bg-purple-light" style="text-align: center">
                            <div style="padding-bottom: 5px">YOUR GAINERS</div>
                            <el-table
                                    :data="tableData1"
                                    border
                                    style="margin-top: 11px"
                                    :show-header="true"
                                    class="elTable"
                                    :cell-style="cellStyle"
                                    :header-cell-style="tableHeaderStyle">

                                <el-table-column
                                        prop="name"
                                        label="Name"
                                        width="180px"
                                style="height: min-content;">
                                </el-table-column>
                                <el-table-column
                                        prop="gainp"
                                        label="Gain(%)">
                                    <template scope="scope">
                                        <span v-if="scope.row.gainp>0" style="color:green">{{ parseFloat(scope.row.gainp).toFixed(2) }}</span>
                                        <span v-else style="color:#606266">{{ parseFloat(scope.row.gainp).toFixed(2) }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-divider></el-divider>
                            <div style="padding-bottom: 5px;padding-top: 15px">YOUR LOSERS</div>
                            <el-table
                                    :data="tableData2"
                                    border
                                    style="margin-top: 10px"
                                    :show-header="true"
                                    class="elTable"
                                    :cell-style="cellStyle"
                                    :header-cell-style="tableHeaderStyle">

                                <el-table-column
                                        prop="name"
                                        label="Name"
                                        width="180px"
                                        style="height: min-content">
                                </el-table-column>
                                <el-table-column
                                        prop="gainp"
                                        label="Gain(%)">
                                    <template scope="scope">
                                        <span v-if="scope.row.gainp<0" style="color:red">{{ parseFloat(scope.row.gainp).toFixed(2) }}</span>
                                        <span v-else style="color:#606266">{{ parseFloat(scope.row.gainp).toFixed(2) }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>

                        </div></el-col>
                    </el-row>

                </el-main>




            </el-container>
        </el-container>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    require('echarts/theme/shine');//引入主题

    export default {
        name: "Diagram",
        data() {
            return {
                msg: "扇形图",
                list:[],
                date:[],
                value:[],
                datas1: [
                    { value: 64, name: "男" },
                    { value: 32, name: "女" },
                    { value: 12, name: "未知" },
                    { value: 45, name: "未" },
                ],
                datas2: [
                    { value: 64, name: "A" },
                    { value: 32, name: "B" },
                    { value: 12, name: "C" },

                ],
                datas3:[],//investment
                datas4:[20, 80, 51, 90, 80, 30, 20],
                datas5:[50, 130, 132, 130, 140, 80, 70],
                datas6:[30, 50, 81, 40, 60, 70, 50],
                tableData1: [{

                    name: 'apple',
                    gainp: '0.5'

                }],
                tableData2: [{

                    name: 'apple',
                    gainp: '-0.5'

                }],
                formInline: {
                    DataSelect:''
                },
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近半个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value2: ''
            };
        },
        mounted:function() {
            this.drawLine1();
            this.drawLine2();
            this.drawLineChart();
        },
        created() {

            const _this=this;
            //获取当前日期和前七天日期
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
            var seperator1 = "-";
            var year1 = start.getFullYear();
            var month1 = start.getMonth() + 1;
            var strDate1 = start.getDate();
            if (month1 >= 1 && month1 <= 9) {
                month1 = "0" + month1;
            }
            if (strDate1 >= 0 && strDate1 <= 9) {
                strDate1 = "0" + strDate1;
            }

            var year2 = end.getFullYear();
            var month2 = end.getMonth() + 1;
            var strDate2 = end.getDate();
            if (month2 >= 1 && month2 <= 9) {
                month2 = "0" + month2;
            }
            if (strDate2 >= 0 && strDate2 <= 9) {
                strDate2 = "0" + strDate2;
            }
            var lastweek = year1 + seperator1 + month1 + seperator1 + strDate1;
            var currentdate = year2 + seperator1 + month2 + seperator1 + strDate2;
            console.log(lastweek);
            console.log(currentdate);
            //获取结束
            console.log(_this.apiUrl);
            //折线图默认显示前一周
            axios.get(_this.apiUrl+'/portfolio/investmentVal?startDate='+lastweek+'&endDate='+currentdate).then((response) => {
                const a=response.data;
                let arr1 = [];
                let arr2 = [];
                arr1=Object.keys(a);
                arr2=Object.values(a);
                // console.log(arr1.length);
                // console.log(Object.values(a));
                console.log(arr2);

                if (response.status == 200) {
                    this.datas3.length = 0; //清空数组
                    this.datas4.length = 0; //清空数组
                    for (let i = 0; i < arr1.length; i++) {
                        this.datas3.push(arr1[i]);
                        // console.log(this.datas3);
                        // console.log(this.datas1[i].type);
                    }
                    for (let i = 0; i < arr2.length; i++) {
                        this.datas4.push(arr2[i]);
                        // console.log(this.datas4);
                        // console.log(this.datas1[i].type);
                    }
                }
            });

            //netWorth
            axios.get(_this.apiUrl+'/portfolio/netVal?startDate='+lastweek+'&endDate='+currentdate).then((response) => {
                const a=response.data;
                let arr2 = [];

                arr2=Object.values(a);
                console.log(arr2);

                if (response.status == 200) {
                    this.datas5.length = 0; //清空数组

                    for (let i = 0; i < arr2.length; i++) {
                        this.datas5.push(arr2[i]);

                    }
                }
            });

            //cash value
            axios.get(_this.apiUrl+'/portfolio/cashVal?startDate='+lastweek+'&endDate='+currentdate).then((response) => {
                const a=response.data;
                let arr2 = [];

                arr2=Object.values(a);
                console.log(arr2);

                if (response.status == 200) {
                    this.datas6.length = 0; //清空数组

                    for (let i = 0; i < arr2.length; i++) {
                        this.datas6.push(arr2[i]);

                    }
                }
            });



            //饼状图Investment
            axios.get(_this.apiUrl+'/portfolio/typeVal').then((response) => {
                console.log(response);
                // console.log(response.data.length);
                if (response.status == 200) {
                    _this.datas1.length = 0; //清空数组
                    for (let i = 0; i < response.data.length; i++) {
                        _this.datas1.push(response.data[i]);
                        // console.log(this.datas1);
                        // console.log(this.datas1[i].type);
                    }
                }
            });

            //饼状图NetWorth
            axios.get(_this.apiUrl+'/portfolio/cashAndInvestmentVal').then((response) => {
                // console.log(response);
                // console.log(response.data.length);
                if (response.status == 200) {
                    _this.datas2.length = 0; //清空数组
                    for (let i = 0; i < response.data.length; i++) {
                        _this.datas2.push(response.data[i]);
                        // console.log(this.datas2);
                        // console.log(this.datas1[i].type);
                    }
                }
            });
            //TOP5 Gainer
            axios.get(_this.apiUrl+'/mover/top5Gainer').then(function (resp) {
                // console.log(resp);
                _this.tableData1=resp.data

            });

            //TOP5 Loser
            axios.get(_this.apiUrl+'/mover/top5Loser').then(function (resp) {
                // console.log(resp);
                _this.tableData2=resp.data

            })

        },
        watch: {
            datas1: {
                handler: function () {
                    this.drawLine1();
                },
                deep: true,
            },
            datas2: {
                handler: function () {
                    this.drawLine2();
                },
                deep: true,
            },
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
            },
            datas5:{
                handler: function () {
                    this.drawLineChart();
                },
                deep: true,
            },
            datas6:{
                handler: function () {
                    this.drawLineChart();
                },
                deep: true,
            }
        },
        methods:{
            drawLineChart() {
                let myLineChart = this.$echarts.init(document.getElementById("chartLine"));
                let option = {
                    backgroundColor: "#fff",
                    color: ["#37A2DA","#FFDB5C", "#ff9f7f"],

                    title: {
                        text: "Asset Changes",
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
                        name:'assets($)',
                        type: 'value',
                    },
                    series: [
                        {
                            name:'Net Worth',
                            type:'line',
                            data:this.datas5
                        },
                        {
                            name: 'Investment Value',
                            type: 'line',
                            data: this.datas4
                        },
                        {
                            name:'Cash Value',
                            type:'line',
                            data:this.datas6
                        }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表
                myLineChart.setOption(option);
            },
            drawLine1() {
                // 1、基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("myChart1"));
                //2、构造图表数据
                let options = {
                    color: ["#9FE6B8","#37A2DA", "#FFDB5C", "#fb7293"],
                    title: {
                        text: "Investment",
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
            drawLine2() {
                // 1、基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("myChart2"));
                //2、构造图表数据
                let options = {
                    color: ["#284D78","#6F6F6F"],
                    title: {
                        text: "Net Worth",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                        data: this.datas2,
                    },
                    series: [
                        {
                            name: "Type",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: this.datas2,
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
            showDiagram(){
                const _this=this;
                // console.log(_this.formInline);

                var startDate = _this.formInline.DataSelect[0];
                var endDate = _this.formInline.DataSelect[1];

                console.log(startDate);
                console.log(endDate);

                //investment
                axios.get(_this.apiUrl+'/portfolio/investmentVal?startDate='+startDate+'&endDate='+endDate).then(function (resp) {
                    console.log(resp);
                    const a=resp.data;
                    let arr1 = [];
                    let arr2 = [];
                    arr1=Object.keys(a);
                    arr2=Object.values(a);
                    // console.log(arr1.length);
                    // console.log(Object.values(a));

                    if (resp.status == 200) {
                        _this.datas3.length = 0; //清空数组
                        _this.datas4.length = 0; //清空数组
                        for (let i = 0; i < arr1.length; i++) {
                            _this.datas3.push(arr1[i]);
                            // console.log(this.datas3);
                            // console.log(this.datas1[i].type);
                        }
                        for (let i = 0; i < arr2.length; i++) {
                            _this.datas4.push(arr2[i]);
                            // console.log(this.datas4);
                            // console.log(this.datas1[i].type);
                        }
                    }
                });


                //networth
                axios.get(_this.apiUrl+'/portfolio/netVal?startDate='+startDate+'&endDate='+endDate).then(function (response) {
                    const a=response.data;
                    let arr2 = [];

                    arr2=Object.values(a);

                    if (response.status == 200) {
                        _this.datas5.length = 0; //清空数组

                        for (let i = 0; i < arr2.length; i++) {
                            _this.datas5.push(arr2[i]);

                        }
                    }
                });

                //cash value
                axios.get(_this.apiUrl+'/portfolio/cashVal?startDate='+startDate+'&endDate='+endDate).then(function (response) {
                    const a=response.data;
                    let arr2 = [];

                    arr2=Object.values(a);

                    if (response.status == 200) {
                        _this.datas6.length = 0; //清空数组

                        for (let i = 0; i < arr2.length; i++) {
                            _this.datas6.push(arr2[i]);

                        }
                    }

                })
                // localhost:8080/portfolio/investmentVal?startDate=2020-09-10&endDate=2020-09-15



            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'background-color:#D3D3D3;'

            },
            tableHeaderStyle({row, column, rowIndex, columnIndex}) {

                    return 'background-color:#284D78;'

            },
        }
    }
</script>

<style lang='less'>
.elTable td{
    padding: 10px 0!important;
}
.elTable th{
    padding: 6px 0!important;
}


</style>
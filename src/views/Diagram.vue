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
                <el-aside width="200px" style="height: 600px">
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
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            :picker-options="pickerOptions"
                                            format="yyyy-MM-dd"
                                            value-format="yyyy-MM-dd">

                                    </el-date-picker>
                                </el-form-item>
                                <el-button type="primary" style="margin-left: 25px" @click="showDiagram()">Show Diagram</el-button>
                            </el-form>

                            <div id="chartLine" class="HelloWorld echart-box" style="width: 100%;height: 280px;"></div>

                            <el-row>
                                <el-col :span="12"><div class="grid-content bg-purple">

                                    <div
                                            class="HelloWorld echart-box"
                                            id="myChart1"
                                            :style="{width: '450px', height: '300px',background:'#ffffff'}"
                                    ></div>
                                </div></el-col>
                                <el-col :span="12"><div class="grid-content bg-purple-light">

                                    <div id="myChart2"
                                         :style="{width: '500px', height: '300px',background:'#ffffff'}"
                                    ></div>


                                </div></el-col>
                            </el-row>


                        </div></el-col>

                        <el-col :span="6"><div class="grid-content bg-purple-light" style="text-align: center">
                            <div>YOUR GAINERS</div>
                            <el-table
                                    :data="tableData1"
                                    border
                                    style="margin-top: 10px"
                                    :show-header="false"
                                    class="elTable"
                                    :cell-style="cellStyle">

                                <el-table-column
                                        prop="name"
                                        label="Name"
                                style="height: min-content">
                                </el-table-column>
                                <el-table-column
                                        prop="gainp"
                                        label="Gain(%)">
                                    <template scope="scope">
                                        <span v-if="scope.row.gainp>0" style="color:green">{{ scope.row.gainp }}</span>
                                        <span v-else style="color:#606266">{{ scope.row.gainp }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-divider></el-divider>
                            <div>YOUR LOSERS</div>
                            <el-table
                                    :data="tableData2"
                                    border
                                    style="margin-top: 10px"
                                    :show-header="false"
                                    class="elTable"
                                    :cell-style="cellStyle">

                                <el-table-column
                                        prop="name"
                                        label="Name"
                                        style="height: min-content">
                                </el-table-column>
                                <el-table-column
                                        prop="gainp"
                                        label="Gain(%)">
                                    <template scope="scope">
                                        <span v-if="scope.row.gainp<0" style="color:red">{{ scope.row.gainp }}</span>
                                        <span v-else style="color:#606266">{{ scope.row.gainp }}</span>
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
                tableData1: [{

                    name: 'apple',
                    gainp: '0.5'

                },
                    {

                        name: 'ye6e',
                        gainp: '0.85'

                    },{

                        name: 'ye6e',
                        gainp: '0.85'

                    },
                    {

                        name: 'ye6e',
                        gainp: '0.85'

                    },
                    {

                        name: 'ye6e',
                        gainp: '0.85'

                    }],
                tableData2: [{

                    name: 'apple',
                    gainp: '-0.5'

                },
                    {

                        name: 'ye6e',
                        gainp: '-0.85'

                    },{

                        name: 'ye6e',
                        gainp: '-0.85'

                    },
                    {

                        name: 'ye6e',
                        gainp: '-0.85'

                    },
                    {

                        name: 'ye6e',
                        gainp: '-0.85'

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
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近半个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 15);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
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
            this.$axios.get("findPatientSex").then((response) => {
                console.log(response);
                if (response.data.statusCode == 200) {
                    this.datas1.length = 0; //清空数组
                    for (let i = 0; i < response.data.data.length; i++) {
                        this.datas1.push(response.data.data[i]);
                        console.log(this.datas1);
                    }
                }
            });
        },
        watch: {
            datas1: {
                handler: function () {
                    this.drawLine();
                },
                deep: true,
            },
            datas2: {
                handler: function () {
                    this.drawLine();
                },
                deep: true,
            },
        },
        methods:{
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
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        x: 'center',
                        type: 'value',
                    },
                    series: [{
                        name: '销量',
                        type: 'line',
                        data: [20, 80, 51, 90, 80, 30, 20]
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
            drawLine1() {
                // 1、基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("myChart1"));
                //2、构造图表数据
                let options = {
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
                        data: ["男", "女", "未知",],
                    },
                    series: [
                        {
                            name: "访问来源",
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
                    title: {
                        text: "Lose",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                        data: ["A", "B", "C",],
                    },
                    series: [
                        {
                            name: "访问来源",
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
                console.log(_this.formInline);

                var startDate = _this.formInline.DataSelect[0];
                var endDate = _this.formInline.DataSelect[1];
                console.log(startDate);
                console.log(endDate);



            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'background-color:#D3D3D3;'

            },
            // tableHeaderStyle({row, column, rowIndex, columnIndex}) {
            //
            //         return 'background-color:#284D78;color:#fff;font-size:10px;height:0px'
            //
            // },
        }
    }
</script>

<style lang='less'>
.elTable td{
    padding: 6px 0!important;
}


</style>
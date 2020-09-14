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
                <el-aside width="250px"  style="height:600px">
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
                                <el-card style="width:32%;margin-bottom: 20px" :style="{background:item.color}" shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                                    <i class="icon" style="font-size: 30px;width:80px;height:80px;text-align: center;line-height: 120px;color:#f9fafc;" :class="`el-icon-${item.icon}`"></i>
                                    <div class="detail" style="margin-left: 15px;display: flex;flex-direction: column;justify-content: center">
                                        <p class="money" style="font-size: 30px;margin-bottom: 10px;color:#f9fafc">${{item.value}}</p>
                                        <p class="txt" style="font-size:14px;text-align: center;color:#f9fafc">{{ item.name }}</p>
                                    </div>
                                </el-card>
                            </div>
                            <el-card shadow="hover">
                                <div style="height:160px"></div>
                            </el-card>
                            <div class="graph" style="margin-top:20px;display: flex;justify-content: space-between">
                                <el-card style="width:48%" shadow=hover>
                                    <div style="height:160px"></div>
                                </el-card>
                                <el-card style="width:48%" shadow="hover">
                                    <div style="height:160px"></div>
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
    export default {
        name: "Index",
        data(){
            return {
                countData:[{
                    name:'今日支付订单',
                    value:1234,
                    icon:'success',
                    color:'#FFBB66',
                },
                    {
                        name:'今日收藏订单',
                        value:1224,
                        icon:'star-on',
                        color:'#409EFF',
                    },
                    {
                        name:'今日未支付订单',
                        value:1275,
                        icon:'s-custom',
                        color:'#FFA488',
                    },
                    {
                        name:'本月支付订单',
                        value:557,
                        icon:'info',
                        color:'#F56C6C',
                    },
                    {
                        name:'本月收藏订单',
                        value:358,
                        icon:'star-off',
                        color:'#FF8888',
                    },
                    {
                        name:'本月未支付订单',
                        value:586,
                        icon:'s-order',
                        color:'#67C23A',
                    },
                ]
            }
        },
        created() {
            const _this = this;
            _this.axios.get('http://localhost:3000/user').then(function(resp){
                console.log(resp)
                _this.Value = resp.data[0].name
            })
        },
        methods:{

        },
        watch:{
            newValue(val, oldvalue){
                console.log("value: " +val,oldvalue);
            }
        },
        computed:{
            newValue(){
                return this.Value
            }
        },
    }
</script>

<style scoped>
    .text {
        font-size: 40px;
        color: white;
        text-align: justify;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 400px;
    }


    .el-icon-s-data {
        font-size:150px;
        color:white;
    }
    .el-icon-s-cooperation{
        font-size:150px;
        color:white;
    }

    .el-icon-coin{

        font-size:50px;
        color:white;
    }
    .el-icon-eleme{
        font-size:150px;
        color:white;
    }
    .el-icon-goods{
        font-size:150px;
        color:white;
    }
    .el-icon-user{
        font-size:150px;
        color:white;
    }
    .description{
        font-size:50px;
        color:white;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .el-main{
        padding: 0px;
    }

    .el-row {
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 10px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }




</style>
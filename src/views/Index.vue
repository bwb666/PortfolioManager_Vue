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
                <el-aside width="200px"  style="height:600px">
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
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card" style="width:370px;height:300px;background: #409EFF;margin:5px">
                                    <i class="el-icon-s-data"></i>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card" style="width: 370px;height:300px;background: #D9D919;margin:5px" >
                                    <i class="el-icon-user"></i>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card" style="width:370px;height:300px;background: #67C23A;margin:5px">
                                    <i class="el-icon-s-cooperation"></i>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card" style="width: 370px;height:300px;background: #F56C6C;margin:5px">

                                    <div slot="header" class="clearfix">
                                        <span class="description"><i class="el-icon-coin"></i>Cash Value</span>
                                    </div>
                                    <div :data="Value"  class="text item">
                                    {{Value}}
                            </div>

                            </el-card>
                            <div></div>
    </div>
    </el-col>
    <el-col :span="8">
        <div class="grid-content bg-purple">
            <el-card class="box-card" style="width: 370px;height:300px;background: #E6A23C;margin:5px">
                <i class="el-icon-eleme"></i>
            </el-card>
        </div>
    </el-col>
    <el-col :span="4">
        <div class="grid-content bg-purple">
            <el-card class="box-card" style="width: 370px;height:300px;background: #42b983;margin:5px">
                <i class="el-icon-goods"></i>
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
                Value:null
            }
        },
        created(){
            const _this = this;
            _this.axios.get('http://localhost:8080/getCashVal').then(function(resp){
                console.log(resp)

            })
        },
        methods:{

        },
    }
</script>

<style scoped>
    .text {
        font-size: 50px;
        color: white;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 400px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .el-icon-s-data {
        font-size:150px;
        color:white;
    }
    .el-icon-s-cooperation{
        font-size:150px;
        color:white;
    }
    .el-icon-picture-outline-round{
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

    /*.el-row {*/
        /*margin-bottom: 0px;*/
        /*margin-left: 0px;*/
        /*margin-right: 10px;*/
    /*&:last-child {*/
         /*margin-bottom: 0;*/
     /*}*/
    /*}*/
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
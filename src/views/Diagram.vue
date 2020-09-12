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
                <el-aside width="200px">
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

                        <el-menu-item style="height: 70px">

                        </el-menu-item>

                        <el-menu-item style="height: 70px">

                        </el-menu-item>

                        <el-menu-item style="height: 70px">

                        </el-menu-item>

                        <el-menu-item style="height: 70px">

                        </el-menu-item>
                        <el-menu-item style="height: 70px">

                        </el-menu-item>

                    </el-menu>
                </el-aside>




            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Diagram"
    }
</script>

<style scoped>

</style>
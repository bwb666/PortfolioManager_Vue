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
                    <el-menu :default-openeds="['/Allportfolio']" :default-active="$route.path"
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


                <el-main >
                    <body style="margin-top: 15px">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="Symbol">
                            <el-input v-model="formInline.symbol" style="width: 220px"></el-input>
                        </el-form-item>
                        <el-form-item label="Name">
                            <el-input v-model="formInline.name" style="width: 220px" ></el-input>
                        </el-form-item>
                        <el-form-item label="Type">
                            <el-select v-model="formInline.value" clearable placeholder="">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-button type="primary" icon="el-icon-search" style="margin-left: 25px" @click="searchInfo()">Search</el-button>
                        <el-button type="warning" icon="el-icon-plus" circle style="margin-left: 35px" @click="add()"></el-button>


                    </el-form>
                    </body>
                    <template>
                        <el-table
                                :data="tableData"
                                height="480"
                                border
                                style=""
                                :header-cell-style="tableHeaderStyle"
                                :cell-style="cellStyle">

                            <el-table-column
                                    prop="id"
                                    label="ID"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="Name"
                                    width="120">
                            </el-table-column>

                            <el-table-column
                                    prop="symbol"
                                    label="Symbol"
                                    width="75">
                            </el-table-column>
                            <el-table-column
                                    prop="type"
                                    label="Type"
                                    width="70">
                            </el-table-column>

                            <el-table-column
                                    prop="purchase_date"
                                    label="Purchase Date"
                                    width="90">
                            </el-table-column>

                            <el-table-column
                                    prop="purchase_price"
                                    label="Purchase Price"
                                    width="90">
                            </el-table-column>
                            <el-table-column
                                    prop="shares"
                                    label="Shares"
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    prop="cost"
                                    label="Cost"
                                    width="90">
                            </el-table-column>

                            <el-table-column
                                    prop="current_price"
                                    label="Current Price"
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    prop="current_value"
                                    label="Current Value"
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    prop="total_income"
                                    label="Total Income"
                                    width="90">
                            </el-table-column>
                            <el-table-column
                                    prop="net_val"
                                    label="Net Val"
                                    width="90">
                            </el-table-column>
                            <el-table-column
                                    prop="gain"
                                    label="Gain($)"
                                    width="90">
                                <template scope="scope">
                                    <span v-if="scope.row.gain<0" style="color:red">{{ scope.row.gain }}</span>
                                    <span v-else style="color:#606266">{{ scope.row.gain }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="gainp"
                                    label="Gain(%)"
                                    width="90">
                                <template scope="scope">
                                    <span v-if="scope.row.gainp<0" style="color:red">{{ scope.row.gainp }}</span>
                                    <span v-else style="color:#606266">{{ scope.row.gainp }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column
                                    align="center"
                                    label="operating">

                                <template slot-scope="scope">

                                    <!--<el-button-->
                                    <!--size="mini"-->
                                    <!--type="danger"-->
                                    <!--@click="deleteSystem(scope.row)">Delete</el-button>-->
                                    <el-popconfirm
                                            title="确认删除该项吗？"

                                            @onConfirm="deleteSystem(scope.row)"
                                    >
                                        <el-button slot="reference" size="mini"
                                                   type="danger">delete</el-button>
                                    </el-popconfirm>


                                </template>
                            </el-table-column>


                        </el-table>
                    </template>


                </el-main>



            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Allportfolio",
        data() {
            return {
                formInline: {
                    symbol: '',
                    name: '',
                    value:''
                },
                options: [{
                    value: 'Bond',
                    label: 'Bond'
                }, {
                    value: 'Stock',
                    label: 'Stock'
                }, {
                    value: 'Future',
                    label: 'Future'
                }, {
                    value: 'ETF',
                    label: 'ETF'
                }],
                value: '',
                tableData: [{
                    id: '1',
                    name: 'apple',
                    symbol: 'AAPL',
                    type: 'Bond',
                    purchase_date: '',
                    purchase_price: '',
                    shares: '',
                    cost: '',
                    current_price: '',
                    current_value: '',
                    total_incom: '',
                    net_val: '',
                    gain: '1',
                    gainp: '0.5'

                },
                    {
                        id: '2',
                        name: '',
                        symbol: '',
                        type: 'Future',
                        purchase_date: '',
                        purchase_price: '',
                        shares: '',
                        cost: '',
                        current_price: '',
                        current_value: '',
                        total_incom: '',
                        net_val: '',
                        gain: '-1',
                        gainp: '-0.85'

                    }],
                search: ''
            }
        },
        methods: {
            cellStyle({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3 || columnIndex === 4 || columnIndex === 5 || columnIndex === 6 || columnIndex === 7) { //指定坐标
                    return 'background:#E0EBF6'
                } else if (columnIndex === 8 || columnIndex === 9) {
                    return 'background:#F8E2D8'
                } else if(columnIndex === 10 || columnIndex === 11){
                    return 'background:#E6EFDD'
                }else if(columnIndex === 12 || columnIndex === 13|| columnIndex === 14){
                    return 'background:#D2CED0'
                }
                else {
                    return ''
                }
            },
            tableHeaderStyle({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3 || columnIndex === 4 || columnIndex === 5 || columnIndex === 6 || columnIndex === 7) { //指定坐标
                    return 'background-color:#284D78;color:#fff'
                } else if (columnIndex === 8 || columnIndex === 9) {
                    return 'background-color:#614436;color:#fff'
                } else if(columnIndex === 10 || columnIndex === 11){
                    return 'background-color:#3F552A;color:#fff'
                }else if(columnIndex === 12 || columnIndex === 13|| columnIndex === 14){
                    return 'background-color:#181718;color:#fff'
                }
                else {
                    return ''
                }
            },
            add(){

                // console.log(row);
                this.$router.push({
                    path:'/Add',

                });
            },
            searchInfo(){
                const _this = this;
                console.log(_this.formInline);

            }

        }



    }
</script>

<style>
    .el-table th.gutter{
        display: table-cell!important;
    }
</style>
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



                    </el-menu>
                </el-aside>


                <el-main >
                    <body style="margin-top: 15px">

                    <el-input v-model="search" style="display: inline-block;width: 900px"
                              placeholder="Please input symbol or name of the portfolio">
                    </el-input>
                    <el-button type="primary" plain @click="resetDateFilter" style="margin-left: 25px">Reset Type</el-button>
                    <el-button type="warning" icon="el-icon-plus" circle style="margin-left: 25px" @click="add()"></el-button>

                    </body>
                    <template>
                        <el-table
                                ref="filterTable"
                                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.symbol.toLowerCase().includes(search.toLowerCase()))"
                                height="480"
                                border
                                style=""
                                :header-cell-style="tableHeaderStyle"
                                :cell-style="cellStyle">

                            <el-table-column
                                    prop="id"
                                    label="ID"
                                    width="60">
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
                                    width="70"
                                    column-key="type"
                                    :filters="[{text: 'Bond', value: 'Bond'}, {text: 'Stock', value: 'Stock'}, {text: 'Future', value: 'Future'}, {text: 'ETF', value: 'ETF'}]"
                                    :filter-method="filterHandler">
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
                    value: '1',
                    label: 'Bond'
                }, {
                    value: '2',
                    label: 'Stock'
                }, {
                    value: '3',
                    label: 'Future'
                }, {
                    value: '4',
                    label: 'ETF'
                }],
                value: '',
                tableData: [
                    {
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
                        name: 'DDEF',
                        symbol: 'EDO',
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

                    },
                    {
                        id: '3',
                        name: 'frfrf',
                        symbol: 'VNDA',
                        type: 'Stock',
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

                    },
                    {
                        id: '4',
                        name: 'dhfud',
                        symbol: 'NHF',
                        type: 'ETF',
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
                // console.log(this.formInline.symbol)
                const search = this.search;
                if (search) {

                    // return this.tableData.filter(data => {
                    //
                    //     return Object.keys(data).some(key => {
                    //
                    //         return String(data[key]).toLowerCase().indexOf(search) > -1
                    //     })
                    // })
                    // return this.tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))
                }
                return this.tableData

            },
            deleteSystem(row){
                alert(row.id);
                // const _this=this;
                // axios.delete('http://localhost:8181/Zonghe/deleteById/'+row.id).then(function (resp) {
                //     // alert(111)
                //     _this.$alert('删除成功!', '消息', {
                //         confirmButtonText: '确定',
                //         callback: action => {
                //
                //         }
                //
                //     });
                //     _this.reload()
                // })
            },
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('type');
            },
            formatter(row, column) {
                return row.address;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            created(){
                const _this=this
                axios.get('http://localhost:8181/Danxiang/findByUserid').then(function (resp) {
                    _this.tableData=resp.data

                })
            },

        }



    }
</script>

<style>
    .el-table th.gutter{
        display: table-cell!important;
    }
</style>
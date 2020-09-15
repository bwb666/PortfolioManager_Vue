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
                                :cell-style="cellStyle"
                                :summary-method="getSummaries"
                                show-summary="">

                            <el-table-column
                                    prop="id"
                                    label="ID"
                                    width="70"
                                    v-if="show">
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
                                    :filters="[{text: 'BOND', value: 'BOND'}, {text: 'STOCK', value: 'STOCK'}, {text: 'FUTURE', value: 'FUTURE'}, {text: 'ETF', value: 'ETF'}]"
                                    :filter-method="filterHandler">
                            </el-table-column>

                            <el-table-column
                                    prop="purchaseDate"
                                    label="Purchase Date"
                                    width="130">
                            </el-table-column>

                            <el-table-column
                                    prop="purchasePrice"
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
                                    width="120">
                            </el-table-column>

                            <el-table-column
                                    prop="currentPrice"
                                    label="Current Price"
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    prop="currentValue"
                                    label="Current Value"
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    prop="totalIncome"
                                    label="Total Income"
                                    width="90">
                            </el-table-column>
                            <el-table-column
                                    prop="netVal"
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
                                    <template >
                                        <el-button slot="reference" size="mini" type="danger" @click="open2(scope.row)">delete</el-button>
                                    </template>


                                    <!--<el-popconfirm-->
                                            <!--title="Are you sure to delete this item?"-->

                                            <!--@onConfirm="deleteSystem(scope.row)"-->
                                    <!--&gt;-->
                                        <!--<el-button slot="reference" size="mini"-->
                                                   <!--type="danger">delete</el-button>-->
                                    <!--</el-popconfirm>-->


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
        inject:['reload'],
        data() {
            return {
                show:false,
                value: '',
                tableData: [
                    {
                    id: '1',
                    name: 'apple',
                    symbol: 'AAPL',
                    type: 'Bond',
                    purchaseDate: '',
                    purchasePrice: '',
                    shares: '',
                    cost: '',
                    currentPrice: '',
                    currentValue: '',
                    totalIncome: '',
                    netVal: '',
                    gain: '1',
                    gainp: '0.5'
                    }],
                search: ''
            }
        },

        methods: {
            open2(row) {
                this.$confirm('This will permanently delete the item. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.deleteItem(row);
                    // alert(row.id);
                    // this.$message({
                    //     type: 'success',
                    //     message: 'Delete completed'
                    // });
                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: 'Delete canceled'
                    // });
                });
            },
            getSummaries (param) {
                const { columns, data } = param
                const sums = []
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = 'TOTAL'
                    } else if (index === 6 ||index === 8 || index === 9|| index === 9|| index === 10|| index === 11|| index === 12|| index === 13) {
                        const values = data.map(item => Number(item[column.property]))
                        if (!values.every(value => isNaN(value))) {
                            sums[index] = values.reduce((prev, curr) => {
                                const value = Number(curr)
                                if (!isNaN(value)) {
                                    return prev + curr
                                } else {
                                    return prev
                                }
                            }, 0)
                        } else {
                            sums[index] = 'N/A'
                        }
                    } else {
                        sums[index] = '--'
                    }
                });
                return sums
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3 || columnIndex === 4 || columnIndex === 5 || columnIndex === 6 || columnIndex === 7) { //指定坐标
                    return 'background:#E0EBF6; border: 1px solid white;'
                } else if (columnIndex === 8 || columnIndex === 9) {
                    return 'background:#F8E2D8; border: 1px solid white'
                } else if(columnIndex === 10 || columnIndex === 11){
                    return 'background:#E6EFDD; border: 1px solid white'
                }else if(columnIndex === 12 || columnIndex === 13|| columnIndex === 14){
                    return 'background:#D2CED0; border: 1px solid white'
                }
                else {
                    return ''
                }
            },
            tableHeaderStyle({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3 || columnIndex === 4 || columnIndex === 5 || columnIndex === 6 || columnIndex === 7) { //指定坐标
                    return 'background-color:#284D78;color:#fff; border: 1px solid white'
                } else if (columnIndex === 8 || columnIndex === 9) {
                    return 'background-color:#614436;color:#fff; border: 1px solid white'
                } else if(columnIndex === 10 || columnIndex === 11){
                    return 'background-color:#3F552A;color:#fff; border: 1px solid white'
                }else if(columnIndex === 12 || columnIndex === 13|| columnIndex === 14){
                    return 'background-color:#181718;color:#fff; border: 1px solid white'
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

            deleteItem(row){
                // alert(row.id);
                const _this=this;
                axios.post('http://portfolio-manager-git-portfolio-manager.apps.us-east-2.starter.openshift-online.com/investment/'+row.id).then(function (resp) {
                   console.log(resp);
                    _this.$alert('Delete completed!', 'Success', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        callback: action => {

                        }

                    });
                    _this.reload()
                })
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


        },
        created(){
            const _this=this;
            // console.log(_this.apiUrl);

            axios.get(_this.apiUrl+'/portfolio/all').then(function (resp) {
                // console.log(resp)

                _this.tableData=resp.data

            })
        },
        watch: {
            tableData: {
                handler: function(newName, oldName) {
                    this.$nextTick(() => {
                        // 改变合计行样式
                        const s_table = document.getElementsByClassName('el-table__footer-wrapper')[0]
                        // console.log(s_table)
                        s_table.setAttribute('style', 'border: 1px solid #1A936F')
                        const child_tr = s_table.getElementsByTagName('tr')[0]
                        // console.log(child_tr)
                        child_tr.childNodes.forEach(item => {
                            item.setAttribute('style', 'border: 1px solid #1A936F')
                        })
                    })
                },
                immediate: true,
                deep: true
            }
        },



    }
</script>

<style>
    .el-table th.gutter{
        display: table-cell!important;
    }
</style>
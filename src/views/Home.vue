
<template>
  <el-table
          :data="tableData"
          height="250"
          border
          style="width: 100%"
          :cell-style="cellStyle"
          :header-cell-style="tableHeaderStyle">
    <el-table-column
            prop="date"
            label="日期"
            width="180">
    </el-table-column>
    <el-table-column
            prop="name"
            label="姓名"
            width="180">
    </el-table-column>
    <el-table-column
            prop="address"
            label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],

            }
        },
        methods:{
            //在method里面写上方法
            cellStyle({row, column, rowIndex, columnIndex}){
                if(rowIndex === 0 && columnIndex === 2){ //指定坐标
                    return 'background:pink'
                }else{
                    return ''
                }
            },
            tableHeaderStyle ({row, column, rowIndex, columnIndex}) {
                if( columnIndex === 2){ //指定坐标
                    return 'background:pink'
                }else{
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
  .cell-grey{
    background: #f2f2f2;
  }
</style>
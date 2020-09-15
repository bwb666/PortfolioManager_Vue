<template>
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
                <el-card class="box-card" style="width: 700px;height:550px;text-align: center;margin-left:200px;background: #e2e2e2" >

                <h1 style="text-align: center" >Add A New Investment</h1>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" style="width: 500px">

                    <el-form-item label="Type" prop="type">
                        <el-select v-model="ruleForm.type" placeholder="Select Type" style="width: 400px;text-align: center"  @change="selectExistTypeSymbol">
                            <el-option
                                    v-for="item in options"
                                    :key="item.type"
                                    :label="item.label"
                                    :value="item.type">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Symbol" prop="symbol">
                        <el-select v-model="ruleForm.symbol" placeholder="Select Symbol" style="width: 400px" @change="selectSymbol" >
                            <el-option
                                    v-for="item in symbolList"
                                    :key="item.symbol"
                                    :label="item.label"
                                    :value="item.symbol">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Name" prop="name" >
                        <el-input v-model="ruleForm.name" readOnly style="width: 400px"></el-input>
                    </el-form-item>

                    <el-form-item label="Purchase Date" prop="purchasedDate" >

                        <el-date-picker
                                v-model="ruleForm.purchasedDate"
                                align="right"
                                type="date"
                                placeholder="Select Date"
                                :picker-options="pickerOptions"
                                style="width: 400px"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>

                    </el-form-item>

                    <el-form-item label="Purchase Price" prop="purchasedPrice" >
                        <el-input v-model="ruleForm.purchasedPrice" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item label="Shares" prop="share" >
                        <el-input  v-model="ruleForm.share" autocomplete="off" style="width: 400px"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary " style="width: 200px;margin-left: 80px" @click="submitForm('ruleForm')">Add</el-button>

                    </el-form-item>


                </el-form>

                </el-card>

            </el-main>




        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Add",
        data() {
            var valiNumberPass1 = (rule, value, callback) => {//包含小数的数字
                let reg = /^[+]?(0|([1-9]\d*))(\.\d+)?$/g;
                if (value === '') {
                    callback(new Error('Purchase Price cannot be empty!'));
                } else if (!reg.test(value)) {
                    callback(new Error('Please enter a number greater than 0!'));
                } else {
                    callback();
                }
            };
            var valiNumberPass2 = (rule, value, callback) => {//正整数
                let reg = /^[1-9]\d*$/g;
                if (value === '') {
                    callback(new Error('Shares cannot be empty!'));
                } else if (!reg.test(value)) {
                    callback(new Error('Please enter an integer above 0!'));
                } else {
                    callback();
                }
            };
            let arr1 = [];
            let arr2 = [];
            return {
                ruleForm:{
                    purchasedPrice:'',
                    share:'',
                    purchasedDate: '',
                    type:'',
                    symbol:'',
                    name:''

                },
                rules:{
                    type: [
                        {required: true, message: 'Please choose the type!', trigger: 'change'},

                    ],
                    symbol: [
                        {required: true, message: 'Please choose the symbol!', trigger: 'change'},

                    ],
                    purchasedDate: [
                        {type: 'string', required: true, message: 'Please choose the date!', trigger: 'change'},

                    ],
                    purchasedPrice: [
                        {required: true, validator:valiNumberPass1, trigger: 'blur'},

                    ],
                    share: [
                        {required: true, validator:valiNumberPass2, trigger: 'blur'},

                    ]
                },
                options: [
                    {
                        type: 'BOND',
                        label: 'BOND'
                    }, {
                        type: 'STOCK',
                        label: 'STOCK'
                    }, {
                        type: 'FUTURE',
                        label: 'FUTURE'
                    }, {
                        type: 'ETF',
                        label: 'ETF'
                    }
                ],
                value: '',
                symbolList:[{
                    symbol:'',
                    label:''
                }],
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },

            }
        },
        methods:{

            submitForm(formName) {
                const _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        console.log(_this.ruleForm)
                        axios.post(_this.apiUrl+'/investment',_this.ruleForm).then(function (resp) {
                            if(resp.status ==200){
                                _this.$alert('Add completed!', 'Success', {
                                    confirmButtonText: 'OK',
                                    cancelButtonText: 'Cancel',
                                    callback: action => {
                                        _this.$router.push('/Allportfolio')

                                    }

                                });

                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            selectExistTypeSymbol(val){
                // console.log(val)
                // this.symbolList = [];
                this.ruleForm.symbol = ''
                this.getSymbolOfType()
            },
            selectSymbol(val){
                // console.log(val)
                this.symbolList = [];
                this.getSymbolOfType();
                this.fillName(val)
            },
            getSymbolOfType(){
                const _this = this;
                // console.log(_this.ruleForm.type);
                // alert()
                // axios.get('http://localhost:3000/typeOfsymbol?type='+_this.ruleForm.type).then(function (resp) {
                //     // console.log(resp.data.symbol)
                //     // console.log(resp.status)
                //     if(resp.status === 200){
                //         let arr = [];
                //         resp.data.forEach((resp,index)=>{
                //             // console.log(resp.symbol);
                //             arr[index]={
                //
                //                 symbol:resp.symbol,
                //                 label:resp.symbol,
                //             }
                //         })
                //         _this.symbolList = arr
                //     }
                //     // _this.tableData = resp.data
                // });
                axios.get(_this.apiUrl+'/product/'+_this.ruleForm.type).then(function (resp) {
                    console.log(resp);
                    const a=resp.data;
                    // let arr1 = [];
                    // let arr2 = [];
                    _this.arr1=Object.keys(a);
                    _this.arr2=Object.values(a);
                    // console.log(_this.arr1);
                    // console.log(_this.arr2);

                    if(resp.status === 200){
                        let arr = [];
                        for (let i = 0; i < _this.arr1.length; i++) {
                            arr[i]={

                                symbol:_this.arr1[i],
                                label:_this.arr1[i],
                            }

                        }
                        _this.symbolList = arr
                    }
                    // _this.tableData = resp.data
                });
            },
            fillName(val){
                console.log(val);
                let strName;
                let num;
                strName = val;
                for (let i = 0; i < this.arr1.length; i++) {
                    if(strName==this.arr1[i]){
                         num = i;
                         break;
                    }

                }
                console.log(this.arr2[num])
                this.ruleForm.name=this.arr2[num];


            }
        },
        watch:{
            'symbolList':{
                handler(newValue,oldValue){

                },
                deep:true
            }
        }
    }
</script>

<style scoped>

</style>
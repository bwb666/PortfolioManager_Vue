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
                <el-card class="box-card" style="width: 700px;height:500px;text-align: center;margin-left:200px;background: #e2e2e2" >

                <h1 style="text-align: center">Add a new portfolio</h1>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" style="width: 500px">

                    <el-form-item label="Type">
                        <el-select v-model="ruleForm.valuetype" placeholder="请选择" style="width: 400px;text-align: center">
                            <el-option
                                    v-for="item in options"
                                    :key="item.valuetype"
                                    :label="item.label"
                                    :value="item.valuetype">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Symbol">
                        <el-select v-model="ruleForm.value" placeholder="请选择" style="width: 400px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Purchase Date" prop="value2">

                        <el-date-picker
                                v-model="ruleForm.value2"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions"
                                style="width: 400px"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>

                    </el-form-item>

                    <el-form-item label="Purchase Price" prop="purchase_price" >
                        <el-input v-model="ruleForm.purchase_price" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item label="Shares" prop="shares" >
                        <el-input  v-model="ruleForm.shares" autocomplete="off" style="width: 400px"></el-input>
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
            return {
                ruleForm:{
                    purchase_price:'',
                    shares:'',
                    value2: '',
                    valuetype:''

                },
                rules:{
                    purchase_price: [
                        {required: true, message: '不能为空', trigger: 'blur'},

                    ],
                    shares: [
                        {required: true, message: '不能为空', trigger: 'change'},

                    ],
                },
                options: [{
                    valuetype: 'Bond',
                    label: 'Bond'
                }, {
                    valuetype: 'Stock',
                    label: 'Stock'
                }, {
                    valuetype: 'Future',
                    label: 'Future'
                }, {
                    valuetype: 'ETF',
                    label: 'ETF'
                }],
                value: '',
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
                console.log(_this.ruleForm)
                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         axios.post('http://localhost:8181/Zonghe/savesystemInfo',this.ruleForm).then(function (resp) {
                //             if(resp.data =='success'){
                //                 _this.$alert('添加成功!', '消息', {
                //                     confirmButtonText: '确定',
                //                     callback: action => {
                //                         // _this.$router.push('/Addportfolio')
                //                         // _this.reload()
                //                         // router.go(0)
                //                     }
                //
                //                 });
                //                 _this.reload()
                //
                //             }
                //         })
                //
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            },
        }
    }
</script>

<style scoped>

</style>
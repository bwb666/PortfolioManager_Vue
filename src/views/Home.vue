
<template>
    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" style="width: 100%">

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
            <el-input v-model="ruleForm.symbol" prop="symbol" placeholder="请输入内容"></el-input>
        </el-form-item>


        <el-form-item>
            <el-button type="primary " style="width: 200px;margin-left: 80px" @click="submitForm('ruleForm')">Add</el-button>

        </el-form-item>


    </el-form>

</template>

<script>
    export default {
        name: 'styleTest',
        data() {
            return {
                ruleForm:{
                    valuetype:'',
                    symbol:''

                },
                rules: {
                    symbol: [
                        {required: true, message: '系统名称不能为空', trigger: 'blur'},
                    ]
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

            };
        },

        methods: {
            submitForm(formName) {
                const _this=this;
                console.log(_this.ruleForm)
                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         axios.post('http://localhost:8181/addsymbol',this.ruleForm).then(function (resp) {
                //             console.log(resp)
                //             // if(resp.data =='success'){
                //             //     _this.$alert('添加成功!', '消息', {
                //             //         confirmButtonText: '确定',
                //             //         callback: action => {
                //             //             // _this.$router.push('/Zonghe')
                //             //             // _this.reload()
                //             //             // router.go(0)
                //             //         }
                //             //
                //             //     });
                //             //     _this.reload()
                //             //
                //             // }
                //         })
                //
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            },

        },
    };
</script>

<style scoped>

</style>
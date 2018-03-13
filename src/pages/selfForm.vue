<template>
  <div id="selfForm">
    <el-form :model="form" status-icon ref="form" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="年龄" prop="age" >
      <el-input v-model.number="form.age" ></el-input>
    </el-form-item>

    </el-form>
  </div>
</template>

<script>
import realName from '../core/lib/rules/real-name.js'

export default {
  data () {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('年龄不能为空'))
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('请输入数字值'))
    //     } else {
    //       if (value < 18) {
    //         callback(new Error('必须年满18岁'))
    //       } else {
    //         callback()
    //       }
    //     }
    //   }, 1000)
    // }
    var pass = realName
    return {
      form: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { required: true, message: '不能为空', trigger: 'blur' },
          { validator: pass, message: '请正确填写', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '年龄不能为空', trigger: 'blur' },
          // { validator: checkAge, message: '', trigger: 'blur' }
          { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

import isRealName from '@/core/utils/is-real-name'

export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    return {
      rules: {
        // pass: [
        //   { validator: validatePass, trigger: 'blur' }
        // ],
        // checkPass: [
        //   { validator: validatePass2, trigger: 'blur' }
        // ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  validate (name) {
    return isRealName(name)
  }

}

import isRealName from '@/core/utils/is-real-name'
// import Vue from 'Vue'

export default {
  realname (rule, value, callback) {
    if (value !== '') {
      if (!isRealName(value)) {
        callback(new Error('请输入正确的名字'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  }
}
// exports.install = function (Vue, options) {
//   const realName = (rule, value, callback) => {
//     if (value !== '') {
//       if (!isRealName(value)) {
//         callback(new Error('请输入正确的名字'))
//       } else {
//         callback()
//       }
//     } else {
//       callback()
//     }
//   }

//   Vue.prototype.filter_rules = function (item) {
//     let rules = []
//     if (item.required) {
//       rules.push({required: true, message: '该项必须', trigger: 'blur'})
//     }
//     if (item.type) {
//       let type = item.type
//       switch (type) {
//         case 'email':
//           rules.push({ type: 'email', message: '请输入正确邮箱', trigger: 'blur' })
//           break
//         case 'realName':
//           rules.push({ validator: realName, message: '请输入正确name', trigger: 'blur' })
//           break
//         default:
//           rules.push({})
//           break
//       }
//     }
//     return rules
//   }
// }
// }

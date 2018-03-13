import { snakeCase, forEach } from 'lodash'
import { Validator } from 'vee-validate'
// import dictionary from './dictionary';

// vee-validate already inject build-in validators.
// http://vee-validate.logaretm.com/#available-rules
// defined custom validators
import legacyName from './rules/legacy-name'
import realName from './rules/real-name'
import realPhone from './rules/real-phone'

const dict = {
  name: 'zh_CN',
  messages: {}// will inject validator's i18n[dict.name] function or object.
}

function $using (validators) {
  forEach(validators, (validator, name) => {
    const ruleName = snakeCase(name)
    if (validator.i18n && validator.i18n[dict.name]) {
      dict.messages[ruleName] = validator.i18n[dict.name]
      delete validator.i18n[dict.name]
    }
    Validator.extend(ruleName, validator)
  });
}

$using({
  legacyName,
  realName,
  realPhone
})

Validator.localize({ [dict.name]: dict })

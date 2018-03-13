function isRealName (name) {
  return /^[\u4E00-\u9FA5A-Za-z]+$/.test(name)
}

export default isRealName

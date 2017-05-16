const oneToMany = (many, one, newKey, foreignKey) => {
  one.forEach(oneEl => {
    oneEl[newKey] = many.filter(manyEl => {
      return manyEl[foreignKey] === oneEl.id;
    })
  })
  return one;
}

const belongsTo = (many, one, newKey, foreignKey) => {
  many.forEach(manyEl => {
    manyEl[newKey] = one.filter(oneEl => {
      return oneEl.id === manyEl[foreignKey];
    })[0]
    delete manyEl[foreignKey];
  })
  return many;
}

module.exports = { oneToMany, belongsTo }

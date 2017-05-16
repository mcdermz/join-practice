const join = (
  resourceA, resourceAForeignKey,
  resourceB, resourceBForeignKey,
  joinTable, newKey
) => {
  resourceA.forEach(resA => {

    const joinRows = joinTable.filter(row => {
      return resA.id === row[resourceAForeignKey];
    })

    resA[newKey] = resourceB.filter(resB => {
      return joinRows.some(row => {
        return row[resourceBForeignKey] === resB.id
      })
    })
  })
  return resourceA;
}

module.exports = { join }

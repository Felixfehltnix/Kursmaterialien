
module.exports.info = function info(fdcId) {
  return Promise.resolve({
    description: "TEST!",
    fdcId: "" + fdcId,
    foodNutrients: []
  })
}

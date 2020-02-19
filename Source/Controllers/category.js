const categoryModel = require('../Models/category')
const miscHelper = require('../Helpers')
module.exports = {
    cateAll : async (request, response) => {
     try {
         const searchName = request.query.name || ''
         const result = await categoryModel.cateAll(searchName)
         miscHelper.response(response, 200, result)
     } catch (error) {
         miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
       }   
    },
    inputCategory : async (request, response) => {
        try {
            const data ={
                name : request.body.name
            } 
            const result = await categoryModel.inputCategory(data)
            miscHelper.response(response, 200, result)
        } catch (error) {
            miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
          }   
       },
    updateCategory : async (request, response) => {
        try {
            const data ={
                name : request.body.name
            }
            const categoryId = request.params.categoryId
            const result = await categoryModel.updateCategory(data, categoryId)
            miscHelper.response(response, 200, result)
        } catch (error) {
            miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
          }   
       }
       
}
const categoryModels = require(`../models/cart_models`)
const help = require(`../helpers/helpers`)

module.exports = {
    getCategory: (req, res) => {
        categoryModels.getCategory((err, result) => {
          if (err) console.log(err)
    
          // res.json(result)
          help.response(res, result, 200)
        })
    },
 
    insertCategory: (req, res) =>{
      const category = {
        id_product: req.body.id,
        }
      categoryModels.insertCategory(category, (err, result)=>{
        if(err) console.log(err)
        help.response(res,result,200)
      })
    },


    deleteCategory: (req, res) =>{
        const id_category = req.params.id_category
        categoryModels.deleteCategory(id_category,(err,result)=>{
            if (err) console.log(err)

            help.response(res, result, 200)
        })
    },
   
    
}
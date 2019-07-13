const shelfModels = require(`../models/shelf_models`)
const isEmpty = require(`lodash.isempty`)
const help = require(`../helpers/helpers`)

module.exports = {
    getShelf: (req, res) =>{
        shelfModels.getShelf((err, result) =>{
            if (err) console.log(err)

            if(isEmpty(result)){
              res.json({
                  status: 404,
                  message: "data not Found "
              });
            }else{
              help.response(res, result, 200)
            }
        })
    },
    insertShelf: (req, res) =>{
        const shelf = {
          shelf_name: req.body.shelf_name
          }
        shelfModels.insertShelf(shelf, (err, result)=>{
          if(err) console.log(err)
          help.response(res,result,200)
        })
      },
  
      updateShelf: (req, res) =>{
        const id_shelf = req.params.id_shelf
        const shelf = {
          shelf_name: req.body.shelf_name
          }
        shelfModels.updateShelf(shelf, id_shelf, (err, result)=>{
          if(err) console.log(err)
          help.response(res,result,200)
        })
      },
  
      deleteShelf: (req, res) =>{
          const id_shelf = req.params.id_shelf
          shelfModels.deleteShelf(id_shelf,(err,result)=>{
              if (err) console.log(err)
  
              help.response(res, result, 200)
          })
      }
}
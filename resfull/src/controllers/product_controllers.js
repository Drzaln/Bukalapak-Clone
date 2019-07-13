const bookModels = require(`../models/product_models`)
const help = require(`../helpers/helpers`)
const isEmpty = require(`lodash.isempty`)

module.exports = {
    getBook: (req, res) =>{
        bookModels.getBook((err, result) =>{
            if (err) console.log(err)
 
            help.response(res, result, 200)
        })
    }, 

    insertBook: (req, res) =>{
        const book = {
            title: req.body.description,
            description: req.body.description,
            img_url: req.body.img_url,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at
        }
        bookModels.insertBook(book, (err, result)=>{
            if (err) console.log(err)

            help.response(res, result, 200)
        })
    },

    updateBook: (req, res) =>{
        const id_book = req.params.id_book
        const book = {
          title: req.body.description,
          description: req.body.description,
          img_url: req.body.img_url,
          created_at: req.body.created_at,
          updated_at: req.body.updated_at
        }
        bookModels.updateBook(book, id_book, (err, result)=>{
            if (err) console.log(err)

            help.response(res, result, 200)
        })
        
    },

    deleteBook: (req, res) =>{
        const id_book = req.params.id_book
        bookModels.deleteBook(id_book,(err,result)=>{
            if (err) console.log(err)

           
            help.response(res, result, 200)
        })
    },

     
    getBookBy: (req, res ) =>{
      const id_product = req.params.id
      const q = req.query.q
      const kategori = req.query.kategori
      const rak = req.query.rak

      if (!isEmpty(id_product)) {
        var sql = `WHERE id_product=${id_product}`
      }else if (!isEmpty(q)){
        var sql = `WHERE category like '%${q}%' OR role like '%${q}%'`
      }else {
          var sql = ``
      }
        // console.log(sql)
      bookModels.getBookBy(sql, (err, result)=>{
          if (err) console.log(err)

          if(isEmpty(result)){
            res.json({
                status: 404,
                message: "data not Found "
            });
        }else {

          help.response(res, result, 200)
        }
      })

    }
}
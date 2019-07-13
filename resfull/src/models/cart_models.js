const condb = require(`../config/conn`)

module.exports = {
    getCategory: (callback) => {
        condb.query(`SELECT * FROM cart AS a LEFT JOIN product AS b ON a.id_product = b.id_product`, (err, result) => {
          if (err) console.log(err)
    
          callback(err, result)
        })
    },
    insertCategory: (category, callback) =>{
      condb.query('INSERT INTO cart SET ?', category, (err, result)=>{
        if (err) console.log(err)

        callback(result)
      })
    },
    deleteCategory : (id_category, callback) =>{
      console.log(id_category)
      condb.query('DELETE FROM cart WHERE id_cart = ?', id_category,(err, result)=>{
          if(err) console.log(err)

          callback(result)
      })
  }

}

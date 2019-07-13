const condb = require(`../config/conn`)

module.exports ={
    getShelf : (callback) => {
        condb.query(`SELECT * FROM tb_shelf` , (err, result)=>{
            if (err)  console.log(err)

            callback(err, result)
        })
    },
    insertShelf: (shelf, callback) =>{
        condb.query('INSERT INTO tb_shelf SET ?', shelf, (err, result)=>{
          if (err) console.log(err)
  
          callback(result)
        })
      },
      updateShelf: (shelf, id_shelf, callback) => {
        condb.query(`UPDATE tb_shelf SET ? WHERE id_shelf= ?`, [shelf, id_shelf], (err, result)=>{
          if (err) console.log(err)
  
          callback(result)
        })
      },
      deleteShelf : (id_shelf, callback) =>{
        console.log(id_shelf)
        condb.query('DELETE FROM tb_shelf WHERE id_shelf = ?', id_shelf,(err, result)=>{
            if(err) console.log(err)
  
            callback(result)
        })
    }
}
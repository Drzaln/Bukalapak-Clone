const condb = require(`../config/conn`)

module.exports = {
    getBook: (callback) => {
        let query = `SELECT  * FROM  tb_book AS a LEFT JOIN tb_category AS b ON a.id_category = b.id_category LEFT JOIN tb_shelf AS c ON a.id_shelf = c.id_shelf`
        condb.query(query, (err, result)=>{
            if (err) console.log(err)

            callback(err,result)
        })
    },  

    insertBook : (book ,callback) =>{
        condb.query(`INSERT INTO tb_book SET ?`, book,  (err, result)=>{
            if (err) console.log(err)

            callback(result)
        })

    },

    updateBook : (book, id_book, callback) =>{
        condb.query(`UPDATE tb_book SET ? WHERE id_book= ?`, [book, id_book], (err, result)=>{
            if (err) console.log(err)

            callback(result)
        })
    },

    deleteBook : (id_book, callback) =>{
        condb.query('DELETE FROM tb_book WHERE id_book = ?', id_book,(err, result)=>{
            if(err) console.log(err)

            callback(result)
        })
    },

    getBookBy : (sql, callback) => {
        
        condb.query('SELECT  * FROM  product '+ sql,(err,result)=>{
            if(err) console.log(err)

            callback(err,result)
            
        })
    }
}
module.exports = {

    response: (res, result, status, error) => {
      let resultPrint = {}
  
      resultPrint.error = error || null
      resultPrint.status_code = status || 200
      resultPrint.result = result

      
  
      return res.status(resultPrint.status_code).json(resultPrint)
    }
  }
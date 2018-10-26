const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O Atributo '{PATH}' e obrigatório"
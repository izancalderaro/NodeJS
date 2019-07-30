const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance', { useNewUrlParser: true })

mongoose.Error.messages.general.required = 'O Atributo {PATH} é obrigatório.';
mongoose.Error.messages.Number.min = '{VALUE} Limite mínimo permitido {MIN}.';
mongoose.Error.messages.Number.max = '{VALUE} Limite máximo permitido {MAX}.';
mongoose.Error.messages.String.enum = '{VALUE} inválido para o atributo {PATH}';
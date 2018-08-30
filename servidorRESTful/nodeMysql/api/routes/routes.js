module.exports = (app) => {

    app.get('/', (req, res, next) => {
        knex('rest').then('dados')
        res.send(dados);
    });

}


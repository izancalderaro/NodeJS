const express = require('express');


module.exports = function (server) {

    //API Routes
    const router = express.Router();
    server.use('/api', router);

    router.route('/teste').get((req, res, next) => {
        res.send('funcionou');
    });

    //Rotas da API
    // const BillingCycle = require('../api/billingCycle/billingCycleService');t
    // BillingCycle.register(router, '/billingCycles')

    // router.route('/billingCycles').post((req, res, next) => {
    //     res.send('POST funcionando');
    // });
    
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

};

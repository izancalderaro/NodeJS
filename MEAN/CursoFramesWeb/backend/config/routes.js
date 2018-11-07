const express = require('express')


module.exports = (server) => {
    
    //API Routes
    const router = express.Router();
    server.use('/api', router);
    
    //Rotas da API
    router.route('/teste').get((req, res, next) => {
        res.send('funcionou');
    });
    
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
    
    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)

};

const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

sendErrorsOrNext = (req, res, next) => {
    
    const bundle = res.locals.bundle
    
    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }    
}

parseErrors = (nodeRestfulErrors) =>{
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors
}

BillingCycle.after('post', sendErrorsOrNext).after('put',  sendErrorsOrNext)


BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments((error, value) => {
        (error) ? res.status(500).json({ errors: [error] }) : res.json({ value })
    })
});

module.exports = BillingCycle

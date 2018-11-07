const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments((error, value) => {
        (error) ? res.status(500).json({ errors: [error] }) :  res.json({ value });
    })
});

module.exports = BillingCycle

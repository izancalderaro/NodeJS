const express = require('express');
const app = express();
const router = express.Router();

app.get('/:id', (req, res) => {
    
    const {id} = req.params;

    res.json({id:id, nome:'Fulano'});
    
});

app.listen(3000, () => {
    console.log('Server started on 3000');
});
const express = require('express');

const router = express.Router();

const queries = require('../db/queries');


router.get('/sandcastles', (req,res,next) => {
	queries.getAllSandcastles().then(sandcastles => {
		res.json({
			sandcastles
		});
	});
});


router.post('/sandcastles', (req,res,next) => {
	queries.addNewSandcastle(req.body).then(response => {
		res.json({
			response
		});
	});
});
router.delete('/sandcastles/:id', (req,res,next) => {
	queries.deleteSandcastle(req.params.id).then(response => {
		res.json({
			response
		})
	})
})


module.exports = router;

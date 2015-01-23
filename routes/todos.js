var express = require('express');
var router = express.Router();

// Data
var todoItems =[
		{ id: 1, name: 'foo'},
		{ id: 2, name: 'bar'},
		{ id: 3, name: 'baz'}
		];
// Index
router.get('/', function (req, res) {
	res.render('index', {
		title: 'My router',
		items: todoItems
	});
});

// Add
router.post('/add', function (req, res) {
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		name: newItem
	});
	res.redirect('/');
});

module.exports = router;

module.exports = {
	index: function(req, res) {
		//res.send('image.index controller ' + 
		//	req.params.image_id);
		res.render('image');
	}, 
	create: function(req, res) {
		res.send('image:create POST controller'); 
	},
	like: function(req, res) {
		res.send('image:like POST controller'); 
	},
	comment: function(req, res) {
		res.send('image:comment POST controller'); 
	}
};

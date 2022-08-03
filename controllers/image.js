var fs = require('fs'),
	path = require('path');


module.exports = {
	index: function(req, res) {
		//res.send('image.index controller ' + 
		//	req.params.image_id);
		res.render('image');
	}, 
	create: function(req, res) {
		var saveImage = function() {
			var possible = 'abcdefghijklmnopqrstruvwxyz0123456789',
				imgUrl = '';

			for (var i=0; i<6; i++) {
				imgUrl += possible.charAt(Math.floor(Math.random()*possible.length));	
			}

			console.log(req);
			console.log(req.file);
			console.log(req.files);

			var tempPath = req.files.file.path, 
				ext = path.extname(req.file.originalname).toLowerCase(),
				targetPath = path.resolve('./public/upload/' + imgUrl + ext);
			if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
				fs.rename(tempPath, targetPath, function(err) {
					if (err) throw err;
					res.redirect('/images/' + imgUrl);
				});
			} else {
				fs.unlink(tempPath, function(err) {
					if (err) throw(err);
					res.json(500, {error: 'Only image files are allowed'});
				});
			}
		};
		saveImage();
	},
	like: function(req, res) {
		res.send('image:like POST controller'); 
	},
	comment: function(req, res) {
		res.send('image:comment POST controller'); 
	}
};

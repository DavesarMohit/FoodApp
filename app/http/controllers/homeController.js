const Menu = require("../../models/menu");

function homeController() {
	return{
		index(req, res) {
            Menu.find().then(function(items){
			    return res.render("home", { items: items})
		    })
		}
	}
}


module.exports = homeController 
var orm = require("../config/orm.js");

var burger = {
    getAllBurgers: function(data){
        orm.selectAll("burgers", function(res){
            data(res)
        })
    },

    addBurger: function(){
        orm.insertOne("burgers")
    },

    updateBurger: function(){
        orm.updateOne("devoured")
    },
};
module.exports = burger
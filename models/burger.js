var orm = require("../config/orm.js");

var burger = {
    getAllBurgers: function(){
        orm.selectAll("burgers")
    },

    addBurger: function(){
        orm.insertOne("burgers")
    },

    updateBurger: function(){
        orm.updateOne("devoured")
    },
};
module.exports = burger
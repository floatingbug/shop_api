const express = require("express");
const api = express();
const {getArticles} require("./routes/getArticles");

function createApi({store}){
	api.get("/get-articles", getArticles({store});

	return api;
}


module.exports = {createApi};

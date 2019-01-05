'use strict';
module.exports = (sequelize, DataTypes) => {
	const Page = sequelize.define('Page', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
	}, {});
	Page.associate = function(models) {
		Page.hasMany(models.Section);
	};
	return Page;
};

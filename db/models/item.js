'use strict';
module.exports = (sequelize, DataTypes) => {
	const Item = sequelize.define('Item', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false
		},
		img: DataTypes.STRING
	});
	Item.associate = function(models) {
		Item.belongsTo(models.Category, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Item;
};

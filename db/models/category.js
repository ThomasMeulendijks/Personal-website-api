'use strict';
module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define('Category', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
	});
	Category.associate = function(models) {
		Category.hasMany(models.Item, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		});
		Category.belongsTo(models.Page, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Category;
};

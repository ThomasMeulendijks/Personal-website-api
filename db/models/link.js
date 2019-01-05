'use strict';
module.exports = (sequelize, DataTypes) => {
	const Link = sequelize.define('Link', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		url: DataTypes.STRING,
		img: DataTypes.STRING
	}, {});
	Link.associate = function(models) {
		Link.belongsTo(models.Section, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Link;
};

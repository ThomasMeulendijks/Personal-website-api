'use strict';
module.exports = (sequelize, DataTypes) => {
	const Section = sequelize.define('Section', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
	}, {});
	Section.associate = function(models) {
		Section.hasMany(models.Link);
		Section.belongsTo(models.Page, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Section;
};

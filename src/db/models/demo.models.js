'use strict'

/**
 * @function
 * @param {import("sequelize").Sequelize} sequelize
 */
export default (sequelize, DataTypes) => {
  const Demo = sequelize.define('Demo', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    name: {
      singular: 'demo',
      plural: 'demos'
    },
    sequelize,
    underscored: true,
    tableName: 'demos',
    schema: 'public',
    timestamps: true,
    indexes: [{
      name: 'demos_pkey',
      unique: true,
      fields: [{
        name: 'id'
      }]
    }
    ]
  })

  Demo.associate = models => {
  }

  return Demo
}

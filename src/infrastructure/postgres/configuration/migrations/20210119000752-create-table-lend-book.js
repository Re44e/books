"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("lend_books", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      book_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      from_user: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      to_user: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      lent_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      returned_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("lend_books");
  },
};

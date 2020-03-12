export default {
    up: (queryInterface, Sequelize) => queryInterface.createTable("users", {
        id: {
            type:          Sequelize.BIGINT,
            allowNull:     false,
            autoIncrement: true,
            primaryKey:    true,
        },
        first_name: {
            type:      Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type:      Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type:      Sequelize.STRING,
            unique:    true,
            allowNull: false,
        },
        password: {
            type:      Sequelize.STRING,
            allowNull: false,
        },
        created_at: {
            allowNull:    false,
            type:         Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            allowNull:    false,
            type:         Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        deleted_at: {
            allowNull:    true,
            type:         Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    }),

    down: queryInterface => queryInterface.dropTable("users"),
};

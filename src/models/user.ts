import { DataTypes, Model } from "sequelize";
import seq from "./index";

export default class User extends Model {
    id!: number;

    firstName!: string;

    lastName!: string;

    email!: string;

    password!: string;

    readonly createdAt!: Date;

    readonly updatedAt!: Date;

    readonly deletedAt!: Date;
}

User.init({
    email: {
        allowNull: false,
        type:      DataTypes.STRING,
        unique:    true,
    },
    // eslint-disable-next-line camelcase
    first_name: {
        allowNull: false,
        type:      DataTypes.STRING,
    },
    id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type:          DataTypes.BIGINT,
    },
    // eslint-disable-next-line camelcase
    last_name: {
        allowNull: false,
        type:      DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type:      DataTypes.STRING,
    },
}, {
    paranoid:    true,
    sequelize:   seq,
    tableName:   "users",
    timestamps:  true,
    underscored: true,
});

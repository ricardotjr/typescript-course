import * as bcrypt from 'bcrypt';

export default function (sequelize: any, DataTypes: any) {
    const User = sequelize.define('tb_usuario', {
        id: {
            field: 'id_usuario',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            field: 'usuario',
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            field: 'senha',
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            field: 'email',
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    User.beforeCreate((user: any) => {
        return hashPassword(user);
    });

    User.beforeUpdate((user: any) => {
        return hashPassword(user);
    });

    function hashPassword(user: any) {
        const salt = bcrypt.genSaltSync(10);
        user.set('password', bcrypt.hashSync(user.password, salt));
    }

    return User;
}
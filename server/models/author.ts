export default function (sequelize: any, DataTypes: any) {
    const Author = sequelize.define('tb_autor', {
        id: {
            field: 'id_autor',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'nome',
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                noEmpty: true
            }
        }
    });

    return Author;
}
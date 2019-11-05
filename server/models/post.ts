export default function (sequelize: any, DataTypes: any) {
    const Post = sequelize.define('tb_postagem', {
        id: {
            field: 'id_autor',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            field: 'titulo',
            type: DataTypes.STRING
        },
        text: {
            field: 'texto',
            type: DataTypes.STRING
        },
        authorId: {
            field: 'id_autor',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Post;
}
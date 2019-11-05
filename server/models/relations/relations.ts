const Relations= (model: any) => {
    model.Author.hasMany(model.Post, {foreingKey: 'id_autor'});
    model.Post.belongsTo(model.Author, {foreingKey: 'id_autor'});
}

module.exports = Relations;
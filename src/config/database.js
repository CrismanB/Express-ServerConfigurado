module.exports = {
    dialect: "postgres",
    username: "docker",
    password: "docker",
    database: "Pipeline",
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};

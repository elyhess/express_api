const db = require("../models");
const User = db.rest.models.user;

exports.getUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({
        where: {
            id
        },
    });

    if (!user) {
        return res.status(400).send({
            message: `User with id ${id} not found.`
        });
    }

    return res.send(user);
};

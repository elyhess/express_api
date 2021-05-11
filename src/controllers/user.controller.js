const db = require("../models");
const User = db.rest.models.user;

exports.getUsers = async (req, res) => {
    const users = await User.findAll();

    if(!users) {
        return res.status(400).send({
            message: "No users found."
        });
    }

    return res.send(users)
}

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

exports.createUser = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).send({
            message: "You need to include a username and pasword to create a user",
        });
    }

    let usernameExists = await User.findOne({
        where: {
            username
        }
    });

    if(usernameExists) {
        return res.status(400).send({
            message: `A user with the username ${username} already exists!`,
        });
    }

    try {
        let newUser = await User.create({
            username,
            password,
        });
        return res.send(newUser)
    } catch(err) {
        return res.status(500).send({
            message: `Error ${err.message}`
        })
    }
};

exports.updateUser = async (req, res) => {
    const { username, password } = req.body;
    const { id } = req.params;

    const user = await User.findOne({
        where: {
            id
        }
    })

    if(!user) {
        return res.status(400).send({
            message: `No user exists with the id ${id}.`,
        });
    }

    try {
        if(username) {
            user.username = username
        }
        if(password) {
            user.password = password
        }
        user.save();
        return res.send({
            message: `User ${id} has been updated.`
        });
    } catch(err) {
        return res.status(500).send({
            message: `Error ${err.message}`
        })
    }
};

exports.deleteUser = async (req, res) => {
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

    try {
        await user.destroy();
        return res.send({
            message: "User has been deleted"
        });
    } catch(err) {
        return res.status(500).send({
            message: `Error ${err.message}`
        });
    }
};

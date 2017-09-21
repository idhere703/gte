const UserModel = {};

const users = [];

UserModel.getUsers = () => {
    return users;
};

UserModel.getUser = (userId) => {
    return users.find(user => user.userId.toString() === userId.toString());
};

UserModel.addUser = (user) => {
    users.push(user);
};

export default UserModel;


const users = [
  {
    id: 1,
    firstname: "pakaphon",
    lastname: "pankong",
    birthDate: "1998-04-09",
  },
];

const getUser = () => {
  return users;
};

const addUser = (data) => {
  const userEntry = users.push({
    id: users.length + 1,
    firstname: data.firstname,
    lastname: data.lastname,
    birthDate: data.birthDate,
  });
  return users;
};

const getOne = (id) => {
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  return users[userIndex];
};

module.exports = {
  getUser,
  addUser,
  getOne,
};

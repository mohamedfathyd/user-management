const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,4}$/,
  password: /^.{6,35}$/,
  username: /^[_a-zA-Z0-9]+$/,
  user: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,4}|[_a-zA-Z0-9]+)$/,
};

export default regex;

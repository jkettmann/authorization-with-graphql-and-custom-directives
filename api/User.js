const users = [
  {
    id: '1',
    token: 'token-for-maurice-moss',
    firstName: 'Maurice',
    lastName: 'Moss',
    email: 'maurice@moss.com',
    password: 'abcdefg',
    role: 'USER',
  },
  {
    id: '2',
    token: 'token-for-roy-trenneman',
    firstName: 'Roy',
    lastName: 'Trenneman',
    email: 'roy@trenneman.com',
    password: 'imroy',
    role: 'ADMIN',
  }
];

export default {
  getUsers: () => users,
};
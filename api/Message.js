const messages = [
  {
    id: '1',
    receiverId: '1',
    text: 'Hey Maurice, how are you doing?',
  },
  {
    id: '2',
    receiverId: '2',
    text: 'Hi Roy, I\'m doing great! How are you?',
  },
];

export default {
  getById: (id) => messages.find((message) => message.id === id),
};
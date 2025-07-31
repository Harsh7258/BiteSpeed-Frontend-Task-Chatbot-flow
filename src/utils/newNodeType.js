export const supportTypes = ['message', 'input', 'choice', 'delay', 'api'];

export const nodeGenerators = {
  message: () => ({
    type: 'message',
    data: { label: 'Text message' }
  }),
  input: () => ({
    type: 'input',
    data: { label: 'input', placeholder: 'Enter name' }
  }),
  choice: () => ({
    type: 'choice',
    data: { label: 'Choose an option', options: ['Yes', 'No'] }
  }),
  delay: () => ({
    type: 'delay',
    data: { label: 'Wait', duration: 3000 }
  }),
  api: () => ({
    type: 'api',
    data: { label: 'Call external API', endpoint: 'https://jsonplaceholder.typicode.com/users' }
  }),
  // more type....
};

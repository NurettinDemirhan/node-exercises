const crypto = require('crypto');

function generateRandomId(length) {
  const bytes = crypto.randomBytes(length).toString('hex');
  return bytes;
}

const randomId = generateRandomId(16);
console.log(randomId);
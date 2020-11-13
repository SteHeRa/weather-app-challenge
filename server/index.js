const express = require('express');
const app = express();

const cors = require('cors');

const router = require('./routes');

const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Listening 👂 at http://localhost${PORT}`);
});

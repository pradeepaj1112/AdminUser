const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fs = require('fs');
const cryptoJS = require('crypto-js');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));

function decryptData(pass: any) {
  try {
    const bytes = cryptoJS.AES.decrypt(pass, "Secret engine");
    if (bytes.toString()) {
      return bytes.toString(cryptoJS.enc.Utf8);
    }
    return pass;
  } catch (e) {
    console.log(e);
  }
}
app.post('/login', (req: any, res: any) => {
  const { username, password } = req.body;
  console.log(password)
  const decryptedPass = decryptData(password)
  console.log(decryptedPass)
  const rawdata = fs.readFileSync('api/database/db.json');
  const data: any = JSON.parse(rawdata);
  const userDetails = data.auth.filter((ud: any) => ud.username == username)
  if (userDetails.length > 0) {
    if (userDetails[0].username == username && userDetails[0].password == decryptedPass) {
      const jwtData = jwt.sign({}, 'your-secret-key', {
        expiresIn: '60s',
        subject: username
    })
      res.status(200).json({ message: 'User Authenticated successfully', data: jwtData })
    } else {
      res.status(401).json({ message: 'Invalid credentials', data: null });
    }
  } else {
    res.status(404).json({ message: 'User Not Found', data: null });
  }
});

app.post('/register', (req: any, res: any) => {
  const { name,username, password,position } = req.body;
  const rawdata = fs.readFileSync('api/database/db.json');
  const data: any = JSON.parse(rawdata);
  data.auth.push({
    name,
    username,
    password,
    position,
  })
  fs.writeFile('api/database/db.json', JSON.stringify(data), (err: any) => {

  
    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    }
    res.status(200).json({ message: 'Registered successfully' })
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


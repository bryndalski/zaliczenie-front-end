import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { Database } from './handlers/database.js';
import { User } from './models/user.model.js';

dotenv.config();

const usersDb = new Database();
const refreshTokensDb = new Database();


for (let i = 0; i < 10; i++) {
  usersDb.add(User.createBlank());
}


const app = express();
const PORT = process.env.PORT || 3000;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'youraccesstokensecret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'yourrefreshtokensecret';


app.use(express.json());

const generateAccessToken = (user) => {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = usersDb.db.find(user => user.email === email && user.password === password);
  if (user) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokensDb.add({ token: refreshToken, id: user.id });

    res.json({ accessToken, refreshToken });
  } else {
    res.sendStatus(401);
  }
});

app.post('/refresh-token', (req, res) => {
  console.group('refresh-token');
  const { token } = req.body;

  console.log('token:', token);

  if (!token) return res.sendStatus(401);

  const storedToken = refreshTokensDb.findOne(token);

  console.log('storedToken:', storedToken);
  if (!storedToken) return res.sendStatus(403);

  jwt.verify(token, REFRESH_TOKEN_SECRET, (err, decoded) => {

    console.log('decoded:', decoded);


    if (err) return res.sendStatus(403);

    const user = usersDb.findOne(decoded.id);
    if (!user) return res.sendStatus(404);

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  });

  console.group('refresh-token');

});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

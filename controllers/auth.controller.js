import njwt from 'njwt';
import repository from '../repositories/repository';
const bcrypt = require('bcrypt');

const {
    APP_SECRET = 'adm123' 
} = process.env;

const encodeToken = (tokenData) => {
    return njwt.create(tokenData, APP_SECRET).compact();
}

const decodeToken = (token) => {
    return njwt
    .verify(token, APP_SECRET)
    .setExpiration(new Date().getTime() + 3600000)
    .body; // 1 hour
}

export const authMiddleware = async (req, res, next) => {
    const token = req.header('Access-Token');
    if (!token) {
        return next();
    }

    try {
        const decoded = decodeToken(token);
        const { userId } = decoded;
        const user = await repository.getUserById(userId);
        
        if (user) {
            req.userId = userId;
        }
    } catch (e) {
        return next();
    }

    next();
}

export const authenticated = (req, res, next) => {
    if (req.userId) {
        return next();
    }

    return res.status(401).json({ error: 'User not authenticated' });
}

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await repository.getUserByUsername(username);

    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            const accessToken = encodeToken({ userId: user.id });
            return res.json({ accessToken });
        } else {
            return res.status(401).json({ error: 'Invalid password' });
        }
    });
}
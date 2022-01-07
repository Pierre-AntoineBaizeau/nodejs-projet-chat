const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

class AuthService {
    static async register(data) {
          const { name, password  } = data;
          const passwordHashed = bcrypt.hashSync(password, 8);
          let user = await prisma.user.create({
              data: {
                name: name,
                password: passwordHashed,
              },
          })
          data.accessToken = await jwt.signAccessToken(user);
          return data;
    }

    static async login(data) {
        const { name, password } = data;
        const user = await prisma.user.findUnique({
            where: {
                name
            }
        });
        if (!user) {
            throw createError.NotFound('User not registered')
        }
        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) throw createError.Unauthorized('name address or password not valid')
        delete user.password
        const accessToken = await jwt.signAccessToken(user)
        return {accessToken}
    }
    static async all() {
        const allUsers = await prisma.user.findMany();
        return allUsers;
    }
}
  
  module.exports = AuthService;



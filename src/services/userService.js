const UserRepository = require('../repositories/userRepository');


class UserService {
    async registerUser(userData) {
        const { documentNumber, username } = userData;

        // Verificar si ya existe un usuario con la misma cédula
        const existingUserByDocument = await UserRepository.findByDocumentNumber(documentNumber);
        if (existingUserByDocument) {
            throw new Error('La cédula  ' +documentNumber + ' ya está registrada.');
        }

        // Verificar si ya existe un usuario con el mismo username
        const existingUserByUsername = await UserRepository.findByUsername(username);
        if (existingUserByUsername) {
            throw new Error('El nombre de usuario ya está en uso.');
        }

        // Si todo es válido, proceder a registrar el usuario
        return UserRepository.createUser(userData);
    }

    async loginUser(userData) {
        const { password, username } = userData;
        //console.log(password)
        //console.log(username)
        // Verificar si ya existe un usuario con el mismo username
        const existingUserByUsername = await UserRepository.findByUsername(username);
        console.log(existingUserByUsername)
        if (existingUserByUsername==null || existingUserByUsername.password!==password) {
            throw new Error('error en usuario usuario o contraseña.');
        }
    }
}

module.exports = new UserService();

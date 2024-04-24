import { defineStore } from "pinia";
import { User } from "../../domain/User";
import { UserRepository } from "../../infraestructure/repository/UserRepository";
import { UserDataSource } from "../../infraestructure/datasource/UserDatasource";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  actions: {
    fetchUsers() {
      const userRepository = new UserRepository(new UserDataSource());
      this.users = userRepository.getUsers();
    },

    addUser(email, nombre, apellido, celular, password) {
      console.log("agregando desde el store")
      const newUser = new User(
        Math.floor(Math.random() * 1000),
        email,
        nombre,
        apellido,
        celular,
        password
      );
      newUser.validate();
      const userRepository = new UserRepository(new UserDataSource());
      userRepository.addUser(newUser);
      this.fetchUsers();
    },

    updateUser(id, email, nombre, apellido, celular, password) {
      const updatedUser = new User(
        id,
        email,
        nombre,
        apellido,
        celular,
        password
      );
      updatedUser.validate();
      const userRepository = new UserRepository(new UserDataSource());
      userRepository.updateUser(updatedUser);
      this.fetchUsers();
    },

    deleteUser(id) {
      const userRepository = new UserRepository(new UserDataSource());
      userRepository.deleteUser(id);
      this.fetchUsers();
    },
  },
});

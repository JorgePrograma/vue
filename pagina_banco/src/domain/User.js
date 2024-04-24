export class User {
  constructor(id, email, nombre, apellido, celular, password) {
    this.id = id;
    this.email = email;
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.password = password;
  }

  validate() {
    if (!this.email || !this.nombre || !this.password) {
      throw new Error("Email, nombre y password son obligatorios.");
    }
    // Puedes agregar otras validaciones aquí
  }
}

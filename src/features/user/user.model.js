import { getDB } from "../../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export class UserModel {
  constructor(name, email, password, type) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }

  static getAll() {
    return users;
  }
}

let users = [
  {
    id: 1,
    name: "Seller User",
    email: "seller@ecom.com",
    password: "password1",
    type: "seller",
  },
  {
    id: 2,
    name: "Customer1 User",
    email: "customer1@ecom.com",
    password: "customer1",
    type: "customer",
  },
  {
    id: 3,
    name: "Customer2 User",
    email: "customer2@ecom.com",
    password: "customer2",
    type: "customer",
  },
];

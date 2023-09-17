import { EmailValidator } from '@angular/forms';

export interface IUserRegister {
  id?: number;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  phone?: number;
  adress?: String;
}

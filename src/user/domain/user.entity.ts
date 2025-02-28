import { BaseEntity } from 'src/common/domain/base.entity';
import { IUserProps } from './interfaces/domain/user.interface';

export class User extends BaseEntity implements IUserProps {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(props: IUserProps) {
    super();
    this._name = props.name;
    this._email = props.email;
    this._password = props.password;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

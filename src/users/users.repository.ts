import { Repository } from 'typeorm';
import { User } from './user.entity';

@Entity(User)
export class UserRepository extends Repository<User> {}

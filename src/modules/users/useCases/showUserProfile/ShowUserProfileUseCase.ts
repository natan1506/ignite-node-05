import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// interface IRequest {
//   user_id: string;
// }

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("Sorry, user not exists.");
    }

    return userExists;
  }
}

export { ShowUserProfileUseCase };

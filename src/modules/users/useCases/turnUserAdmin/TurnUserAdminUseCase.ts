import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// interface IRequest {
//   user_id: string;
// }

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error(
        "Sorry, Is is not possible to update a user that does not exist!"
      );
    }

    return this.usersRepository.turnAdmin(userExists);
  }
}

export { TurnUserAdminUseCase };

import { usersMock } from './../../../assets/usersMock.mock';
import { InMemoryDbService } from 'angular-in-memory-web-api'

export class inMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = usersMock;
    return { users };
  }
}

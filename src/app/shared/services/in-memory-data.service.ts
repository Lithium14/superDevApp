import { discountMock } from './../../../assets/discountMock.mock';
import { productsMock } from './../../../assets/productsMock.mock';
import { commandeMock } from './../../../assets/commandeMock.mock';
import { usersMock } from './../../../assets/usersMock.mock';
import { InMemoryDbService } from 'angular-in-memory-web-api'


export class inMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = usersMock;
    let discounts = discountMock;
    let commandes = commandeMock;
    let products = productsMock
    return { users,discounts,commandes,products };
  }

}

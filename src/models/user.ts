import { types } from 'mobx-state-tree';
import { ApiService } from '../service/api-service';

let service: ApiService = new ApiService;

export const User = types.model({
    id: types.identifierNumber,
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    password: types.string,
    role_: types.number
})
.actions(self => ({
    setFirstName(newFirstName) {
        self.firstName = newFirstName;
        console.log(self.firstName);
    },
    setLastName(newLastName) {
        self.lastName = newLastName;
        console.log(self.lastName);
    },
    setEmail(newEmail) {
        self.email = newEmail;
        console.log(self.email);
    },
    setPassword(newPassword) {
        self.password = newPassword;
        console.log(self.password);
    },
    setRole_(newRole_) {
        self.role_ = newRole_;
        console.log(self.role_);
    }
}))
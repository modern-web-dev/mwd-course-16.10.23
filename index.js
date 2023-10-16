// Model, View, View Model

// Model
class User {
    id;

    constructor(firstName, lastName) {
        this.id = User.idSeq++;
        this.firstName = firstName
        this.lastName = lastName
    }
}

User.idSeq = 0;

class UserService {
    findById(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(new User('John', 'Smith'));
                // reject('Oh no...');
            }, 2000);
        })
    }
}

// View Model
class UserComponent {
    constructor(userService) {
        this.userService = userService;
        document.querySelector('button')
            .addEventListener('click', event => this.save());
    }

    get firstName() {
        return document.getElementById('firstName').value;
    }

    set firstName(newValue) {
        document.getElementById('firstName').value = newValue;
    }

    get lastName() {
        return document.getElementById('firstName').value;
    }

    set lastName(newValue) {
        document.getElementById('lastName').value = newValue;
    }

    loadUser(userId) {
        this.userService.findById(userId).then(user => {
            this.firstName = user.firstName;
            this.lastName = user.lastName;
        }, error => console.error('Uops...', error));
    }

    save() {
        const updatedUser = new User(this.firstName, this.lastName);
        // this.userService.save(updatedUser);
        console.log('Saving: ', updatedUser);
    }
}

const userComponent = new UserComponent(new UserService());
userComponent.loadUser(1234);


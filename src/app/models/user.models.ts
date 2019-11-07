export class User {
    constructor(
        public picture: string,
        public name: string,
        public fathersLastName: string,
        public mothersLastName: string,
        public email: string,
        public roleId: string,
        public active: boolean
    ){}
}
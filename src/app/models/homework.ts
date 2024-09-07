export class Homework {
    constructor(
        public id: number,
        public className: string,
        public handInDate: Date,
        public finished: boolean,
        public description: string
    ) { }
}
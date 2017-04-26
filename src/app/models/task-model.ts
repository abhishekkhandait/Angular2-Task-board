export class TaskModel {
    constructor(
        public id: number,
        public name: string,
        public list: string,
        public dueDate: Date,
        public priority: number,
        public boardId: number
    ){}
}

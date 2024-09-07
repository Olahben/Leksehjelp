import { Homework } from "../homework";

export interface IHomeworkService {
    CreateHomework(className: string, handInDate: Date, description: string): void;
    GetAll(): Homework[];
    Get(id: number): Homework;
    GetUnfinished(): Homework[];
    GetFinished(): Homework[];
    MarkAsFinished(id: number): void;
    UpdateHomework(Homework: Homework): void;
}
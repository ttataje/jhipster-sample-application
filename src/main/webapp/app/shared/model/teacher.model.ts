import { ICourse } from 'app/shared/model//course.model';

export interface ITeacher {
    id?: number;
    teacherId?: number;
    teacherName?: string;
    teacherSurname?: string;
    courses?: ICourse[];
}

export class Teacher implements ITeacher {
    constructor(
        public id?: number,
        public teacherId?: number,
        public teacherName?: string,
        public teacherSurname?: string,
        public courses?: ICourse[]
    ) {}
}

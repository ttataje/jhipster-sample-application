import { ITeacher } from 'app/shared/model//teacher.model';

export const enum CourseLevel {
    BASICO = 'BASICO',
    AVANZADO = 'AVANZADO',
    PRO = 'PRO'
}

export interface ICourse {
    id?: number;
    courseId?: number;
    courseName?: string;
    courseLevel?: CourseLevel;
    teacher?: ITeacher;
}

export class Course implements ICourse {
    constructor(
        public id?: number,
        public courseId?: number,
        public courseName?: string,
        public courseLevel?: CourseLevel,
        public teacher?: ITeacher
    ) {}
}

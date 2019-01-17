import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITeacher } from 'app/shared/model/teacher.model';
import { TeacherService } from './teacher.service';

@Component({
    selector: 'jhi-teacher-update',
    templateUrl: './teacher-update.component.html'
})
export class TeacherUpdateComponent implements OnInit {
    teacher: ITeacher;
    isSaving: boolean;

    constructor(protected teacherService: TeacherService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ teacher }) => {
            this.teacher = teacher;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.teacher.id !== undefined) {
            this.subscribeToSaveResponse(this.teacherService.update(this.teacher));
        } else {
            this.subscribeToSaveResponse(this.teacherService.create(this.teacher));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ITeacher>>) {
        result.subscribe((res: HttpResponse<ITeacher>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}

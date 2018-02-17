import {Component, OnInit} from '@angular/core';

import {AppEvent} from '../shared/app-event.model';
import {AppEventService} from '../shared/app-event.service';

@Component({
    selector: 'app-event-editor',
    templateUrl: './app-event-editor.component.html',
    styleUrls: ['./app-event-editor.component.css']
})
export class AppEventEditorComponent implements OnInit {

    availableMaturities: string[];
    availableSpecializations: string[];

    event: AppEvent;

    constructor(private eventService: AppEventService) {

    }

    ngOnInit(): void {
        this.availableMaturities = ['JUNIOR', 'INTERMEDIATE', 'SENIOR', 'EXPERT'];
        this.availableSpecializations = ['ALGORITHMS', 'COMMON', 'JAVA', 'JAVASCRIPT', 'OOD', 'SQL'];
        this.eventService.retrieve('e-1').subscribe(e => this.event = e);
    }

    onSave($event: Event): void {
        $event.preventDefault();
        if (this.event.id) {
            this.eventService.update(this.event).subscribe(updatedEvent => {
                alert('updated!');
                this.event = updatedEvent;
            });
        } else {
            this.eventService.create(this.event).subscribe(createdEvent => {
                alert('created!');
                this.event = createdEvent;
            });
        }
    }
}

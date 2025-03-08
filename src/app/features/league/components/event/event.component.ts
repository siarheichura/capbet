import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NbActionsModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { EventModel } from '../../../../data-access/__league/models/state/event.model';
import { EventStatusEnum } from '../../../../data-access/enums/event-status.enum';

@Component({
  selector: 'cap-event',
  imports: [DatePipe, NbActionsModule, NbCardModule, NbInputModule, NgOptimizedImage],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {
  readonly EventStatusEnum = EventStatusEnum;

  event = input.required<EventModel>();

  isBetPanelOpened = signal(false);

  handleVideoActionClick(link: string) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  handleBetActionClick() {
    this.isBetPanelOpened.set(!this.isBetPanelOpened());
  }
}

import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NbActionsModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { EventStatusEnum } from '~features/league/data-access/enums/event-status';
import { EventModel } from '~features/league/data-access/models/event';

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

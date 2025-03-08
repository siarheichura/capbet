import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NbCardModule } from '@nebular/theme';
import { RoutesEnum } from '../../app.routes';
import { LEAGUES } from '../../data-access/utils/constants';

@Component({
  selector: 'cap-leagues',
  imports: [NbCardModule, NgOptimizedImage, RouterLink],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesComponent {
  readonly LEAGUES = LEAGUES;
  protected readonly RoutesEnum = RoutesEnum;
}

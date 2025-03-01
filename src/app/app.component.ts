import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbActionsModule, NbCardModule, NbLayoutModule, NbUserModule } from '@nebular/theme';
import { LEAGUES } from './data-access/utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NbLayoutModule, NbUserModule, NbCardModule, NbActionsModule],
})
export class AppComponent {
  readonly LEAGUES = LEAGUES;
}

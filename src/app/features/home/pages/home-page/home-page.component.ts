import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeSliderComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}

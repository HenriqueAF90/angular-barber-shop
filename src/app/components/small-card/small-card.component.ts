import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  services: string = '';
  @Input()
  service_description: string = '';
  @Input()
  photho_service: string = '';
}

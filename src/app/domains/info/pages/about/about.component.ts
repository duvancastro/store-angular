import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WaveAudioComponent } from "@info/components/wave-audio/wave-audio.component";
import { CounterComponent } from "@shared/components/counter/counter.component";
import { ShoppingCardComponent } from "@shared/components/shopping-card/shopping-card.component";
import { HighlightDirective } from "@shared/directives/highlight.directive";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,CounterComponent,ReactiveFormsModule,WaveAudioComponent,ShoppingCardComponent,HighlightDirective],
  templateUrl: './about.component.html',
  styleUrls:[ './about.component.css']
})
export class AboutComponent {
  duration = signal<number>(1000);
  message = signal('Hola');

  changeDuration(event: Event) {

    const input = event.target as HTMLInputElement;
    console.log('input :>> ', input);

    this.duration.set(input.valueAsNumber) 
    console.log('duration :>> ', this.duration());
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('input :>> ', input);
    this.message.set(input.value) 
  }
}

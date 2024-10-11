import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { CounterComponent } from "../../../shared/components/counter/counter.component";
import { ReactiveFormsModule } from "@angular/forms";
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,CounterComponent,ReactiveFormsModule,WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrls:[ './about.component.css']
})
export class AboutComponent {
  duration = signal(1000);
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

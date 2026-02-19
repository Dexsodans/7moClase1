import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  /* imports: [], */
  templateUrl: './editor-filtro.component.html',
  styleUrl: './editor-filtro.component.css'
})
export class EditorFiltroComponent {

  brillo = signal(100);
  contraste = signal(100);
  blur = signal(0);

  filtro = computed(()=>{
    //se supone que escucha todo para hacer lo necesario para actualizarse
    //el chanfle tiene sida xdd 
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
  })
  actualizar (prop: string, evento: Event){
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') {
      this.brillo.set(+valor);
    } else if (prop === 'contraste') {
      this.contraste.set(+valor);
    } else if (prop === 'blur') {
      this.blur.set(+valor);
    }
  }
}

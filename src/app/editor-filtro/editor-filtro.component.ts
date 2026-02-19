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
  byn = signal(0);

  filtro = computed(()=>{
    //se supone que escucha todo para hacer lo necesario para actualizarse
    return `
      brightness(${this.brillo()}%) 
      contrast(${this.contraste()}%) 
      blur(${this.blur()}px) 
      grayscale(${this.byn()}%)`;
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

  blancoynegro (){
    this.byn.set(100);
  }
  restablecer (){
    this.brillo.set(100);
    this.contraste.set(100);
    this.blur.set(0);
    this.byn.set(0);
  }
}

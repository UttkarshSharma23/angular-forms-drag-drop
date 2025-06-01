import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormElementsMenu, MainCanvasComponent } from './drag-drop/components';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainCanvasComponent,
    FormElementsMenu
  ],


  template: `
   <div class="flex flex-col h-screen bg-gray-100 px-4">
    <div class="flex flex-col gap-1 items-center justify-center py-10">
      <h1 class="text-2xl tracking-wide font-medium">
        Angular forms designer
        <p class="text-gray-500">
          Creating some beautiful "Angular Forms" with Angular Material
        </p>
      </h1>
    </div>

    <!-- TODO: Add the componeents here -->
  <main-canvas></main-canvas>
  <form-elements-menu></form-elements-menu>
   </div>
  `,
  styles: [],
})



export class AppComponent {
  title = 'agular-forms-drag-drop';
}

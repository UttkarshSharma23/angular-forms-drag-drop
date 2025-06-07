import { NgModule } from "@angular/core";
import { components, providers , exports} from "./declarations";
import { FieldSettingsComponent, FormElementsMenu, MainCanvasComponent } from "./components";


// NOTE: configuration setup for the file metadata

@NgModule({
  imports:[
    MainCanvasComponent,
    FormElementsMenu,
    FieldSettingsComponent
  ],
  declarations:components,
  providers: providers,
  exports: exports
})

export class DragDropFormsModule {}

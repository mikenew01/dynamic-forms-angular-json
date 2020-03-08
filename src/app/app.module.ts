import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexModule} from "@angular/flex-layout";
import {PerguntaComponent} from './components/pergunta/pergunta.component';
import {PainelPerguntaComponent} from './components/painel-pergunta/painel-pergunta.component';
import {ContainerFormularioComponent} from './components/container-formulario/container-formulario.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {ContainerInnerFormComponent} from './components/container-formulario/container-inner-form/container-inner-form.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PerguntaComponent,
    PainelPerguntaComponent,
    ContainerFormularioComponent,
    ContainerInnerFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    MatCardModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  entryComponents: [
    PerguntaComponent,
    PainelPerguntaComponent,
    ContainerFormularioComponent,
    ContainerInnerFormComponent
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}

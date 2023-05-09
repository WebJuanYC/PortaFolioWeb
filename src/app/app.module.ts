//importo los servicios
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//importo todos los componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { RedesComponent } from './components/redes/redes.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IntroComponent } from './components/intro/intro.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ReferenciaComponent } from './components/referencia/referencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { PanelComponent } from './components/dashboard/panel/panel.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';

//importo modales
import { ModalRedComponent } from './components/dashboard/modal-red/modal-red.component';
import { ModalPersonaComponent } from './components/dashboard/modal-persona/modal-persona.component';
import { ModalReferenciasComponent } from './components/dashboard/modal-referencias/modal-referencias.component';
import { ModalExperienciaComponent } from './components/dashboard/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './components/dashboard/modal-educacion/modal-educacion.component';
import { ModalProyectosComponent } from './components/dashboard/modal-proyectos/modal-proyectos.component';
import { ModalHabilidadComponent } from './components/dashboard/modal-habilidad/modal-habilidad.component';
import { ModalContactoComponent } from './components/dashboard/modal-contacto/modal-contacto.component';




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RedesComponent,
        ExperienciaComponent,
        EducacionComponent,
        HabilidadComponent,
        ProyectoComponent,
        ContactoComponent,
        DashboardComponent,
        ErrorComponent,
        IntroComponent,
        ReferenciaComponent,
        ServiciosComponent,
        FooterComponent,
        PanelComponent,
        PersonaComponent,
        LogoutComponent,
        LoginComponent,
       
        ModalRedComponent,
        ModalPersonaComponent,
        ModalExperienciaComponent,
        ModalEducacionComponent,
        ModalHabilidadComponent,
        ModalProyectosComponent,
        ModalContactoComponent,
        ModalReferenciasComponent
        ],

        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule
          ],

    providers: [],
    bootstrap: [AppComponent],
    })
    
export class AppModule { }


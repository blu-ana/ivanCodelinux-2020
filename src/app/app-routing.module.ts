import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componet/home/home.component';
import { CodeComponent } from './componet/code/code.component';
import { ClienteComponent } from './componet/cliente/cliente.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './componet/console/console.component';
import { ToolPanelComponent } from './componet/tool-panel/tool-panel.component';
import { AboutSammaryComponent } from './componet/about-sammary/about-sammary.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'code', component: CodeComponent },
  { path: 'consola', component: ConsoleComponent },
  { path: 'paneltool', component: ToolPanelComponent },
  { path: 'about', component: AboutSammaryComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CommonModule } from '@angular/common';
import { ListaFornecedoresComponent } from './lista-fornecedores/lista-fornecedores.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent,  RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogCasamentoAngular';
}

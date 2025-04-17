import { Component } from '@angular/core';
import { FornecedorComponent } from '../fornecedor/fornecedor.component';
import { CommonModule } from '@angular/common';
import { data } from '../../data/data';

@Component({
  selector: 'app-lista-fornecedores',
  imports: [FornecedorComponent, CommonModule],
  templateUrl: './lista-fornecedores.component.html',
  styleUrl: './lista-fornecedores.component.css'
})
export class ListaFornecedoresComponent {
     data = data;
}

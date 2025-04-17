import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fornecedor',
  imports: [RouterModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent implements OnInit {
@Input()
photoCover:string = ""

@Input()
cardTitle:string = ""

@Input()
id:string = "0"

constructor() { }

ngOnInit(): void{

}
}

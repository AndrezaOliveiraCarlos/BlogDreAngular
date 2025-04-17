import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFornecedoresComponent } from './lista-fornecedores/lista-fornecedores.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    {
        path:'',
        component:ListaFornecedoresComponent
    },
    {
        path:'content/:id',
        component: ContentComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}

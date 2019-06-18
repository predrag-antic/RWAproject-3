import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookAddComponent } from './components/book-add/book-add.component';


const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "details/:id",
        component: BookDetailsComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "add-book",
        component : BookAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
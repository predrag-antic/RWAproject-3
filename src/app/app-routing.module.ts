import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


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
    },
    {
        path: "edit-book/:id",
        component : BookEditComponent
    },
    {
        path: "favorites",
        component : FavoritesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
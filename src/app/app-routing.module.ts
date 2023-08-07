import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { ProductsComponent } from './dashboard/pages/products/products.component';
import { TeachersComponent } from './dashboard/pages/teachers/teachers.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { InscriptionsComponent } from './dashboard/pages/inscriptions/inscriptions.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        // /dashboard/home
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        children: [
          {
            // /dashboard/users
            path: '',
            component: UsersComponent,
          },
          {
            // /dashboard/users/:id
            path: ':id',
            component: UserDetailComponent
          }
        ]
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'inscriptions',
        component: InscriptionsComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      // {
      //   path: 'users',
      //   component: UsersComponent
      // },
      // {
      //   path: 'users/:id',
      //   component: UserDetailComponent
      // },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    // ** Se usa para decir "cualquier path que no sea ninguno de los declarados anteriormente"
    path: '**',
    redirectTo: '/auth/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

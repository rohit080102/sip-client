import { LoginComponent } from './view/pages/login/login.component';
import { FeedbacksComponent } from './view/pages/feedbacks/feedbacks.component';
import { Title } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './view/pages/services/services.component';
import { HomeComponent } from './view/pages/home/home.component';
import { LayoutComponent } from './view/partial/layout/layout.component';
import { AboutComponent } from './view/pages/about/about.component';
import { ContactUsComponent } from './view/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './view/pages/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './view/pages/terms-condition/terms-condition.component';
import { BlogsComponent } from './view/pages/blogs/blogs.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', component: HomeComponent, data: { title: 'ZeroMeds | Home' }
      },
      {
        path: 'services', component: ServicesComponent, data: { title: 'ZeroMeds |  Services' }
      },
      {
        path: 'about', component: AboutComponent, data: { title: 'ZeroMeds |  About Us' }
      },
      {
        path: 'contact', component: ContactUsComponent, data: { title: 'ZeroMeds | Contact Us' }
      },
      {
        path: 'blogs', component: BlogsComponent, data: { title: 'ZeroMeds | Blogs' }
      },
      {
        path: 'feedbacks', component: FeedbacksComponent, data: { title: 'ZeroMeds | Feedback' }
      },
    ]
  }, {
    path: 'login', component: LoginComponent, data: { title: 'ZeroMeds | Login' }
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'ZeroMeds | Privacy Policy' }

  },
  {
    path: 'terms-condition', component: TermsConditionComponent, data: { title: 'ZeroMeds | Terms Condition' }

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

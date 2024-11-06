import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MasterService } from 'src/app/services/master.s';
import { swalHelper } from 'src/app/core/constants/swal.helper';
import { AppStorage } from 'src/app/core/utilities/app-storage';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(
    private masterService: MasterService,

  ) { }

  ngOnInit(): void {
    this.getlistBlogs()
  }


  // blogs: any[] = [
  //   {
  //     title: 'blog1',
  //     date: new Date(),
  //     content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam, omnis, labore, rem excepturi ex repellendus expedita nihil qui assumenda aliquam provident nesciunt perspiciatis totam perferendis tenetur incidunt. Ipsa, voluptate! Veritatis necessitatibus fugiat perspiciatis rerum, accusamus dicta harum et ex architecto mollitia illo atque asperiores quaerat commodi distinctio id dolores! Placeat nobis nostrum tenetur fugit eveniet molestias consequatur ab facilis!'
  //   },
  //   {
  //     title: 'blog2',
  //     date: new Date(),
  //     content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aperiam, omnis, labore, rem excepturi ex repellendus expedita nihil qui assumenda aliquam provident nesciunt perspiciatis totam perferendis tenetur incidunt. Ipsa, voluptate! Veritatis necessitatibus fugiat perspiciatis rerum, accusamus dicta harum et ex architecto mollitia illo atque asperiores quaerat commodi distinctio id dolores! Placeat nobis nostrum tenetur fugit eveniet molestias consequatur ab facilis!'
  //   },
  //   {
  //     title: 'blog3',
  //     date: new Date(),
  //     content: 'qui assumenda aliquam provident nesciunt perspiciatis totam perferendis tenetur incidunt. Ipsa, voluptate! Veritatis necessitatibus fugiat perspiciatis rerum, accusamus dicta harum et ex architecto mollitia illo atque asperiores quaerat commodi distinctio id dolores! Placeat nobis nostrum tenetur fugit eveniet molestias consequatur ab facilis!'
  //   }
  // ]


  openModal = async (data: any) => {
    this.modalData = data
  }
  blogs: any = []
  options = {
    limit: 3,
    page: 1,
    search: {}

  }

  resultBlogs: any


  getlistBlogs = async () => {
    let result = await this.masterService.getListBlogs(this.options)
    this.resultBlogs = result.Data
    this.blogs = result.Data.docs

  }

  modalData: any = {
    title: '',
    date: '',
    content: ''
  }


  onPageChange = async (page: any) => {
    this.options.page = page;
    this.getlistBlogs()
  };




}

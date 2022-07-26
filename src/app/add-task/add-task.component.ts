import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm = new FormGroup({
    title:new FormControl(''),
    description: new FormControl(''),
    taskList: new FormControl(''),
    fileData: new FormControl('')    
  })

  task:any={};
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  btnCancel(){
    this.router.navigate(['']);
  }
  onSubmit(){
    localStorage.setItem('addTaskFrom', this.task.value)
    console.log(this.addTaskForm.value);
    this.router.navigateByUrl('');
  }

}



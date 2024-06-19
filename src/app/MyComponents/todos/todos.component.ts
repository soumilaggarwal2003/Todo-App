import { Component } from '@angular/core';
import {Todo} from "../../Todo"
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
 
  // localItem:string;
  todos:Todo[];
  
  constructor(){
    const localItem =localStorage.getItem("todos");

    if(localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(localItem)
    }
    
  }

  addTodoForm=new FormGroup({
    title: new FormControl(''),
    description:new FormControl('')
  })
  
  noOnInit():void{

  }

  title:string='';
  desc:string=''
  active:boolean=true
  
  deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  onSubmit(items:any){
    const todi={
      title:items.title,
      desc:items.description,
      active:true
    } 
    this.todos.push(todi);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  onCheckboxClick(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}

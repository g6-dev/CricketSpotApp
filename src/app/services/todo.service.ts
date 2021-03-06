import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Todo interface is created, simply an object */
export interface Todo {
  name: string ;
  username: string ;
  phone: number ;
  age: number ;
  password: string ;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  /* todosCollection list */
  private todosCollection: AngularFirestoreCollection<Todo>;

  /* todo array, to store values in database */
  private todos: Observable<Todo[]>;

  constructor(db: AngularFirestore) {

    /* Get the database values and assigned to collection */
    this.todosCollection = db.collection<Todo>('todos');

    /* collection is assigned to array<Todo> */
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  /* Get all the values from database as an array<Todo> */
  getTodos() {
    return this.todos;
  }

  /* Get value from database with the id passed as parameter */
  getTodoId(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }

  /* Updating a value, by passing the Object and reference 'id' */
  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  /* Add a value to the database, by passing the Object*/
  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }

  /* Remove a vlue from the database, by passing the id as the parameter */
  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Todo interface is created, simply a player object */
export interface Player {
  name: string ;
  username: string ;
  phone: number ;
  age: number ;
  password: string ;
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  /* playerCollection list retrieved from database*/
  private playerCollection: AngularFirestoreCollection<Player>;

  /* playersList array, to store players retrieved from database */
  private playersList: Observable<Player[]>;

  constructor(db: AngularFirestore) {

    /* Get the database values and assigned to collection */
    this.playerCollection = db.collection<Player>('players');

    /* collection is assigned to array<Todo> */
    this.playersList = this.playerCollection.snapshotChanges().pipe(
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
  getAllPlayers() {
    return this.playersList;
  }

  /* Get value from database with the id passed as parameter */
  getPlayerById(id) {
    return this.playerCollection.doc<Player>(id).valueChanges();
  }

  /* Updating a value, by passing the Object and reference 'id' */
  updatePlayer(player: Player, id: string) {
    return this.playerCollection.doc(id).update(player);
  }

  /* Add a value to the database, by passing the Object*/
  addPlayer(player: Player) {
    return this.playerCollection.add(player);
  }

  /* Remove a vlue from the database, by passing the id as the parameter */
  removePlayer(id) {
    return this.playerCollection.doc(id).delete();
  }
}


import { Component, OnInit } from '@angular/core';
import { Client, Idea } from '../services/hackoverflow.service';

@Component({
  selector: 'app-registered-ideas',
  templateUrl: './registered-ideas.component.html',
  styleUrls: ['./registered-ideas.component.scss']
})
export class RegisteredIdeasComponent implements OnInit {

  ideas: Idea[];
  constructor(private client: Client) { }

  ngOnInit() {
    this.client.getAllIdeas().subscribe(ideas => {
      this.ideas = ideas;
    });
  }

}

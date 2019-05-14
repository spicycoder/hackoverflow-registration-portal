import { Component, OnInit } from '@angular/core';
import { Client, Idea } from '../services/hackoverflow.service';

@Component({
  selector: 'app-new-ideas',
  templateUrl: './new-ideas.component.html',
  styleUrls: ['./new-ideas.component.scss']
})
export class NewIdeasComponent implements OnInit {

  teamName: string;
  description: string;
  member1: string;
  member2: string;

  constructor(private client: Client) { }

  ngOnInit() {
  }

  save(args) {
    var idea = Idea.fromJS({
      teamName: this.teamName,
      member1: this.member1,
      member2: this.member2,
      description: this.description
    });

    this.client.createIdea(idea).subscribe(() => {
      this.teamName = "";
      this.member1 = "";
      this.member2 = "";
      this.description = "";
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Client, Idea } from './services/hackoverflow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hackathon - 2019';

  teamName: string;
  description: string;
  member1: string;
  member2: string;
  id: string;
  ideas: Idea[];
  isUpdate = false;
  idea: Idea;
  display: boolean = false;

  get enableButton() {
    let flag = false;
    if ((this.teamName && this.teamName.trim() !== '') &&
      (this.member1 && this.member1.trim() !== '')) {
      flag = true;
    }

    return flag;
  }
  constructor(private client: Client) { }

  ngOnInit() {
    this.refreshData();
  }

  showDialog() {
    this.display = true;
  }

  onHide() {
    this.reset();
  }

  save() {
    const idea = Idea.fromJS({
      teamName: this.teamName,
      member1: this.member1,
      member2: this.member2,
      description: this.description
    });

    this.client.createIdea(idea).subscribe(() => {
      this.teamName = '';
      this.member1 = '';
      this.member2 = '';
      this.description = '';

      this.refreshData();
    });
  }

  updateDetails(idea: Idea) {
    this.id = idea.id;
    this.teamName = idea.teamName;
    this.member1 = idea.member1;
    this.member2 = idea.member2;
    this.description = idea.description;
    this.isUpdate = true;

    this.display = true;
  }

  update() {
    const idea = Idea.fromJS({
      id: this.id,
      teamName: this.teamName,
      member1: this.member1,
      member2: this.member2,
      description: this.description
    });

    this.client.updateIdea(idea).subscribe(() => {
      this.reset();
      this.refreshData();
      this.display = false;
    });
  }

  reset() {
    this.teamName = '';
    this.member1 = '';
    this.member2 = '';
    this.description = '';
    this.isUpdate = false;
  }

  refreshData() {
    this.client.getAllIdeas().subscribe(ideas => {
      this.ideas = ideas;
    });
  }
}

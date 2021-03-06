import { Component, OnInit } from '@angular/core';
import { Client, Idea } from './services/hackoverflow.service';
import { Constants } from "./models/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '2019 Hackathon';

  teamName: string;
  description: string;
  member1: string;
  member2: string;
  created: Date;
  shortlisted: boolean;
  id: string;
  ideas: Idea[];
  shortlistedIdeas: Idea[];
  isUpdate = false;
  idea: Idea;
  display: boolean = false;
  barChart: any;
  doughnutChart: any;
  chartOptions: any;
  membersCount: number;
  ideaCount: number;
  enableAdding: boolean = false;
  loading: boolean = false;
  loadingChart: boolean = false;
  
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
    this.chartOptions = {
      legend: {
        display: false
      }
    }
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
      description: this.description,
      created: this.created,
      shortlisted: this.shortlisted,
    });

    this.client.createIdea(idea).subscribe(() => {
      this.reset();
      this.refreshData();
    });
  }

  updateDetails(idea: Idea) {
    this.id = idea.id;
    this.teamName = idea.teamName;
    this.member1 = idea.member1;
    this.member2 = idea.member2;
    this.description = idea.description;
    this.shortlisted = idea.shortlisted;
    this.isUpdate = true;

    this.display = true;
  }

  update() {
    const idea = Idea.fromJS({
      id: this.id,
      teamName: this.teamName,
      member1: this.member1,
      member2: this.member2,
      description: this.description,
      created: this.created,
      shortlisted: this.shortlisted
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
    this.created = new Date();
    this.shortlisted = false;
    this.isUpdate = false;
  }

  refreshData() {
    this.loadingChart = true;

    this.client.getChartData().subscribe(data => {
      this.loadingChart = false;
      this.ideaCount = data.ideaCount;
      this.membersCount = data.memberCount;

      this.loading = true;
      this.client.getAllIdeas().subscribe(ideas => {
        this.ideas = ideas.filter(x => !x.shortlisted);
        this.shortlistedIdeas = ideas.filter(x => x.shortlisted);
        this.loading = false;
      });

      this.barChart = {
        labels: data.byDate.map(x => x.created.toDateString()),
        datasets: [
          {
            label: 'By Date',
            backgroundColor: Constants.colors,
            data: data.byDate.map(x => x.teamNames.length)
          }
        ]
      };

      this.doughnutChart = {
        labels: data.byMembers.map(x => x.member),
        datasets: [
          {
            data: data.byMembers.map(x => x.teamNames.length),
            backgroundColor: Constants.colors
          }
        ]
      };
    });
  }
}

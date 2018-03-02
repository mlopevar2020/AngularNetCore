import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})

export class ChampionDetailComponent implements OnInit {
  @Input() champion: Champion;

  constructor(
    private route: ActivatedRoute,
    private championService: ChampionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getChampion();
  }

  getChampion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.championService.getChampion(id)
      .subscribe(champion => this.champion = champion);
  }

  goBack(): void {
    this.location.back();
  }
}

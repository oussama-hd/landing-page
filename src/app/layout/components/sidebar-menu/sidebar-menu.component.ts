import {Component, Input, OnInit} from '@angular/core';
import { BlinkService } from '../../../services/blink.service';

@Component({
  standalone :false,
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})

export class SidebarMenuComponent implements OnInit {

  constructor(public blinkService: BlinkService) {}
  ngOnInit(): void {
  }
}

import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeModel, NodeEvent, Ng2TreeSettings } from 'ng2-tree';
import { Location } from '@angular/common';
import { NodeMenuItemAction } from 'ng2-tree';
import { MenuItemSelectedEvent } from 'ng2-tree';

//declare const alertify: any;

@Component({
  selector: 'admn-nav-bar',
  templateUrl: './admn-nav-bar.component.html',
  styleUrls: ['./admn-nav-bar.component.css']
})

export class AdmnNavBarComponent {

  public settings: Ng2TreeSettings = {
    rootIsVisible: false
  };

  public tree: TreeModel = {
    value: 'tree',
    children: [
      {
        value: 'Serif  -  All my children and I are STATIC ¯\\_(ツ)_/¯',
        id: 1,
        settings: {
          'static': true
        },
        children: [
          { value: '<a href="#" id="antiqua" class="test">Antiqua</a> with HTML tags.', id: 2 },
          { value: 'DejaVu Serif', id: 3 },
          { value: 'Garamond', id: 4 },
          { value: 'Georgia', id: 5 },
          { value: 'Times New Roman', id: 6 },
          {
            value: 'Slab serif',
            id: 7,
            children: [
              { value: 'Candida', id: 8 },
              { value: 'Swift', id: 9 },
              { value: 'Guardian Egyptian', id: 10 }
            ]
          }
        ]
      },
      {
        value: 'Sans-serif (Right click me - I have a custom menu)',
        id: 11,
        settings: {
          menuItems: [
            { action: NodeMenuItemAction.Custom, name: 'Foo', cssClass: 'fa fa-arrow-right' },
            { action: NodeMenuItemAction.Custom, name: 'Bar', cssClass: 'fa fa-arrow-right' },
            { action: NodeMenuItemAction.Custom, name: 'Baz', cssClass: 'fa fa-arrow-right' }
          ]
        },
        children: [
          { value: 'Arial', id: 12 },
          { value: 'Century Gothic', id: 13 },
          { value: 'DejaVu Sans', id: 14 },
          { value: 'Futura', id: 15 },
          { value: 'Geneva', id: 16 },
          { value: 'Liberation Sans', id: 17 }
        ]
      },
      {
        value: 'Monospace - With ASYNC CHILDREN',
        id: 18,
        // children property is ignored if "loadChildren" is present
        children: [{ value: 'I am the font that will be ignored' }],
        loadChildren: (callback) => {
          setTimeout(() => {
            callback([
              { value: 'Input Mono', id: 19 },
              { value: 'Roboto Mono', id: 20 },
              { value: 'Liberation Mono', id: 21 },
              { value: 'Hack', id: 22 },
              { value: 'Consolas', id: 23 },
              { value: 'Menlo', id: 24 },
              { value: 'Source Code Pro', id: 25 }
            ]);
          }, 5000);
        }
      }
    ]
  };

  @ViewChild('tree') public admnTree;

  public onNodeRemoved(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Removed');
  }

  public onNodeMoved(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Moved');
  }

  public onNodeRenamed(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Renamed');
  }

  public onNodeCreated(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Created');
  }

  public onNodeSelected(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Selected');
  }

  public onMenuItemSelected(e: MenuItemSelectedEvent) {
    AdmnNavBarComponent.logEvent(e, `You selected ${e.selectedItem} menu item`);
  }

  public onNodeExpanded(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Expanded');
  }

  public onNodeCollapsed(e: NodeEvent): void {
    AdmnNavBarComponent.logEvent(e, 'Collapsed');
  }

  private static logEvent(e: NodeEvent, message: string): void {
    console.log(e);
  }
}

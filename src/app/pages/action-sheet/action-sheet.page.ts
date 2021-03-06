import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}
  async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Albums',
    buttons: [{
      text: 'delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () =>  {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'play',
      handler: () =>  {
        console.log('play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () =>  {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () =>  {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();

  }


  ngOnInit() {
  }

}

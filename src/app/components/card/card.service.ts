import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  items = [
    {
      id: 1,
      number: '01',
      role: 'Junior Developer',
      headline: 'Fincons Group - Bari',
      description: 'March 2021 - on going',
      url: 'assets/images/bari.jpeg',
      link: 'https://www.finconsgroup.com/',
    },
    {
      id: 2,
      number: '02',
      role: 'Front-End Developer',
      headline: 'Crealogix Group - Barcelona',
      description: 'May 2019 - December 2020',
      url: 'assets/images/barcellona01.jpeg',
      link: 'https://crealogix.com/en',
      project: [
        { id: 1, name: 'AlJazira SMART', link: 'https://apps.apple.com/it/app/aljazira-smart/id469515886?l=en' },
        { id: 2, name: 'SAIB Business ', link: 'https://apps.apple.com/it/app/saib-business/id1487662265?l=en' }
      ]
    },
    {
      id: 3,
      number: '03',
      role: 'Front-End Developer',
      headline: 'Roonroom - Barcelona',
      description: 'Jun 2018 - May 2019',
      url: 'assets/images/barcellona02.jpeg',
      link: 'https://www.runroom.com/',
      project: [
        { id: 1, name: 'Roonroom Web Page', link: 'https://www.runroom.com/' },
      ]
    },
    {
      id: 4,
      number: '04',
      role: 'Web/UI Designer',
      headline: 'Ideare Communication - Rome',
      description: 'October 2016 - July 2018',
      url: 'assets/images/rome01.jpeg',
      link: 'https://www.idearecommunication.it/',
    },
    {
      id: 5,
      number: '05',
      role: 'Photographer Assistant',
      headline: 'RAW - Rome Art Week',
      description: 'July 2017 - Rome',
      url: 'assets/images/rome02.jpeg',
      link: 'https://romeartweek.com/it/'
    },
  ];

  getItems(): any[] {
    return this.items;
  }
}

import { animate } from '@angular/animations';
import { Component, VERSION } from '@angular/core';
export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any = [
    {
      id: 1,
      firstName: 'Jeanette',
      lastName: 'Penddreth&quot',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
    },
    {
      id: 2,
      firstName: 'Giavani',
      lastName: 'Frediani',
      email: 'gfrediani1@senate.gov&quot',
      gender: 'Male',
    },
    {
      id: 3,
      firstName: 'Noell',
      lastName: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female',
    },
    {
      id: 4,
      firstName: 'Willard',
      lastName: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male',
    },
  ];

  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'email',
    'gender',
  ];

  dataSource = this.list;
  add: any = { firstName: '', lastName: '', email: '', male: '', female: '' };
  searchText: any;
  addCandidate() {
    this.list.push({
      id: this.list.length + 1,
      firstName: this.add.firstName,
      email: this.add.email,
      gender: this.add.female ? 'Female' : 'Male',
      lastName: this.add.lastName,
    });
    console.log(this.add);
    this.add = { firstName: '', lastName: '', email: '', male: '', female: '' };
  }
  male: boolean;
  female: boolean;
  filterList: any;
  filterOnGender(allDataList: any) {
    if (this.male && this.female) {
      this.filterList = allDataList.filter(
        (obj) => obj.gender == 'Male' && obj.gender == 'Female'
      );
    } else if (this.male && !this.female) {
      this.filterList = allDataList.filter((obj) => obj.gender == 'Male');
    } else if (this.female && !this.male) {
      this.filterList = allDataList.filter((obj) => obj.gender == 'Female');
    } else {
      this.filterList = allDataList;
    }
    this.list = this.filterList;
  }
}

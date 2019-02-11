export class GridService {
  constructor() {
  }

  getGridColumns() {
    return ['First Name', 'Last Name', 'Birthday', 'Gender', 'Favorite Color', 'Favorite Food', 'Hobbies', 'Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7', 'Test8', 'Test9', 'Test10'];
  }

  getRecords() {
    return [
      {
        'First Name': 'Leland',
        'Last Name': 'Daniel',
        'Birthday': '01/17/1985',
        'Gender': 'Male',
        'Favorite Color': 'Blue',
        'Favorite Food': 'Burgers!',
        'Hobbies': 'To Many'
      }, {
        'First Name': 'Lauren',
        'Last Name': 'Daniel',
        'Birthday': '09/17/1985',
        'Gender': 'Female',
        'Favorite Color': 'Blue'
      }, {
        'First Name': 'Carter',
        'Last Name': 'Daniel',
        'Birthday': '12/10/2009',
        'Gender': 'Male',
        'Favorite Color': 'Blue',
        'Favorite Food': 'Burgers!',
        'Hobbies': 'Electronics'
      }, {
        'First Name': 'Hazel',
        'Last Name': 'Daniel',
        'Birthday': '12/13/2016',
        'Gender': 'Female',
        'Favorite Color': 'Blue'
      }
    ];
  }
}

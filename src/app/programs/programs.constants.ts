import { DataCBModel } from '../API-test/dataCB.model';

export class ProgramsConstants {
  static readonly Programs = [
    new DataCBModel({
      title: 'Costume day',
      body: 'Want to meet pricess zelma, space guy or the cow boy guy? Come come',
      imageUrl: 'assets/img/programs/prog2.jpg'
    }),
    new DataCBModel({
      title: 'One pound a ride night',
      body: 'On wednesdays and fridays from 5pm!',
      imageUrl: 'assets/img/programs/prog1.jpg'
    })
  ];
}

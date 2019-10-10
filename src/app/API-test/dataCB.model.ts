export class DataCBModel {

  title: string;
  body: string;
  imageUrl: string;
  price: number;
  other: string;

  constructor(dataCB: Partial<DataCBModel>) {
    Object.assign(this, dataCB);
  }
}

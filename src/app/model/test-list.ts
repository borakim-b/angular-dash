export class TestListItem {
  id: number;
  name: string;
  age: number;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  public static newInstance(obj: any): TestListItem {
        const o: TestListItem = Object.assign(new TestListItem(), obj);
        return o;
    }
}

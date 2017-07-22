export class User {
  constructor(
    public _id: { $oid: string },
    public name: string, 
    public email: string,
    public password: string,
    public likes: [string],
    public history: [string],
    public __v: number
    ) {

  }

}

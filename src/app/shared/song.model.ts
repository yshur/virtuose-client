export class Song {
  constructor(
    public _id: { $oid: string },
    public name: string, 
    public length: number,
    public compositor: string,
    public image: string,
    public voice: string, 
    public tags: [string],
    public __v: number
    ) 
  { }
}

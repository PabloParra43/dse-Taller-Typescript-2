export class Serie {
  constructor(
    public id: number,
    public name: string,
    public channel: string,
    public seasons: number,
    public synopsis: string,
    public url: string,
    public image: string,
  ) {}
}
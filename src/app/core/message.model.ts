export class MessageModel {

  constructor(
    public text: string = '',
    public created: number = Date.now()
  ) { }

  public toString(): string {
    const { text, created } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }

}

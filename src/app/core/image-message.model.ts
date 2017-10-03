import { MessageModel } from './message.model';

export class ImageMessageModel extends MessageModel {

  constructor (
    text = '',
    created = Date.now(),
    public url: string = '',
    public thumbnail: string = '',
  ) {
    super(text, created);
  }

  public toString(): string {
    return `Photo: ${super.toString()}` +
           ` - URL: ${this.url}` +
           ` - Thumbnail: ${this.thumbnail}`;
  }
}

import { IHandler } from "./interfaces";

export class AbstractHandler implements IHandler {
  private handler: IHandler | null = null;

  setNext(handler: IHandler): IHandler {
    this.handler = handler;

    return handler;
  }

  handle(request: string): string {
    if (this.handler) {
      return this.handler.handle(request);
    }

    return "";
  }
}

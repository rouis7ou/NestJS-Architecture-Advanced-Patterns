export class CreateAlarmCommand {
  constructor(
    public readonly name: string,
    public readonly saverity: string,
  ) {}
}

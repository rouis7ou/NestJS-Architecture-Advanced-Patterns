import { AlarmSeverity } from './value-objects/alarm-severity';
import { AlarmItem } from './alarm-item';

export class Alarm {
  public triggeredAt: Date;
  public name: string;
  public severity: AlarmSeverity;
  public isAcknowledged = false;
  public items = new Array<AlarmItem>();
  constructor(public id: string) {}

  acknowledge() {
    this.isAcknowledged = true;
  }

  addAlarmItem(item: AlarmItem) {
    this.items.push(item);
  }
}

import { Alarm } from '../../../../domain/alarm';
import { AlarmEntity } from '../entities/alarm-entity';
import { AlarmSeverity } from '../../../../domain/value-objects/alarm-severity';

export class AlarmMapper {
  static toDomain(alarmEntity: AlarmEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'low' | 'meduim' | 'high',
    );
    const alarmModel = new Alarm(
      alarmEntity.id,
      alarmEntity.name,
      alarmSeverity,
    );
    return alarmModel;
  }

  static toPersistence(alarm: Alarm) {
    const entity = new AlarmEntity();
    entity.id = alarm.id;
    entity.name = alarm.name;
    entity.severity = alarm.severity.value;
    return entity;
  }
}

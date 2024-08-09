import { Injectable } from '@nestjs/common';
import { UpsertMaterializedAlarmRepository } from '../../../../application/ports/upsert-materialized-alarm.repository';
import { InjectModel } from '@nestjs/mongoose';
import { MaterializeAlarmView } from '../schemas/materialize-alarm-view.schema';
import { AlarmReadModel } from '../../../../domain/read-models/alarm.read-model';
import { Model } from 'mongoose';

class MaterializedAlarmView {}

@Injectable()
export class OrmUpsertMaterializedAlarmRepository
  implements UpsertMaterializedAlarmRepository
{
  constructor(
    @InjectModel(MaterializeAlarmView.name)
    private readonly alarmModel: Model<MaterializedAlarmView>,
  ) {}

  async upsert(
    alarm: Pick<AlarmReadModel, 'id'> & Partial<AlarmReadModel>,
  ): Promise<void> {
    await this.alarmModel.findOneAndUpdate({ id: alarm.id }, alarm, {
      upsert: true,
    });
  }
}

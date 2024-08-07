import { Injectable } from '@nestjs/common';
import { FindAlarmsRepository } from '../../../../application/ports/find-alarms.repository';
import { MaterializeAlarmView } from '../schemas/materialize-alarm-view.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlarmReadModel } from '../../../../domain/read-models/alarm.read-model';

@Injectable()
export class OrmFindAlarmRepository implements FindAlarmsRepository {
  constructor(
    @InjectModel(MaterializeAlarmView.name)
    private readonly alarmModel: Model<MaterializeAlarmView>,
  ) {}
  async findAll(): Promise<AlarmReadModel[]> {
    return await this.alarmModel.find();
  }
}

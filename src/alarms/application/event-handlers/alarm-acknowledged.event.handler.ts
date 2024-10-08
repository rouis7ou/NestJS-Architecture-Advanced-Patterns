import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AlarmAcknowledgedEvent } from '../../domain/events/alarm-acknowledged.event';
import { UpsertMaterializedAlarmRepository } from '../ports/upsert-materialized-alarm.repository';
import { SerializedEventPayload } from "../../../shared/domain/interfaces/serializable-event";

@EventsHandler(AlarmAcknowledgedEvent)
export class AlarmAcknowledgedEventHandler
  implements IEventHandler<SerializedEventPayload<AlarmAcknowledgedEvent>>
{
  private readonly logger = new Logger(AlarmAcknowledgedEventHandler.name);

  constructor(
    private readonly upsertMaterializedAlarmRepository: UpsertMaterializedAlarmRepository,
  ) {}

  async handle(event: SerializedEventPayload<AlarmAcknowledgedEvent>) {
    this.logger.log(`Alarm acknowledged event: ${JSON.stringify(event)}`);

    await this.upsertMaterializedAlarmRepository.upsert({
      id: event.alarmId,
      isAcknowledged: true,
    });
  }
}


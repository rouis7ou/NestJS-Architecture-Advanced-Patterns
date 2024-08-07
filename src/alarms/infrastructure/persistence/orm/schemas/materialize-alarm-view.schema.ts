import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class MaterializeAlarmView {
  @Prop({ unique: true, index: true })
  id: string;

  @Prop()
  name: string;

  @Prop()
  severity: string;

  @Prop()
  isAcknowledged: boolean;

  @Prop(
    raw([
      {
        id: String,
        name: String,
        type: {
          type: String,
        },
      },
    ]),
  )
  items: Array<{
    id: string;
    name: string;
    type: string;
  }>;
}

export const MaterializedAlarmViewSchema =
  SchemaFactory.createForClass(MaterializeAlarmView);

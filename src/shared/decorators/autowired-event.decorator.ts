import { EventCliRegistry } from '../infrastructure/event-store/event-cli.registry';

export const AutowiredEvent: ClassDecorator = (target: any) => {
  EventCliRegistry.add(target);
};

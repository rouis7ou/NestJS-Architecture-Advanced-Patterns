export class AlarmSeverity {
  constructor(readonly value: 'critical' | 'high' | 'meduim' | 'low') {}

  equals(severity: AlarmSeverity) {
    return this.value === severity.value;
  }
}

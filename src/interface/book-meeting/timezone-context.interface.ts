import { ReactNode } from 'react';

export interface Option {
    timeZoneName: string
  }
export interface customIntl {
    supportedValuesOf: Function,
    DateTimeFormat: new (local: string, option: Option) => {
        formatToParts: Function
    }
}

export interface DatePart {
    type: string,
    value: string
}
export interface KeyPairIANA {
    IANA: string,
    timezone: string
}
export interface SelectedTimeSlot {
    startDatetime: Date,
    endDatetime: Date,
}
export interface Children {
    children: ReactNode
}
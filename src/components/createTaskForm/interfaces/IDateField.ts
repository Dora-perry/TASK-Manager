import { IDisabled } from "./IDisabled";

export interface IDateField extends IDisabled  {
    value?: null | Date;
    onChange?: (date : Date | null)=> void
}
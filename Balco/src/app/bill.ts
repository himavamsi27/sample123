import { Patient } from "./Patient";

export class bill{
    bId: number;
    bAmt: number;
    isInsuared : boolean;
    billDate: Date;
    Patient: Patient;
}
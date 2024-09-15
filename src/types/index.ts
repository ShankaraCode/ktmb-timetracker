export enum DayType {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
}

export interface ITrainSchedule {
    train_number: number;
    from_station: string;
    to_station: string;
    time: string;
    trip: string;
    type: string;
};

interface INextOrganizeCommon{
    from: string;  // Now accepting string instead of Station enum
    to: string;    // Now accepting string instead of Station enum
    date?: string;
    schedules?: ITrainSchedule[];
}

export interface IGetNextTrainProps extends INextOrganizeCommon {}

export interface IOrganizeTrainScheduleProps extends INextOrganizeCommon{}

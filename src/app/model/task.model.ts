export interface Task {
    projectId: string;
    name: string;
    targetDate: string;
    assignTo: number[];
    isNotify: boolean;
    isMailNotify: boolean;
    estimatedhours: string;
    story: string;
    statusId: string;
}

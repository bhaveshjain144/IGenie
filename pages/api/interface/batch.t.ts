export interface CreateBatchDto {
    id: string | any;
    code: string;
    name: string;
    manager: string;
    type: string;
    description?: string;
    pmEmail: string;
    internal?: boolean;
    disabled?: boolean;
}

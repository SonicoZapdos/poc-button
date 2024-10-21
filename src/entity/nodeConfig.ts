export default interface NodeConfig {
    label: string;
    condition?: string;
    time?: number;
    message?: string;
    form?: {
        fields: {
            label: string;
            type: 'text' | 'number' | 'date' | 'time' | 'select' | 'radio' | 'checkbox';
            color: string;
        }[];
    };
    action?: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        url: string;
        body: any;
    };
    shape?: string;
    color?: string;
    init?: boolean;
    end?: boolean;
    connectionLimit?: number;
    connectionEnd?: boolean;
}


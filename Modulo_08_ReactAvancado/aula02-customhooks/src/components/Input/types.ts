export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: any;
    name: string;
    control: any;
    errorMessage?: string;
}
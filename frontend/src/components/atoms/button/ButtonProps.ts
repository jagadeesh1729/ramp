export interface ButtonProps{
    text?:React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    startIcon?: React.ReactNode;
    sx?: object;
    variant?: "contained" | "outlined" | "text";
    onClick?: (e?:React.MouseEvent<HTMLButtonElement>) => void;
    testId?:string;
}
export type ProfileCallBackType = () => void

export type FormDataType = {
    email: string,
    password: string,
    password_confirmation: string,
    username: string,
    image_url: string
}
export type ProviderType = {
    children: React.ReactNode;
}
export type LoggedUserType = {
    email: string
    password: string
}

export type initalStateType = {
    user: FormDataType,
    status: string,
    error: string[],
    success: boolean
}
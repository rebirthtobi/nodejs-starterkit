export interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date;
}

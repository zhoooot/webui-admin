/*
"vio_id": "c41ccc4a-5c8b-4933-83cd-0be44a119c1b",
"quiz_id": "c22fb2a5-ccb9-493a-9c16-68848ef76345",
"auth_id": "7070afde-f8b5-487e-a288-f2be9d162b0b",
"report_by": "893d0698-8564-4f10-9a7c-aba55dd82a69",
"status": "pending",
"detail": "This quiz violates your policy.",
"created_at": "Tue Jan 09 2024"
*/
export interface IViolation {
    vio_id: string;
    quiz_id: string;
    auth_id: string;
    report_by: string;
    status: string;
    detail: string;
    created_at: string;
}
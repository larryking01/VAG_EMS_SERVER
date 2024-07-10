import { Schema, model } from 'mongoose'


// interface object for the leave document.
interface NationalServicePersonnel {
    uniqueNSPID: string;
    nspFirstName: string;
    nspLastName: string;
    nspOtherNames?: string;
    nspInstitutionAttended: string;
    nspProgrammeStudied: string;
    nspPhoneNumber: string;
    nspEmail: string;
    nssStartDate: string;
    nssEndDate: string;
    nspPhoto: string;
}



// the national service personnel model
const NationalServicePersonnelSchema = new Schema<NationalServicePersonnel>({
    uniqueNSPID: { type: String, required: true, unique: true },
    nspFirstName: { type: String, required: true },
    nspLastName: { type: String, required: true },
    nspOtherNames: { type: String },
    nspInstitutionAttended: { type: String, required: true },
    nspProgrammeStudied: { type: String, required: true },
    nspPhoneNumber: { type: String, required: true },
    nspEmail: { type: String, required: true },
    nssStartDate: { type: String, required: true },
    nssEndDate: { type: String, required: true },
    nspPhoto: { type: String, required: true },

}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString()}})


// the national service personnel model.
const NationalServicePersonnelModel = model<NationalServicePersonnel>( 'NationalServicePersonnelModel', NationalServicePersonnelSchema )


export {
    NationalServicePersonnelModel
}

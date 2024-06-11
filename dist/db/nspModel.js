"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationalServicePersonnelModel = void 0;
const mongoose_1 = require("mongoose");
// the national service personnel model
const NationalServicePersonnelSchema = new mongoose_1.Schema({
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
    nspPhoto: { type: String },
}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString() } });
// the national service personnel model.
const NationalServicePersonnelModel = (0, mongoose_1.model)('NationalServicePersonnelModel', NationalServicePersonnelSchema);
exports.NationalServicePersonnelModel = NationalServicePersonnelModel;

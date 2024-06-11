"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing dependencies
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("../db/connectMongoDB");
// importing file modules
const getRequests_1 = __importDefault(require("../routes/getRequests"));
const postRequests_1 = __importDefault(require("../routes/postRequests"));
const deleteRequests_1 = __importDefault(require("../routes/deleteRequests"));
const putRequests_1 = __importDefault(require("../routes/putRequests"));
dotenv_1.default.config();
const port = process.env.PORT || 9000;
// initializing express.
const app = (0, express_1.default)();
// allowing smooth communication with the client
app.use((0, cors_1.default)());
// allowing for parsing request body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/get', getRequests_1.default);
app.use('/post', postRequests_1.default);
app.use('/del', deleteRequests_1.default);
app.use('/put', putRequests_1.default);
app.get('*', (req, res) => {
    res.send('Sorry, path does not exist...');
});
app.listen(port, () => {
    console.log(`server running on port ${port}...`);
});

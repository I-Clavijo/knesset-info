import mongoose, {  Document } from 'mongoose';

export interface Bill extends Document {
    BillID: number;
    KnessetNum: number;
    Name: string;
    SubTypeID: number;
    SubTypeDesc: string;
    PrivateNumber: number;
    CommitteeID: number;
    StatusID: number;
    Number: number;
    PostponementReasonID: number;
    PostponementReasonDesc: string;
    PublicationDate: Date;
    MagazineNumber: number;
    PageNumber: number;
    IsContinuationBill: boolean;
    SummaryLaw: string;
    PublicationSeriesID: number;
    PublicationSeriesDesc: string;
    PublicationSeriesFirstCall: number;
    LastUpdatedDate: Date;
    Summary: string;
    MainInstructions: string;
    Impacts: string;
    Category: number;
    Initiators: number[];
    VotesUp: number;
    VotesDown: number;
    Comments: number;
    FilePath: string;
}

const billSchema = new mongoose.Schema({
    BillID: { type: Number },
    KnessetNum: { type: Number },
    Name: { type: String },
    SubTypeID: { type: Number },
    SubTypeDesc: { type: String },
    PrivateNumber: { type: Number },
    CommitteeID: { type: Number },
    StatusID: { type: Number },
    Number: { type: Number },
    PostponementReasonID: { type: Number },
    PostponementReasonDesc: { type: String },
    PublicationDate: { type: Date },
    MagazineNumber: { type: Number },
    PageNumber: { type: Number },
    IsContinuationBill: { type: Boolean },
    SummaryLaw: { type: String },
    PublicationSeriesID: { type: Number },
    PublicationSeriesDesc: { type: String },
    PublicationSeriesFirstCall: { type: Number },
    LastUpdatedDate: { type: Date },
    Summary: { type: String },
    MainInstructions: { type: String },
    Impacts: { type: String },
    Category: { type: Number },
    Initiators: [{ type: Number }],
    VotesUp: { type: Number },
    VotesDown: { type: Number },
    Comments: { type: Number },
    FilePath:{ type: String },
});

const Bill = mongoose.models.Bill || mongoose.model('Bill', billSchema);

export default Bill;
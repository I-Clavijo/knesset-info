export default interface Bill {
    BillID: number;
    KnessetNum: number;
    Name: string;
    SubTypeID?: number;
    SubTypeDesc?: string;
    PrivateNumber?: number;
    CommitteeID?: number;
    StatusID?: number;
    Number?: number;
    PostponementReasonID?: number;
    PostponementReasonDesc?: string;
    PublicationDate?: Date;
    MagazineNumber?: number;
    PageNumber?: number;
    IsContinuationBill?: boolean;
    SummaryLaw?: string;
    PublicationSeriesID?: number;
    PublicationSeriesDesc?: string;
    PublicationSeriesFirstCall?: number;
    LastUpdatedDate: Date;
    Summary: string;
    MainInstructions: string;
    Impacts: string;
    Category: string;
    Initiators: number[];
    VotesUp: number;
    VotesDown: number;
    Comments: number;
    FilePath: string;

  }
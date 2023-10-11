import { CounterState } from "src/app/models/common";

export const initialState: CounterState = {
    counter: 0,
    channelName: 'tarun',
    data: [
        {
            "payments": {
                "Matched": [
                    {
                        "Amount": "4000.00",
                        "BankId": "HDFC00300AR",
                        "soldTo": 100016,
                        "currency": "USD",
                        "RecrCocode": "AR02",
                        "CamtNtryRef": "20230825-00000005",
                        "StatementId": "202300070",
                        "CustomerName": "toshiba Inc. - AR",
                        "HasCustMatch": true,
                        "BankAccountNo": "123113520",
                        "HasInvSumMatch": false,
                        "CamtElctrncSeqNb": "70",
                        "HasInvCountMatch": false,
                        "HasInvNumbrMatch": false,
                        "BankAccountHolderName": "HDFC Bank - America",
                        "HasInvCountMatchInvoiceCount": 0
                    }
                ],
                "UnMatched": [
                    {
                        "Amount": "2000.00",
                        "BankId": "HDFC00300AR",
                        "soldTo": 100012,
                        "currency": "USD",
                        "CamtNtryRef": "20230825-00000002",
                        "StatementId": "202300068",
                        "CustomerName": "HP Inc. - AR",
                        "HasCustMatch": true,
                        "BankAccountNo": "123113520",
                        "HasInvSumMatch": false,
                        "CamtElctrncSeqNb": "68",
                        "HasInvCountMatch": false,
                        "HasInvNumbrMatch": false,
                        "BankAccountHolderName": "HDFC Bank - America",
                        "HasInvCountMatchInvoiceCount": false
                    }
                ]
            },
            "Remittance": {
                "Matched": [
                    {
                        "soldTo": 100016,
                        "Account": "123113520",
                        "Assgnmt": "null",
                        "currency": "USD",
                        "Reference": "INV_S1_002",
                        "RecrCocode": "AR02",
                        "RneSrcsystm": "Bot minds",
                        "BillingDocNo": "1800000016",
                        "CustomerName": "toshiba Inc. - AR",
                        "DocumentDate": "2023-01-08 00:00:00",
                        "OarAmtLocCurr": "4000.00",
                        "PaymentAdvice": "423082507323583",
                        "RneInvpymtamt": 4000
                    }
                ],
                "UnMatched": [
                    {
                        "SoldTo": "100019",
                        "Account": "null",
                        "RneCocd": "AR01",
                        "Currency": "USD",
                        "Reference": "INV_S1_001",
                        "CompanyCode": "null",
                        "RneSrcSystm": "Bot minds",
                        "BillingDocNo": "1800000022",
                        "DocumentDate": "2023-07-09 00:00:00",
                        "PaymentAdvice": "423082507323586",
                        "RneInvpymtamt": "9000.00",
                        "AmountLocalCur": "null",
                        "DocumentNumber": "1800000022"
                    }
                ]
            }
        },
        {
            "payments": {
                "Matched": [
                    {
                        "Amount": "4000.00",
                        "BankId": "HDFC00300AR",
                        "soldTo": 100016,
                        "currency": "USD",
                        "RecrCocode": "AR02",
                        "CamtNtryRef": "20230825-00000005",
                        "StatementId": "202300070",
                        "CustomerName": "toshiba Inc. - AR",
                        "HasCustMatch": true,
                        "BankAccountNo": "123113520",
                        "HasInvSumMatch": false,
                        "CamtElctrncSeqNb": "70",
                        "HasInvCountMatch": false,
                        "HasInvNumbrMatch": false,
                        "BankAccountHolderName": "HDFC Bank - America",
                        "HasInvCountMatchInvoiceCount": 0
                    }
                ],
                "UnMatched": [
                    {
                        "Amount": "2000.00",
                        "BankId": "HDFC00300AR",
                        "soldTo": 100012,
                        "currency": "USD",
                        "CamtNtryRef": "20230825-00000002",
                        "StatementId": "202300068",
                        "CustomerName": "HP Inc. - AR",
                        "HasCustMatch": true,
                        "BankAccountNo": "123113520",
                        "HasInvSumMatch": false,
                        "CamtElctrncSeqNb": "68",
                        "HasInvCountMatch": false,
                        "HasInvNumbrMatch": false,
                        "BankAccountHolderName": "HDFC Bank - America",
                        "HasInvCountMatchInvoiceCount": false
                    }
                ]
            },
            "Remittance": {
                "Matched": [
                    {
                        "soldTo": 100016,
                        "Account": "123113520",
                        "Assgnmt": "null",
                        "currency": "USD",
                        "Reference": "INV_S1_002",
                        "RecrCocode": "AR02",
                        "RneSrcsystm": "Bot minds",
                        "BillingDocNo": "1800000016",
                        "CustomerName": "toshiba Inc. - AR",
                        "DocumentDate": "2023-01-08 00:00:00",
                        "OarAmtLocCurr": "4000.00",
                        "PaymentAdvice": "423082507323583",
                        "RneInvpymtamt": 4000
                    }
                ],
                "UnMatched": [
                    {
                        "SoldTo": "100019",
                        "Account": "null",
                        "RneCocd": "AR01",
                        "Currency": "USD",
                        "Reference": "INV_S1_001",
                        "CompanyCode": "null",
                        "RneSrcSystm": "Bot minds",
                        "BillingDocNo": "1800000022",
                        "DocumentDate": "2023-07-09 00:00:00",
                        "PaymentAdvice": "423082507323586",
                        "RneInvpymtamt": "9000.00",
                        "AmountLocalCur": "null",
                        "DocumentNumber": "1800000022"
                    }
                ]
            }
        },
        {
            "payments": {
                "Matched": [
                    {
                        "Amount": "4000.00",
                        "BankId": "HDFC00300AR",
                        "soldTo": 100016,
                        "currency": "USD",
                        "RecrCocode": "AR02",
                        "CamtNtryRef": "20230825-00000005",
                        "StatementId": "202300070",
                        "CustomerName": "toshiba Inc. - AR",
                        "HasCustMatch": true,
                        "BankAccountNo": "123113520",
                        "HasInvSumMatch": false,
                        "CamtElctrncSeqNb": "70",
                        "HasInvCountMatch": false,
                        "HasInvNumbrMatch": false,
                        "BankAccountHolderName": "HDFC Bank - America",
                        "HasInvCountMatchInvoiceCount": 0
                    }
                ],
                "UnMatched": [
                    {
                        "Amount": "2000.00",
                        "BankId": "HDFC00300AR",
                        "soldTo": 100012,
                        "currency": "USD",
                        "CamtNtryRef": "20230825-00000002",
                        "StatementId": "202300068",
                        "CustomerName": "HP Inc. - AR",
                        "HasCustMatch": true,
                        "BankAccountNo": "123113520",
                        "HasInvSumMatch": false,
                        "CamtElctrncSeqNb": "68",
                        "HasInvCountMatch": false,
                        "HasInvNumbrMatch": false,
                        "BankAccountHolderName": "HDFC Bank - America",
                        "HasInvCountMatchInvoiceCount": false
                    }
                ]
            },
            "Remittance": {
                "Matched": [
                    {
                        "soldTo": 100016,
                        "Account": "123113520",
                        "Assgnmt": "null",
                        "currency": "USD",
                        "Reference": "INV_S1_002",
                        "RecrCocode": "AR02",
                        "RneSrcsystm": "Bot minds",
                        "BillingDocNo": "1800000016",
                        "CustomerName": "toshiba Inc. - AR",
                        "DocumentDate": "2023-01-08 00:00:00",
                        "OarAmtLocCurr": "4000.00",
                        "PaymentAdvice": "423082507323583",
                        "RneInvpymtamt": 4000
                    }
                ],
                "UnMatched": [
                    {
                        "SoldTo": "100019",
                        "Account": "null",
                        "RneCocd": "AR01",
                        "Currency": "USD",
                        "Reference": "INV_S1_001",
                        "CompanyCode": "null",
                        "RneSrcSystm": "Bot minds",
                        "BillingDocNo": "1800000022",
                        "DocumentDate": "2023-07-09 00:00:00",
                        "PaymentAdvice": "423082507323586",
                        "RneInvpymtamt": "9000.00",
                        "AmountLocalCur": "null",
                        "DocumentNumber": "1800000022"
                    }
                ]
            }
        }
    ]
}
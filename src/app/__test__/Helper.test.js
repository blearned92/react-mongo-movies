import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import { checkExpirationOfToken, hiddenPw, properCase, roundDate } from '../Helper';

afterEach(()=>{
    cleanup();
})

describe("Helper Methods",()=>{
    it('should hide password with x characters',()=>{
        const passwordToFormat = "password";
        const result = hiddenPw(passwordToFormat);
        expect(result).toStrictEqual("xxxxxxxx");
    })

    it('token should render true', ()=>{
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGVhcm5lZDkyIiwiaWF0IjoxNjgzMDY1NzY5LCJleHAiOjE2ODMxNTIxNjl9.xMONiSKaKtFVQp3zrmDQxOCfgSQkaOKMgx430AWaTrM";
        const result = checkExpirationOfToken(token);
        expect(result).toStrictEqual(false);
    })
    
    it('should convern unix time in human format',()=>{
        const unixTime = 1683210059758 / 1000;
        const result = roundDate(unixTime);
        expect(result).toEqual("May 4, 2023");
    })

    it('should reformat a string to have capitalized character only for index 0',()=>{
        const input = "sPoNgEbOb"
        const result = properCase(input);
        expect(result).toStrictEqual("Spongebob");
    })
})
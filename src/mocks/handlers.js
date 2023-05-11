import { rest } from 'msw';

const backEndBase = process.env.REACT_APP_BACKEND_URL

export const handlers = [
    rest.get(backEndBase + "/api/v1/auth/logout"), (req, res, context)=>{
        return res(context.status(200))
    }
]
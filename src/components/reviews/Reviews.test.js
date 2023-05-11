import { render, screen } from "@testing-library/react"
import Reviews from "./Reviews"
import { useSelector } from "react-redux";

jest.mock('../../api/Api');
jest.mock("react-redux", ()=>{
    useSelector: jest.fn()
})

describe('Reviews',()=>{
    // beforeEach(() => {
    //     useSelector.mockImplementation(callback => {
    //       return callback(mockAppState);
    //     });
    // });
    // afterEach(() => {
    //     useSelector.mockClear();
    // });
    it('should render',()=>{
        render(<Reviews/>)
        const headingElement = screen.getByRole('heading', {
            name: /reviews/i
          })
        const reviewsElement = container.querySelector('#reviews > div')
        expect(headingElement).toBeInTheDocument();
        expect(reviewsElement).toBeInTheDocument();
    })
})
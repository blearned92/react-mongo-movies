import { render, screen } from "@testing-library/react"
import Loading from "./Loading"
import '@testing-library/jest-dom' 

test('Loading renders',()=>{
    render(<Loading/>)
    const component = screen.getByTestId('loading');
    expect(component).toBeInTheDocument();
})
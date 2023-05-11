import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"

test('NotFound component renders',()=>{
    render(<NotFound/>);
    const notFoundElement = screen.getByText('This page could not be found');
    expect(notFoundElement).toBeInTheDocument();
})
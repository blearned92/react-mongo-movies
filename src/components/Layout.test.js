import { render, screen } from "@testing-library/react"
import Layout from "./Layout"
import '@testing-library/jest-dom'


test('Layout will render',()=>{
    render(<Layout/>)
    const component = screen.getByTestId('layout');
    expect(component).toBeInTheDocument();
})
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Trailer from "../Trailer";

describe("Trailer",()=>{
    const trailerObject = {key:"640146"};
    // it('should render',()=>{
    //     //render the component
    //     render(<Trailer trailer={trailerObject}/>)
    //     const trailer = screen.findByTestId("trailer-component");
    //     expect(trailer).toBe;
    // })
    it('should match DOM snapshot',()=>{
        const tree = renderer.create(<Trailer trailer={trailerObject}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

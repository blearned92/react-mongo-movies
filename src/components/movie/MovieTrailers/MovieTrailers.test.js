import { render, screen, waitFor } from "@testing-library/react"
import MovieTrailers from "./MovieTrailers"
import { mockMovie } from "../../../mock-data/MockMovie";
import { act } from "react-dom/test-utils";

describe("MovieTrailer",()=>{
    const currentMovie = mockMovie;
    it('should render ', async ()=>{
        await act(async ()=>{
            render(<MovieTrailers currentMovie={currentMovie}/>)
        })
        const trailerContainer = screen.getByTestId("trailers")
        expect(trailerContainer).toBeInTheDocument();

        const pageHeader = screen.getByRole('heading', {
            lavel: 2
        })
        expect(pageHeader).toBeInTheDocument();
    })
    it('should render 10 trailers', async ()=>{
        await act(async ()=>{
            render(<MovieTrailers currentMovie={currentMovie}/>)
        })
        const trailers = screen.getAllByTestId("trailer");
        expect(trailers.length).toEqual(10);
    })
})
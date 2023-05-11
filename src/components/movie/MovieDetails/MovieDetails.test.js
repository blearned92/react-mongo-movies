import { render, screen, waitFor } from "@testing-library/react";
import MovieDetails from "./MovieDetails";
import { mockMovie } from "../../../mock-data/MockMovie";
import { act } from "react-dom/test-utils";

jest.mock("../../../api/MovieApi");

describe("MovieTrailer",()=>{
    const currentMovie = mockMovie;
    it('should render ', async ()=>{
        await act(async ()=>{
        render(<MovieDetails currentMovie={currentMovie}/>)
        })        
        const movieDetailsElement = screen.getByTestId("movie-details-container")
        expect(movieDetailsElement).toBeInTheDocument();

        const headerElement = screen.getByRole('heading', {
            level: 1
        })
        expect(headerElement).toHaveTextContent('Spider-Man')
    })
    it('should render cast and crew correctly', async ()=> {
        await act(async ()=>{
            render(<MovieDetails currentMovie={currentMovie}/>)
        })     

        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(12);
        const directorRowElement = screen.getAllByRole('row')[0];
        expect(directorRowElement).toHaveTextContent(/sam raimi/i);
        const screenplayRowElement = screen.getAllByRole('row')[1];
        expect(screenplayRowElement).toHaveTextContent(/david koepp/i);
        const producerRowElement = screen.getAllByRole('row')[2];
        expect(producerRowElement).toHaveTextContent(/laura ziskin/i);
        const castRowElement = screen.getAllByRole('row')[3];
        expect(castRowElement).toHaveTextContent(/Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, Rosemary Harris/i)
    })
    it('should render while not recieving results from API', async ()=>{
        currentMovie.id=5;
        await act(async ()=>{
            render(<MovieDetails currentMovie={currentMovie}/>)
        })        
        const movieDetailsElement = screen.getByTestId("movie-details-container")
        expect(movieDetailsElement).toBeInTheDocument();
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(12);
        const directorRowElement = screen.getAllByRole('row')[0];
        expect(directorRowElement).toHaveTextContent(/N\/A/);
        const screenplayRowElement = screen.getAllByRole('row')[1];
        expect(screenplayRowElement).toHaveTextContent(/N\/A/);
        const producerRowElement = screen.getAllByRole('row')[2];
        expect(producerRowElement).toHaveTextContent(/N\/A/);
        const castRowElement = screen.getAllByRole('row')[3];
        expect(castRowElement).toHaveTextContent(/N\/A/)
    })
})
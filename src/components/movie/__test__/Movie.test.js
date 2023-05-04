import { render, screen, waitFor } from "@testing-library/react";
import Movie from "../Movie";
import axios from "axios";
import { mockMovie } from "./MockMovie";
import { act } from "react-test-renderer";
import MovieAPI from "../../../api/MovieApi";

// jest.mock("../../../api/MovieApi", ()=>{
//     MovieAPI.fetchMovie: jest.fn()
// });

describe('Movie',()=>{
    it('should get movie data', async ()=>{
        // axios.get.mockResolvedValue({data: mockMovie})
        MovieAPI.fetchMovie = jest.fn(()=>{return mockMovie});
        await act( async () => render(<Movie/>))
        // render(<Movie/>)
        screen.debug();
        // const movie = await waitFor(()=>screen.getByTestId('movie'))
        // console.log(movie);
        // expect(movie).toContainHTML("Something went wrong");
    });
})
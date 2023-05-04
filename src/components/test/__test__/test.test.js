import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Test from '../test';

afterEach(()=>{
    cleanup();
})

test('should render test component', ()=>{
    const testProp = "Brandon";
    render(<Test testProp={testProp}/>);
    const testElement = screen.getByTestId('test-1'); //retrieve component from dom tree
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveTextContent("Brandon")
    expect(testElement).toContainHTML('</div>')
    expect(testElement).not.toContainHTML('<p>')

})
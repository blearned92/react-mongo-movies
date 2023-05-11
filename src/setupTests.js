// global.matchMedia = global.matchMedia || function() {
//     return {
//         matches : false,
//         addListener : function() {},
//         removeListener: function() {}
//     }
//   }
import '@testing-library/jest-dom' //allows toBeInTheDocument()

import { server } from './mocks/server';
beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())


//this is to prevent errors when testing components using the react-slick slider
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};
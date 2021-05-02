import * as ACTION from "./constants"
import { searchRobots as searchRobotsReducer, requestRobots as requestRobotsReducer } from "./reducers"


describe('seatchRobots reducer', () => {
    it('should return the initial state', () => {
        
        expect(searchRobotsReducer(undefined, {})).toEqual({
            searchField: ''
        })
    })

    it('should handle CHANGE_SEARCH_FIELD', () => {

        const searchString = 'test'
        expect(searchRobotsReducer(undefined, {type: ACTION.CHANGE_SEARCH_FIELD, payload: searchString})).toEqual({
            searchField: searchString
        })
    })
})


describe('requestRobots reducer', () => {
    it('should return the initial state', () => {
        expect(requestRobotsReducer(undefined, {})).toEqual({
            isPending: false,
            robots: [],
            error: '',
        })
    })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(requestRobotsReducer(undefined, {type: ACTION.REQUEST_ROBOTS_PENDING})).toEqual({
            isPending: true,
            robots: [],
            error: '',
        })
    })

    it('should handle REQUEST_ROBOTS_SUCESS', () => {
        const payload = [{id: 1}]
        expect(requestRobotsReducer(undefined, {type: ACTION.REQUEST_ROBOTS_SUCCESS, payload: payload })).toEqual({
            isPending: false,
            robots: payload,
            error: '',
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        const error = 'error'
        expect(requestRobotsReducer(undefined, {type: ACTION.REQUEST_ROBOTS_FAILED, payload: error})).toEqual({
            isPending: false,
            robots: [],
            error: error,
        })
    })
})
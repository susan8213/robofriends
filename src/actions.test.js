import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as ACTION from './constants'
import * as actions from './actions'

const mockStore = configureMockStore([thunk])
const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
};

describe('actions', () => {
    it('should create action CHANGE_SEARCH_FIELD', () => {
        const searchString = 'text'
        expect(actions.setSearchField(searchString)).toEqual({
            type: ACTION.CHANGE_SEARCH_FIELD,
            payload: searchString
        })
    })

    it('should request robots sucessfully', () => {
        const mockData = [{id: 1}]
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve(mockResponse(200, null, JSON.stringify(mockData)))
        })
            
        
        const store = mockStore()
        store.dispatch(actions.requestRobots())
            .then(() => {
                const receivedActions = store.getActions()
                
                expect(receivedActions).toHaveLength(2)
                expect(receivedActions[0]).toEqual({type: ACTION.REQUEST_ROBOTS_PENDING})
                expect(receivedActions[1]).toEqual({type: ACTION.REQUEST_ROBOTS_SUCCESS, payload: mockData})
            }).catch(err => {
                throw err
            })

        expect(window.fetch).toHaveBeenCalledTimes(1)
    })

    it('should fail to request robots', () => {
        const mockError = 'mockError'
        window.fetch = jest.fn().mockImplementation(() => Promise.reject(mockError))

        const store = mockStore()
        store.dispatch(actions.requestRobots())
            .then(() => {
                const receivedActions = store.getActions()
                
                expect(receivedActions).toHaveLength(2)
                expect(receivedActions[0]).toEqual({type: ACTION.REQUEST_ROBOTS_PENDING})
                expect(receivedActions[1]).toEqual({type: ACTION.REQUEST_ROBOTS_FAILED, payload: mockError})
            }).catch(err => {
                throw err
            })

        expect(window.fetch).toHaveBeenCalledTimes(1)

    })
})
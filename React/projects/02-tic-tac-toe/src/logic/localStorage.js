export const setLocalStorage = function (board, turn) {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}    
    
export const resetLocalStorage = function () {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
class Node {
    constructor() {
        this._limit = 10
        this._children = new Map()
        this._isCompleteWord
    }

    get(character) {
        return this._children.get(character)
    }

    set(character, node) {
        this._children.set(character, node)
    }

    add(str) {
        
    }

    findCount() {
        if (this._limit === this._children.size()) {
            return this._limit
        }

        
    }
}
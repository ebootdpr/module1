function Node(DATA) {
    this.value = DATA;
    this.next = null;
}

function LinkedList() {
    this.head = null; //inicia la cola de la serpiente
    this._length = 0

}

LinkedList.prototype.add = function (value) {
    var newNodo = new Node(value) //guarda en dato en el nodo
    current = this.head //guarda la cola de la serpiente en var
    this._length+=1

    if (!current) { //entra cuando es la primera vez q creamos la lista 
        this.head = newNodo //crea la cola de la serpiente
        return newNodo
    }
    var cnt =0
    while (current.next) { //corta loop si el siguiente es null
        current = current.next
        cnt++
        console.log(cnt)
    }
    current.next = newNodo //conecta el nodo al siguiente!!

    return newNodo
}

LinkedList.prototype.remove = function () {
    current = this.head //guarda la cola
    if (!current) { //si esta vacio
        return null; //devuelve null
    }
    if (!current.next) { //si el segundo es null
        this.head = null //elimina la cola de la serpiente
        return current.value
    }
    while (current.next.next) {
        current = current.next
    }
    var aux = current.next //instancia el siguiente nodo
    current.next = null
    return aux.value
}

LinkedList.prototype.search = function (term) {
    current = this.head
    if (!current) {
        return null
    }
    while (current.next) {
        if (current.value == term) {
            return current.value
        }
        current = current.next
    }
    return null
}


var link = new LinkedList()

link.add('first')
console.log(link.head instanceof Node)
console.log(link.add('second'))
console.log(link)
link.add('third')
console.log(link.head)
console.log(link.search('second'))
link.add('third')
console.log(link)
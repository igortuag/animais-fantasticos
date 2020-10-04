// Liste 5 objetos nativos
console.log(Array)
console.log(Object)
console.log(String)
console.log(Number)
console.log(Boolean)

// Liste 5 objetos do browser
console.log(Document)
console.log(HTMLAllCollection)
console.log(HTMLCollection)
console.log(Element)
console.log(DocumentType)

// Liste 2 métodos, propriedades ou objetos 
// presentes no chrome que não existe no firefox
console.log(typeof document.webkitHidden !== "undefined" ? "Existe" : "Não existe")
console.log(typeof document.webkitVisibilityState !== "undefined" ? "Existe" : "Não existe")
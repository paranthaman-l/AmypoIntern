import {bookApi} from "../api";

class BookService{
    getAllBooks() {
        return bookApi.get("/get");
    }
    postBook(book) {
        return bookApi.post("/post",book);
    }
    getById(bid){
        return bookApi.get("/getById/"+bid);
    }
    putBook(bid,book){
        return bookApi.put("/put/"+bid,book);
    }
    deleteBook(bid){
        return bookApi.delete("/delete/"+bid);
    }
}

export default new BookService();
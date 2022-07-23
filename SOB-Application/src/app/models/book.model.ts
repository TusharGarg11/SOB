import { BookImage } from "./BookImageModel/book-image.model";

export class Book {
     bookId?: Number;
     title?: String;
     author?: String;
     publician?: String;
     category?: String;
     price?: Number;
     rating?: Number;
     description?:string;
     bookImage?:BookImage;
}

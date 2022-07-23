package Com.SOB.System.Service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import Com.SOB.System.Entity.Book;
import Com.SOB.System.Entity.BookImage;


public interface BookServices {

	public List<Book> getAllBooksImpl();
	public List<Book> getBooksBySearchImpl(String searchValue);
	public void saveBook(Book book,MultipartFile multipartfile);
	
}

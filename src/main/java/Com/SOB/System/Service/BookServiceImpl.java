package Com.SOB.System.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;

import Com.SOB.System.DAO.BookRerpository;
import Com.SOB.System.Entity.Book;
import Com.SOB.System.Entity.BookImage;


@Service
public class BookServiceImpl implements BookServices{
	private String title;
	private String author;
	private String category;
	private String operation;
	private long minRating;
	private long maxRating;
	@Autowired
	public BookRerpository bookRerpository;
	
	@Override
	public List<Book> getAllBooksImpl() {
		return bookRerpository.findAll();
	}

	@Override
	public List<Book> getBooksBySearchImpl(String searchValue) {
		title=searchValue;
		category=searchValue;
		author=searchValue;
		List<Book> books=bookRerpository.getBookBySearch(title,author,category);
		return books;
	}

	@Override
	public void saveBook(Book book,MultipartFile multipartfile) {
		try {
			book.setBookImage(saveBookImage(multipartfile));
			book.setPublician("SOB");
			this.bookRerpository.save(book);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	public BookImage saveBookImage(MultipartFile multipartfile) throws IOException {
		BookImage bookImage=new BookImage();
		bookImage.setImageFileName(multipartfile.getOriginalFilename());
		bookImage.setImageType(multipartfile.getContentType());
		bookImage.setImage(multipartfile.getBytes());
		return bookImage;
	}

}
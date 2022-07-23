package Com.SOB.System.Controller;


import java.util.List;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.StreamUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import Com.SOB.System.DAO.BookImageRepository;
import Com.SOB.System.DAO.BookRerpository;
import Com.SOB.System.Entity.Book;
import Com.SOB.System.Entity.BookImage;
import Com.SOB.System.Service.BookServices;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	
	@Autowired
	private BookServices bookServices;
	@Autowired
	private BookRerpository bookRerpository;
	@Autowired
	private BookImageRepository bookImageRepository;
	private Book book;
	private BookImage bookImage;
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return bookServices.getAllBooksImpl();
	}
	
	@GetMapping("/search")
	public List<Book> getBookBySearch(@RequestParam("searchValue") String searchValue){
		return this.bookServices.getBooksBySearchImpl(searchValue);
	}
	
	@PostMapping(path = "/upload/book", consumes = {"multipart/form-data"})
	public ResponseEntity<HttpStatus> addBooks(@RequestPart("file") MultipartFile file,@RequestPart("data") String data){
		try {
			System.out.println(file.getContentType());
			Gson gson=new Gson();
			Book book=gson.fromJson(data, Book.class);
			this.bookServices.saveBook(book, file);
			return new ResponseEntity(HttpStatus.ACCEPTED);
		}catch(Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
}

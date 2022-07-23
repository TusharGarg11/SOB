package Com.SOB.System.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import Com.SOB.System.Entity.Book;


public interface BookRerpository extends JpaRepository<Book, Integer>{
	@Query("Select b from Book as b where (:title is null or b.title=:title) OR (:author is null or b.author=:author)"
			+ "OR (:category is null or b.category=:category)")
	public List<Book> getBookBySearch(@Param("title") String title,@Param("author") String author,@Param("category") String category);
	

}

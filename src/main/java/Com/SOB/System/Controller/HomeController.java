package Com.SOB.System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import Com.SOB.System.Entity.User;
import Com.SOB.System.Service.HomePageService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

	@Autowired
	private HomePageService homePageService;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return homePageService.getAllUsersDetails();
	}
	
}

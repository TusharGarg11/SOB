package Com.SOB.System.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Com.SOB.System.DAO.UserRepository;
import Com.SOB.System.Entity.User;

@Service
public class HomePageServiceImpl implements HomePageService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAllUsersDetails() {
		return userRepository.findAll();
	}

}

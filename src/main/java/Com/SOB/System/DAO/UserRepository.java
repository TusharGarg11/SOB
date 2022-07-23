package Com.SOB.System.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import Com.SOB.System.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}

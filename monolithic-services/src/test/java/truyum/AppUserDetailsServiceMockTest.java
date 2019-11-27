/*package truyum;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import com.cognizant.truyum.exception.UserAlreadyExistsException;
import com.cognizant.truyum.bean.Role;
import com.cognizant.truyum.bean.User;
import com.cognizant.truyum.repository.RoleRepository;
import com.cognizant.truyum.repository.UserRepository;
import com.cognizant.truyum.security.AppUserDetailsService;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class AppUserDetailsServiceMockTest {

	@Test
	public void mockTestUserAdd() throws UserAlreadyExistsException {
		UserRepository userRepository = Mockito.mock(UserRepository.class);
		RoleRepository roleRepository = Mockito.mock(RoleRepository.class);
		User user = new User("userNew", "u");
		when(userRepository.findByUserName("userNew")).thenReturn(null);
		when(roleRepository.findById(2)).thenReturn(new Role(2, "USER"));
		AppUserDetailsService appUserDetailsService = new AppUserDetailsService(userRepository, roleRepository);
		appUserDetailsService.signUp(user);
		assertEquals("userNew", user.getUserName());
	}

	@Test(expected = UserAlreadyExistsException.class)
	public void mockTestUserAlreadyExistsException() throws UserAlreadyExistsException {

		UserRepository userRepository = Mockito.mock(UserRepository.class);
		User user = new User("user", "u");
		when(userRepository.findByUserName("user")).thenReturn(user);
		AppUserDetailsService appUserDetailsService = new AppUserDetailsService(userRepository);
		appUserDetailsService.signUp(user);
	}

}*/

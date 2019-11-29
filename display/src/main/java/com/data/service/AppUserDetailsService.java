package com.data.service;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth.exception.UserAlreadyExistsException;
import com.auth.repository.UserRepository;
import com.data.main.SecurityConfig;
import com.data.model.AppUser;
import com.data.model.UserList;



@Service
public class AppUserDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	@Autowired
	UserRepository userRepository;

	AppUser appUser;
	UserList user;

	public AppUserDetailsService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		user = userRepository.findByUserName(username);
		if (user == null)
			throw new UsernameNotFoundException("username not found");
		else
			appUser = new AppUser(user);
		return appUser;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	public void signUp(@Valid UserList user2) throws UserAlreadyExistsException {

		UserList check = userRepository.findByUserName(user2.getUserName());

		if (check != null) {
			throw new UserAlreadyExistsException();
		}

		else {

			user2.setPassword(SecurityConfig.passwordEncoder().encode(user2.getPassword()));
			userRepository.save(user2);

		}

	}

}

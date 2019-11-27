package com.cognizant.truyum.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.truyum.bean.MenuItem;
import com.cognizant.truyum.security.AppUserDetailsService;
import com.cognizant.truyum.service.MenuItemService;

@RestController
@RequestMapping("/menu-items")
public class MenuItemController {
	private static final Logger LOGGER = LoggerFactory.getLogger(MenuItemController.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;

	@Autowired
	private MenuItemService menuItemService;
//	@Autowired
//	private InMemoryUserDetailsManager inMemoryUserDetailsManager;

	@GetMapping()
	public ArrayList<MenuItem> getAllMenuItems() {
		LOGGER.info("CONROLLER START");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		if (user.equals("anonymousUser")) {
			return (ArrayList<MenuItem>) menuItemService.getMenuItemListCustomer();

		} else {
			UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			LOGGER.info(role);
			LOGGER.info("CONTROLLER WORKS");
			if (role.equalsIgnoreCase("role_admin"))
				return (ArrayList<MenuItem>) menuItemService.getMenuItemListAdmin();
			else
				return (ArrayList<MenuItem>) menuItemService.getMenuItemListCustomer();
		}

	}

	@GetMapping("/{id}")
	public MenuItem getMenuItem(@PathVariable long id) {
		return menuItemService.getMenuItem(id);
	}

	@PutMapping
	public void modifyMenuItem(@RequestBody MenuItem menuItem) {
		menuItemService.modifyMenuItem(menuItem);
	}

}

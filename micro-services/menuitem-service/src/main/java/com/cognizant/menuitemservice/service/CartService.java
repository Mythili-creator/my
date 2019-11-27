package com.cognizant.menuitemservice.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.menuitemservice.model.Cart;
import com.cognizant.menuitemservice.model.MenuItem;
import com.cognizant.menuitemservice.model.User;
import com.cognizant.menuitemservice.repository.MenuItemRepository;
import com.cognizant.menuitemservice.repository.UserRepository;

@Service
public class CartService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CartService.class);

//	@Autowired
//	public CartDao cartDao = new CartDaoCollectionImpl();
//	
	@Autowired
	MenuItemRepository menuItemRepository;

	@Autowired
	UserRepository userRepository;

	public void addCartItem(String userId, long menuItemId) {
		// cartDao.addCartItem(userId, menuItemId);

		User user = userRepository.findByUserName(userId);

		MenuItem menuItem = menuItemRepository.findById((int) menuItemId).get();
		if (menuItem != null) {
			List<MenuItem> a = new ArrayList<MenuItem>();
			a = user.getMenuItemList();
			a.add(menuItem);
			user.setMenuItemList(a);
			userRepository.save(user);

		}

	}

	public Cart getAllCartItems(String userId) {

//		return cartDao.getAllCartItems(userId);

		Cart cart = new Cart();

		User user = userRepository.findByUserName(userId);
		// double total = userRepository.getCartTotal(userId);

		LOGGER.info("cart is " + user.getMenuItemList());

		cart.setMenuItemList(user.getMenuItemList());

		LOGGER.info("cart1 is " + cart.getMenuItemList());

		try {
			cart.setTotal(userRepository.getCartTotal(user.getId()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return cart;

	}

	public void deleteCartItems(String userId, long menuItemId) {
//		cartDao.deleteCartItems(userId, menuItemId);

		User user = userRepository.findByUserName(userId);

		LOGGER.info("delete cart is " + user);

		MenuItem menuItem = menuItemRepository.findById((int) menuItemId).get();

		LOGGER.info("delete cart1 is " + menuItem);

		List<MenuItem> a = user.getMenuItemList();
		a.remove(menuItem);
		user.setMenuItemList(a);
		userRepository.save(user);

	}

}
